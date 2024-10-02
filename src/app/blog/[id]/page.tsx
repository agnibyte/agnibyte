import BlogDetailPage from "@/components/Blog/BlogDetailPage";
import { fetchBlogBySysId, fetchAllBlogIds } from "@/lib/blogService";
import { Metadata } from "next";

// Static metadata
export const metadata: Metadata = {
  title: 'Blog Details',
  description: 'Read the full blog post',
};

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const allBlogIds = await fetchAllBlogIds(); // Fetch all blog IDs from your service
  return allBlogIds.map((id: string) => ({ id }));
}

export default async function Page({ params }: { params: { id: string } }) {
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

//