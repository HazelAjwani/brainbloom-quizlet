
package com.neuracs.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FlashcardSetDTO {
    private Long id;
    
    @NotBlank
    private String title;
    
    private String description;
    
    @NotBlank
    private String category;
    
    @NotBlank
    private String difficulty;
    
    private LocalDateTime createdAt;
    
    private String authorName;
    
    private int cardCount;
    
    private List<FlashcardDTO> flashcards;
}
