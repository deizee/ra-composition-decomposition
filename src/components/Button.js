const Button = (props) => (
    <button
        className={props.className}
        type={props.type}
        disabled={props.disabled}
    >
        {props.children}
    </button>
);

export default Button;
