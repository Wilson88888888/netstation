import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_Brz_0mGH.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../../chunks/PageLayout_CiKvXr2l.mjs';
import { $ as $$Hero } from '../../chunks/Hero_DnpRN3-T.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_DGmakGVp.mjs';
import { $ as $$Features2 } from '../../chunks/Features2_w6hmVP73.mjs';
import { $ as $$Features } from '../../chunks/Features_DKuUxJR_.mjs';
import { $ as $$Stats } from '../../chunks/Stats_NDoxlExu.mjs';
import { $ as $$Features3 } from '../../chunks/Features3_DkjykfMG.mjs';
import { $ as $$FAQs } from '../../chunks/FAQs_a5yxWXKP.mjs';
import { $ as $$Icon } from '../../chunks/ToggleTheme_BXNPoxA6.mjs';
import { $ as $$Image } from '../../chunks/Image_Jgcr5UHB.mjs';
import { $ as $$Headline } from '../../chunks/Headline_DOqSaGr4.mjs';
import { $ as $$WidgetWrapper } from '../../chunks/WidgetWrapper_D5Uti-Hj.mjs';
import { jsx } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { $ as $$YouTube } from '../../chunks/LinkPreview_FzGDC2vV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://github.com/Wilson88888888/netstation/");
const $$Brands = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Brands;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    icons = [],
    images = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24"> ${icons && icons.map((icon) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "py-3 lg:py-5 w-12 h-auto mx-auto sm:mx-0 text-gray-500" })}`)} ${images && images.map(
    (image) => image.src && renderTemplate`<div class="flex justify-center col-span-1 my-2 lg:my-4 py-1 px-3 rounded-md dark:bg-gray-200"> ${renderComponent($$result2, "Image", $$Image, { "src": image.src, "alt": image.alt || "", "class": "max-h-12", "width": 120, "height": 48, "layout": "fixed" })} </div>`
  )} </div> ` })}`;
}, "/Users/zhaokaien/workspace/netstation/src/components/widgets/Brands.astro", void 0);

const PaypalButton = () => {
  useEffect(() => {
    const loadPaypalScript = () => {
      if (!document.querySelector("#paypal-sdk")) {
        const script = document.createElement("script");
        script.id = "paypal-sdk";
        script.src = `https://www.paypal.com/sdk/js?client-id=AZ34Ql31hxHWuvwOMq6QjJeRXSbe6yoOTwYF82acV6CcZPzj76-C-5MPMZNEwZZ-Yt-id1WlzASDIBnW&currency=USD&intent=capture&disable-funding=card&components=buttons`;
        script.async = true;
        script.onload = () => {
          window.paypal.Buttons({
            createOrder: function(data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: "100.00"
                    // 替换为你的支付金额
                  }
                }]
              });
            },
            onApprove: function(data, actions) {
              return actions.order.capture().then(function(details) {
                alert("Transaction completed by " + details.payer.name.given_name);
              });
            }
          }).render("#paypal-button-container");
        };
        script.onerror = () => {
          console.error("Failed to load PayPal SDK");
        };
        document.body.appendChild(script);
      }
    };
    loadPaypalScript();
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "paypal-container", children: /* @__PURE__ */ jsx("div", { id: "paypal-button-container" }) });
};

const $$Astro = createAstro("https://github.com/Wilson88888888/netstation/");
const $$Startup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Startup;
  const metadata = {
    title: "Startup Landing Page"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Startup Web Demo", "actions": [
    {
      variant: "primary",
      target: "_blank",
      text: "Get templates",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    },
    { text: "Learn more", href: "#features" }
  ] }, { "image": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "image" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "YouTube", $$YouTube, { "id": "gxBkghlglTg", "title": "Astro just Launched.... Could it be the ultimate web framework?" })} <style>
        lite-youtube {
          margin: 0 auto;
          max-width: 100%;
        }
      </style> ` })}`, "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Step into the spotlight with ${maybeRenderHead()}<span class="font-semibold">Astrowind</span> templates, your pathway to fortifying your
      startup's digital footprint, fostering credibility, and expanding your reach.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Improve <span class="hidden sm:inline">the online presence of</span> your <span class="text-accent dark:text-white highlight">Startup</span> with Astrowind templates
` })}` })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "About us", "subtitle": "We believe in the magic of turning dreams into stunning realities. Founded by passionate developers with a shared vision, we set out to simplify the website creation process. Our templates bring together the innovation of Astro 4.0 and the versatility of Tailwind CSS, enabling you to express your unique brand identity like never before." }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Discover the impressive impact of Astrowind", "subtitle": "The numbers below reflect the trust our users have placed in us and the remarkable outcomes we've helped them achieve.", "stats": [
    { title: "Downloads", amount: "182K" },
    { title: "Websites Launched", amount: "87" },
    { title: "User Ratings", amount: "4.8" },
    { title: "Satisfied Clients", amount: "116K" }
  ] })}  ${renderComponent($$result2, "Brands", $$Brands, { "title": "Partnerships & Collaborations", "subtitle": "At Astrowind, we believe in the power of collaboration to drive innovation and create exceptional experiences.", "icons": [], "images": [
    {
      src: "https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png",
      alt: "Paypal"
    },
    {
      src: "https://cdn.pixabay.com/photo/2021/12/06/13/48/visa-6850402_1280.png",
      alt: "Visa"
    },
    {
      src: "https://cdn.pixabay.com/photo/2013/10/01/10/29/ebay-189064_1280.png",
      alt: "Ebay"
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720944_1280.png",
      alt: "Youtube"
    },
    {
      src: "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_1280.png",
      alt: "Microsoft"
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png",
      alt: "Node JS"
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751_1280.png",
      alt: "Google"
    },
    {
      src: "https://cdn.pixabay.com/photo/2021/12/06/13/45/meta-6850393_1280.png",
      alt: "Meta"
    },
    {
      src: "https://cdn.pixabay.com/photo/2013/01/29/22/53/yahoo-76684_1280.png",
      alt: "Yahoo"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "What services do we provide?", "subtitle": "We offer a wide range of website templates that suit various industries and purposes such as business, portfolio, e-commerce, blog, etc.", "items": [
    {
      title: "Installation Instructions",
      description: "Offer clear instructions on how to download the purchased templates and install them on various website platforms or content management systems.",
      icon: "flat-color-icons:document"
    },
    {
      title: "Demo and Previews",
      description: "Provide interactive demos and previews that allow customers to see how their chosen template will look and function before making a purchase.",
      icon: "flat-color-icons:template"
    },
    {
      title: "Technical Support",
      description: "Providing customer support for any technical issues related to the templates or their implementation.",
      icon: "flat-color-icons:voice-presentation"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Features", $$Features, { "id": "features", "title": "Main features of our templates", "subtitle": "Possess several key characteristics to effectively cater to the needs of startups and entrepreneurs.", "columns": 3, "items": [
    {
      title: "Modern and Professional Design",
      description: "Have a contemporary design that reflects current design trends and gives a professional impression.",
      icon: "tabler:artboard"
    },
    {
      title: "Responsive and Mobile-Friendly",
      description: "Adapt seamlessly to different screen sizes and devices to ensure a consistent experience.",
      icon: "tabler:picture-in-picture"
    },
    {
      title: "Customizability",
      description: "Easily customizable, allowing users to adapt the design, colors, typography, and content to match their brand identity.",
      icon: "tabler:adjustments-horizontal"
    },
    {
      title: "Fast Loading Times",
      description: "Optimized for speed to ensure a smooth user experience and favorable search engine rankings.",
      icon: "tabler:rocket"
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Incorporate SEO best practices in template structure and code to improve visibility in search engine results.",
      icon: "tabler:arrows-right-left"
    },
    {
      title: "Compatibility",
      description: "The templates work seamlessly across various content management systems and website builders.",
      icon: "tabler:plug-connected"
    }
  ] })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Frequently Asked Questions", "items": [
    {
      title: "What are landing page templates?",
      description: "Landing page templates are pre-designed web page layouts that are specifically created to serve as a foundation for building effective landing pages. These templates are designed to capture the attention of visitors and guide them towards a specific action or goal, such as signing up for a newsletter, making a purchase, or downloading a resource."
    },
    {
      title: "Why should I use a template?",
      description: "Some of the advantages are that they provide a ready-to-use structure,  saving you significant time. Are designed with user-friendliness in mind and provide a cost-effective alternative, saving you money while still delivering a quality result."
    },
    {
      title: "Can I preview templates before buying?",
      description: 'Yes, the templates allow you to preview them before making a purchase. There is a "Demo" button associated with each template.'
    },
    {
      title: "Do I need technical skills to use a template?",
      description: "Advanced technical skills are not required to use a template, but having a basic understanding of web navigation and familiarity with using online tools can still be beneficial. If you have more specific customization needs, you might need to consult guides or reach out to customer support for assistance."
    },
    {
      title: "Can I use the template on multiple websites?",
      description: "No, the template comes with a single-use license, meaning you can use the template on one website or project only. Using the template on additional websites would require purchasing additional licenses."
    },
    {
      title: "What if I need help with customization?",
      description: "The templates provides a comprehensive step-by-step guide that walk you through the customization process. If you still have doubts, you can reach out to our customer support team. They can answer your questions, provide guidance on customization, and address any issues you're facing."
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Let us know how we can help", "subtitle": "We\u2019re here to help and answer any question you might have.", "columns": 4, "items": [
    {
      title: "Phone",
      icon: "tabler:phone",
      callToAction: {
        target: "_blank",
        text: "Call us",
        href: "/",
        variant: "link"
      }
    },
    {
      title: "Email",
      icon: "tabler:mail",
      callToAction: {
        target: "_blank",
        text: "Write to us",
        href: "/",
        variant: "link"
      }
    },
    {
      title: "Chat with sales",
      icon: "tabler:message-circle",
      callToAction: {
        target: "_blank",
        text: "Start chatting",
        href: "/",
        variant: "link"
      }
    },
    {
      title: "Chat with support",
      icon: "tabler:message-circle",
      callToAction: {
        target: "_blank",
        text: "Start chatting",
        href: "/",
        variant: "link"
      }
    }
  ] })}  ${renderComponent($$result2, "PaypalButton", PaypalButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "~/components/widgets/Paypal.jsx", "client:component-export": "default" })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      target: "_blank",
      text: "Get templates",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Discover a dynamic work environment, unparalleled growth opportunities, and the chance to make a meaningful
      impact.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`Be a part of our vision` })}` })} ` })}`;
}, "/Users/zhaokaien/workspace/netstation/src/pages/homes/startup.astro", void 0);

const $$file = "/Users/zhaokaien/workspace/netstation/src/pages/homes/startup.astro";
const $$url = "/netstation/homes/startup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Startup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
