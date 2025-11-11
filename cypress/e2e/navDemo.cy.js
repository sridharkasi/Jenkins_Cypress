describe('Example site multi-page flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Actions page typing', () => {
	cy.log('🔍 Navigating to Actions page');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');

    cy.get('.action-email')
      .type('user@example.com')
      .should('have.value', 'user@example.com');
  });

  it('Querying page + counts', () => {
	cy.log('🔍 Navigating to Querying page');
	cy.wait(5000)
    cy.contains('get').click();
	cy.wait(5000)
    cy.url().should('include', '/commands/querying');

    cy.get('#query-btn').should('contain', 'Button');
    //cy.get('.well>button').its('length').should('be.gte', 3);
  });

  it('Traversal + Window pages', () => {
	cy.log('🔍 Navigating to Traversal page')
	cy.wait(5000);
  //cy.contains('Traversal').click();
  cy.contains('Traversal').click({ force: true });

	cy.wait(6000)
  cy.url().should('include', '/commands/traversal');
  cy.get('.traversal-breadcrumb').should('contain', 'Home');

  cy.contains('window').click();
	cy.wait(5000)
    cy.url().should('include', '/commands/window');
    cy.document().its('title').should('include', 'Cypress');
  });
});
