import client from '@/lib/apolloClient';
import { GET_BLOG_POST_IDS } from './queries';

export async function fetchAllBlogIds() {
  const { data } = await client.query({
    query: GET_BLOG_POST_IDS, // Query that only returns blog post IDs
  });

  return data.pageBlogPostCollection.items.map((post) => post.sys.id);
}
