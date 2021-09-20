import { Component } from 'react';
import PropTypes from 'prop-types';

export const CalcDisplay = (props) => {
  const ans = <span className="CalcDisplay col-12 fs-1 bg-secondary text-white m-0 text-end rounded-top py-4">{props.text}</span>;
  return ans;
};

class CalcButton extends Component {
  render() {
    const { text, Bclass } = this.props;
    let ans = <button className="col-3 p-5 bg-orange" type="button">{text}</button>;
    if (Bclass === 'true') {
      ans = <button className="col-3 p-5 bg-white" type="button">{text}</button>;
    }
    if (text === '0') {
      ans = <button className="col-6 p-5 bg-white" type="button">{text}</button>;
    }

    return ans;
  }
}

CalcButton.propTypes = {
  text: PropTypes.string.isRequired,
  Bclass: PropTypes.string.isRequired,
};

export default CalcButton;