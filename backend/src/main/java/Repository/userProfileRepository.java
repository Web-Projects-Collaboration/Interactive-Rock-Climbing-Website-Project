package Repository;

import DTO.UserDTO;
import Entities.userProfileEntity;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface userProfileRepository extends JpaRepository<userProfileEntity, String> {
}
