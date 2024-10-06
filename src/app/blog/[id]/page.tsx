import BlogDetailPage from '@/components/Blog/BlogDetailPage';
import { fetchBlogBySysId, fetchBlogs } from '@/lib/blogService';
import { Metadata } from 'next';

// Static metadata (can also be dynamic as needed)
export const metadata: Metadata = {
  title: 'Blog Details - Full Post',
  description: 'Read the full blog post with in-depth insights and analysis.',
  keywords: ['blog', 'tech', 'insights', 'full post', 'Agnibyte Tech'],
  robots: 'index, follow',
  openGraph: {
    title: 'Blog Details - Agnibyte Tech',
    description: 'Explore detailed insights and analysis in our blog post.',
    url: 'https://www.agni-byte.com/blog-details',
    type: 'article',
    locale: 'en_US',
    siteName: 'Agnibyte Tech',
    images: [
      {
        url: '/images/blog-favicon.png',
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
    images: 'https://www.agni-byte.com/images/blog-thumbnail.jpg',
  },
  viewport: 'width=device-width, initial-scale=1.0',
};

// Define static params for all blog posts to be pre-generated
export async function generateStaticParams() {
  const [allBlogs] = await Promise.all([fetchBlogs()]);

  return allBlogs.pageBlogPostCollection.items.map((blog: { sys: { id: any; }; }) => ({
    slug: blog.sys.id,
  }))
}

// Blog page component
const BlogPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  let blogDetails = null;

  try {
    blogDetails = await fetchBlogBySysId(id); // Fetch blog post by ID
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }

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
};

export default BlogPage;
