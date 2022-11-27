import parse from "html-react-parser";
import Image from "next/image";

// @ts-expect-error
export default function ConvertBody({ contentHTML }) {
    const contentReact = parse(contentHTML, {
        replace: (node) => {
            // @ts-expect-error
            if (node.name === "img") {
                // @ts-expect-error
                const { src, alt, width, height } = node.attribs;
                return (
                    <Image
                        layout="responsive"
                        src={src}
                        width={width}
                        height={height}
                        alt={alt}
                        sizes="(min-width: 768px) 768px, 100vw"
                    />
                );
            }
        },
    });
    return <>{contentReact}</>;
}
