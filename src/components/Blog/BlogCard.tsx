import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  publishedDate: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  publishedDate,
}) => {
  return (
    <div className="cursor-pointer rounded-lg bg-white p-6 shadow-md hover:shadow-lg">
      <Link href={`/blog/${id}`}>
        <Image
          width={500}
          height={500}
          src={imageUrl}
          alt={title}
          className="mb-4 h-56 w-full rounded-lg object-cover"
        />
        <h2 className="mb-2 text-2xl font-bold  text-gray-700">{title}</h2>
        <p className="mb-4 text-gray-600">{description}</p>
        <p className="text-sm text-gray-500">
          Published on: {new Date(publishedDate).toLocaleDateString()}
        </p>
      </Link>
    </div>
  );
};

export default BlogCard;
