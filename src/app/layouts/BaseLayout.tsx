import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header/ui";
import { useTheme } from "../providers/ThemeProvider";

function BaseLayout() {
	const { isDark } = useTheme();
	return (
		<div className={`app ${isDark ? "dark" : "light"}`}>
			<Header />
			<div className="container">
                <Outlet/>
			</div>
		</div>
	);
}

export default BaseLayout;
