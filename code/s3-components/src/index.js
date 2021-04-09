import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>WARNING!!</h4>
        <div>MEH</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.cats()}
          author="Sam"
          timeAgo="Today 4:45PM"
          comment={faker.commerce.productName()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.cats()}
          author="Alex"
          timeAgo="Today 2:00AM"
          comment={faker.commerce.productName()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.cats()}
          author="Jane"
          timeAgo="Yesterday 5:00PM"
          comment={faker.commerce.productName()}
        />
      </ApprovalCard>


    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
