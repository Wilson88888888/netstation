import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro, F as Fragment } from '../chunks/astro/server_Brz_0mGH.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_CiKvXr2l.mjs';
import { $ as $$Hero } from '../chunks/Hero_DnpRN3-T.mjs';
import { $ as $$Icon } from '../chunks/ToggleTheme_BXNPoxA6.mjs';
import { $ as $$Features } from '../chunks/Features_DKuUxJR_.mjs';
import { $ as $$Features2 } from '../chunks/Features2_w6hmVP73.mjs';
import { $ as $$Steps } from '../chunks/Steps_ClZ-as-o.mjs';
import { $ as $$Content } from '../chunks/Content_BBgHX2yt.mjs';
import { $ as $$BlogLatestPosts } from '../chunks/BlogLatestPosts_BvFlMw9u.mjs';
import { $ as $$FAQs } from '../chunks/FAQs_a5yxWXKP.mjs';
import { $ as $$Stats } from '../chunks/Stats_NDoxlExu.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_DGmakGVp.mjs';
export { renderers } from '../renderers.mjs';

const $$Note = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-50 dark:bg-slate-800 not-prose"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-md text-center font-medium"> <span class="font-bold"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:info-square", "class": "w-5 h-5 inline-block align-text-bottom" })} Philosophy:</span> Simplicity, Best Practices and High Performance
</div> </section>`;
}, "/Users/zhaokaien/workspace/netstation/src/components/widgets/Note.astro", void 0);

const $$Astro = createAstro("https://github.com/Wilson88888888/netstation/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const metadata = {
    title: "BeyondBrain \u2014 Free template for creating websites with Astro + Tailwind CSS",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "actions": [
    {
      variant: "primary",
      text: "Get template",
      href: "https://github.com/onwidget/BeyondBrain",
      target: "_blank",
      icon: "tabler:download"
    },
    { text: "Learn more", href: "#features" }
  ], "image": { src: "~/assets/images/hero-image.png", alt: "BeyondBrain Hero Image" } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline"> <span class="font-semibold">BeyondBrain</span> is a free, customizable and production-ready template for Astro 4.0
        + Tailwind CSS.</span> <span class="block mb-1 sm:hidden font-bold text-blue-600">BeyondBrain: Production-ready.</span>
Suitable for Startups, Small Business, SaaS websites, Professional Portfolios, Marketing websites, Landing Pages &
      Blogs.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Free template for <span class="hidden xl:inline">creating websites with</span> <span class="text-accent dark:text-white highlight"> Astro 4.0</span> + Tailwind CSS
` })}` })}  ${renderComponent($$result2, "Note", $$Note, {})}  ${renderComponent($$result2, "Features", $$Features, { "id": "features", "tagline": "Features", "title": "What you get with BeyondBrain", "subtitle": "One of the most professional and comprehensive templates currently on the market. ", "items": [
    {
      title: "Astro + Tailwind CSS Integration",
      description: "A seamless integration between two great frameworks that offer high productivity, performance and versatility.",
      icon: "tabler:brand-tailwind"
    },
    {
      title: "Ready-to-use Components",
      description: "Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...",
      icon: "tabler:components"
    },
    {
      title: "Best Practices",
      description: "Creating secure, efficient, and user-friendly websites that deliver exceptional experiences and lasting value.",
      icon: "tabler:list-check"
    },
    {
      title: "Excellent Page Speed",
      description: "Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.",
      icon: "tabler:rocket"
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "SEO lies in its ability to enhance a website's visibility, driving organic traffic and enabling it to reach a wider audience.",
      icon: "tabler:arrows-right-left"
    },
    {
      title: "Open to new ideas and contributions",
      description: "Embracing a culture that is open to new ideas and contributions is integral fostering innovation, collaboration, and a dynamic user experience.",
      icon: "tabler:bulb"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "tagline": "Inside template", "title": "BeyondBrain's Blueprint: Fun Meets Functionality!", "items": [
    {
      title: "Built on top of Astro 4.0",
      description: "Benefiting from the performance and developer-friendly features of this modern static site generator."
    },
    {
      title: "Styled using Tailwind CSS",
      description: "Facilitating rapid design and consistent styling with this highly popular utility-first CSS framework."
    },
    {
      title: "Cross-browser compatibility",
      description: "Ensure your website looks and functions consistently across various web browsers, delivering a seamless experience to all users."
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Colorful Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Building on modern foundations</h3>
Gain a competitive advantage by incorporating industry leading practices
` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "High level of customization",
      description: `Tailor the template effortlessly to match your brand's identity and requirements, making your website distinct and saving you time.`
    },
    {
      title: "Multiple layout possibilities",
      description: "Explore various layout options to find the structure that best presents your content, enhancing user engagement and navigation."
    },
    {
      title: "Fully responsive design",
      description: "Ensure your website's optimal performance on various devices and screen sizes, providing a consistent and enjoyable user experience."
    },
    {
      title: "Integration of media",
      description: "Seamlessly incorporate images, videos, and multimedia elements that enhance your content and engage visitors effectively."
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2194&q=80",
    alt: "Blueprint Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`Ensure your online presence truly represents you.` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Enhanced user engagement",
      description: "Captivate your audience with interactive elements, intuitive navigation, and visually appealing layouts, encouraging longer visits."
    },
    {
      title: "Continuous improvement",
      description: "Ensure your website stays aligned with the latest trends and technologies through regular updates and enhancements."
    },
    {
      title: "Time and resource efficiency",
      description: "Skip the time-consuming process of building a website from scratch and launch your online presence sooner with BeyondBrain."
    },
    {
      title: "Community support",
      description: `Join the growing BeyondBrain community for insights, resources, and assistance, ensuring you're never alone on your web development journey.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1611462985358-60d3498e0364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Astronauts Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`Designed to foster growth and success.` })}` })}  ${renderComponent($$result2, "Steps", $$Steps, { "title": "Get your dream website up and running in no time with BeyondBrain.", "items": [
    {
      title: 'Step 1: <span class="font-medium">Download</span>',
      description: "Kickstart with GitHub! Either fork the BeyondBrain template or simply click 'Use this template'. Your canvas awaits, ready for your digital masterpiece. In just a few clicks, you've already set the foundation.",
      icon: "tabler:package"
    },
    {
      title: 'Step 2: <span class="font-medium">Add content</span>',
      description: "Pour your vision into it. Add images, text, and all that jazz to breathe life into your digital space. Remember, it's the content that tells your story, so make it captivating.",
      icon: "tabler:letter-case"
    },
    {
      title: 'Step 3: <span class="font-medium">Customize styles</span>',
      description: "Give it your personal touch. Tailor colors, fonts, and layouts until it feels just right. Your unique flair, amplified by BeyondBrain! Precision in design ensures a seamless user experience.",
      icon: "tabler:paint"
    },
    {
      title: "Ready!",
      icon: "tabler:check"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    alt: "Steps image"
  } })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Most used widgets", "subtitle": "Provides frequently used components for building websites using Tailwind CSS", "tagline": "Components", "items": [
    {
      title: "Headers",
      description: "Ever tried driving without GPS? Boom! That's why websites need headers for direction.",
      icon: "flat-color-icons:template"
    },
    {
      title: "Heros",
      description: "Picture a superhero landing \u2013 epic, right? That's the job of a Hero section, making grand entrances!",
      icon: "flat-color-icons:gallery"
    },
    {
      title: "Features",
      description: "Where websites strut their stuff and show off superpowers. No holding back on the bragging rights here!",
      icon: "flat-color-icons:approval"
    },
    {
      title: "Content",
      description: "Dive into the meat and potatoes of a site; without it, you'd just be window shopping. Content is king.",
      icon: "flat-color-icons:document"
    },
    {
      title: "Call-to-Action",
      description: `That enthusiastic friend who's always urging, "Do it! Do it!"? Yeah, that's this button nudging you towards adventure.`,
      icon: "flat-color-icons:advertising"
    },
    {
      title: "Pricing",
      description: "Behold the dessert menu of the website world. Tempting choices await, can you resist?",
      icon: "flat-color-icons:currency-exchange"
    },
    {
      title: "Testimonial",
      description: "Step into the gossip corner! Here, other visitors spill the beans and share the juicy details.",
      icon: "flat-color-icons:voice-presentation"
    },
    {
      title: "Contact",
      description: "Like a digital mailbox, but faster! Drop a line, ask a question, or send a virtual high-five. Ding! Message in.",
      icon: "flat-color-icons:business-contact"
    },
    {
      title: "Footers",
      description: "The footer's like the credits of a movie but sprinkled with easter eggs. Time to hunt!",
      icon: "flat-color-icons:database"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "title": "Find out more content in our Blog", "information": `The blog is used to display BeyondBrain documentation.
                        Each new article will be an important step that you will need to know to be an expert in creating a website using Astro + Tailwind CSS.
                        Astro is a very interesting technology. Thanks.
                ` })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Frequently Asked Questions", "subtitle": "Dive into the following questions to gain insights into the powerful features that BeyondBrain offers and how it can elevate your web development journey.", "tagline": "FAQs", "classes": { container: "max-w-6xl" }, "items": [
    {
      title: "Why BeyondBrain?",
      description: "Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels."
    },
    {
      title: "What do I need to start?",
      description: "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but it\u2019s actually our duty to future generations."
    },
    {
      title: "How to install the Astro + Tailwind CSS template?",
      description: "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows."
    },
    {
      title: "What's something that you don't understand?",
      description: "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear."
    },
    {
      title: "What is something that you would like to try again?",
      description: "A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in."
    },
    {
      title: "If you could only ask one question to each person you meet, what would that question be?",
      description: "This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked."
    }
  ] })}  ${renderComponent($$result2, "Stats", $$Stats, { "stats": [
    { title: "Downloads", amount: "132K" },
    { title: "Stars", amount: "24.8K" },
    { title: "Forks", amount: "10.3K" },
    { title: "Users", amount: "48.4K" }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      text: "Get template",
      href: "https://github.com/onwidget/BeyondBrain",
      target: "_blank",
      icon: "tabler:download"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Be very surprised by these huge fake numbers you are seeing on this page. <br class="hidden md:inline">Don't
      waste more time! :P
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Astro&nbsp;+&nbsp;<br class="block sm:hidden"><span class="sm:whitespace-nowrap">Tailwind CSS</span> ` })}` })} ` })}`;
}, "/Users/zhaokaien/workspace/netstation/src/pages/index.astro", void 0);

const $$file = "/Users/zhaokaien/workspace/netstation/src/pages/index.astro";
const $$url = "/netstation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
