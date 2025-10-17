Feature: User Login

    Feature Description: As a user I want to be able to login to the application

    Background:
        Given I am on the login page

    Scenario: Successful login with valid credentials
        When I enter login email "john.doe@abv.bg"
        And I enter login password "123123"
        And I submit the login form
        Then I should see a success message "Login Successful!"
