import { Input, Row } from 'react-materialize';

const InputArea = () => (
    <div className="wrapCreateInput">
        <Row>
            <Input labelClassName="black-text" placeholder="" s={6} label="First Name" />
            <Input labelClassName="black-text" s={6} label="Last Name" />
            <Input labelClassName="black-text" s={12} label="disabled" defaultValue="I am not editable" disabled />
            <Input labelClassName="black-text" type="password" label="password" s={12} />
            <Input labelClassName="black-text" type="email" label="Email" s={12} />
        </Row>
    <style jsx>{`
      .wrapCreateInput {
        max-width: 80vh;
        text-color: black;
        background-color: rgba(100, 100, 100, 0.1);
      }

    `}</style>
    </div>
);

export default InputArea;
