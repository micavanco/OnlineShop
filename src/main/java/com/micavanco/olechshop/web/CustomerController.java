package com.micavanco.olechshop.web;

import com.micavanco.olechshop.database.Customer;
import com.micavanco.olechshop.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("")
    public ResponseEntity<Customer> createNewCustomer(@RequestBody Customer customer)
    {
        Customer customer1 = customerService.saveCustomer(customer);
        return new ResponseEntity<Customer>(customer, HttpStatus.CREATED);
    }
}
