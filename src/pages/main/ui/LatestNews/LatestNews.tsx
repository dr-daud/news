import { useAppDispatch } from "../../../../app/appStore";
import { INews } from "../../../../entities/news";
import { useGetLatestNewsQuery } from "../../../../entities/news/api/newsApi";
import { setCurrentNews } from "../../../../entities/news/model/newsSlice";
import { NewsList } from "../../../../widgets/news";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

const LatestNews = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null);
	const dispatch = useAppDispatch();
    const navigate = useNavigate()

	const navigateTo = (news: INews) => {
		dispatch(setCurrentNews(news));
        navigate(`/news/${news.id}`)
	};

	return (
		<section className={styles.section}>
			<NewsList
				type="banner"
				direction="row"
				news={data && data.news}
				isLoading={isLoading}
				viewNewsSlot={(news: INews) => (
					<p onClick={() => navigateTo(news)}>view more...</p>
				)}
			/>
		</section>
	);
};

export default LatestNews;
