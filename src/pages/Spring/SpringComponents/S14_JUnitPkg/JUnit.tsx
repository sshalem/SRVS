/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const JUnit = () => {
  let location = useLocation();
  return <section>{location.pathname === "/spring/junit" ? <Subject title="JUnit ...">{<div></div>}</Subject> : <Outlet />}</section>;
};

export default JUnit;
