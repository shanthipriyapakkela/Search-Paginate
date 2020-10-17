import React from "react";
import { Button } from "reactstrap";

const paginate = ({
  prevclick,
  nextclick,
  curpage,
  totalposts,
  postperpage,
}) => {
  const noofposts = Math.ceil(totalposts / postperpage);
  return (
    <div className="mt-3 w-75">
      <Button onClick={prevclick} disabled={curpage === 1}>
        Prev
      </Button>

      <Button
        className="float-right"
        onClick={nextclick}
        disabled={curpage === noofposts}
      >
        Next
      </Button>
    </div>
  );
};

export default paginate;
