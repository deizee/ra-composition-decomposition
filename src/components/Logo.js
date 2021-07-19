import Link from "./Link";

const Logo = (props) => {
    return (
        <div>
            <Link className={props.className} href={props.href}>{props.children}</Link>
        </div>
    );
};

export default Logo;