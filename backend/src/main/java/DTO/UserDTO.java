package DTO;

import jakarta.validation.constraints.NotNull;

public record UserDTO() {

    @NotNull(message = "Non-null username required")
    static String username;

    @NotNull(message = "Non-null username email")
    static String email;

    @NotNull(message = "Non-null password required")
    static String password;

}
