// app/blog/blogdetails.tsx
// import { GET_BLOG_POST_BY_ID } from '@/lib/blogService';  // Query for a single blog post
// import client from '@/lib/apolloClient';
// import Breadcrumb from '@/components/Common/Breadcrumb';
// import { useSearchParams } from 'next/navigation';


interface BlogDetailPageProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  pageData: object;
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ pageData, id, title, description, imageUrl }) => {

  console.log('pageData', pageData)

  //   if (!blogId) {
  //     return <p>No blog ID provided.</p>;
  //   }

  //   try {
  //     const { data } = await client.query({
  //       query: GET_BLOG_POST_BY_ID,
  //       variables: { id: blogId },  // Pass the id to fetch blog post
  //     });

  //     const blogPost = data.pageBlogPost;

  //     if (!blogPost) {
  //       return <p>Blog post not found.</p>;
  //     }

  return (
    <>
      <h1> hhiiiiiiiiiiiii</h1>
      {/* <Breadcrumb pageName={blogPost.title} description={blogPost.shortDescription} />
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
        </div> */}
    </>
  );
}

export default BlogDetailPage;
