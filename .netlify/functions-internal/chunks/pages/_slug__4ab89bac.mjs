import '@astrojs/internal-helpers/path';
/* empty css                          */import 'html-escaper';
import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, j as renderHead, k as renderSlot } from '../astro_4abeffe9.mjs';
import 'clsx';
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_4e9dcefe.mjs';
import qs from 'qs';

const $$Astro$8 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/node_modules/astro/components/Image.astro", void 0);

const $$Astro$7 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between items-center px-24 py-12 max-sm:px-5 max-sm:py-10 max-w-7xl w-full mx-auto"> <a href="/" class="flex justify between gap-x-4"> <img src="/heartbeat.png" alt="rhythm nation logo"${addAttribute(64, "width")}${addAttribute(64, "height")} class="w-16"> </a> <p class=" text-3xl text-zinc-900">BLOGGERK
</p><ul class="flex gap-x-8 text-xl font-bold"> <li> <a href="/blog" class="text-teal-900 ">Blog</a> </li> <li> <a href="/contact" class="text-teal-900">Contact</a> </li> </ul> </header>`;
}, "/Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/src/components/Header.astro", void 0);

const $$Astro$5 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="flex justify-between items-center px-12 py-6 max-sm:px-5 max-sm:py-10 max-w-7xl w-full mx-auto"> <a href="/" class="flex justify between gap-x-4"> <img src="/heartbeat.png" alt="rhythm nation logo"${addAttribute(64, "width")}${addAttribute(64, "height")} class="w-16"> </a> <p class=" text-3xl text-zinc-900">Made by Erkam Kiris 2023.</p> </footer>`;
}, "/Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/src/components/Footer.astro", void 0);

const $$Astro$4 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate", handleForms } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${handleForms ? renderTemplate`<meta name="astro-view-transitions-forms" content="true">` : ""}`;
}, "/Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "A community of music producers and enthusiats",
    image = "./images/band.jpg"
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta property="og:image"${addAttribute(image, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$H1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$H1;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-6xl text-teal-900 font-bold mb-16">${text}</h1>`;
}, "/Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/src/components/H1.astro", void 0);

const $$Astro$1 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`${maybeRenderHead()}<main class="px-24 max-w-7xl mx-auto mx-full max-sm:px-5 "> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/src/components/Main.astro", void 0);

const CMS_URL = 'https://astroblog-cms.onrender.com/';

async function getReview(slug) {
    const { data } = await fetchReviews({
      filters: { slug: { $eq: slug } },
      fields: ['slug', 'title', 'date', 'body'],
      populate: { image: { fields: ['url'] } },
      pagination: { pageSize: 1, withCount: false },
    });
    const item = data[0];
    const plainTextBody = convertRichTextToPlainText(item.attributes.body);

    return {
      ...toReview(item),
      body: plainTextBody,
    };
}


  async function getReviews() {
    const { data } = await fetchReviews({
      fields: ['slug', 'title', 'date', 'body'],
      populate: { image: { fields: ['url'] } },
      sort: ['date:desc'],
      pagination: { pageSize: 10 },
    });
    return data.map(toReview);
}


  async function fetchReviews(parameters) {
    const url = `${CMS_URL}/api/reviews?`
      + qs.stringify(parameters, { encodeValuesOnly: true });
    console.log('[fetchReviews]:', url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`CMS returned ${response.status} for ${url}`);
    }
    return await response.json();
}

function toReview(item) {
    const { attributes } = item;

    // Since image data is an array, access the first item's url
    let imageUrl = '/path/to/default/image'; // Default image URL if none is provided
    if (attributes.image && attributes.image.data.length > 0) {
        imageUrl = CMS_URL + attributes.image.data[0].attributes.url;
    }

    return {
      slug: attributes.slug,
      title: attributes.title,
      date: attributes.date,
      image: imageUrl,
    };
}

function convertRichTextToPlainText(richText) {
    return richText.map(element => {
        if (element.type === 'paragraph') {
            return element.children.map(child => child.text).join(' ');
        }
        // Handle other types like 'heading', 'list', etc., if needed
    }).join('\n'); // Separate paragraphs with a newline
}

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getReview(slug);
  if (!post) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": post.title })} ${renderComponent($$result3, "Image", $$Image, { "src": post.image, "alt": post.slug, "width": 1024, "height": 768, "class": "rounded-2xl shadow-xl mb-4 aspect-thumbnail object-cover" })} ${maybeRenderHead()}<div class="text-xl text-teal-900 font-bold mb-4"> <p>${post.date}</p> </div> <div class="prose prose-2xl overflow-visible relative mb-20"> <div>${post.body}</div> </div> ` })} ` })}`;
}, "/Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Main as $, _slug_ as _, $$H1 as a, $$Image as b, $$Layout as c, getReviews as g, imageConfig as i };
