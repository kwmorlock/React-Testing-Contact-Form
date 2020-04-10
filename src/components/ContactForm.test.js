import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test('Testing to see if inputs are visible', () => {
    const {getByTestId} = render (<ContactForm/>)
    getByTestId("firstName")
    getByTestId("lastName")
    getByTestId("email")
    getByTestId("message")
})

// test('Confirming max length of first name test fails', async () => {
//     const {getByText, findByText} = render (<ContactForm/>)
//     const firstNameInput = getByText(/First Name/i)
//     fireEvent.change(firstNameInput, { target: { value: 'Meo' } });
//     // fireEvent.blur(firstNameInput);
//    expect(await findByText(/maxLength/i)).toBeTheInDocument();

// });


test("Testing to see if a valid email was emailed you get what Im saying", () => {
    const {getByLabelText, getByText} = render(<ContactForm/>);
    const emailInput = getByLabelText(/email/i); 
    fireEvent.change.apply(emailInput, {target:{value:"@"}});

})

test('first name input max length fail meow', () => {
    const {getByTestId} = render(<ContactForm/>)
    const firstNameInput = getByTestId("firstName")
    fireEvent.change(firstNameInput,{target:{value:'Meow'} });
    expect(firstNameInput.value).toBe('Meow');

    fireEvent.click(getByTestId("submit")
   
});
