package Endpoints;

import DTO.UserDTO;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
@RequestMapping("/user")
public class userProfilesController {

    @PostMapping("/create-user")
    @ResponseStatus(HttpStatus.CREATED)
    public void createUserProfile (@RequestBody UserDTO user) {

    }
}
