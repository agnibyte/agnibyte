//logic author Vikas Borage
// app/blog/bloglist.tsx
import { GET_BLOG_POSTS } from '@/lib/blogService'; // Query to get all blog posts
import client from '@/lib/apolloClient';
import Link from 'next/link';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agnibyte - Blog',
  description: 'Explore our latest posts and updates on technology and innovation.',
};

const BlogListPage = async () => {
  const { data } = await client.query({
    query: GET_BLOG_POSTS,
  });

  const blogPosts = data.pageBlogPostCollection.items || []; // Ensure blogPosts is an array

  return (
    <>
      <Breadcrumb pageName="Blog" description="Explore our latest posts." />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Our Blog
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
          Stay updated with the latest news and insights from Agnibyte Tech.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <Link href={`/blog/blogdetails?id=${post.sys.id}`} key={post.sys.id}>
                <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer">
                  <img
                    src={post.featuredImage.url}
                    alt={post.featuredImage.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.shortDescription}</p>
                  <p className="text-sm text-gray-500">
                    Published on: {new Date(post.publishedDate).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p>No blog posts available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogListPage;
