package com.micavanco.olechshop.services;

import com.micavanco.olechshop.database.Customer;
import com.micavanco.olechshop.exceptions.CustomerUsernameException;
import com.micavanco.olechshop.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository repository;

    public Customer saveCustomer(Customer customer)
    {
        try {
            customer.setUsername(customer.getUsername().toUpperCase());
            return repository.save(customer);
        }catch (Exception e)
        {
            throw new CustomerUsernameException("Customer username '"+customer.getUsername()+"' already exists");
        }


    }

    public Customer findByUsername(String customerUsername)
    {
        Customer customer = repository.findByUsername(customerUsername.toUpperCase());

        if(customer == null)
            throw new CustomerUsernameException("Customer username '"+customerUsername+"' does not exist");


        return customer;
    }

    public Iterable<Customer> findAllCustomers()
    {
        return repository.findAll();
    }

    public void deleteCustomerByUsername(String username)
    {
        Customer customer = repository.findByUsername(username);

        if(customer == null)
            throw new CustomerUsernameException("Customer username '"+username+"' does not exist. Cannot be deleted");

        repository.delete(customer);
    }
}

