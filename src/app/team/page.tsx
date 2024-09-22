import React from 'react';
import TeamMember from '@/components/Team/TeamMember';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { teamData } from '@/components/Team/teamData';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Our Team | AgniByte Tech',
  description: 'Learn more about the talented individuals behind AgniByte Tech. Meet the professionals who drive innovation and excellence in IT solutions.',
  keywords: ['AgniByte Tech', 'team', 'IT professionals', 'tech team', 'innovation', 'IT solutions'],
  robots: 'index, follow',
  openGraph: {
    title: 'Meet Our Team | AgniByte Tech',
    description: 'Get to know the talented professionals who power AgniByte Tech’s IT solutions.',
    url: 'https://www.agni-byte.com/our-team', // Update with actual team page URL
    type: 'website',
    locale: 'en_US',
    siteName: 'AgniByte Tech',
    images: [
      {
        url: 'https://www.agni-byte.com/images/team-page-thumbnail.jpg', // Replace with actual image
        alt: 'AgniByte Tech Team',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Our Team | AgniByte Tech',
    description: 'Explore the dynamic professionals driving success at AgniByte Tech.',
    images: 'https://www.agni-byte.com/images/team-page-thumbnail.jpg', // Replace with actual image
  },
  viewport: 'width=device-width, initial-scale=1.0',
};

const TeamPage: React.FC = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Team"
        description="Meet the dedicated professionals who drive the innovation and success of AgniByte Tech. Each team member brings unique skills and a shared vision for excellence in IT solutions."
      />
      <div className="team-page bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white animate-fade-in-up">
          Meet Our Team
        </h1>
        <div className="team-list bg-gray-100 dark:bg-gray-900">
          {teamData.map(member => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
