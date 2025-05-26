import { featuredPost, posts } from '@/lib/post';
import FeaturedPost from '@/components/FeaturedPost';
import PostCard from '@/components/PostCard';
const NewsList = () => {
    return ( 
        <div>
      {/* Featured Post */}
      <FeaturedPost
        id={featuredPost.id} // اضافه کردن id
        title={featuredPost.title}
        excerpt={featuredPost.excerpt}
        image={featuredPost.image}
      />

      {/* Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            date={post.date}
          />
        ))}
      </div>
    </div>
     );
}
 
export default NewsList;