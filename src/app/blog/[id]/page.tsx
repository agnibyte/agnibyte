import BlogDetailPage from '@/components/Blog/BlogDetailPage';
import { fetchBlogBySysId, fetchBlogs } from '@/lib/blogService';
import { Metadata } from 'next';

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

export async function generateStaticParams() {
  const [allBlogs] = await Promise.all([fetchBlogs()]);
  
  return allBlogs.pageBlogPostCollection.items.map((blog: { sys: { id: any; }; }) => ({
    slug: blog.sys.id,
  }))
}
export default async function Page({ params }) {

  const { id } = params;
  const [blogDetails] = await Promise.all([fetchBlogBySysId(id)]);

  if (!blogDetails) {
    <p>Blog post not found.</p>
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
}
