import { Outlet, useLocation } from "react-router-dom";

const BasicConcepts = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/sql/basic-concepts" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">SQL Basic Concepts ...</div>
          <article className="my-8">text</article>
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default BasicConcepts;
