import BlogDetailPage from "@/components/Blog/BlogDetailPage";
import { fetchBlogBySysId, GET_BLOG_POST_BY_ID } from "@/lib/blogService";
import { Metadata } from "next";
import client from '@/lib/apolloClient';

// Meta information for the page
export const metadata: Metadata = {
  title: 'Blog Details',
  description: 'Read the full blog post',
};



export default async function BlogsDetails({ params }: { params: { id: string } }) {
  const blogDetails = await fetchBlogBySysId(params.id);

  // console.log('blogDetails', blogDetails)

  if (!blogDetails) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div>
      <h1>{blogDetails.title}</h1>
      <BlogDetailPage
        blogPost={blogDetails}
        id={""}
        title={blogDetails.title}
        description={""}
        imageUrl={""}
      />
    </div>
  );
}
