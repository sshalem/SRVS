/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const TransactionManagement = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/transaction-management" ? <Subject title="Transaction Management  ...">{<div></div>}</Subject> : <Outlet />}
    </section>
  );
};
export default TransactionManagement;
