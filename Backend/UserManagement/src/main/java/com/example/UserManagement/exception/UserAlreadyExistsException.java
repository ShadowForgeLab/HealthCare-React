package com.example.UserManagement.exception;

public class UserAlreadyExistsException extends RuntimeException {
    public UserAlreadyExistsException(String s) {
        super(s);
    }
}
