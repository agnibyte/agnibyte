import Image from "next/image";
import Breadcrumb from "../Common/Breadcrumb";

interface BlogDetailPageProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  blogPost: {
    featuredImage?: {
      url?: string;
      title?: string;
    };
    shortDescription: string;
    content: string;
    publishedDate: string;
  };
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  blogPost,
  id,
  title,
  description,
  imageUrl,
}) => {
  // Destructure content and handle undefined properties
  const { featuredImage, shortDescription, content, publishedDate } = blogPost;

  console.log('blogPost:', blogPost);

  return (
    <>
      <Breadcrumb pageName={title} description={description} />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">{title}</h1>

        {featuredImage?.url && (
          <Image
            width={500}
            height={500}
            src={featuredImage.url}
            alt={featuredImage?.title || "Blog Image"}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
        )}

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{shortDescription}</p>

        <div className="prose dark:prose-dark">{content}</div>

        {publishedDate && (
          <p className="text-sm text-gray-500">
            Published on: {new Date(publishedDate).toLocaleDateString()}
          </p>
        )}
      </div>
    </>
  );
};

export default BlogDetailPage;
