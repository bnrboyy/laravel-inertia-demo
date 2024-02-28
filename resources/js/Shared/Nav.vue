<template>
  <div class="navbar bg-base-100 shadow-xl" data-theme="dark">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <NavLink
              class="text-lg"
              href="/"
              :active="$page.component === 'Home'"
              >{{ menus.home }}</NavLink
            >
          </li>
          <li>
            <NavLink href="/aboutus" :active="$page.component === 'AboutUs'">{{
              menus.aboutus
            }}</NavLink>
          </li>
          <li>
            <NavLink
              href="/contactus"
              :active="$page.component === 'ContactUs'"
              >{{ menus.contactus }}</NavLink
            >
          </li>
          <li>
            <NavLink href="/users" :active="$page.component === 'Users'">{{
              menus.users
            }}</NavLink>
          </li>
          <li>
            <NavLink
              href="/settings"
              :active="$page.component === 'Settings'"
              >{{ menus.settings }}</NavLink
            >
          </li>
        </ul>
      </div>
      <div class="btn btn-ghost text-xl">.BNRDEV</div>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NavLink href="/" :active="$page.component === 'Home'">{{
            menus.home
          }}</NavLink>
        </li>
        <li>
          <NavLink href="/aboutus" :active="$page.component === 'AboutUs'">{{
            menus.aboutus
          }}</NavLink>
        </li>
        <li>
          <NavLink
            href="/contactus"
            :active="$page.component === 'ContactUs'"
            >{{ menus.contactus }}</NavLink
          >
        </li>
        <li>
          <NavLink href="/users" :active="$page.component === 'users/Index'">{{
            menus.users
          }}</NavLink>
        </li>
        <li>
          <NavLink href="/settings" :active="$page.component === 'Settings'">{{
            menus.settings
          }}</NavLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="mr-2">
        <p>Hi !, {{ auth.name }}</p>
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="My profile" :src="'/images/profile.png'" />
          </div>
        </div>
        <ul
          tabindex="0"
          class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><NavLink href="/logout" method="post">Logout</NavLink></li>
        </ul>
      </div>
    </div>
    <!-- <div class="navbar-end">
      <a class="btn">Logout</a>
    </div> -->
    <!-- <li>
        <Link
          class="text-blue-500 hover:underline"
          href="/logout"
          method="POST"
          :data="{ foo: 'bar' }"
          as="button"
          >Logout</Link
        >
      </li> -->
  </div>
</template>

<script>
import { Link } from "@inertiajs/vue3";
import NavLink from "./NavLink.vue";

export default {
  components: { Link, NavLink },
  data() {
    return {
      menus: {
        home: "Home",
        aboutus: "About Us",
        contactus: "Contact Us",
        users: "Users",
        settings: "Settings",
      },
      auth: this.$page.props.auth,
      //   menus: {
      //     home: "หน้าหลัก",
      //     aboutus: "เกี่ยวกับเรา",
      //     contactus: "ติดต่อเรา",
      //     users: "ผู้ใช้งาน",
      //     settings: "การตั้งค่า",
      //   },
    };
  },
  mounted() {
    console.log(this.auth);
  },
};
</script>

<style lang="scss" scoped>
</style>
