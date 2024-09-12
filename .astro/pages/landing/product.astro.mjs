import { c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_Brz_0mGH.mjs';
import 'kleur/colors';
import { $ as $$LandingLayout } from '../../chunks/LandingLayout_D814jPJJ.mjs';
import { $ as $$Hero } from '../../chunks/Hero_DnpRN3-T.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_DGmakGVp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Product = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Product Details Landing Page Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Product Details Demo", "title": "Product Landing Page: Showcase with Precision and Passion!", "subtitle": "Step-by-step guide to designing a Landing Page that highlights every facet of your product or service.", "actions": [
    { variant: "primary", text: "Call to Action", href: "#", icon: "tabler:square-rounded-arrow-right" },
    { text: "Learn more", href: "#" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2174&q=80",
    alt: "A spotlight on a product. Product Details Landing Page Demo"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!", "actions": [
    {
      variant: "primary",
      text: "Download Template",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] })} ` })}`;
}, "/Users/zhaokaien/workspace/netstation/src/pages/landing/product.astro", void 0);

const $$file = "/Users/zhaokaien/workspace/netstation/src/pages/landing/product.astro";
const $$url = "/netstation/landing/product";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Product,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
