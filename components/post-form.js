import React, { useState } from "react";

const PostForm = ({ newPost }) => {
  const [formData, updateFormData] = useState({
    title: "",
    body: ""
  });
  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    updateFormData({
      ...formData,
      [name]: value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    newPost(formData);
  }
  
  return (
    <React.Fragment>
      <h1>Add post</h1>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="title-input">
            Title:
            <input
              onChange={onChange}
              value={formData.title}
              type="text"
              name="title"
              id="title-input"
            />
          </label>
        </p>
        <p>
          <label htmlFor="body-input">
            Body:
            <textarea
              onChange={onChange}
              value={formData.body}
              name="body"
              id="body-input"
            />
          </label>
        </p>
        <br />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default PostForm;
