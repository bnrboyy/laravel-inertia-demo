import { Link, Head, router, createInertiaApp } from "@inertiajs/vue3";
import { useSSRContext, resolveComponent, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, ref, watch, createSSRApp, h } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const NavLink_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$a = {
  components: {
    Link
  },
  props: {
    active: Boolean
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_Link, mergeProps({
    class: ["text-base", { "font-bold menu-active": $props.active }]
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/NavLink.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const NavLink = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {
  components: { Link, NavLink },
  data() {
    return {
      menus: {
        home: "Home",
        aboutus: "About Us",
        contactus: "Contact Us",
        users: "Users",
        settings: "Settings"
      }
      //   menus: {
      //     home: "หน้าหลัก",
      //     aboutus: "เกี่ยวกับเรา",
      //     contactus: "ติดต่อเรา",
      //     users: "ผู้ใช้งาน",
      //     settings: "การตั้งค่า",
      //   },
    };
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavLink = resolveComponent("NavLink");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "navbar bg-base-100 shadow-xl",
    "data-theme": "dark"
  }, _attrs))}><div class="navbar-start"><div class="dropdown"><div tabindex="0" role="button" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div><ul tabindex="0" class="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"><li>`);
  _push(ssrRenderComponent(_component_NavLink, {
    class: "text-lg",
    href: "/",
    active: _ctx.$page.component === "Home"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.menus.home)}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.menus.home), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NavLink, {
    href: "/aboutus",
    active: _ctx.$page.component === "AboutUs"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.menus.aboutus)}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.menus.aboutus), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NavLink, {
    href: "/contactus",
    active: _ctx.$page.component === "ContactUs"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.menus.contactus)}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.menus.contactus), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NavLink, {
    href: "/users",
    active: _ctx.$page.component === "Users"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.menus.users)}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.menus.users), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NavLink, {
    href: "/settings",
    active: _ctx.$page.component === "Settings"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.menus.settings)}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.menus.settings), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="btn btn-ghost text-xl">.BNRDEV</div></div><div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1"><li>`);
  _push(ssrRenderComponent(_component_NavLink, {
    href: "/",
    active: _ctx.$page.component === "Home"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.menus.home)}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.menus.home), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NavLink, {
    href: "/aboutus",
    active: _ctx.$page.component === "AboutUs"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.menus.aboutus)}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.menus.aboutus), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NavLink, {
    href: "/contactus",
    active: _ctx.$page.component === "ContactUs"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.menus.contactus)}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.menus.contactus), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NavLink, {
    href: "/users",
    active: _ctx.$page.component === "users/Index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.menus.users)}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.menus.users), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NavLink, {
    href: "/settings",
    active: _ctx.$page.component === "Settings"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.menus.settings)}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.menus.settings), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="navbar-end"><div class="dropdown dropdown-end"><div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar"><div class="w-10 rounded-full"><img alt="My profile"${ssrRenderAttr("src", "/images/profile.png")}></div></div><ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"><li><a class="justify-between"> Profile <span class="badge">New</span></a></li><li><a>Logout</a></li></ul></div></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Nav.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Nav = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: "footer mt-auto flex flex-col justify-center gap-4 sm:flex-row sm:justify-between items-center p-4 bg-base-100 shadow-xl text-neutral-content",
    "data-theme": "dark"
  }, _attrs))}><aside class="items-center grid-flow-col text-center"><p>Copyright © 2024 - All right reserved</p></aside><nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end"><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a></nav></footer>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Footer.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  components: {
    Nav,
    Footer,
    Head
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Nav = resolveComponent("Nav");
  const _component_Footer = resolveComponent("Footer");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>BNRDEV</title><meta type="description" content="BNRDEV" head-key="description"${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, "BNRDEV"),
          createVNode("meta", {
            type: "description",
            content: "BNRDEV",
            "head-key": "description"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="min-h-screen flex flex-col">`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Layout.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  components: { Head },
  layout: Layout
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>About Us</title><meta type="description" content="This is about page." head-key="description"${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, "About Us"),
          createVNode("meta", {
            type: "description",
            content: "This is about page.",
            "head-key": "description"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h1 class="text-4xl text-bold">About Page</h1><!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AboutUs.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const AboutUs = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AboutUs
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  components: { Head },
  layout: Layout
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>Contact Us</title><meta type="description" content="This is contact page." head-key="description"${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, "Contact Us"),
          createVNode("meta", {
            type: "description",
            content: "This is contact page.",
            "head-key": "description"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h1 class="text-4xl text-bold">Contact Page</h1><!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ContactUs.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ContactUs = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ContactUs
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  components: { Head },
  layout: Layout,
  props: {
    name: String,
    frameworks: Array
  },
  data() {
    return {
      message: ""
    };
  },
  computed: {
    authUser() {
      return this.$page.props.auth;
    },
    test() {
      return this.$page.props.auth;
    }
  },
  mounted() {
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>Home</title><meta type="description" content="This is home page." head-key="description"${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, "Home"),
          createVNode("meta", {
            type: "description",
            content: "This is home page.",
            "head-key": "description"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h1 class="text-4xl text-bold">Home Page</h1><!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  components: { Head },
  layout: Layout
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>Settings</title><meta type="description" content="This is settings page." head-key="description"${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, "Settings"),
          createVNode("meta", {
            type: "description",
            content: "This is settings page.",
            "head-key": "description"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h1 class="text-4xl text-bold">Settings Page</h1><!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Settings
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Head = resolveComponent("Head");
  const _component_Layout = resolveComponent("Layout");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Create User" }, null, _parent));
  _push(ssrRenderComponent(_component_Layout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="text-3xl"${_scopeId}>Create New User</h1><form method="POST" action="/"${_scopeId}></form>`);
      } else {
        return [
          createVNode("h1", { class: "text-3xl" }, "Create New User"),
          createVNode("form", {
            method: "POST",
            action: "/"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/users/Create.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  components: { Link },
  props: {
    links: Array
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  ssrRenderList($props.links, (link) => {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(link.url ? "Link" : "span"), {
      class: ["px-1", { "text-gray-500": !link.url, "font-bold": link.active }],
      key: link.url,
      href: link.url
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>${link.label}</span>`);
        } else {
          return [
            createVNode("span", {
              innerHTML: link.label
            }, null, 8, ["innerHTML"])
          ];
        }
      }),
      _: 2
    }), _parent);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { Head, Link, Pagination },
  layout: Layout,
  props: { time: String, users: Object, filters: Object },
  setup(props) {
    const search = ref(props.filters.search);
    console.log(props.filters);
    watch(search, (newValue, oldValue) => {
      router.get(
        "/users",
        { search: newValue },
        {
          preserveState: true,
          replace: true
        }
      );
    });
    return { search };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>Users</title><meta type="description" content="This is users page." head-key="description"${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, "Users"),
          createVNode("meta", {
            type: "description",
            content: "This is users page.",
            "head-key": "description"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="container mx-auto flex-1 py-8"><div class="flex justify-between"><div class="flex items-center gap-2"><h1 class="text-4xl text-bold">Users</h1><button class="btn btn-info">`);
  _push(ssrRenderComponent(_component_Link, { href: "/user/create" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create`);
      } else {
        return [
          createTextVNode("Create")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><label class="input input-bordered flex items-center gap-2"><input${ssrRenderAttr("value", $setup.search)} type="text" class="grow" placeholder="Search"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd"></path></svg></label></div><div class="overflow-x-auto"><table class="table"><thead><tr><th>Avatar</th><th>Name</th><th>Email</th><th>Action</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.users.data, (user) => {
    _push(`<tr><td><div class="flex items-center gap-3"><div class="avatar"><div class="mask mask-squircle w-12 h-12"><img${ssrRenderAttr("src", "/images/profile.png")} alt="Avatar Tailwind CSS Component"></div></div><div><div class="font-bold">Hart Hagerty</div><div class="text-sm opacity-50">United States</div></div></div></td><td>${ssrInterpolate(user.name)}</td><td>${ssrInterpolate(user.email)}</td><th class="flex items-center gap-2"><button class="btn btn-warning">Edit</button><button class="btn btn-error">Delete</button></th></tr>`);
  });
  _push(`<!--]--></tbody></table></div><div class="mt-6 text-end">`);
  _push(ssrRenderComponent(_component_Pagination, {
    links: $props.users.links
  }, null, _parent));
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/AboutUs.vue": __vite_glob_0_0, "./Pages/ContactUs.vue": __vite_glob_0_1, "./Pages/Home.vue": __vite_glob_0_2, "./Pages/Settings.vue": __vite_glob_0_3, "./Pages/users/Create.vue": __vite_glob_0_4, "./Pages/users/Index.vue": __vite_glob_0_5 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
