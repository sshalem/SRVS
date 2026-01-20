/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const SpringSecurity = () => {
  let location = useLocation();

  return <section>{location.pathname === "/spring/security" ? <Subject title="Spring Security  ...">{<div></div>}</Subject> : <Outlet />}</section>;
};
export default SpringSecurity;
