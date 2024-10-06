// app/blog/blogdetails.tsx
import { fetchBlogBySysId, GET_BLOG_POST_BY_ID } from '@/lib/blogService';  // Query for a single blog post
import client from '@/lib/apolloClient';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { Metadata } from 'next';
import { useSearchParams } from 'next/navigation';
import BlogDetailPage from '@/components/Blog/BlogDetailPage';

export const metadata: Metadata = {
  title: 'Blog Details - Full Post',
  description: 'Read the full blog post with in-depth insights and analysis.',
  keywords: ['blog', 'tech', 'insights', 'full post', 'Agnibyte Tech'], // Relevant keywords for SEO
  robots: 'index, follow', // SEO robots directive
  openGraph: {
    title: 'Blog Details - Agnibyte Tech',
    description: 'Explore detailed insights and analysis in our blog post.',
    url: 'https://www.agni-byte.com/blog-details', // Replace with actual blog URL
    type: 'article',
    locale: 'en_US',
    siteName: 'Agnibyte Tech',
    images: [
      {
        url: '/images/blog-favicon.png', // Replace with actual image
        alt: 'Blog thumbnail',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Details - Agnibyte Tech',
    description: 'Read the full blog post on Agnibyte Tech’s website.',
    images: 'https://www.agni-byte.com/images/blog-thumbnail.jpg', // Replace with actual image
  },
  viewport: 'width=device-width, initial-scale=1.0',
};

const Page = async ({ params }: { params: { id: string } }) => {
  const { id: blogId } = params; // Extract the blog ID from params
  let blogDetails = null;

  if (!blogId) {
    return <p>No blog ID provided.</p>;
  }

  try {
    blogDetails = await fetchBlogBySysId(blogId);

    if (!blogDetails) {
      return <p>Blog post not found.</p>;
    }

    return (
      <div className="container mx-auto px-4">
        <BlogDetailPage
          blogPost={blogDetails}
          id={blogDetails._id}
          title={blogDetails.title}
          description={blogDetails.shortDescription}
          imageUrl={blogDetails.featuredImage?.url || ""}
        />
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return <p>Error loading blog post.</p>;
  }
};

export default Page;