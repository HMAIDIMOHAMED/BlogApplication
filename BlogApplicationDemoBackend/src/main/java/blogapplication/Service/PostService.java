package blogapplication.Service;


import blogapplication.Model.Post;
import blogapplication.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;


    public Post savePost(Post post){
        post.setLikeCount(0);
        post.setViewCount(0);
        post.setDate(new Date());

        return postRepository.save(post);
    }

    public List<Post> getAllPosts(){
        return postRepository.findAll();
    }

    public void deletePost(Long id){
        postRepository.deleteById(id);
    }
  public Post getPostById(Long id) {
      Optional<Post> optionalPost = postRepository.findById(id);
      if (optionalPost.isPresent()) {
          Post post = optionalPost.get();
          post.setViewCount(post.getViewCount() +1);
          return postRepository.save(post);
      }
      return null;



  }
    public List<Post> getPostByName(String name) {
        return postRepository.findByNameContaining(name);
    }
}
