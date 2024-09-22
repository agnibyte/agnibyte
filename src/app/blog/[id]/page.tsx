import BlogDetailPage from "@/components/Blog/BlogDetailPage";
import { GET_BLOG_POST_BY_ID } from "@/lib/blogService";
import { Metadata } from "next";
import client from '@/lib/apolloClient';

// Meta information for the page
export const metadata: Metadata = {
  title: 'Blog Details',
  description: 'Read the full blog post',
};

async function getBlogDetails(id: string) {
  // const res = await client.query({
  //   query: GET_BLOG_POST_BY_ID,
  //   variables: { id: id },
  // })
  // console.log('res', res)
  // if (!id) {
  //   return <p>No blog ID provided.</p>;
  // }

  const { data } = await client.query({
    query: GET_BLOG_POST_BY_ID,
    variables: { id: id },
  });
  console.log('data', data)
  const blogPost = data.pageBlogPost;

  if (!blogPost) {
    return <p>Blog post not found.</p>;
  }


}

// Component that fetches and displays the blog details
export default async function BlogsDetails({ params }: { params: { id: string } }) {
  const blogDetails = await getBlogDetails(params.id);

  return (
    <div>
      {/* <h1>{blogDetails.title}</h1>
      <BlogDetailPage pageData={blogDetails} id={""} title={""} description={""} imageUrl={""} /> */}
    </div>
  );
}
