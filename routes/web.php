<?php

use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('login', [AuthController::class, 'loginPage'])->name('login');
Route::post('login', [AuthController::class, 'store']);


Route::middleware('auth')->group(function () {
    Route::get('/user/create', function () {
        return Inertia::render('users/Create');
    })->can('create,App\Models\User');

    Route::post('/users', function () {
        $attributres = Request::validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        User::create($attributres);

        return redirect('/users');
    });

    Route::get('/', function () {
        return Inertia::render('Home', [
            'name' => 'Nantachai Ruecha555',
            'frameworks' => [
                'laravel', 'Vue', 'inertia'
            ]
        ]);
    });

    Route::get('/aboutus', function () {
        return Inertia::render('AboutUs');
    });

    Route::get('/contactus', function () {
        return Inertia::render('ContactUs');
    });

    Route::get('/users', function () {
        // sleep(1);
        return Inertia::render('users/Index', [
            // 'users' => User::paginate(10),
            'time' => now()->toTimeString(),
            'users' => User::query()->when(Request::input('search'), function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })->paginate(10)->withQueryString()->through(fn ($user) => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ]),
            'filters' => Request::only(['search']),
            'can' => [
                'createUser' => Auth::user()->can('create', User::class),
            ],
        ]);
    });





    Route::get('/settings', function () {
        return Inertia::render('Settings');
    });

    Route::post('/logout', [AuthController::class, 'destroy'])->name('logout');


    Route::post('/sendmsg', function () {
        return response([
            'message' => request('message'),
            'status' => true,
        ], 200);
    });
});
