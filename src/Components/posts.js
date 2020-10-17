import React from "react";
import Cards from "./cards";

const posts = ({ data }) => {
  const postsdata = data;
  const postpage = postsdata.map((posts) => <Cards postdata={posts} />);

  return <div className="row">{postpage}</div>;
};
export default posts;
