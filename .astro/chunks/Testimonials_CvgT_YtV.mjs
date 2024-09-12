import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from './astro/server_Brz_0mGH.mjs';
import 'kleur/colors';
import { $ as $$Headline } from './Headline_DOqSaGr4.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_D5Uti-Hj.mjs';
import { a as $$Button } from './PageLayout_CiKvXr2l.mjs';
import { $ as $$Image } from './Image_Jgcr5UHB.mjs';

const $$Astro = createAstro("https://github.com/Wilson88888888/netstation/");
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    testimonials = [],
    callToAction,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${testimonials && testimonials.map(({ title: title2, testimonial, name, job, image }) => renderTemplate`<div class="flex h-auto"> <div class="flex flex-col p-4 md:p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600"> ${title2 && renderTemplate`<h2 class="text-lg font-medium leading-6 pb-4">${title2}</h2>`} ${testimonial && renderTemplate`<blockquote class="flex-auto"> <p class="text-muted">" ${testimonial} "</p> </blockquote>`} <hr class="border-slate-200 dark:border-slate-600 my-4"> <div class="flex items-center"> ${image && renderTemplate`<div class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600 min-w-full min-h-full", "width": 40, "height": 40, "widths": [400, 768], "layout": "fixed", ...image })}`} </div>`} <div class="grow ml-3 rtl:ml-0 rtl:mr-3"> ${name && renderTemplate`<p class="text-base font-semibold">${name}</p>`} ${job && renderTemplate`<p class="text-xs text-muted">${job}</p>`} </div> </div> </div> </div>`)} </div> ${callToAction && renderTemplate`<div class="flex justify-center mx-auto w-fit mt-8 md:mt-12 font-medium"> ${renderComponent($$result2, "Button", $$Button, { ...callToAction })} </div>`}` })}`;
}, "/Users/zhaokaien/workspace/netstation/src/components/widgets/Testimonials.astro", void 0);

export { $$Testimonials as $ };
