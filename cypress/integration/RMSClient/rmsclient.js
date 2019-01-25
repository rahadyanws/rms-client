import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000/';

Given('I open RMS CLient page', () => {
  cy.visit(url)
})

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})

Given('I open RMS CLient register page', () => {
  cy.visit(url + 'signup')
})

When('I fill fullname, username, email and password', () => { 
  
  cy.get('input[name="name"]').type('User Testing');
  cy.get('input[name="username"]').type('usertest');
  cy.get('input[name="email"]').type('usertest@site.com');
  cy.get('input[name="password"]').type('123456');
  cy.get('button[type="submit"]').click();
})

Given('I open RMS CLient login page', () => {
  cy.visit(url + 'login')
})

When('I fill username and password', () => { 
  cy.get('input[name="usernameOrEmail"]').type('rahadyanws');
  cy.get('input[name="password"]').type('123456');
  cy.get('button[type="submit"]').click();
})

Given('I open RMS CLient create job page', () => {
  cy.visit(url + 'job/new')
})