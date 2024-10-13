import { fetchBlogs } from "@/lib/blogService";
import { Metadata } from "next";
import BlogsWrapper from "@/components/Blog/blogsWrapper";

export const metadata: Metadata = {
  title: "Blog Details - Full Post",
  description: "Read the full blog post with in-depth insights and analysis.",
  keywords: ["blog", "tech", "insights", "full post", "Agnibyte Tech"], // Relevant keywords for SEO
  robots: "index, follow", // SEO robots directive
  openGraph: {
    title: "Blog Details - Agnibyte Tech",
    description: "Explore detailed insights and analysis in our blog post.",
    url: "https://www.agni-byte.com/blog-details", // Replace with actual blog URL
    type: "article",
    locale: "en_US",
    siteName: "Agnibyte Tech",
    images: [
      {
        url: "/images/blog-favicon.png", // Replace with actual image
        alt: "Blog thumbnail",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Details - Agnibyte Tech",
    description: "Read the full blog post on Agnibyte Tech’s website.",
    images: "https://www.agni-byte.com/images/", // Replace with actual image
  },
  viewport: "width=device-width, initial-scale=1.0",
};

const BlogListPage = async () => {
  const [data] = await Promise.all([fetchBlogs()]);

  const blogPosts = data.pageBlogPostCollection.items || [];

  return (
    <>
      <BlogsWrapper blogPosts={blogPosts} />
    </>
  );
};

export default BlogListPage;
