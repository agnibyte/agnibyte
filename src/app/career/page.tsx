import Breadcrumb from "@/components/Common/Breadcrumb";
import CareerForm from "@/components/Career/CareerForm";
import { Metadata } from "next";
import { fetchJobPosts } from "@/lib/fetchJobPosts";

export const metadata: Metadata = {
  title: "Agnibyte - Career Opportunities",
  description: "Explore exciting career opportunities at Agnibyte Tech Pvt Ltd",
};

const CareerPage = async () => {
  let jobPosts = [];

  try {
    jobPosts = await fetchJobPosts(); // Fetch job posts
  } catch (error) {
    console.error('Error fetching job posts:', error);
    // Optionally, you can set jobPosts to a default value or show an error message
  }

  return (
    <>
      <Breadcrumb
        pageName="Career Page"
        description="Join AgniByte Tech and be part of an innovative team driving future technology."
      />

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Current Openings
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
          We are always on the lookout for talented individuals to join our team.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Job Listings */}
          <div className="flex-1">
            <div className="space-y-6">
              {jobPosts.length > 0 ? (
                jobPosts.map((post) => (
                  <div key={post.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Location: {post.location}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{post.description}</p>
                    <button className="bg-primary text-white py-2 px-4 rounded hover:bg-yellow-600 dark:hover:bg-yellow-500 shadow-btn">
                      Apply Now
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600 dark:text-gray-400">No job posts available at the moment.</p>
              )}
            </div>
          </div>

          {/* Application Form */}
          <div className="flex-1">
            <CareerForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPage;
