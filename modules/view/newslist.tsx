import { featuredPost, posts } from '@/lib/post';
import FeaturedPost from '@/components/FeaturedPost';
import PostCard from '@/components/PostCard';
import { Post } from '@/types';

type NewsListProps = {
  posts: Post[];
  featuredPost: Post;
};

const NewsList = ({ posts, featuredPost }: NewsListProps) => {
    return ( 
        <div>
      {/* Featured Post */}
      <FeaturedPost
        id={featuredPost.id}  
        title={featuredPost.title}
        excerpt={featuredPost.excerpt}
        image={featuredPost.images[0]?.images || '/default-image.jpg'}
      /> 

      {/* Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            image={post.images[0]?.images || '/default-image.jpg'}
            date={post.created_at.toLocaleDateString()}
          />
        ))}
      </div>
    </div>
     );
}
 
export default NewsList;