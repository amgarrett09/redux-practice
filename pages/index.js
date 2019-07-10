import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import PostContainer from '../components/containers/post-container'
import FormContainer from '../components/containers/form-container'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <FormContainer />
    <PostContainer />
  </div>
);

export default Home;
