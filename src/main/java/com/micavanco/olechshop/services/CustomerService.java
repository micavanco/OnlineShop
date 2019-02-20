package com.micavanco.olechshop.services;

import com.micavanco.olechshop.database.Customer;
import com.micavanco.olechshop.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository repository;

    public Customer saveCustomer(Customer customer)
    {
        return repository.save(customer);
    }
}
