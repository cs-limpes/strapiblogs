// pages/index.tsx
import type { GetStaticProps, NextPage } from 'next';
import { fetchPosts } from '../services/strapi';

const Home: NextPage<{ posts: any[] }> = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts();
  return { props: { posts } };
};

export default Home;
