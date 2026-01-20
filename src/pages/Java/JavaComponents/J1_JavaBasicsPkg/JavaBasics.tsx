/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const JavaBasics = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/basics" ? (
        <Subject title="Java Basics ...">
          <div>my content</div>
        </Subject>
      ) : (
        <Outlet />
      )}
    </section>
  );
};
export default JavaBasics;
