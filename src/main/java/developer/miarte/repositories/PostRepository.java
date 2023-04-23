package developer.miarte.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import developer.miarte.models.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

}
