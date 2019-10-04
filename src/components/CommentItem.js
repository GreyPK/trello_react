import React from 'react'
import { connect } from 'react-redux'
import { List, Icon } from 'antd'

const CommentItem = ({ comment, deleteComment, users }) => {
	return (
		<List.Item>
			<h3>{comment.title}</h3>
			Author name: {users.filter(user => user.id === comment.userId)[0].name}
			<Icon type="delete" onClick={() => deleteComment(comment.id)} />
		</List.Item>
	)
}

const mapStateToProps = state => ({
	users: state.user.users,
})

export default connect(
	mapStateToProps,
	null
)(CommentItem)
