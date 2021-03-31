import React from 'react'
import { Container, FormButton, FormContent, FormH1, FormInput, FormLabel,FormWrap,Icon,Form } from './SigninElements'

const SignIn = () => {
    return (
        <>
         <Container>
             <FormWrap>
                 <Icon to = "/">car</Icon>
                 <FormContent>
                     <Form action="#">
                         <FormH1>Book your car</FormH1>
                         <FormLabel htmlFor='for'>Name</FormLabel>
                         <FormInput type='name' required />
                         <FormLabel htmlFor='for'>Email</FormLabel>
                         <FormInput type='email' required />
                         <FormLabel htmlFor='for'>Number</FormLabel>
                         <FormInput type='number' required />
                         <FormLabel htmlFor='for'>Pick-up</FormLabel>
                         <FormInput type='pick-up' required />
                         <FormLabel htmlFor='for'>Return</FormLabel>
                         <FormInput type='return' required />
                         <FormLabel htmlFor='for'>Date</FormLabel>
                         <FormInput type='date' required />
                         <FormButton type="submit">Book</FormButton>
                     </Form>
                 </FormContent>
             </FormWrap>
        </Container>   
        </>
    )
}

export default SignIn
