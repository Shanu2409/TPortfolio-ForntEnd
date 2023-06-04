import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "vsaun101",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (src) => builder.image(src);
