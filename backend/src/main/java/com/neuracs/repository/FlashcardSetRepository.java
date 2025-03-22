
package com.neuracs.repository;

import com.neuracs.model.FlashcardSet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlashcardSetRepository extends JpaRepository<FlashcardSet, Long> {
    List<FlashcardSet> findByCategory(String category);
    List<FlashcardSet> findByDifficulty(String difficulty);
    List<FlashcardSet> findByCategoryAndDifficulty(String category, String difficulty);
}
