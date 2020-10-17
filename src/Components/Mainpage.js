import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Toast, ToastBody, ToastHeader } from "reactstrap";
import MdWarning from "react-ionicons/lib/MdWarning";

import { fetchdata, SET_CURRENTPAGE } from "../Store/actions";
import Posts from "./posts";
import Search from "./search";
import Paginate from "./paginate";
import Cards from "./cards";

const Mainpage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.root);
  const currentpage = useSelector((state) => state.root.currentPage);
  const perpage = useSelector((state) => state.root.perPage);
  const [searchval, setsearchval] = useState("");
  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  const prevclickHandler = () => {
    dispatch({ type: SET_CURRENTPAGE, payload: currentpage - 1 });
  };

  const nextclickhandler = () => {
    dispatch({ type: SET_CURRENTPAGE, payload: currentpage + 1 });
  };

  const changeHandler = (event) => {
    setsearchval(event.target.value);
  };
  const updateddata = data.ServerPostsData;
  // const changeddata = updateddata.filter((post) =>
  //   post.title.toLowerCase().search(event.target.value.toLowerCase())
  const filteredData = updateddata.filter((post) =>
    post.title.toLowerCase().includes(searchval.toLowerCase())
  );

  const endpos = currentpage * perpage;
  const startpos = endpos - perpage;
  const currentPosts = filteredData.slice(startpos, endpos);

  if (data.loading) {
    return (
      <div className="mx-auto">
        <Spinner style={{ width: "4rem", height: "4rem", marginTop: "5rem" }} />
      </div>
    );
  }
  if (data.error) {
    return (
      <div className="mx-auto p-5" style={{ width: "350px" }}>
        <Toast className="p-1 bg-info">
          <ToastHeader>
            <span>
              <MdWarning />
            </span>
            Something went Wrong! Reload again
          </ToastHeader>
        </Toast>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="row">
        <Search change={(event) => changeHandler(event)} />
      </div>
      <div className="row">
        {currentPosts.map((post) => (
          <Cards postdata={post} />
        ))}
      </div>
      <div className="row">
        <Paginate
          prevclick={prevclickHandler}
          nextclick={nextclickhandler}
          curpage={currentpage}
          totalposts={filteredData.length}
          postperpage={perpage}
        />
      </div>
    </React.Fragment>
  );
};

export default Mainpage;
