Feature: Web Tables

  Scenario: The user comes to the web table and enter new data into the table
    Given The user visits demoqa.com for enter new data into the table
    When The user opens elements page for enter new data into the table
    When The user opens web table tab
    When The user checks how many rows the table have
    Then The user clicks on add button
    Then The user fill the requirements
    Then The user clicks on submit button
    Then The user checks whether new row is created or not

#  Scenario: The user comes to the broken links images tab and realize the first image is broken
#    Given The user visits demoqa.com
#    When The user opens elements page
#    When The user opens web table tab
#    When The user find the target row
#    Then The user tries to edit first and last name
#    Then The user checks whether the edit has affected or not