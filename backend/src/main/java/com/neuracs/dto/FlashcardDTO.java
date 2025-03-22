
package com.neuracs.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FlashcardDTO {
    private Long id;
    
    @NotBlank
    private String question;
    
    @NotBlank
    private String answer;
}
