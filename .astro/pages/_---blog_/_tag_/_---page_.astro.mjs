import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_Brz_0mGH.mjs';
import 'kleur/colors';
import { a as blogTagRobots, c as getStaticPathsBlogTag } from '../../../chunks/blog_DVXIG-_V.mjs';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_CiKvXr2l.mjs';
import { $ as $$Headline, a as $$List, b as $$Pagination } from '../../../chunks/Pagination_ZOdQKhhl.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://github.com/Wilson88888888/netstation/");
const prerender = true;
const getStaticPaths = async ({ paginate }) => {
  return await getStaticPathsBlogTag({ paginate });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page, tag } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `Posts by tag '${tag.title}'${currentPage > 1 ? ` \u2014 Page ${currentPage} ` : ""}`,
    robots: {
      index: blogTagRobots?.index,
      follow: blogTagRobots?.follow
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, {}, { "default": ($$result3) => renderTemplate`Tag: ${tag.title}` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} </section> ` })}`;
}, "/Users/zhaokaien/workspace/netstation/src/pages/[...blog]/[tag]/[...page].astro", void 0);

const $$file = "/Users/zhaokaien/workspace/netstation/src/pages/[...blog]/[tag]/[...page].astro";
const $$url = "/netstation/[...blog]/[tag]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
