import BlogDetailPage from "@/components/Blog/BlogDetailPage";
import { fetchBlogBySysId } from "@/lib/blogService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog Details',
  description: 'Read the full blog post',
};

async function fetchBlogDetailsData(id: string) {
  try {
    const blogData = await fetchBlogBySysId(id);

    return blogData;
  } catch (error) {
    console.error('Failed to fetch blog data:', error);
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const blogDetails = await fetchBlogDetailsData(params.id);

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
