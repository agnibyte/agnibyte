// src/components/Blog/BlogCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, description, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg">
      <Link href={`/blog/${id}`}>
        <a>
          <Image
            width={500}
            height={500} src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-lg">{description}</p>
        </a>
      </Link>
    </div>
  );
};

export default BlogCard;
