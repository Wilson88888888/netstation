import { c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_Brz_0mGH.mjs';
import 'kleur/colors';
import { $ as $$Features2 } from '../chunks/Features2_w6hmVP73.mjs';
import { $ as $$Features3 } from '../chunks/Features3_DkjykfMG.mjs';
import { $ as $$Hero } from '../chunks/Hero_DnpRN3-T.mjs';
import { $ as $$Stats } from '../chunks/Stats_NDoxlExu.mjs';
import { $ as $$Steps2 } from '../chunks/Steps2_Cr8DZjXz.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_CiKvXr2l.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "About us"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "About us", "image": {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Caos Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Donec efficitur, ipsum quis congue luctus, mauris magna convallis mauris, eu auctor nisi lectus non augue. Donec
      quis lorem non massa vulputate efficitur ac at turpis. Sed tincidunt ex a nunc convallis, et lobortis nisi tempus.
      Suspendisse vitae nisi eget tortor luctus maximus sed non lectus.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Elevate your online presence with our ${maybeRenderHead()}<br> <span class="text-accent dark:text-white highlight"> Beautiful Website Templates</span> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Statistics about us", "stats": [
    { title: "Offices", amount: "4" },
    { title: "Employees", amount: "248" },
    { title: "Templates", amount: "12" },
    { title: "Awards", amount: "24" }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Our templates", "subtitle": "Etiam scelerisque, enim eget vestibulum luctus, nibh mauris blandit nulla, nec vestibulum risus justo ut enim. Praesent lacinia diam et ante imperdiet euismod.", "columns": 3, "isBeforeContent": true, "items": [
    {
      title: "Educational",
      description: "Morbi faucibus luctus quam, sit amet aliquet felis tempor id. Cras augue massa, ornare quis dignissim a, molestie vel nulla.",
      icon: "tabler:template"
    },
    {
      title: "Interior Design",
      description: "Vivamus porttitor, tortor convallis aliquam pretium, turpis enim consectetur elit, vitae egestas purus erat ac nunc nulla.",
      icon: "tabler:template"
    },
    {
      title: "Photography",
      description: "Duis sed lectus in nisl vehicula porttitor eget quis odio. Aliquam erat volutpat. Nulla eleifend nulla id sem fermentum.",
      icon: "tabler:template"
    }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "columns": 3, "isAfterContent": true, "items": [
    {
      title: "E-commerce",
      description: "Rutrum non odio at vehicula. Proin ipsum justo, dignissim in vehicula sit amet, dignissim id quam. Sed ac tincidunt sapien.",
      icon: "tabler:template"
    },
    {
      title: "Blog",
      description: "Nullam efficitur volutpat sem sed fringilla. Suspendisse et enim eu orci volutpat laoreet ac vitae libero.",
      icon: "tabler:template"
    },
    {
      title: "Business",
      description: "Morbi et elit finibus, facilisis justo ut, pharetra ipsum. Donec efficitur, ipsum quis congue luctus, mauris magna.",
      icon: "tabler:template"
    },
    {
      title: "Branding",
      description: "Suspendisse vitae nisi eget tortor luctus maximus sed non lectus. Cras malesuada pretium placerat. Nullam venenatis dolor a ante rhoncus.",
      icon: "tabler:template"
    },
    {
      title: "Medical",
      description: "Vestibulum malesuada lacus id nibh posuere feugiat. Nam volutpat nulla a felis ultrices, id suscipit mauris congue. In hac habitasse platea dictumst.",
      icon: "tabler:template"
    },
    {
      title: "Fashion Design",
      description: "Maecenas eu tellus eget est scelerisque lacinia et a diam. Aliquam velit lorem, vehicula id fermentum et, rhoncus et purus.",
      icon: "tabler:template"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Colorful Image"
  } })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Our values", "subtitle": "Maecenas eu tellus eget est scelerisque lacinia et a diam. Aliquam velit lorem, vehicula id fermentum et, rhoncus et purus. Nulla facilisi. Vestibulum malesuada lacus.", "items": [
    {
      title: "Customer-centric approach",
      description: "Donec id nibh neque. Quisque et fermentum tortor. Fusce vitae dolor a mauris dignissim commodo. Ut eleifend luctus condimentum."
    },
    {
      title: "Constant Improvement",
      description: "Phasellus laoreet fermentum venenatis. Vivamus dapibus pulvinar arcu eget mattis. Fusce eget mauris leo."
    },
    {
      title: "Ethical Practices",
      description: "Vestibulum imperdiet libero et lectus molestie, et maximus augue porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }
  ] })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Achievements", "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla.", "isReversed": true, "callToAction": {
    text: "See more",
    href: "/"
  }, "items": [
    {
      title: "Global reach",
      description: "Nam malesuada urna in enim imperdiet tincidunt. Phasellus non tincidunt nisi, at elementum mi.",
      icon: "tabler:globe"
    },
    {
      title: "Positive customer feedback and reviews",
      description: "Cras semper nulla leo, eget laoreet erat cursus sed. Praesent faucibus massa in purus iaculis dictum.",
      icon: "tabler:message-star"
    },
    {
      title: "Awards and recognition as industry experts",
      description: "Phasellus lacinia cursus velit, eu malesuada magna pretium eu. Etiam aliquet tellus purus, blandit lobortis ex rhoncus vitae.",
      icon: "tabler:award"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Our locations", "tagline": "Find us", "columns": 4, "items": [
    {
      title: "EE.UU",
      description: "1234 Lorem Ipsum St, 12345, Miami"
    },
    {
      title: "Spain",
      description: "5678 Lorem Ipsum St, 56789, Madrid"
    },
    {
      title: "Australia",
      description: "9012 Lorem Ipsum St, 90123, Sydney"
    },
    {
      title: "Brazil",
      description: "3456 Lorem Ipsum St, 34567, S\xE3o Paulo"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Technical Support", "tagline": "Contact us", "columns": 2, "items": [
    {
      title: "Chat with us",
      description: "Integer luctus laoreet libero, auctor varius purus rutrum sit amet. Ut nec molestie nisi, quis eleifend mi.",
      icon: "tabler:messages"
    },
    {
      title: "Call us",
      description: "Mauris faucibus finibus orci, in posuere elit viverra non. In hac habitasse platea dictumst. Cras lobortis metus a hendrerit congue.",
      icon: "tabler:headset"
    }
  ] })} ` })}`;
}, "/Users/zhaokaien/workspace/netstation/src/pages/about.astro", void 0);

const $$file = "/Users/zhaokaien/workspace/netstation/src/pages/about.astro";
const $$url = "/netstation/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
