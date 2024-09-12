import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_Brz_0mGH.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_CiKvXr2l.mjs';
import { $ as $$HeroText } from '../chunks/HeroText_B3b2G2lR.mjs';
import { $ as $$Pricing$1 } from '../chunks/Pricing_DjfzuVws.mjs';
import { $ as $$FAQs } from '../chunks/FAQs_a5yxWXKP.mjs';
import { $ as $$Steps } from '../chunks/Steps_ClZ-as-o.mjs';
import { $ as $$Features3 } from '../chunks/Features3_DkjykfMG.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_DGmakGVp.mjs';
export { renderers } from '../renderers.mjs';

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Pricing"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Pricing", "title": "Stellar Pricing for Every Journey", "subtitle": "Choose the perfect plan that aligns with your cosmic goals." })}  ${renderComponent($$result2, "Prices", $$Pricing$1, { "title": "Our prices", "subtitle": "Only pay for what you need", "prices": [
    {
      title: "basic",
      subtitle: "Optimal choice for personal use",
      price: 29,
      period: "per month",
      items: [
        {
          description: "Etiam in libero, et volutpat"
        },
        {
          description: "Aenean ac nunc dolor tristique"
        },
        {
          description: "Cras scelerisque accumsan lib"
        },
        {
          description: "In hac habitasse"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "#"
      }
    },
    {
      title: "standard",
      subtitle: "Optimal choice for small teams",
      price: 69,
      period: "Per Month",
      items: [
        {
          description: "Proin vel laoreet"
        },
        {
          description: "Ut efficitur habitasse egestas"
        },
        {
          description: "Volutpat hac curabitur"
        },
        {
          description: "Pellentesque blandit ut nibh"
        },
        {
          description: "Donec fringilla sem"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "#"
      },
      hasRibbon: true,
      ribbonTitle: "popular"
    },
    {
      title: "premium",
      subtitle: "Optimal choice for companies",
      price: 199,
      period: "Per Month",
      items: [
        {
          description: "Curabitur suscipit risus"
        },
        {
          description: "Aliquam habitasse malesuada"
        },
        {
          description: "Suspendisse sit amet blandit"
        },
        {
          description: "Suspendisse auctor blandit dui"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "#"
      }
    }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Price-related features", "subtitle": "Discover the advantages of choosing our plans", "columns": 2, "items": [
    {
      title: "Tiered Pricing Plans",
      description: "Choose from a range of pricing plans designed to accommodate different budgets and requirements.",
      icon: "tabler:stairs"
    },
    {
      title: "Transparent Pricing",
      description: "Clearly displayed pricing details for each plan, with no hidden costs or unexpected charges.",
      icon: "tabler:flip-vertical"
    },
    {
      title: "Secure Payment Methods",
      description: "Secure payment gateways to protect your financial information during transactions.",
      icon: "tabler:shield-lock"
    },
    {
      title: "Instant Access",
      description: `Immediate access to your chosen plan's features and templates upon subscription.`,
      icon: "tabler:accessible"
    },
    {
      title: "Upgrade Value",
      description: "Upgrade to higher-tier plans to unlock more features and benefits for an enhanced experience.",
      icon: "tabler:chevrons-up"
    },
    {
      title: "24H support",
      description: "Questions answered via live chat, email or phone, every calendar day.",
      icon: "tabler:headset"
    }
  ], "classes": { container: "max-w-5xl" } })}  ${renderComponent($$result2, "Steps", $$Steps, { "title": "A guided journey from plans to creativity", "tagline": "simplified process", "isReversed": true, "items": [
    {
      title: "Explore plans",
      icon: "tabler:number-1"
    },
    {
      title: "Select a plan",
      icon: "tabler:number-2"
    },
    {
      title: "Sign Up / Log In",
      icon: "tabler:number-3"
    },
    {
      title: "Review order",
      icon: "tabler:number-4"
    },
    {
      title: "Enter payment details",
      icon: "tabler:number-5"
    },
    {
      title: "Confirmation",
      icon: "tabler:number-6"
    },
    {
      title: "Download and start using the template(s)",
      icon: "tabler:number-7"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    alt: "Steps image"
  } })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Pricing FAQs", "subtitle": "Choosing the right plan is important, and we're here to answer your questions. If you have queries about our pricing options, you're in the right place.", "columns": 1, "items": [
    {
      title: "Do the plans come with customer support?",
      description: "Absolutely, all plans include access to our dedicated customer support to assist you with any queries or concerns."
    },
    {
      title: "Is there a trial period for the different plans?",
      description: "Unfortunately, we don't offer trial periods for the plans. However, you can check out our demo section to preview the quality of our templates."
    },
    {
      title: "Can I switch between plans?",
      description: "Certainly! You can easily upgrade or downgrade your plan, at any time, to find the one that best suits your evolving requirements."
    },
    {
      title: "What payment methods do you accept?",
      description: "We accept major credit cards and online payment methods to ensure a convenient and secure transaction process."
    },
    {
      title: "Are there any hidden fees beyond the displayed cost?",
      description: "No, the subscription cost covers all the features and templates listed under each plan. There are no hidden fees or extra charges."
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Ready to boost your projects?", "subtitle": "Join our community of satisfied customers who have transformed their work with our templates.", "actions": [
    {
      variant: "primary",
      text: "Get started now",
      href: "/"
    }
  ] })} ` })}`;
}, "/Users/zhaokaien/workspace/netstation/src/pages/pricing.astro", void 0);

const $$file = "/Users/zhaokaien/workspace/netstation/src/pages/pricing.astro";
const $$url = "/netstation/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
