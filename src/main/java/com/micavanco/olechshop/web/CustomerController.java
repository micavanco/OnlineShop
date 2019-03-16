package com.micavanco.olechshop.web;

import com.micavanco.olechshop.database.Customer;
import com.micavanco.olechshop.services.CustomerService;
import com.micavanco.olechshop.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewCustomer(@Valid @RequestBody Customer customer, BindingResult result)
    {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap!=null)
            return errorMap;

        Customer customer1 = customerService.saveCustomer(customer);
        return new ResponseEntity<Customer>(customer, HttpStatus.CREATED);
    }

    @GetMapping("/{customerUsername}")
    public ResponseEntity<?> getCustomerById(@PathVariable String customerUsername)
    {
        Customer customer = customerService.findByUsername(customerUsername);

        return new ResponseEntity<Customer>(customer, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Customer> getAllCustomers()
    {
        return customerService.findAllCustomers();
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<?> deleteCustomer(@PathVariable String username)
    {
        customerService.deleteCustomerByUsername(username.toUpperCase());

        return new ResponseEntity<String>("Customer with username: '"+username+"' was deleted", HttpStatus.OK);
    }
}
