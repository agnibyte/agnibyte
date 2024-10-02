import BlogDetailPage from "@/components/Blog/BlogDetailPage";
import { fetchBlogBySysId } from "@/lib/blogService"; // assuming you have a function to fetch all blog IDs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog Details',
  description: 'Read the full blog post',
};

export async function generateStaticParams() {


}

export default async function BlogsDetails({ params }: { params: { id: string } }) {
  const blogDetails = await fetchBlogBySysId(params.id);

  if (!blogDetails) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div>
      <h1>{blogDetails.title}</h1>
      <BlogDetailPage
        blogPost={blogDetails}
        id={blogDetails._id}
        title={blogDetails.title}
        description={blogDetails.shortDescription}
        imageUrl={blogDetails.featuredImage?.url || ""}
      />
    </div>
  );
}
