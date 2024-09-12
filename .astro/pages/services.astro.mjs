import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_Brz_0mGH.mjs';
import 'kleur/colors';
import { $ as $$CallToAction } from '../chunks/CallToAction_DGmakGVp.mjs';
import { $ as $$Content } from '../chunks/Content_BBgHX2yt.mjs';
import { $ as $$Features2 } from '../chunks/Features2_w6hmVP73.mjs';
import { $ as $$Hero } from '../chunks/Hero_DnpRN3-T.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_CvgT_YtV.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_CiKvXr2l.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://github.com/Wilson88888888/netstation/");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const metadata = {
    title: "Services"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Services", "title": "Elevate your projects with our stunning templates", "subtitle": "Explore our meticulously crafted templates tailored to various industries and purposes. From captivating presentations to functional website designs, we offer the tools you need to succeed.", "actions": [{ variant: "primary", target: "_blank", text: "Start exploring", href: "/" }], "image": {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "AstroWind Hero Image"
  } })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Explore our diverse templates", "subtitle": "Discover our selection below to streamline and elevate your projects.", "columns": 3, "items": [
    {
      title: "Educational",
      description: "By harmonizing instructional design and visual appeal, templates streamline content creation for varied materials, expediting development and cultivating engaging educational spaces.",
      icon: "tabler:school"
    },
    {
      title: "Interior Design",
      description: "Crafting functional, visually appealing spaces for residential and commercial use. Templates emphasize layout, colors, and furniture setups, offering a versatile toolkit for your design vision.",
      icon: "tabler:home-star"
    },
    {
      title: "Photography",
      description: `Empowering photographers, our templates facilitate captivating storytelling. With a keen focus on layout, galleries, and typography, they cater to both professionals and enthusiasts.`,
      icon: "tabler:photo"
    },
    {
      title: "E-commerce",
      description: "Developing engaging online stores, our E-commerce templates ensure a dynamic presence to effectively showcase products. Ideal for startups or revamps.",
      icon: "tabler:shopping-cart"
    },
    {
      title: "Blog",
      description: "With attention to typography, these templates empower effective content presentation for writers at any stage, ensuring visually engaging and user-friendly blogs.",
      icon: "tabler:article"
    },
    {
      title: "Business",
      description: "Providing polished options for effective visual communication, these templates empower both startups and established companies for a professional brand presence.",
      icon: "tabler:building-store"
    },
    {
      title: "Branding",
      description: "Offering pre-designed elements for a consistent brand identity, including logos and marketing materials. Ideal for new ventures or revamps.",
      icon: "tabler:arrow-big-up-lines"
    },
    {
      title: "Medical",
      description: `From presentations to patient forms, these tools enhance communication effectiveness for healthcare professionals. Ideal for medical practices and research pursuits.`,
      icon: "tabler:vaccine"
    },
    {
      title: "Fashion Design",
      description: "With attention to detail, customization, and contemporary design, they empower designers to showcase ideas cohesively. Ideal for all levels of designers.",
      icon: "tabler:tie"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "items": [
    {
      title: "High-Quality Designs",
      description: "Our templates feature top-tier designs that ensure a professional and polished appearance for your projects.",
      icon: "tabler:wand"
    },
    {
      title: "Customization Tools",
      description: "Tailor each template to your unique needs with user-friendly customization tools that let you personalize colors, fonts, and content.",
      icon: "tabler:settings"
    },
    {
      title: "Pre-Designed Elements",
      description: "Save time and effort with our ready-to-use elements, including graphics, icons, and layouts that enhance the visual appeal of your creations.",
      icon: "tabler:presentation"
    },
    {
      title: "Preview and Mockup Views",
      description: "Visualize the final outcome before making any changes using our preview and mockup views, ensuring your projects meet your expectations.",
      icon: "tabler:carousel-horizontal"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    alt: "Features Image"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Main Features</h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "Time Savings",
      description: "Streamline your workflow, enabling you to create stunning materials efficiently and allocate more time to your core tasks.",
      icon: "tabler:clock"
    },
    {
      title: "Professional Appearance",
      description: "Elevate your projects with the polished and sophisticated look that our templates provide, making a lasting impression on your audience.",
      icon: "tabler:school"
    },
    {
      title: "Cost-Efficiency",
      description: "Benefit from cost savings by avoiding the need for custom design work, as our templates offer professional-grade designs at a fraction of the cost.",
      icon: "tabler:coin"
    },
    {
      title: "Instant Download",
      description: "Enjoy immediate access to your chosen templates upon purchase, enabling you to begin working on your projects without delay.",
      icon: "tabler:file-download"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Benefits Image"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Benefits</h3> ` })}` })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "Words from real customers", "testimonials": [
    {
      testimonial: `The designs are not only visually appealing but also highly professional. The templates have saved me a significant amount of time while helping me make a lasting impression on my clients.`,
      name: "Emily Kennedy",
      job: "Front-end developer",
      image: {
        src: "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
        alt: "Emily Kennedy Image"
      }
    },
    {
      testimonial: `It beautifully showcases my work, with its clean and elegant design that lets my photographs shine. Customization was a breeze, even for a non-tech person like me. The result is a professional and immersive portfolio that's garnered numerous compliments.`,
      name: "Sarah Hansen",
      job: "Photographer",
      image: {
        src: "https://images.unsplash.com/photo-1561406636-b80293969660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Sarah Hansen Image"
      }
    },
    {
      testimonial: `I discovered these templates and I'm impressed by their variety and quality. They've helped me establish a consistent brand image across my marketing and social platforms, elevating my business's overall appearance.`,
      name: "Mark Wilkinson",
      job: "Small business owner",
      image: {
        src: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=824&q=80",
        alt: "Mark Wilkinson Image"
      }
    }
  ], "callToAction": {
    target: "_blank",
    text: "More testimonials...",
    href: "https://github.com/onwidget/astrowind",
    icon: "tabler:chevron-right"
  } })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      text: "Start exploring",
      href: "/"
    }
  ], "title": "Dive into our template collection", "subtitle": "Whether you're in business, design, or education, our templates are here to elevate your projects." })} ` })}`;
}, "/Users/zhaokaien/workspace/netstation/src/pages/services.astro", void 0);

const $$file = "/Users/zhaokaien/workspace/netstation/src/pages/services.astro";
const $$url = "/netstation/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
