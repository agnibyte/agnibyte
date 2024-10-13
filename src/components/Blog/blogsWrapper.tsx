import Breadcrumb from "../Common/Breadcrumb";
import BlogCard from "./BlogCard";

const BlogsWrapper = ({ blogPosts }) => {
  return (
    <>
      <Breadcrumb
        pageName="Blogs"
        description="Stay updated with the latest news and insights from Agnibyte Tech."
      />
      <div className="container mx-auto px-4 py-10">
        {/* <h1 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white">
          Our Blog
        </h1>
        <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-400">
          Stay updated with the latest news and insights from Agnibyte Tech.
        </p> */}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <>
                <BlogCard
                  key={post.sys.id}
                  id={post.sys.id}
                  title={post.title}
                  description={post.shortDescription}
                  imageUrl={post.featuredImage.url}
                  publishedDate={post.publishedDate}
                />
                {/* <Link href={`/blog/${post.sys.id}`} key={post.sys.id}>
                  <div className="cursor-pointer rounded-lg bg-white p-6 shadow-md ">
                    <Image
                      width={500}
                      height={500}
                      src={post.featuredImage.url}
                      alt={post.featuredImage.title}
                      className="mb-4 h-48 w-full rounded-lg object-cover"
                    />
                    <h2 className="mb-2 text-2xl font-bold  text-gray-700">
                      {post.title}
                    </h2>
                    <p className="mb-4 text-gray-600">
                      {post.shortDescription}
                    </p>
                    <p className="text-sm text-gray-500">
                      Published on:{" "}
                      {new Date(post.publishedDate).toLocaleDateString()}
                    </p>
                  </div>
                </Link> */}
              </>
            ))
          ) : (
            <p>No blog posts available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogsWrapper;
