import Container from "components/container";
import Meta from "components/meta";
import PostHeader from "components/post-header";
import Posts from "components/posts";
import { getAllCategories, getAllPostsByCategory } from "lib/api";
import { getPlaiceholder } from "plaiceholder";

//ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/contents";

//@ts-expect-error
export default function Category({ name, posts }) {
    return (
        <Container>
            <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
            <PostHeader title={name} subtitle="Blog Category" />
            <Posts posts={posts} />
        </Container>
    );
}

export async function getStaticPaths() {
    const allCats = await getAllCategories();
    return {
        //@ts-expect-error
        paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
        fallback: false,
    };
}

//@ts-expect-error
export async function getStaticProps(context) {
    const catSlug = await context.params.slug;

    const allCats = await getAllCategories();
    //@ts-expect-error
    const cat = allCats.find(({ slug }) => slug === catSlug);

    const posts = await getAllPostsByCategory(cat.id);

    for (const post of posts) {
        if (!post.hasOwnProperty("eyecatch")) {
            post.eyecatch = eyecatchLocal;
        }
        const { base64 } = await getPlaiceholder(post.eyecatch.url);
        post.eyecatch.blurDataURL = base64;
    }

    return {
        props: {
            name: cat.name,
            posts: posts,
        },
    };
}
