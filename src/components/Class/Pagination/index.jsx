import React, { Component } from "react";

class Pagination extends Component {
	state = {
		isEditable: false,
	};
	render() {
		return (
			<>
				<div className="flex my-5 items-center gap-8 justify-between">
					<button className="bg-transparent hover:bg-orange-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
						Previous
					</button>
					<div className="  text-center">
						{this.state.isEditable ? (
							<input
								type="number"
								className="shadow appearance-none border rounded w-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							/>
						) : (
							<p
								className="select-none leading-tight"
								title="Double Tap To Jump Page"
								onDoubleClick={() => {
									this.setState({ isEditable: !this.state.isEditable });
								}}>
								{1} of {100}
								<br />
								<small>Double Tap to Edit</small>
							</p>
						)}
					</div>
					<button className="bg-transparent hover:bg-orange-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  ml-auto ">
						Next
					</button>
				</div>
			</>
		);
	}
}

export default Pagination;
