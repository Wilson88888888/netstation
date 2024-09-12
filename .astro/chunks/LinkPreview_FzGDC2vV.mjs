import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML, m as maybeRenderHead, b as addAttribute } from './astro/server_Brz_0mGH.mjs';
import 'kleur/colors';
/* empty css                         */
/* empty css                                 */
/* empty css                                                               */
/* empty css                         */
import 'clsx';
import { parseHTML } from 'linkedom';
import './LinkPreview_astro_astro_type_style_index_0_lang.3c694fd8_l0sNRNKZ.mjs';

const $$Astro$3 = createAstro("https://github.com/Wilson88888888/netstation/");
const $$Tweet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Tweet;
  const { id } = Astro2.props;
  async function fetchTweet(id2) {
    try {
      const oembedUrl = new URL("https://publish.twitter.com/oembed");
      oembedUrl.searchParams.set("url", id2);
      oembedUrl.searchParams.set("omit_script", "true");
      oembedUrl.searchParams.set("dnt", "true");
      return await fetch(oembedUrl).then((res) => res.json());
    } catch (e) {
      console.error(
        `[error]  astro-embed
         ${e.status} - ${e.statusText}: Failed to fetch tweet ${id2}`
      );
    }
  }
  const tweet = await fetchTweet(id);
  return renderTemplate`${tweet && renderTemplate`${renderComponent($$result, "astro-embed-tweet", "astro-embed-tweet", {}, { "default": () => renderTemplate`${unescapeHTML(tweet.html)}` })}`}`;
}, "/Users/zhaokaien/workspace/netstation/node_modules/@astro-community/astro-embed-twitter/Tweet.astro", void 0);

const urlPattern$1 = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|shorts\/)??([A-Za-z0-9-_]{11})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
function matcher$1(url) {
  const match = url.match(urlPattern$1);
  return match?.[3];
}

const $$Astro$2 = createAstro("https://github.com/Wilson88888888/netstation/");
const $$YouTube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$YouTube;
  const {
    id,
    poster,
    posterQuality = "default",
    title,
    ...attrs
  } = Astro2.props;
  const idRegExp = /^[A-Za-z0-9-_]+$/;
  function extractID(idOrUrl) {
    if (idRegExp.test(idOrUrl)) return idOrUrl;
    return matcher$1(idOrUrl);
  }
  const videoid = extractID(id);
  const posterFile = {
    max: "maxresdefault",
    high: "sddefault",
    default: "hqdefault",
    low: "default"
  }[posterQuality] || "hqdefault";
  const posterURL = poster || `https://i.ytimg.com/vi/${videoid}/${posterFile}.jpg`;
  const href = `https://youtube.com/watch?v=${videoid}`;
  return renderTemplate`${renderComponent($$result, "lite-youtube", "lite-youtube", { "videoid": videoid, "title": title, "data-title": title, ...attrs, "style": `background-image: url('${posterURL}');` }, { "default": () => renderTemplate` ${maybeRenderHead()}<a${addAttribute(href, "href")} class="lty-playbtn"> <span class="lyt-visually-hidden">${attrs.playlabel}</span> </a> ` })}  `;
}, "/Users/zhaokaien/workspace/netstation/node_modules/@astro-community/astro-embed-youtube/YouTube.astro", void 0);

class LRU extends Map {
  constructor(maxSize) {
    super();
    this.maxSize = maxSize;
  }
  get(key) {
    const value = super.get(key);
    if (value) this.#touch(key, value);
    return value;
  }
  set(key, value) {
    this.#touch(key, value);
    if (this.size > this.maxSize) this.delete(this.keys().next().value);
    return this;
  }
  #touch(key, value) {
    this.delete(key);
    super.set(key, value);
  }
}
const formatError = (...lines) => lines.join("\n         ");
const safeGet = makeSafeGetter((res) => res.json());
const safeGetDOM = makeSafeGetter(
  async (res) => parseHTML(await res.text()).document
);
function makeSafeGetter(handleResponse, { cacheSize = 1e3 } = {}) {
  const cache = new LRU(cacheSize);
  return async function safeGet2(url) {
    try {
      const cached = cache.get(url);
      if (cached) return cached;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(
          formatError(
            `Failed to fetch ${url}`,
            `Error ${response.status}: ${response.statusText}`
          )
        );
      const result = await handleResponse(response);
      cache.set(url, result);
      return result;
    } catch (e) {
      console.error(formatError(`[error]  astro-embed`, e?.message ?? e));
      return void 0;
    }
  };
}

const urlPattern = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:vimeo\.com)\/(\d{1,20})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
function matcher(url) {
  const match = url.match(urlPattern);
  return match?.[3];
}

const $$Astro$1 = createAstro("https://github.com/Wilson88888888/netstation/");
const $$Vimeo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Vimeo;
  const {
    id,
    poster,
    posterQuality = "default",
    params = "",
    playlabel = "Play",
    style,
    ...attrs
  } = Astro2.props;
  const idRegExp = /^\d+$/;
  function extractID(idOrUrl) {
    if (idRegExp.test(idOrUrl)) return idOrUrl;
    return matcher(idOrUrl);
  }
  const videoid = extractID(id);
  let posterURL = poster;
  if (!posterURL) {
    const data = await safeGet(`https://vimeo.com/api/v2/video/${videoid}.json`);
    const resolution = { max: 1280, high: 640, default: 480, low: 120 }[posterQuality] || 480;
    const { thumbnail_large } = data?.[0] || {};
    if (thumbnail_large.endsWith("d_640")) {
      posterURL = thumbnail_large.slice(0, -3) + resolution;
    } else {
      posterURL = thumbnail_large;
    }
  }
  let [searchString, t] = params.split("#t=");
  const searchParams = new URLSearchParams(searchString);
  if (!t) t = searchParams.get("t");
  searchParams.append("autoplay", "1");
  if (!searchParams.has("dnt")) searchParams.append("dnt", "1");
  const color = searchParams.get("color");
  const styles = [];
  if (style) styles.push(style);
  if (color) styles.push(`--ltv-color: #${color}`);
  if (posterURL) styles.push(`background-image: url('${posterURL}')`);
  return renderTemplate`${renderComponent($$result, "lite-vimeo", "lite-vimeo", { "data-id": videoid, "data-t": t, "data-params": searchParams.toString(), "style": styles.join(";"), ...attrs }, { "default": () => renderTemplate` ${maybeRenderHead()}<a class="ltv-playbtn"${addAttribute(`https://vimeo.com/${videoid}`, "href")}${addAttribute(playlabel, "aria-label")}></a> ` })} `;
}, "/Users/zhaokaien/workspace/netstation/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro", void 0);

const getContent = (el) => el?.getAttribute("content");
const urlOrNull = (url) => url?.slice(0, 8) === "https://" ? url : null;
async function parseOpenGraph(pageUrl) {
  const html = await safeGetDOM(pageUrl);
  if (!html) return;
  const getMetaProperty = (prop) => getContent(html.querySelector(`meta[property=${JSON.stringify(prop)}]`));
  const getMetaName = (name) => getContent(html.querySelector(`meta[name=${JSON.stringify(name)}]`));
  const title = getMetaProperty("og:title") || html.querySelector("title")?.textContent;
  const description = getMetaProperty("og:description") || getMetaName("description");
  const image = urlOrNull(
    getMetaProperty("og:image:secure_url") || getMetaProperty("og:image:url") || getMetaProperty("og:image")
  );
  const imageAlt = getMetaProperty("og:image:alt");
  const video = urlOrNull(
    getMetaProperty("og:video:secure_url") || getMetaProperty("og:video:url") || getMetaProperty("og:video")
  );
  const videoType = getMetaProperty("og:video:type");
  const url = urlOrNull(
    getMetaProperty("og:url") || html.querySelector("link[rel='canonical']")?.getAttribute("href")
  ) || pageUrl;
  return { title, description, image, imageAlt, url, video, videoType };
}

const $$Astro = createAstro("https://github.com/Wilson88888888/netstation/");
const $$LinkPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkPreview;
  const { id } = Astro2.props;
  const meta = await parseOpenGraph(id);
  const domain = meta?.url ? new URL(meta.url).hostname.replace("www.", "") : "";
  return renderTemplate`${meta && meta.title ? renderTemplate`${maybeRenderHead()}<article${addAttribute([
    "link-preview",
    {
      "link-preview--has-video": meta.video && meta.videoType,
      "link-preview--no-media": !(meta.video && meta.videoType || meta.image)
    }
  ], "class:list")} data-astro-cid-ztfdmrby><div class="link-preview__content" data-astro-cid-ztfdmrby><header data-astro-cid-ztfdmrby><a class="link-preview__title"${addAttribute(id, "href")} data-astro-cid-ztfdmrby>${meta.title}</a>${" "}${domain && renderTemplate`<small class="link-preview__domain" data-astro-cid-ztfdmrby>${domain}</small>`}</header><small class="link-preview__description" data-astro-cid-ztfdmrby>${meta.description}</small></div>${meta.video && meta.videoType ? renderTemplate`<video controls preload="metadata" width="1200" height="630" data-astro-cid-ztfdmrby><source${addAttribute(meta.video, "src")}${addAttribute(meta.videoType, "type")} data-astro-cid-ztfdmrby></video>` : meta.image && renderTemplate`<img${addAttribute(meta.image, "src")}${addAttribute(meta.imageAlt || "", "alt")} width="1200" height="630" data-astro-cid-ztfdmrby>`}</article>` : renderTemplate`<div class="link-preview link-preview--no-metadata" data-astro-cid-ztfdmrby><a${addAttribute(id, "href")} data-astro-cid-ztfdmrby>${id}</a></div>`}`;
}, "/Users/zhaokaien/workspace/netstation/node_modules/@astro-community/astro-embed-link-preview/LinkPreview.astro", void 0);

export { $$YouTube as $, $$Tweet as a, $$Vimeo as b };
