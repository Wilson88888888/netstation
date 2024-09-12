import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as renderSlot, a as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_Brz_0mGH.mjs';
import { $ as $$Image } from './Image_Jgcr5UHB.mjs';
import { a as $$Button } from './PageLayout_CiKvXr2l.mjs';

const $$Astro = createAstro("https://github.com/Wilson88888888/netstation/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image"),
    id,
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"${spreadAttributes(id ? { id } : {})}> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"> ${renderSlot($$result, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(bg)}` })}` : null} `)} </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-12 md:py-20"> <div class="text-center pb-10 md:pb-16 max-w-5xl mx-auto"> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto"> ${subtitle && renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-300">${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> <div> ${image && renderTemplate`<div class="relative m-auto max-w-5xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-md w-full", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 1024, "height": 576, ...image })}`} </div>`} </div> </div> </div> </section>`;
}, "/Users/zhaokaien/workspace/netstation/src/components/widgets/Hero.astro", void 0);

export { $$Hero as $ };
