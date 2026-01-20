/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Jenkins = () => {
  let location = useLocation();
  return <section>{location.pathname === "/spring/jenkins" ? <Subject title="Jenkins ...">{<div></div>}</Subject> : <Outlet />}</section>;
};

export default Jenkins;
