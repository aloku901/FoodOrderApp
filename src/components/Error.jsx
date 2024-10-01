import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
    const err = useRouteError();
    return <div className="m-10">
        <h1 className="text-4xl font-medium">Ooops!</h1>
        <p className="text-lg">Something Went Wrong!!</p>
        <p className="text-sm">{err.status}: { err.statusText }</p>
  </div>;
}

export default Error;
