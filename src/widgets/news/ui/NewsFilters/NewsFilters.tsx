import { useAppDispatch } from "../../../../app/appStore";
import { useTheme } from "../../../../app/providers/ThemeProvider";
import Categories from "../../../../features/category/ui/Categories/Categories";
import Search from "../../../../features/search/ui/Search/Search";
import { IFilters } from "../../../../shared/interfaces";
import { setFilters } from "../../../../entities/news/model/newsSlice";
import { Slider } from "../../../../features/slider";
import { CategoriesType } from "../../../../entities/category";

import styles from "./styles.module.css";

interface Props {
	filters: IFilters;
    categories: CategoriesType[]
}

const NewsFilters = ({ filters, categories }: Props) => {
	const { isDark } = useTheme();

	const dispatch = useAppDispatch();

	return (
		<div className={styles.filters}>
			{categories ? (
				<Slider isDark={isDark}>
					<Categories
						categories={categories}
						selectedCategory={filters.category}
						setSelectedCategory={(category) =>
							dispatch(setFilters({ key: "category", value: category }))
						}
					/>
				</Slider>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={(keywords) =>
					dispatch(setFilters({ key: "keywords", value: keywords }))
				}
			/>
		</div>
	);
};

export default NewsFilters;
