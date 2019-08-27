import React from 'react'
import { connect } from 'react-redux'

const CommentItem = ({ comment, deleteComment, users }) => {
	return (
		<li>
			{comment.title}
			<br /> Author id:{' '}
			{users.filter(user => user.id === comment.userId)[0].name}
			<button onClick={() => deleteComment(comment.id)}>Delete comment</button>
		</li>
	)
}

const mapStateToProps = state => ({
	users: state.user.users,
})

export default connect(
	mapStateToProps,
	null
)(CommentItem)
