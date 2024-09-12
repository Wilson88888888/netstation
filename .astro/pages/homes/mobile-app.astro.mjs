import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_Brz_0mGH.mjs';
import 'kleur/colors';
import { a as $$Button, b as $$Header, $ as $$PageLayout } from '../../chunks/PageLayout_CiKvXr2l.mjs';
import { $ as $$Hero2 } from '../../chunks/Hero2_GRrYN4A9.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_DGmakGVp.mjs';
import { $ as $$Features3 } from '../../chunks/Features3_DkjykfMG.mjs';
import { $ as $$Content } from '../../chunks/Content_BBgHX2yt.mjs';
import { $ as $$Testimonials } from '../../chunks/Testimonials_CvgT_YtV.mjs';
import { $ as $$FAQs } from '../../chunks/FAQs_a5yxWXKP.mjs';
import { $ as $$Stats } from '../../chunks/Stats_NDoxlExu.mjs';
import { $ as $$Image } from '../../chunks/Image_Jgcr5UHB.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://github.com/Wilson88888888/netstation/");
const $$MobileApp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MobileApp;
  const appStoreImg = "~/assets/images/app-store.png";
  const appStoreDownloadLink = "https://github.com/onwidget/astrowind";
  const googlePlayImg = "~/assets/images/google-play.png";
  const googlePlayDownloadLink = "https://github.com/onwidget/astrowind";
  const metadata = {
    title: "Mobile App Homepage"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" })}`, "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Mobile App Web Demo", "image": {
    src: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    alt: "AstroWind Hero Image"
  } }, { "actions": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="flex max-w-sm gap-4"> ${renderComponent($$result3, "Button", $$Button, { "variant": "link", "href": appStoreDownloadLink }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": appStoreImg, "alt": "App Store Image", "width": 200 })} ` })} ${renderComponent($$result3, "Button", $$Button, { "variant": "link", "href": googlePlayDownloadLink }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": googlePlayImg, "alt": "Google Play Image", "width": 200 })} ` })} </div>`, "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` <span class="hidden sm:inline">
Unlock boundless creativity at your fingertips: your gateway to innovative design.
</span>
Download now and embark on a journey to elevate your projects like never before.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-accent dark:text-white highlight">AstroWind App</span>: <br> professional websites <span class="hidden xl:inline">made easy</span> ` })}` })}  ${renderComponent($$result2, "Features3", $$Features3, { "id": "features", "title": "How to use our app?", "subtitle": "Tired of spending hours crafting documents from scratch? Our app offers an innovative solution. With a wide array of professionally designed templates, you can now create stunning documents in minutes. Explore our templates now and experience the difference.", "tagline": "Step-by-step guide", "columns": 2, "items": [
    {
      title: "Download and install the app",
      description: `Begin your journey by downloading our user-friendly app from your device's app store or our official website.`,
      icon: "tabler:square-number-1"
    },
    {
      title: "Sign up",
      description: "Create your account by providing the necessary information, enabling you to access our full range of features.",
      icon: "tabler:square-number-2"
    },
    {
      title: "Browse templates",
      description: "Explore our diverse collection of website templates, categorized for easy navigation.",
      icon: "tabler:square-number-3"
    },
    {
      title: "Preview and select a template",
      description: `Visualize the potential of each template through previews, then choose the one that aligns best with your project's needs.`,
      icon: "tabler:square-number-4"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1521517407911-565264e7d82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    alt: "Colorful Image"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "items": [
    {
      title: "User-friendly interface",
      description: "An intuitive and easy-to-navigate interface that allows users to quickly browse and find the templates they need.",
      icon: "tabler:wand"
    },
    {
      title: "Personalization options",
      description: "Include basic customization tools that let users modify text, colors, images, and other elements within the templates.",
      icon: "tabler:settings"
    },
    {
      title: "Ready-to-use components",
      description: "Enhance your designs with ready-to-use elements like graphics, icons, and layouts, saving you time and boosting visual appeal.",
      icon: "tabler:template"
    },
    {
      title: "Preview Mode",
      description: "Provide a preview of each template, allowing users to see how it looks before making a purchase.",
      icon: "tabler:carousel-horizontal"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1576153192621-7a3be10b356e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    alt: "Colorful Image"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Main Features</h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "Offline Access",
      description: "Offer the option for users to download purchased templates for offline use.",
      icon: "tabler:wifi-off"
    },
    {
      title: "Secure Cloud Storage",
      description: "Provide cloud storage for purchased templates, ensuring users can access and back up their templates from anywhere securely.",
      icon: "tabler:file-download"
    },
    {
      title: "Regular Updates",
      description: "Continuously add new templates and features to keep the app fresh and engaging for users.",
      icon: "tabler:refresh"
    },
    {
      title: "Wishlist",
      description: `Allow users to create a wishlist of templates they're interested in, making it easier for them to revisit and potentially purchase later.`,
      icon: "tabler:heart"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Vintage Image"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Other features</h3> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Statistics of our app", "stats": [
    { amount: "20K", icon: "tabler:download" },
    { amount: "18.5K", icon: "tabler:users" },
    { amount: "4.7", icon: "tabler:user-star" }
  ] })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "What our users say?", "testimonials": [
    {
      testimonial: `It's made exploring and downloading website templates a breeze. The interface is intuitive, and I had no trouble finding the perfect template for my project. It's an app that truly empowers users.`,
      name: "Cary Kennedy",
      job: "Film director",
      image: {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Cary Kennedy Image"
      }
    },
    {
      testimonial: `The app's seamless download process and intuitive layout have made selecting templates an enjoyable experience. Being able to preview and experiment with different designs before committing has saved me time and ensured I get the perfect look for my website.`,
      name: "Josh Wilkinson",
      job: "Product Manager",
      image: {
        src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Josh Wilkinson Image"
      }
    },
    {
      testimonial: "I was able to download and use a professional website template within minutes. The step-by-step process and user-friendly interface made it easy for me to create a website that looks as if it was designed by a pro.",
      name: "Sidney Hansen",
      job: "Decorator",
      image: {
        src: "https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Sidney Hansen Image"
      }
    }
  ], "callToAction": {
    target: "_blank",
    text: "Read more testimonials",
    href: "https://github.com/onwidget/astrowind",
    icon: "tabler:chevron-right"
  } })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Still have some doubts?", "items": [
    {
      title: "What does this app do?",
      description: "This app provides a platform for you to easily browse, purchase, download, and use a wide range of website templates for your projects."
    },
    {
      title: "How can this app solve my problem?",
      description: "This app streamlines the process of finding and implementing professional website designs, saving you time and effort in creating visually appealing and functional websites."
    },
    {
      title: "Is it available for my device?",
      description: `Our app is designed for compatibility across various devices and platforms, ensuring accessibility whether you're using a smartphone, tablet, or computer.`
    },
    {
      title: "What makes this app different from others?",
      description: "Our app stands out for its user-friendly interface, extensive template collection, and seamless integration of the purchasing and downloading process, making it highly efficient."
    },
    {
      title: "Are there any costs involved?",
      description: "While the app itself may be free to download, there may be costs associated with purchasing specific templates based on your preferences and project requirements."
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "id": "download", "title": "Download our app now!", "subtitle": "Access a variety of stunning templates, simplify your creative process, and elevate your online presence." }, { "actions": ($$result3) => renderTemplate`<div class="flex max-w-sm gap-4"> ${renderComponent($$result3, "Button", $$Button, { "variant": "link", "href": appStoreDownloadLink }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": appStoreImg, "alt": "App Store Image", "width": 200 })} ` })} ${renderComponent($$result3, "Button", $$Button, { "variant": "link", "href": googlePlayDownloadLink }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": googlePlayImg, "alt": "Google Play Image", "width": 200 })} ` })} </div>` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "position": "left", "links": [
    { text: "Services", href: "#" },
    { text: "Features", href: "#" },
    { text: "About", href: "#" }
  ], "actions": [
    {
      text: "Download",
      href: "#download"
    }
  ], "isSticky": true, "showToggleTheme": true })} ` })}` })}`;
}, "/Users/zhaokaien/workspace/netstation/src/pages/homes/mobile-app.astro", void 0);

const $$file = "/Users/zhaokaien/workspace/netstation/src/pages/homes/mobile-app.astro";
const $$url = "/netstation/homes/mobile-app";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MobileApp,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
