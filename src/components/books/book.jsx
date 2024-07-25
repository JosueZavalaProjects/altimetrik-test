export const Book = (props) => {
  const { id, image, name, author, year, rating, buy_link } = props;

  return (
    <div className="flex w-full odd:bg-stone-200 p-4 gap-2">
      <div className="flex w-1/2 gap-4">
        <div>
          <img
            className="rounded-xl"
            src={image}
            alt={`book ${name} - ${author}`}
            width={70}
            height={200}
          />
        </div>
        <div className="flex flex-col justify-start items-start text-start">
          <div className="text-sm font-bold">{name}</div>
          <div className="text-xs">{author}</div>
        </div>
      </div>
      <div>{year}</div>
      <div>{rating}/10</div>
      <div>buy </div>
    </div>
  );
};
