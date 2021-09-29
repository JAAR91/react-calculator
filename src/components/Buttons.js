import PropTypes from 'prop-types';

export const CalcDisplay = (props) => {
  const { result } = props;
  return (
    <span className="CalcDisplay calc-font col-12 text-white m-0 text-end rounded-top">
      { result }
    </span>
  );
};

const CalcButton = (props) => {
  const { text, Bclass, cFunction } = props;

  const buttonClick = () => {
    cFunction(text);
  };

  return (
    <button
      className={`p-5 calc-font ${(Bclass === 'true') ? 'bg-white' : 'bg-orange'} ${(text === '0') ? 'col-6' : 'col-3'}`}
      type="button"
      onClick={buttonClick}
    >
      {text}
    </button>
  );
};

CalcButton.propTypes = {
  text: PropTypes.string.isRequired,
  Bclass: PropTypes.string.isRequired,
  cFunction: PropTypes.func.isRequired,
};

CalcDisplay.propTypes = {
  result: PropTypes.string.isRequired,
};

export default CalcButton;
