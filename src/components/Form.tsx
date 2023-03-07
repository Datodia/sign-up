import { useForm } from 'react-hook-form'
import styled from 'styled-components'

export const Form = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <FormDiv onSubmit={handleSubmit(onSubmit)} >
            <input {...register("name")} />
            <input {...register('lastName')} />
            <input {...register('age')} />
            <input type="submit" />
        </FormDiv>
    )
}

const FormDiv = styled.form`

`