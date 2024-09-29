import { gql } from '@apollo/client';
import client from './apolloClient'; // Assuming apolloClient is already set up

// Query for fetching all blog posts
export const GET_BLOG_POSTS = gql`
  query PageBlogPostCollection {
    pageBlogPostCollection {
      total
      items {
        _id
        title
        shortDescription
        featuredImage {
          url
        }
        sys {
          id
        }
        publishedDate
      }
    }
  }
`;
export const fetchBlogs = async () => {
  try {
    const { data } = await client.query({
      query: GET_BLOG_POSTS,
    });

    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Query for fetching a single blog post by ID
export const GET_BLOG_POST_BY_ID = gql`
  query PageBlogPost($id: String!) {
    pageBlogPost(id: $id) {
      _id
      internalName
      slug
      publishedDate
      title
      shortDescription
      featuredImage {
        url
        title
      }
    }
  }
`;
export const fetchBlogBySysId = async (id: string) => {
  try {
    const { data } = await client.query({
      query: GET_BLOG_POST_BY_ID,
      variables: { id },
    });

    return data.pageBlogPost || null;
  } catch (error) {
    console.error('Error fetching blog post by sys.id:', error);
    return null;
  }
};