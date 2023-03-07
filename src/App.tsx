import styled from 'styled-components'

export default function App() {

  return (
    <div className="App">
      hello world
      <Box />
    </div>
  )
}


const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: var(--red);
`