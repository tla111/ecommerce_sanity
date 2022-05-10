import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: "8w895cck",
    dataset: "production",
    apiVersion: "2022-05-10",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});