import { fetchBlogBySysId, fetchBlogs } from '@/lib/blogService';  // Query for a single blog post
import Breadcrumb from '@/components/Common/Breadcrumb';


export async function generateStaticParams() {

  const [allBlogs] = await Promise.all([
    fetchBlogs(),
  ]);

  console.log('allBlogs', allBlogs.pageBlogPostCollection.items)
  let blogsArr = []
  if (allBlogs.pageBlogPostCollection.items.length > 0) {
    blogsArr = allBlogs.pageBlogPostCollection.items

  }

  return blogsArr.map((blog) => ({
    id: blog.sys.id.toString(),
  }))
}

interface blogDetailsProps {
  params: { id: string };
}

export default async function BlogDetailPage({ params }: blogDetailsProps) {
  const blogPost = await fetchBlogBySysId(params.id);


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
    </>);
}