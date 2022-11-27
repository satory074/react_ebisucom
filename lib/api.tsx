import { createClient } from "microcms-js-sdk";

export const client = createClient({
    // @ts-expect-error
    serviceDomain: process.env.SERVICE_DOMAIN,
    // @ts-expect-error
    apiKey: process.env.API_KEY,
});

export async function getPostBySlug(slug: any) {
    try {
        const post = await client.get({
            endpoint: "blogs",
            queries: { filters: `slug[equals]${slug}` },
        });

        return post.contents[0];
    } catch (err) {
        console.log("-- getPostBySlug --");
        console.log(err);
    }
}
