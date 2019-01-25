Feature: RMS Client

  I want to open a RMS Client page

  @focus
  Scenario: Opening a rms client page
    Given I open RMS CLient page
    Then I see "React App" in the title

  @focus
  Scenario: Opening a rms client register page
    Given I open RMS CLient register page
    When I fill fullname, username, email and password

  @focus
  Scenario: Opening a rms client login page
    Given I open RMS CLient login page
    When I fill username and password
  
  @focus
  Scenario: Opening a rms client create job page
    Given I open RMS CLient create job page