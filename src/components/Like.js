import React, { Component } from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Like extends Component {
state = { liked: false };
toggle = () => {
	let localLiked = this.state.liked;

	// Toggle the state variable liked
	localLiked = !localLiked;
	this.setState({ liked: localLiked });
};
render() {
	return (

		<div
			onClick={() => this.toggle()}
		>
			{this.state.liked === false ? (
			<FavoriteIcon />
			) : (
			<FavoriteBorderIcon />
			)}
		</div>
	);
}
}

export default Like;
