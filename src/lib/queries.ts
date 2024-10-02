import { gql } from '@apollo/client';

// Define and export the query to fetch blog post IDs
export const GET_BLOG_POST_IDS = gql`
  query GetBlogPostIds {
    blogPosts {
      sys {
        id
      }
    }
  }
`;
