import React from "react";
// import Helmet from "react-helmet";
import CatePage from "../components/catepage"

export default class CategoryPagesTemplate extends React.Component {
  render() {
    const { index, edges, rootUrl } = this.props.pageContext;

    return (
      <CatePage edges={edges}>
      </CatePage>
    );
  }
}