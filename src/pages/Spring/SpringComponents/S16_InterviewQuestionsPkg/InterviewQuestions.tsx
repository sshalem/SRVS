/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const InterviewQuestions = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/interview-questions" ? <Subject title="Interview Questions ...">{<div></div>}</Subject> : <Outlet />}
    </section>
  );
};
export default InterviewQuestions;
