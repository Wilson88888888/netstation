import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from './astro/server_Brz_0mGH.mjs';
import 'kleur/colors';
import { $ as $$WidgetWrapper } from './WidgetWrapper_D5Uti-Hj.mjs';
import { $ as $$Headline } from './Headline_DOqSaGr4.mjs';
import { a as $$Button } from './PageLayout_CiKvXr2l.mjs';

const $$Astro = createAstro("https://github.com/Wilson88888888/netstation/");
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    actions = await Astro2.slots.render("actions"),
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600"> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "mb-0 md:mb-0",
    title: "text-4xl md:text-4xl font-bold tracking-tighter mb-4 font-heading",
    subtitle: "text-xl text-muted dark:text-slate-400"
  } })} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 mt-6"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result2, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })} </div>`) : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ` })}`;
}, "/Users/zhaokaien/workspace/netstation/src/components/widgets/CallToAction.astro", void 0);

export { $$CallToAction as $ };
