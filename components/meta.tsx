import Head from "next/head";

// サイトに関する情報
import { siteMeta } from "lib/contents";
import { useRouter } from "next/router";
const { siteTitle, siteDesc, siteUrl, siteLang, siteLocale, siteType, siteIcon } = siteMeta;

//汎用OGP画像
import siteImg from "images/ogp.jpg";

export default function Meta({ pageTitle, pageDesc, pageImg, pageImgW, pageImgH }: any) {
    // ページの説明
    const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
    const desc = pageDesc ?? siteDesc;

    // ページのURL
    const rooter = useRouter();
    const url = `${siteUrl}${rooter.asPath}`;

    //OGP画像
    const img = pageImg || siteImg.src;
    const imgW = pageImgW || siteImg.width;
    const imgH = pageImgH || siteImg.height;
    const imgUrl = img.startsWith("https") ? img : `${siteUrl}${img}`;

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />

            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />

            <link rel="canonical" href={url} />
            <meta property="og:url" content={url} />

            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:type" content={siteType} />
            <meta property="og:locale" content={siteLocale} />

            <link rel="icon" href={siteIcon} />
            <link rel="apple-touch-icon" href={siteIcon} />

            <meta property="og:image" content={imgUrl} />
            <meta property="og:image:width" content={imgW} />
            <meta property="og:image:height" content={imgH} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
}
