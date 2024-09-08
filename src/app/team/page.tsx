import React from 'react';
import TeamMember from '@/components/Team/TeamMember';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { teamData } from '@/components/Team/teamData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Our Team | AgniByte Tech',
  description: 'Learn more about the talented individuals behind AgniByte Tech.',
};

const TeamPage: React.FC = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Team"
        description="Meet the dedicated professionals who drive the innovation and success of AgniByte Tech. Each team member brings unique skills and a shared vision for excellence in IT solutions."
      />
      <div className="team-page bg-gray-100 dark:bg-gray-900 min-h-screen p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Meet Our Team</h1>
        <div className="team-list">
          {teamData.map(member => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
