/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Aop = () => {
  let location = useLocation();

  return <section>{location.pathname === "/spring/aop" ? <Subject title="AOP  ...">{<div></div>}</Subject> : <Outlet />}</section>;
};
export default Aop;
