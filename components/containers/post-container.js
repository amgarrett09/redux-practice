import { connect } from 'react-redux'
import { fetchPosts } from '../../store/actions/post-actions'
import Posts from '../posts'

const mapStateToProps = state => ({
    posts: state.postReducer.items
})

const mapDispatchToProps = {
  fetchPosts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)