package br.com.ssd.common;

import org.springframework.web.bind.annotation.ExceptionHandler;

public class AbstractController {

    private String message;

    @ExceptionHandler(RuntimeException.class)
    public ControllerResponse handleAppExceptions(RuntimeException exception) {
        addMessage(exception.getMessage());
        return response(null);
    }

    protected ControllerResponse response(Object content) {
        ControllerResponse response = new ControllerResponse();
        response.setMessage(getMessage());
        response.setData(content);
        response.setMessage(getMessage());

        this.clearMessage();

        return response;
    }

    protected void addMessage(String message) {
        this.message = message;
    }

    private String getMessage() {
        return this.message;
    }

    private void clearMessage() {
        this.message = null;
    }

}
