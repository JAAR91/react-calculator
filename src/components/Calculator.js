export const CalcDisplay = (props) => {
  const ans = <span className="CalcDisplay col-12 fs-1 bg-secondary text-white m-0 text-end rounded-top py-4">{props.text}</span>;
  return ans;
};

const CalcButton = (props) => {
  const { text, Bclass } = props;
  let ans = <button className="col-3 p-5 bg-orange" type="button">{text}</button>;
  if (Bclass === 'true') {
    ans = <button className="col-3 p-5 bg-white" type="button">{text}</button>;
  }
  if (text === '0') {
    ans = <button className="col-6 p-5 bg-white" type="button">{text}</button>;
  }

  return ans;
};

export default CalcButton;
