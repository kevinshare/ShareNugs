import { Input, Row } from 'react-materialize';

const InputArea = () => (
    <div className="wrapCreateInput">
        <Row className="center-align">
            <Input labelClassName="black-text" placeholder="" s={12} label="username" />
            <Input labelClassName="black-text" type="password" label="password" s={12} />
        </Row>
    <style jsx>{`
      .wrapCreateInput {
        max-width: 80vh;
        text-color: black;
        background-color: rgba(225, 225, 225, 0.2);
      }

    `}</style>
    </div>
);

export default InputArea;
