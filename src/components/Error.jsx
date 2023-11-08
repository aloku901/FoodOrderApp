import { useRouteError } from "react-router-dom"

function Error() {
    const err = useRouteError();
  return (
    <div>
        <h1>Ooops....</h1>
        <h4>This is the Error .</h4>
        <h3>{err.status}: {err.statusText}</h3>
    </div>
  )
}

export default Error