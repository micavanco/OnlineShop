package com.micavanco.olechshop.exceptions;

public class CustomerUsernameExceptionResponse {

    private String username;

    public CustomerUsernameExceptionResponse(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
