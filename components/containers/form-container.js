import { newPost } from "../../store/actions/post-actions";
import { connect } from "react-redux";
import PostForm from "../post-form";

const mapDispatchToProps = {
  newPost
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(PostForm);
