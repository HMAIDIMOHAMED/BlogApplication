package blogapplication.Controller;

import blogapplication.Model.Post;
import blogapplication.Service.PostService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:4200")

public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping("/create")
    public Post createPost(@RequestBody Post post) {
        return postService.savePost(post);
    }

    @GetMapping("/all")
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @DeleteMapping("/{id}")
    public String deletePost(@PathVariable("id") Long id) {
        postService.deletePost(id);
        return "Post with ID " + id + " has been deleted";
    }

    @GetMapping("/{postId}")
    public ResponseEntity<?> getPostsById(@PathVariable Long postId) {
        try{
            Post post = postService.getPostById(postId);
            return ResponseEntity.ok(post);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    @GetMapping("/search/{name}")
    public ResponseEntity<?> getPostByName(@PathVariable String name) {
        try {
            List<Post> posts = postService.getPostByName(name);
            return ResponseEntity.ok(posts);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }



}
