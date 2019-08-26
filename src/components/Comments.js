import React from 'react'
import CommentItem from './CommentItem'

const Comments = ({ comments, addComment, deleteComment }) => {
	return (
		<ul>
			{comments.map(comment => <CommentItem key={comment.id} comment={comment}
				addComment={addComment} deleteComment={deleteComment} />)}
		</ul>
	)
}

export default Comments
