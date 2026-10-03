package Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class userProfileEntity {
    @Id
    static String username;

    static String email;

    static String password;
}
