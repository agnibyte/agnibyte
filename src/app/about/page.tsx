import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AgniByte Tech | Innovative IT Solutions",
  description: "Learn more about AgniByte Tech Pvt Ltd, a dynamic company founded by technology enthusiasts offering cutting-edge IT solutions with a focus on accessibility, innovation, and affordability.",
  keywords: ["AgniByte Tech", "About Us", "IT Solutions", "Innovation", "Technology", "Affordable IT", "Tech company", "Cloud services", "Web hosting"],
  robots: "index, follow",
  openGraph: {
    title: "About AgniByte Tech | Innovative IT Solutions",
    description: "Discover the story of AgniByte Tech Pvt Ltd, a company that delivers innovative, affordable, and top-tier IT solutions in cloud services, web hosting, and more.",
    url: "https://www.agni-byte.com/about-us", // Replace with actual URL
    type: "website",
    locale: "en_US",
    siteName: "AgniByte Tech Pvt Ltd",
    images: [
      {
        url: "https://www.agni-byte.com/images/about-page-thumbnail.jpg", // Replace with actual image
        alt: "AgniByte Tech Team",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About AgniByte Tech | Innovative IT Solutions",
    description: "Learn more about AgniByte Tech, a leading provider of IT solutions that prioritizes innovation and affordability.",
    images: "https://www.agni-byte.com/images/about-page-thumbnail.jpg", // Replace with actual image
  },
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://www.agni-byte.com/about-us",
    languages: {
      "en-US": "https://www.agni-byte.com/about-us",
      "fr-FR": "https://www.agni-byte.com/fr/a-propos", // Example for French localization
    },
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About AgniByte"
        description="AgniByte Tech Pvt Ltd was founded by friends with a shared passion for technology and diverse backgrounds in computer science and 
        electronics. Their dream was to create a company that offered top-notch IT solutions while remaining accessible and affordable. From their humble beginnings, they built a startup driven by innovation and a 
        commitment to excellence. Today, with over a decade of experience, we continue to uphold the vision and values that started it all."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
