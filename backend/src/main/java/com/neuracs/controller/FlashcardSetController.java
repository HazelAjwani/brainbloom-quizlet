
package com.neuracs.controller;

import com.neuracs.dto.FlashcardSetDTO;
import com.neuracs.model.FlashcardSet;
import com.neuracs.repository.FlashcardSetRepository;
import com.neuracs.repository.UserRepository;
import com.neuracs.security.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/flashcard-sets")
public class FlashcardSetController {
    @Autowired
    private FlashcardSetRepository flashcardSetRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<FlashcardSetDTO>> getAllFlashcardSets(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String difficulty) {
        
        List<FlashcardSet> flashcardSets;
        if (category != null && difficulty != null) {
            flashcardSets = flashcardSetRepository.findByCategoryAndDifficulty(category, difficulty);
        } else if (category != null) {
            flashcardSets = flashcardSetRepository.findByCategory(category);
        } else if (difficulty != null) {
            flashcardSets = flashcardSetRepository.findByDifficulty(difficulty);
        } else {
            flashcardSets = flashcardSetRepository.findAll();
        }

        List<FlashcardSetDTO> flashcardSetDTOs = flashcardSets.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());

        return ResponseEntity.ok(flashcardSetDTOs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FlashcardSetDTO> getFlashcardSetById(@PathVariable Long id) {
        return flashcardSetRepository.findById(id)
                .map(this::convertToDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<FlashcardSetDTO> createFlashcardSet(
            @Valid @RequestBody FlashcardSetDTO flashcardSetDTO,
            Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        
        FlashcardSet flashcardSet = new FlashcardSet();
        flashcardSet.setTitle(flashcardSetDTO.getTitle());
        flashcardSet.setDescription(flashcardSetDTO.getDescription());
        flashcardSet.setCategory(flashcardSetDTO.getCategory());
        flashcardSet.setDifficulty(flashcardSetDTO.getDifficulty());
        flashcardSet.setAuthor(userRepository.findById(userDetails.getId()).orElseThrow());

        FlashcardSet savedFlashcardSet = flashcardSetRepository.save(flashcardSet);
        return ResponseEntity.ok(convertToDTO(savedFlashcardSet));
    }

    private FlashcardSetDTO convertToDTO(FlashcardSet flashcardSet) {
        FlashcardSetDTO dto = new FlashcardSetDTO();
        dto.setId(flashcardSet.getId());
        dto.setTitle(flashcardSet.getTitle());
        dto.setDescription(flashcardSet.getDescription());
        dto.setCategory(flashcardSet.getCategory());
        dto.setDifficulty(flashcardSet.getDifficulty());
        dto.setCreatedAt(flashcardSet.getCreatedAt());
        dto.setAuthorName(flashcardSet.getAuthor().getName());
        dto.setCardCount(flashcardSet.getFlashcards().size());
        return dto;
    }
}
