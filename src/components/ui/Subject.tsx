const Subject = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <section>
      <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">{title}</div>
      <article className="my-8">{children}</article>
    </section>
  );
};

export default Subject;
