/* empty css                          */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_4abeffe9.mjs';
import 'html-escaper';
import { g as getReviews, $ as $$Main, a as $$H1, b as $$Image, c as $$Layout } from './_slug__c26c53d7.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const posts = await getReviews();
  if (!posts || posts.length === 0) {
    throw new Error(`No posts found`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bloggerk" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Bloggerk" })} ${maybeRenderHead()}<div class="grid grid-cols-2 gap-x-16 gap-y-14 max-md:grid-cols-1 mb-16"> ${posts.map((post) => renderTemplate`<article${addAttribute(post.slug, "key")} class="card rounded-lg shadow-xl overflow-hidden"> ${renderComponent($$result3, "Image", $$Image, { "src": post.image, "alt": post.slug, "width": "600", "height": "500", "class": "w-full h-56 object-cover rounded-t-lg" })} <div class="p-4"> <h2 class="text-3xl font-semibold leading-tight"> <a${addAttribute(`/blog/${post.slug}`, "href")}> ${post.title} </a> </h2> <p class="text-gray-500 mb-2"> ${post.date} </p> <a${addAttribute(`/blog/${post.slug}`, "href")} class="inline-block mt-2 font-semibold text-teal-800">
Read More
</a> </div> </article>`)} </div> ` })} ` })}`;
}, "/Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/src/pages/blog.astro", void 0);

const $$file = "/Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
