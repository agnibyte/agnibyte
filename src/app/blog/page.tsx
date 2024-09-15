//logic author Vikas Borage

import { gql } from '@apollo/client';
import client from 'src/lib/apolloClient.js'; // Adjust the path based on your file structure
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Agnibyte - Blog",
  description: "Read the latest insights and updates from Agnibyte Tech Pvt Ltd",
};


const GET_BLOG_POSTS = gql`
  query PageBlogPostCollection {
    pageBlogPostCollection {
      total
      skip
      limit
      items {
        _id
        title
        shortDescription
        featuredImage {
          url
          title
          description
        }
      }
    }
  }
`;

const BlogPage = async () => {
  const { data } = await client.query({
    query: GET_BLOG_POSTS,
  });

  const blogPosts = data.pageBlogPostCollection.items || [];

  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Explore our latest posts and updates on technology and innovation."
      />

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
              <div key={post._id} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={post.featuredImage.url}
                  alt={post.featuredImage.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.shortDescription}</p>
              </div>
            ))
          ) : (
            <p>No blog posts available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;



/*
// const GET_BLOG_POSTS = gql`
//   query PageBlogPost {
//     pageBlogPost(id: "5JDZzK5zitv6nAf4hdJIqU") {
//       _id
//       internalName
//       slug
//       publishedDate
//       title
//       shortDescription
//       featuredImage {
//         title
//         description
//         contentType
//         fileName
//         size
//         url
//         width
//         height
//       }
//     }
//   }
// `;

// const BlogPage = async () => {
//   const { data } = await client.query({
//     query: GET_BLOG_POSTS,
//   });

//   const blogPosts = data.pageBlogPost ? [data.pageBlogPost] : []; // Ensure blogPosts is an array

//   return (
//     <>
//       <Breadcrumb
//         pageName="Blog"
//         description="Explore our latest posts and updates on technology and innovation."
//       />

//       <div className="container mx-auto px-4 py-10">
//         <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
//           Our Blog
//         </h1>
//         <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
//           Stay updated with the latest news and insights from Agnibyte Tech.
//         </p>

//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="flex-1">
//             <div className="space-y-6">
//               {blogPosts.length > 0 ? (
//                 blogPosts.map((post) => (
//                   <div key={post._id} className="bg-white p-6 rounded-lg shadow-md">
//                     <div className="mb-4">
//                       <img
//                         src={post.featuredImage.url}
//                         alt={post.featuredImage.title}
//                         className="w-full h-auto rounded-lg"
//                       />
//                       <p className="text-sm text-gray-500">
//                         {post.featuredImage.description}
//                       </p>
//                     </div>

//                     <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
//                     <p className="text-lg mb-4">{post.shortDescription}</p>

//                     <p className="text-sm text-gray-500">
//                       Published on: {new Date(post.publishedDate).toLocaleDateString()}
//                     </p>

//                     <div className="text-sm text-gray-400 mt-4">
//                       <p>Image Information:</p>
//                       <ul>
//                         <li>File Name: {post.featuredImage.fileName}</li>
//                         <li>Content Type: {post.featuredImage.contentType}</li>
//                         <li>Size: {(post.featuredImage.size / 1024).toFixed(2)} KB</li>
//                         <li>Dimensions: {post.featuredImage.width}x{post.featuredImage.height}</li>
//                       </ul>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p>No blog posts available.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };*/
