
import { TypePageBlogPostSkeleton } from "@/types";
import { client } from '@/lib/contentful/client';
import ListPosts from "@/components/post/ListPosts";

export default async function Blog() {
  const res = await client.withoutUnresolvableLinks.getEntries<TypePageBlogPostSkeleton>({ content_type: 'pageBlogPost' });

  const items = res.items.map((item)=> {
    return {
      ...item,
      fields: {
        ...item.fields,
        relatedBlogPosts: []
      }
    }
  });
  
  return <ListPosts entries={items}></ListPosts>;
}