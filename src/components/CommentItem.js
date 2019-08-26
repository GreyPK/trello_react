import React from 'react'

const CommentItem = ({ comment, deleteComment }) => {
	return (
		<li>
			{comment.title}
			<br /> Author id: {comment.userId}
			<button onClick={() => deleteComment(comment.id)}>Delete comment</button>
		</li>
	)
}

export default CommentItem
