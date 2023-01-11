import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const IsLoading = ({ isLoading }: { isLoading: boolean | undefined }) => {
  return (
    <div className="isloading">
      <BeatLoader
        color={"#39CDCC"}
        loading={isLoading}
        // cssOverride={override}
        size={20}
      />
    </div>
  );
};

export default IsLoading;
