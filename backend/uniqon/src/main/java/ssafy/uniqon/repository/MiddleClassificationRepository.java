package ssafy.uniqon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ssafy.uniqon.controller.CollectionsController;
import ssafy.uniqon.model.MainClassifications;
import ssafy.uniqon.model.MiddleClassifications;

public interface MiddleClassificationRepository extends JpaRepository<MiddleClassifications, Integer> {

    CollectionsController.middleAnimalInfoWebResponse findById (int middleClassificationId);
}
