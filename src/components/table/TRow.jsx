export const TRow = (props) => {
  const { image, name, author, year, rating, buy_link } = props;
  return (
    <tr className="rounded-lg odd:bg-stone-200">
      <Cell>
        <div className="flex w-full gap-4">
          <img
            className="rounded-xl"
            src={image}
            alt={`book ${name} - ${author}`}
            width={60}
          />
          <div className="flex flex-col justify-start items-start text-start">
            <div className="text-sm font-bold">{name}</div>
            <div className="text-xs">{author}</div>
          </div>
        </div>
      </Cell>
      <Cell>{year}</Cell>
      <Cell>{rating}/10</Cell>
      <Cell>
        <a href={buy_link} className="text-emerald-400">
          Amazon iBooks
        </a>
      </Cell>
    </tr>
  );
};

const Cell = (props) => {
  return <td className="p-2">{props.children}</td>;
};
