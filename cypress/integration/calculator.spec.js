// http://127.0.0.1:5501/index.html

beforeEach(() => {
    cy.visit("/index.html")
})

describe('should display calculator', () => {

    it('should show the calculator on screen',() => {
        // ARRANGE -- GET THINGS READY
        // ACT -- DOING IT
        // ASSERT -- SEEING IF IT IS WHAT YOU WANT IT TO BE
        // PASS IN A CSS SELECTOR
        //ACT + ASSERT
        cy.get(".calculator").should("exist");
    });
    
    it('should show all 21 calculator buttons', () => {    
        cy.get("button").should('have.length', 21);
    })

})

// DO SOMETHING -- SIMULATE A USER USING THE CALCULATOR.


// POSITIVE TEST CASES -> USER BEHAVES AS INTENDED
// - ADDITION?

describe('should handle addition', () => {
    it('should calculate single digit addition, 7 + 8 = 15', () => {
        // cy.get('specific class').click()
        // cy.get('[value='value']').click()
        cy.get('button').contains('7').click()
        cy.get('button').contains('+').click()
        cy.get('button').contains('8').click()
        cy.get('button').contains('=').click()
        // can use target icon on dashboard
        cy.get('#answer').should('have.text', 15)
    })
})
// - SUBTRACTION?
describe('should handle subtraction', () => {
    it('should calculate single digit subtraction, 8 - 6 = 15', () => {
        cy.get('button').contains('8').click()
        cy.get('button').contains('-').click()
        cy.get('button').contains('7').click()
        cy.get('button').contains('=').click()
        cy.get('#answer').should('have.text', 1)
    })
})
// - DIVISION?
describe('should handle division', () => {
    it('should calculate single digit division, 8 / 2 = 4', () => {
        cy.get('button').contains('8').click()
        cy.get('button').contains('/').click()
        cy.get('button').contains('2').click()
        cy.get('button').contains('=').click()
        cy.get('#answer').should('have.text', 4)
    })
})
// - MULTIPLICATION?
describe('should handle multiplication', () => {
    it('should calculate single digit multiplication, 8 * 2 = 16', () => {
        cy.get('button').contains('8').click()
        cy.get('button').contains('*').click()
        cy.get('button').contains('2').click()
        cy.get('button').contains('=').click()
        cy.get('#answer').should('have.text', 16)

    })
})


// NEGATIVE CASES -> NOT GOING TO PLAN 

// NEGATIVE TEST CASES -> NOT GOING TO PLAN

// - PRESSING BUTTONS OUT ORDER

// //  - OPERATOR AT THE START

it('should return 0 when an operator is inputted before any number', () => {
    cy.get(':nth-child(8)').click()
    cy.get('#user-input').should('have.text', '')
    cy.get('#answer').should('have.text', 0)
})

// - PRESSING OPERATOR TWICE
describe("shouldn't allow two operators to be pressed on after another", () => {
   it(''), () => {

    cy.get(':nth-child(8)').click()
    cy.get(':nth-child(8)').click()
    cy.get('#user-input').should('have.text', '')
}})
// - MULTIPLE DECIMAL POINTS
// - DIVIDE BY 0?
// - BIG NUMBERS?