import { Outlet, useLocation } from "react-router-dom";

const OperatorStatements = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/sql/operator-statements" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">SQL Operator Statements ...</div>
          <article className="my-8">text</article>
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default OperatorStatements;
