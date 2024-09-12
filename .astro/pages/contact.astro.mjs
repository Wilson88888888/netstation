import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from '../chunks/astro/server_Brz_0mGH.mjs';
import 'kleur/colors';
import { a as $$Button, $ as $$PageLayout } from '../chunks/PageLayout_CiKvXr2l.mjs';
import { $ as $$HeroText } from '../chunks/HeroText_B3b2G2lR.mjs';
import { $ as $$Headline } from '../chunks/Headline_DOqSaGr4.mjs';
import { $ as $$WidgetWrapper } from '../chunks/WidgetWrapper_D5Uti-Hj.mjs';
import { $ as $$Features2 } from '../chunks/Features2_w6hmVP73.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://github.com/Wilson88888888/netstation/");
const $$Form = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Form;
  const { inputs, textarea, disclaimer, button = "Contact us", description = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form> ${inputs && inputs.map(
    ({ type = "text", name, label = "", autocomplete = "on", placeholder = "" }) => name && renderTemplate`<div class="mb-6"> ${label && renderTemplate`<label${addAttribute(name, "for")} class="block text-sm font-medium"> ${label} </label>`} <input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(name, "id")}${addAttribute(autocomplete, "autocomplete")}${addAttribute(placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"> </div>`
  )} ${textarea && renderTemplate`<div> <label for="textarea" class="block text-sm font-medium"> ${textarea.label} </label> <textarea id="textarea"${addAttribute(textarea.name ? textarea.name : "message", "name")}${addAttribute(textarea.rows ? textarea.rows : 4, "rows")}${addAttribute(textarea.placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"></textarea> </div>`} ${disclaimer && renderTemplate`<div class="mt-3 flex items-start"> <div class="flex mt-0.5"> <input id="disclaimer" name="disclaimer" type="checkbox" class="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"> </div> <div class="ml-3"> <label for="disclaimer" class="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400"> ${disclaimer.label} </label> </div> </div>`} ${button && renderTemplate`<div class="mt-10 grid"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "type": "submit" }, { "default": ($$result2) => renderTemplate`${button}` })} </div>`} ${description && renderTemplate`<div class="mt-3 text-center"> <p class="text-sm text-gray-600 dark:text-gray-400">${description}</p> </div>`} </form>`;
}, "/Users/zhaokaien/workspace/netstation/src/components/ui/Form.astro", void 0);

const $$Astro = createAstro("https://github.com/Wilson88888888/netstation/");
const $$Contact$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact$1;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    inputs,
    textarea,
    disclaimer,
    button,
    description,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${inputs && renderTemplate`${maybeRenderHead()}<div class="flex flex-col max-w-xl mx-auto rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 sm:p-6 lg:p-8 w-full"> ${renderComponent($$result2, "FormContainer", $$Form, { "inputs": inputs, "textarea": textarea, "disclaimer": disclaimer, "button": button, "description": description })} </div>`}` })}`;
}, "/Users/zhaokaien/workspace/netstation/src/components/widgets/Contact.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Contact"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Contact", "title": "Let's Connect!" })} ${renderComponent($$result2, "ContactUs", $$Contact$1, { "id": "form", "title": "Drop us a message today!", "subtitle": "For quicker answers, explore our FAQs section. You may find the solution you're looking  for right there! If not, our support team is delighted to help you.", "inputs": [
    {
      type: "text",
      name: "name",
      label: "Name"
    },
    {
      type: "email",
      name: "email",
      label: "Email"
    }
  ], "textarea": {
    label: "Message"
  }, "disclaimer": {
    label: "By submitting this contact form, you acknowledge and agree to the collection of your personal information."
  }, "description": "Our support team typically responds within 24 business hours." })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "We are here to help!", "items": [
    {
      title: "General support",
      description: `Chat with us for inquiries related to account management, website navigation, payment issues, accessing purchased templates or general questions about the website's functionality.`
    },
    {
      title: "Contact sales",
      description: "Chat with us for questions about purchases, customization options, licensing for commercial use, inquiries about specific template, etc."
    },
    {
      title: "Technical support",
      description: "Chat with us when facing issues like template installation, problems editing difficulties, compatibility issues with software or download errors, or other technical challenges related to using the templates."
    },
    {
      title: "Phone",
      description: "+1 (234) 567-890",
      icon: "tabler:headset"
    },
    {
      title: "Email",
      description: "contact@support.com",
      icon: "tabler:mail"
    },
    {
      title: "Location",
      description: "1234 Lorem Ipsum St, 12345, Miami, EEUU",
      icon: "tabler:map-pin"
    }
  ] })} ` })}`;
}, "/Users/zhaokaien/workspace/netstation/src/pages/contact.astro", void 0);

const $$file = "/Users/zhaokaien/workspace/netstation/src/pages/contact.astro";
const $$url = "/netstation/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
