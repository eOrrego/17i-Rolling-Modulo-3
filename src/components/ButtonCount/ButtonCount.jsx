const ButtonCount = ({text, onclick}) => {
  return (
    <button
      className="btn btn-info text-white mt-3 me-2"
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default ButtonCount;
