// app/blog/blogdetails.tsx
import { GET_BLOG_POST_BY_ID } from '@/lib/blogService';  // Query for a single blog post
import client from '@/lib/apolloClient';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { Metadata } from 'next';
import { useSearchParams } from 'next/navigation';

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

const BlogDetailPage = async () => {
  const searchParams = useSearchParams();
  const blogId = searchParams.get('id'); // Extract the id from the query string

  if (!blogId) {
    return <p>No blog ID provided.</p>;
  }

  try {
    const { data } = await client.query({
      query: GET_BLOG_POST_BY_ID,
      variables: { id: blogId },  // Pass the id to fetch blog post
    });

    const blogPost = data.pageBlogPost;

    if (!blogPost) {
      return <p>Blog post not found.</p>;
    }

    return (
      <>
        <Breadcrumb pageName={blogPost.title} description={blogPost.shortDescription} />
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">{blogPost.title}</h1>
          <img
            src={blogPost.featuredImage.url}
            alt={blogPost.featuredImage.title}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{blogPost.shortDescription}</p>
          <div className="prose dark:prose-dark">{blogPost.content}</div>
          <p className="text-sm text-gray-500">Published on: {new Date(blogPost.publishedDate).toLocaleDateString()}</p>
        </div>
      </>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return <p>Error loading blog post.</p>;
  }
};

export default BlogDetailPage;
