import Link from "./Link";

const AdsBanner = (props) => {
    return (
        <div className={props.bannerClasses}>
            <Link className={props.linkClasses} href={props.href}>
                <img className={props.imageClasses} src={props.imageURL} alt="ads banner" />
            </Link>
        </div>
    );
};

export default AdsBanner;