function Bean(props) {
  return (
    <>
      <div
        className={`flex p-1 items-center justify-center m-1 ${
          props.currentFilter === props.text ? "bg-violet-500" : "bg-violet-900"
        } text-white text-md rounded-full w-28`}
        onClick={() => props.setFilter(props.text)}
      >
        {props.text}
      </div>
    </>
  );
}

export default Bean;
