Feature: Broken links images

  Scenario: The user comes to the broken links images tab and realize the first image is broken
    Given The user visits demoqa.com for checking broken images tab
    When The user opens elements page for checking broken images tab
    Then The user opens broken images tab
    Then The user realize first image is broken