import styled from "styled-components";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Header />
      <div>{children}</div>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export default Layout;
