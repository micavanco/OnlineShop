package com.micavanco.olechshop.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CustomerUsernameException extends RuntimeException {

    public CustomerUsernameException(String message) {
        super(message);
    }
}
