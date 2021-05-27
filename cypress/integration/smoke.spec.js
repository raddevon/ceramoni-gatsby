describe('Smoke Test', () => {
  it('can view the home page', () => {
    cy.visit('/');
    cy.contains('Home');
  });
  it('can view the roots page', () => {
    cy.visit('/roots/');
    cy.contains('Roots');
  });
  it('can view the menu page', () => {
    cy.visit('/menu/');
    cy.contains('Menu');
  });
  it('can view the browse [items] page', () => {
    cy.visit('/items/');
    cy.contains('Browse');
  });
  it('can view the consultations page', () => {
    cy.visit('/consultations/');
    cy.contains('Consultations');
  });
  it('can view the 404 page', () => {
    cy.visit('/404/');
    cy.contains('Sorry');
  });
  it('can view the stone index page', () => {
    cy.visit('/stone-index/');
    cy.contains('Stone');
  });
});
