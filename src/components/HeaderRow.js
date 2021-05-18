import React from "react";

function HeaderRow(props) {

  return (
      <div id={props.id} className="table-responsive-sm">
        <table className="table">
          <thead>
          <tr >
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
          </thead>
        </table>
      </div>
  );
}

export default HeaderRow;
