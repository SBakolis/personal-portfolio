function PortfolioCard(props) {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
      <img
        src={props.item.thumb}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">
          {props.item.name}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          {props.item.name}
        </h2>
      </div>
      <p className="text-gray-100">{props.item.description}</p>
    </div>
  );
}

export default PortfolioCard;
