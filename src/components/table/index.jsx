export const Table = (props) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-left text-slate-400 text-sm uppercase">
          <th>Title</th>
          <th>Published</th>
          <th>Rating</th>
          <th>Buy On</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};
