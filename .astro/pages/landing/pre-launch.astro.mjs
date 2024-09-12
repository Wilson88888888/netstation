import { c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_Brz_0mGH.mjs';
import 'kleur/colors';
import { $ as $$LandingLayout } from '../../chunks/LandingLayout_D814jPJJ.mjs';
import { $ as $$Hero2 } from '../../chunks/Hero2_GRrYN4A9.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_DGmakGVp.mjs';
export { renderers } from '../../renderers.mjs';

const $$PreLaunch = createComponent(async ($$result, $$props, $$slots) => {
  const metadata = {
    title: "Pre-Launch Landing Page"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Pre-launch Demo", "title": "Pre-launch Landing Page: Build the Hype Before the Big Reveal!", "subtitle": "Craft a tantalizing Coming Soon or Pre-Launch Landing Page that leaves visitors eagerly awaiting your launch.", "actions": [
    { variant: "primary", text: "Call to Action", href: "#", icon: "tabler:square-rounded-arrow-right" },
    { text: "Learn more", href: "#" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1558803116-c1b4ac867b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    alt: "Store with a Coming Soon sign. Pre-launch Landing Page"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!", "actions": [
    {
      variant: "primary",
      text: "Download Template",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] })} ` })}`;
}, "/Users/zhaokaien/workspace/netstation/src/pages/landing/pre-launch.astro", void 0);

const $$file = "/Users/zhaokaien/workspace/netstation/src/pages/landing/pre-launch.astro";
const $$url = "/netstation/landing/pre-launch";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PreLaunch,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
