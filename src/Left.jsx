import React,{useState} from 'react'
import NumberBox from './left_comp/NumberBox';
import YesNo from './left_comp/YesNo';
import Scrollbar from './left_comp/Scrollbar';
import CheckBox from './left_comp/CheckBox';
import './Left.css';
const Left=() =>{
  const [slider1, setSlider1] = useState(1);
  const [slider2, setSlider2] = useState(1);
  const [slider3, setSlider3] = useState(1);

  const onValueChange = (e) => {
    console.log('slider', e.target.name, '', e.target.value);
    if (e.target.name === 'slider1') setSlider1(e.target.value);
    else if (e.target.name === 'slider2') setSlider2(e.target.value);
    else if (e.target.name === 'slider3') setSlider3(e.target.value);
  };
  const steps = {
    label: 'How many steps does the process include?',
    list: [
      {
        value: 1,
        label: '1',
      },
      {
        value: 10,
        label: '10',
      },
      {
        value: 20,
        label: '20',
      },
      {
        value: 30,
        label: '30',
      },
      {
        value: 40,
        label: '40',
      },
      {
        value: 50,
        label: '50',
      },
      {
        value: 60,
        label: '60',
      },
      {
        value: 70,
        label: '70',
      },
      {
        value: 80,
        label: '80',
      },
    ],
    max: 80,
    name: 'slider1',
  };
  const applications = {
    label: 'How many applications are involved in the process?',
    list: [
      {
        value: 1,
        label: '1',
      },
      {
        value: 2,
        label: '2',
      },
      {
        value: 3,
        label: '3',
      },
      {
        value: 4,
        label: '4',
      },
      {
        value: 5,
        label: '5',
      },
      {
        value: 6,
        label: '6',
      },
      {
        value: 7,
        label: '7',
      },
      {
        value: 8,
        label: '8',
      },
    ],
    max: 8,
    name: 'slider2',
  };
  const complexity = {
    label: 'How complex is the process?',
    list: [
      {
        value: 1,
        label: 'Simple',
      },
      {
        value: 2,
        label: 'Average',
      },
      {
        value: 3,
        label: 'Intermediate',
      },
      {
        value: 4,
        label: 'Complex',
      },
    ],
    max: 4,
    name: 'slider3',
  };

  return (
<div className="left">
        
        <div>Currently how many full-time employees are involved in the process?
        <NumberBox def={2}/>
        </div>
        <br/>
        <div>Average salary of an employee per year (US Dollars)?
        <NumberBox def={300000}/>
        </div>
        <br/>
        <Scrollbar
        label={steps.label}
        list={steps.list}
        max={steps.max}
        onValueChange={onValueChange}
        name={steps.name}
      />
      <Scrollbar
        label={applications.label}
        list={applications.list}
        max={applications.max}
        onValueChange={onValueChange}
        name={applications.name}
      />
      <Scrollbar
        label={complexity.label}
        list={complexity.list}
        max={complexity.max}
        onValueChange={onValueChange}
        name={complexity.name}
      />
        <br/>
        Does this process require cognitive skills?
        <YesNo/>
        <br/>
        Is the process documentation required?
        <YesNo/>
        <br/>
        Is RPA support required post Go-Live?
        <YesNo/>
        <br/>
        Is the input data unstructured?
        <YesNo/>
        <br/>
        What all parameters does the process include?
        <CheckBox label="Data tables"/>
        <CheckBox label="OCR"/>
        <CheckBox label="QR Codes"/>
        <CheckBox label="Rule-based Processing"/>
        <CheckBox label="Bar Codes"/>
        <CheckBox label="NLP"/>
        <CheckBox label="Complex Algorithm"/>
        <CheckBox label="Graphs"/>

        
    </div>
  );
};
export default Left;