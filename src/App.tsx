import styled from 'styled-components'
import { Form } from './components/Form'
import { Texts } from './components/Texts'

export default function App() {

  return (
    <Container className="App">
      <Texts />
      <Form />
    </Container>
  )
}

const Container = styled.div`
  width: 327px;
  height: 100vh;
  margin: 0 auto;
`

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: var(--red);
`