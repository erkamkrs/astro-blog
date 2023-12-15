import qs from "qs";

const CMS_URL = 'http://localhost:1337';

export async function getFeaturedReview() {
    const reviews = await getReviews();
    return reviews[0];
}

export async function getReview(slug) {
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


  export async function getReviews() {
    const { data } = await fetchReviews({
      fields: ['slug', 'title', 'date', 'body'],
      populate: { image: { fields: ['url'] } },
      sort: ['date:desc'],
      pagination: { pageSize: 10 },
    });
    return data.map(toReview);
}

export async function getSlugs() {
    const { data } = await fetchReviews({
      fields: ['slug'],
      sort: ['date:desc'],
      pagination: { pageSize: 100 },
    });
    return data.map((item) => item.attributes.slug);
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


