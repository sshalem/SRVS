import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Rest = () => {
  let location = useLocation();

  return <section>{location.pathname === "/spring/rest" ? <Subject title="Rest API ...">{<div></div>}</Subject> : <Outlet />}</section>;
};
export default Rest;
