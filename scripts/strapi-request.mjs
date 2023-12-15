import { writeFileSync } from "fs";
import qs from "qs";

const url = 'http://localhost:1337/api/reviews/' 
+ '?' + qs.stringify({
    filters: {slug: { $eq: 'joselus-resurgence-from-overlooked-to-center-stage'}},
    fields: ['slug', 'title', 'date'],
    populate: { image: { fields: ['url'] } },
    sort : 'date:desc',
    pagination: {pageSize: 1, withCount: false}
    }, { encodeValuesOnly: true});

console.log('url', url);
const response = await fetch(url);
const body = await response.json(); 
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-response.json';   
writeFileSync(file, formatted, 'utf8');