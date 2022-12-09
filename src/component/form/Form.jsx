import styled from "styled-components";
import ButtonComponent from "../button/Button";

import "./style.css";

const FormComponent = () => {
  return (
    <Wrap>
      <div className="Active_btn_wrap">
        <ButtonComponent value="ActiveAddBox" />
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-bottom: 50px;
`;

export default FormComponent;
