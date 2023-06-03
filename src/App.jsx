import React from "react";
import "./App.css";
import Header from "./components/Class/Header";
import { NewsCategories } from "./utils/Categories";

class App extends React.Component {
	render() {
		return (
			<>
				<div className="container">
					<div className="row">
						<div className="col-sm-6 ">
							<Header category={NewsCategories.technology} />
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default App;
