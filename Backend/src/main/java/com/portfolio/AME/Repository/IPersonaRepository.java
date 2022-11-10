
package com.portfolio.AME.Repository;

import com.portfolio.AME.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository   
public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
} 

