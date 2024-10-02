// src/app/blog/[id]/page.tsx
import BlogDetailPage from "@/components/Blog/BlogDetailPage";
import { fetchBlogs, fetchBlogBySysId } from "@/lib/blogService";
import { Metadata } from "next";

// Static Params generation for dynamic routes
export async function generateStaticParams() {
  const data = await fetchBlogs(); // Fetch all blogs
  const allBlogs = data.pageBlogPostCollection.items; // Extract the items array

  if (!Array.isArray(allBlogs)) {
    console.error('Expected an array, but got:', allBlogs);
    return []; // Return an empty array or handle the error appropriately
  }

  return allBlogs.map((blog: { _id: string }) => ({
    params: { id: blog._id } // Extract blog IDs for the dynamic route
  }));
}

// Default export of the page component
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
