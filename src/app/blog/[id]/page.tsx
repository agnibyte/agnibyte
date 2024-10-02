import BlogDetailPage from "@/components/Blog/BlogDetailPage";
import { fetchBlogBySysId } from "@/lib/blogService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog Details',
  description: 'Read the full blog post',
};

export default async function Page({ params }: { params: { id: string } }) {
  const blogDetails = await fetchBlogBySysId(params.id);

  if (!blogDetails) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div>
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
