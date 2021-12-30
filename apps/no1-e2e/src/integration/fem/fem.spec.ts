describe('no1: Fem component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=fem--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Fem!');
    });
});
