package com.micavanco.olechshop.repositories;

import com.micavanco.olechshop.database.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {

    @Override
    Iterable<Customer> findAllById(Iterable<Long> iterable);
}
