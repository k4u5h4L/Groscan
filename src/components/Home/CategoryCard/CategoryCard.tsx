import Link from "next/link";

type PropType = {
    link: string;
    image: string;
    name: string;
};

const CategoryCard = ({ name, image, link }: PropType) => {
    return (
        <>
            <li className="col-4">
                <Link href={link} className="item-category-grid">
                    <span className="icon-wrap">
                        <img className="icon" height="32" src={image} alt="" />
                    </span>
                    <small className="text"> {name}</small>
                </Link>
            </li>
        </>
    );
};

export default CategoryCard;
