/* empty css                          */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_4abeffe9.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Main, a as $$H1, c as $$Layout } from './_slug__4ab89bac.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Rythm Nation" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Contact Us" })} ${maybeRenderHead()}<div class="mb-4"> <h2 class="text-lg font-bold mb-2">Email</h2> <p>erkamkiris@com</p> </div> <div class="mb-4"> <h2 class="text-lg font-bold mb-2">Address</h2> <p>Zaragoza, Spain</p> </div> <div class="mb-4"> <h2 class="text-lg font-bold mb-2">Phone Number</h2> <p>+34641963864</p> </div> <div class="mb-4"> <h2 class="text-lg font-bold mb-2">Socials</h2> <ul style="display: flex; gap: 10px;"> <li><a href="https://twitter.com/erkamkiris" style="font-weight: bold;">Twitter</a></li> <li><a href="https://instagram.com/erkamkiris" style="font-weight: bold;">Instagram</a></li> <li><a href="https://github.com/erkamkrs" style="font-weight: bold;">Github</a></li> </ul> </div> ` })} ` })}`;
}, "/Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/src/pages/contact.astro", void 0);

const $$file = "/Users/muhammedkiris/Desktop/code/demos/astro-blog-fcc/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
