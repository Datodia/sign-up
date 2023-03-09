import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from 'styled-components'
import Test from './Test';
import { useEffect, useState } from 'react';


interface Data {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const Form = () => {
    const [show, setShow] = useState<boolean>(false)
    const [showThank, setShowThank] = useState<boolean>(false)

    const schema = Yup.object().shape({
        firstName: Yup.string().required('First Name cannot be empty').matches(/^[a-zA-Z]+$/, 'Name Should be only letters'),
        lastName: Yup.string().required('Last Name cannot be empty').matches(/^[a-zA-Z]+$/, 'Last Name Should be only letters'),
        email: Yup.string().email('Looks like this is not an email').required('Email cannot be a empty'),
        password: Yup.string().required('Password cannot be an empty').min(3, "min characters are 4 characters").max(20, "max caracters are 20")
    })

    type FormData = Yup.InferType<typeof schema>;

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });



    const onSubmit = (data: Data) => {
        if (data) {
            setShow(true)
            setShowThank(true)
            setTimeout(() => {
                setShow(false);
            }, 5000);
        } else {
            setShow(false)

        }
    }



    return (
        <>

            {!showThank ?
                <Container>
                    <Button>
                        <BtnTxt><span style={{ fontWeight: '700' }}>Try it free 7 days</span> then $20/mo. thereafter</BtnTxt>
                    </Button>

                    <FormDiv onSubmit={handleSubmit(onSubmit)} >

                        <Input
                            style={{
                                border: errors?.firstName?.message && '2px solid var(--red)',
                                backgroundImage: errors?.firstName?.message && 'url(assets/error.png)'
                            }}
                            type={'text'}
                            placeholder="First Name"
                            {...register("firstName")}
                        />
                        <Error>{errors?.firstName?.message}</Error>
                        <Input
                            style={{
                                border: errors?.lastName?.message && '2px solid var(--red)',
                                backgroundImage: errors?.lastName?.message && 'url(assets/error.png)'
                            }}
                            type={'text'}
                            placeholder="Last Name"
                            {...register('lastName')}
                        />
                        <Error>{errors.lastName?.message}</Error>
                        <Input
                            style={{
                                border: errors?.email?.message && '2px solid var(--red)',
                                backgroundImage: errors?.email?.message && 'url(assets/error.png)'
                            }}
                            type="email"
                            placeholder='Email'
                            {...register('email')}
                        />
                        <Error>{errors?.email?.message}</Error>
                        <Input
                            style={{
                                border: errors?.password?.message && '2px solid var(--red)',
                                backgroundImage: errors?.password?.message && 'url(assets/error.png)'
                            }}
                            type="password"
                            placeholder='Password'
                            {...register('password')}
                        />
                        <Error>{errors?.password?.message}</Error>
                        <Submit type="submit" value='CLAIM YOUR FREE TRIAL' />
                        <Terms>By clicking the button, you are agreeing to our <span style={{ color: 'var(--red)', fontWeight: '700' }}>Terms and Services</span></Terms>
                    </FormDiv>
                </Container> :
                <Thank>Thank you</Thank>}
            <Test show={show} />
        </>
    )
}

const Container = styled.div`
    width: 100%;
`

const FormDiv = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    padding: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 24px 0;
    background-color: var(--white);
    box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
    border-radius: 10px; 

    @media screen and (min-width: 900px){
        height: 550px;
        margin: 0;
    }
`

const BtnTxt = styled.h3`
    margin: 0;
    font-size: 16px;
    color: white;
    text-align: center;
`

const Button = styled.div`
    margin-top: 30px;
    padding:  0 52px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 88px;
    background-color: var(--violet);
    box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
    border-radius: 10px;
    @media screen and (min-width: 900px){
        margin-bottom: 24px;
        justify-content: center;
    }
`

const Input = styled.input`
    width: 100%;
    height: 56px;
    margin-top: 16px;
    border: 1px solid #DEDEDE;
    border-radius: 5px;
    font-size: 14px;
    padding: 0 20px;
    background-repeat: no-repeat;
    background-position: 95% center;
`
const Submit = styled(Input)`
    background-color: var(--green);
    color: var(--white);
`

const Error = styled.h3`
    font-size: 11px;
    color: var(--red);
    padding:10px 0 0 100px;
    @media screen and (min-width: 900px){
        padding: 10px 0 0 270px;
    }
`

const Terms = styled.h3`
    margin-top: 15px;
    padding: 0 24px;
    color: var(--gray);
    font-size: 11px;
    text-align: center;
`
const Thank = styled.h1`
    text-align: center;
    color: var(--white);
    width: 100%;
`