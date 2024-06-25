import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./style/Layout";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
function App() {
  return (
    <AppStyled bg={bg} className="App">
      <MainLayout>
        <Navigation />
        <Orb />
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  background-image: ;
  position: relative;
`;
export default App;
