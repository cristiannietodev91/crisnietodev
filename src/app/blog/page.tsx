import BlogCard from "@/components/card/BlogCard";
import { TypeComponentAuthorSkeleton, TypePageBlogPostSkeleton } from "../../../@types/generated";
import { client } from "../../lib/contentful/client";
import ListPosts from "@/components/post/ListPosts";

export default async function Blog() {
  const res = await client.getEntries<TypePageBlogPostSkeleton>({ content_type: 'pageBlogPost' });

  return <ListPosts entries={[]}></ListPosts>;
}