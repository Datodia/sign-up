import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from 'styled-components'

interface Data {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const Form = () => {

    const schema = Yup.object().shape({
        firstName: Yup.string().required('First Name cannot be empty'),
        lastName: Yup.string().required('Last Name cannot be empty'),
        email: Yup.string().email('Looks like this is not an email').required('Email cannot be a empty'),
        password: Yup.string().required('Password cannot be an empty').min(3, "min characters are 4 characters").max(20, "max caracters are 20")
    })

    type FormData = Yup.InferType<typeof schema>;

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });



    const onSubmit = (data: Data) => {
        console.log(data)
    }

    return (
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
    )
}

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
`

const Terms = styled.h3`
    margin-top: 15px;
    padding: 0 24px;
    color: var(--gray);
    font-size: 11px;
    text-align: center;
`