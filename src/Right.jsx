import React from 'react';
import Benefit from './right_comp/Benefit';

const Right = () => {
  const benefitList = [
    'Enhanched cycle time',
    'Timely reaction to market trends',
    'Reduced operational risk',
    'Driving process improvement and diligency',
  ];

  const yearSelectfunction = () => {};

  return (
    <div className="right">
      <h2 className="title1">YOUR ROI</h2>
      <p className="font1">With ADROSONIC RPA</p>
      <span className="year">in </span>
      <select id="years" onChange={yearSelectfunction}>
        <option value="1">1 year</option>
        <option value="2">2 years</option>
        <option value="3">3 years</option>
      </select>
      <div className="output-section">
        <img
          className="icon-class"
          src="/wp-content/uploads/2022/03/Icon-awesome-money-bill-wave-1.svg"
          alt=""
        />

        <p className="font">Your current cost of</p>
        <input className="answer" type="text" id="original-time" disabled />
      </div>
      <div className="output-section">
        <p className="font">will be reduced to</p>
        <input className="answer" type="text" id="optimised-time" disabled />
      </div>
      <div className="output-section">
        <img
          className="icon-class"
          src="/wp-content/uploads/2022/03/Icon-awesome-chart-line-1.svg"
          alt=""
        />

        <p className="font">Your ROI can be maximised upto</p>
        <input className="answer" type="text" id="reduced-hours" disabled />
      </div>
      <br />
      <p className="font">And a lot more benefits:</p>
      {benefitList.map((e) => (
        <Benefit text={e} />
      ))}
      <br />
      <p className="font">
        Interested to know how? Book a free demo with us today!
      </p>
      <br />
      <a href="/contact-us" className="get-in-touch" />
      GET IN TOUCH
    </div>
  );
};
export default Right;
