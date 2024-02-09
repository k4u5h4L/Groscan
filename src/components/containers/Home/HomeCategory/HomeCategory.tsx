import { useQuery } from "@apollo/client";
import type { Category } from "@prisma/client";
import CategoryCard from "~/components/Home/CategoryCard/CategoryCard";
import { GET_USER_CATEGORIES } from "~/config/specs/GraphQL/Queries";

interface QueryType {
    getUserCategories: Category[];
}

const HomeCategory = () => {
    const { loading, error, data } = useQuery<QueryType>(GET_USER_CATEGORIES, {
        variables: { page: 1, itemsPerPage: 6, search: "" },
    });

    if (loading || error) {
        return null;
    }

    return (
        <>
            <section className="px-3 pt-3">
                <ul className="row">
                    {data?.getUserCategories.map((cat) => (
                        <CategoryCard
                            key={cat.id}
                            link={`/category/${cat.id}`}
                            image={cat.icon}
                            name={cat.name}
                        />
                    ))}
                </ul>
            </section>
        </>
    );
};

export default HomeCategory;
