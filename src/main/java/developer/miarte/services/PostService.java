package developer.miarte.services;

import java.util.List;

import org.springframework.stereotype.Service;

import developer.miarte.models.Post;
import developer.miarte.repositories.PostRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class PostService {
    
    private PostRepository postRepository;
    
    
    @Transactional
    public List<Post> findAll() {
        return postRepository.findAll();
    }


    @Transactional
    public Post findById(Long id) {
        return postRepository.findById(id).orElseThrow();

    }

    @Transactional
    public Post save(Post post) {
        return postRepository.save(post);
    }

    @Transactional
    public void deleteById(Long id) {
        Post postDelete = findById(id);
        postRepository.deleteById(postDelete.getId());
    }
    
    @Transactional
    public Post updatePost(Long id, Post postDetails){
        Post post = findById(id);
        post.setName(postDetails.getName());
        post.setDescription(postDetails.getDescription());
        return save(post);
    }
    
}
