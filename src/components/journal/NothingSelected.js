import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const NothingSelected = () => {
  return (
    <div className="nothing__main-content">
      <p>
        Select something
        <br />
        or create an entry
      </p>
      <StarIcon style={{ width: "128px" }} />
    </div>
  );
};

export default NothingSelected;
