import { writeFileSync } from "fs";
import qs from "qs";

const url = 'https://astroblog-cms.onrender.com/api/reviews/' 
+ '?' + qs.stringify({
    filters: {slug: { $eq: 'angel-di-maria-benfica-dazzling-display'}},
    fields: ['slug', 'title', 'date', 'body'],
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