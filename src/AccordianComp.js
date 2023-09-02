import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Input,
  Label,
  Tooltip,
  Form,
  Button
} from 'reactstrap';


function AccordianComp(props) {
  const {
    reset,
    control,
    register,
    setError,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({});

  const [active, setActive] = useState(false);
  const [activeMode, setActiveMode] = useState({
    Q1: 'No',
    Q2: 'No',
    Q3: 'No',
    Q4: 'No',
    Q5: 'No',
    Q6: 'No',
    Q7: 'No',
    Q8: 'No',
    Q9: 'No',
  });
  const [open, setOpen] = useState(1);
  const [accType, setAccType] = useState(1);
  const [index, setIndex] = useState(3);

  const toggle = (id) => {
    console.log('id', id)
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const handleCheckBox = (value, key, i) => {
    console.log('value', value, key, i);
    setIndex(i)
    setActiveMode((prevActiveMode) => ({
      ...prevActiveMode,
      [key]: value
    }));
  };

  const onSubmit = () => {
  console.log('open',typeof open, open)
  if (open === 1 || open === 2) {
    if (!Object.values(activeMode).slice(index - index, index).filter((e) => e !== 'No').includes('No')) {
      toggle(open + 1);
    }
  } else if (open === 3) {
    if (!Object.values(activeMode).slice(index - index, index).filter((e) => e !== 'No').includes('No')) {
      toggle(open - 2);
    }
  }    
  };

  useEffect(() => {
    Object.values(activeMode).slice(index-index, index).every((e) => e === 'No') ? setActive(false) : setActive(true)
  }, [activeMode])




  useEffect(()=>{
    setActive(false)
  },[open])

  const QuestionArray = [
    [{
      question: 'Is cricket a popular sport in many countries?',
      labelId: ["Q1Yes","Q1No","Q1NA"],
      label: ["Yes","No","NA"],
      sliceIndex: 3,
      type: 'Q1'
    },
    {
      question: 'Is a cricket team typically made up of 11 players?',
      labelId: ["Q2Yes","Q2No","Q2NA"],
      label: ["Yes","No","NA"],
      sliceIndex: 3,
      type: 'Q2'
    },
    {
      question: 'Is the objective of cricket to score more runs than the opposing team?',
      labelId: ["Q3Yes","Q3No","Q3NA"],
      label: ["Yes","No","NA"],
      sliceIndex: 3,
      type: 'Q3'
    },],
    [{
      question: 'Is the wicketkeeper a fielding position in cricket?',
      labelId: ["Q4Yes","Q4No","Q4NA"],
      label: ["Yes","No","NA"],
      sliceIndex: 6,
      type: 'Q4'
    },
    {
      question: 'Is a "duck" a term used in cricket to refer to a batsman who gets out without scoring any runs?',
      labelId: ["Q5Yes","Q5No","Q5NA"],
      label: ["Yes","No","NA"],
      sliceIndex: 6,
      type: 'Q5'
    },
    {
      question: 'Is the use of protective gear such as helmets and pads common in cricket?',
      labelId: ["Q6Yes","Q6No","Q6NA"],
      label: ["Yes","No","NA"],
      sliceIndex: 6,
      type: 'Q6'
    },],
    [{
      question: 'Is a bowler responsible for delivering the ball to the batsman?',
      labelId: ["Q7Yes","Q7No","Q7NA"],
      label: ["Yes","No","NA"],
      sliceIndex: 9,
      type: 'Q7'
    },
    {
      question: 'Is a Test match in cricket typically played over a duration of five days?',
      labelId: ["Q8Yes","Q8No","Q8NA"],
      label: ["Yes","No","NA"],
      sliceIndex: 9,
      type: 'Q8'
    },
    {
      question: 'Is cricket played with a round ball and a flat bat?',
      labelId: ["Q9Yes","Q9No","Q9NA"],
      label: ["Yes","No","NA"],
      sliceIndex: 9,
      type: 'Q9'
    },]
  ]

  console.log('activeMode', activeMode)
  return (
    <>
      <Accordion open={open} toggle={()=>toggle()}>
        {QuestionArray.map((e, i) => (
          <AccordionItem key={i}>
            <AccordionHeader targetId={i + 1}>Accordion Item {i + 1}</AccordionHeader>
            <AccordionBody accordionId={i + 1}>
              <form onSubmit={handleSubmit(() => onSubmit())}>
                {
                  e.map(({ question, labelId, label, sliceIndex, type }) => <div key={type}>
                      <p>{question}</p>
                      <label className='me-2' htmlFor={labelId[0].Q1Yes}>
                        <input
                          {...register(type)}
                          type="radio"
                          value="Yes"
                          id={labelId[0].Q1Yes} 
                          checked={activeMode[type] === 'Yes' ? true : false}
                          onChange={() => handleCheckBox('Yes', type, sliceIndex)}
                          className='me-1'
                        />
                        Yes
                      </label>
                      <label className='me-2' htmlFor={labelId[0].Q1No}>
                        <input
                          {...register(type)}
                          type="radio"
                          value="No"
                          id={labelId[0].Q1No}
                          checked={activeMode[type] === 'No' ? true : false}
                          onChange={() => handleCheckBox('No', type, sliceIndex)}
                          className='me-1'
                        />
                        No
                      </label>
                      <label className='me-2' htmlFor={labelId[0].Q1NA}>
                        <input
                          {...register(type)}
                          type="radio"
                          value="NA"
                          id={labelId[0].Q1NA}
                          checked={activeMode[type] === 'NA' ? true : false}
                          onChange={() => handleCheckBox('NA', type, sliceIndex)}
                          className='me-1'
                        />
                        NA
                      </label>
                    </div>
                  )
                }
                {/* <div>
                  <p>Is cricket a popular sport in many countries?</p>
                  <label className='me-2' htmlFor="Q2-Yes">
                    <input
                      {...register("Q2")}
                      type="radio"
                      value="Yes"
                      id="Q2-Yes"
                      checked={activeMode.Q2 === 'Yes' ? true : false}
                      onChange={() => handleCheckBox('Yes', 'Q2',3)}
                      className='me-1'
                    />
                    Yes
                  </label>
                  <label className='me-2' htmlFor="Q2-No">
                    <input
                      {...register("Q2")}
                      type="radio"
                      value="No"
                      id="Q2-No"
                      checked={activeMode.Q2 === 'No' ? true : false}
                      onChange={() => handleCheckBox('No', 'Q2',3)}
                      className='me-1'
                    />
                    No
                  </label>
                  <label className='me-2' htmlFor="Q2-NA">
                    <input
                      {...register("Q2")}
                      type="radio"
                      value="NA"
                      id="Q2-NA"
                      checked={activeMode.Q2 === 'NA' ? true : false}
                      onChange={() => handleCheckBox('NA', 'Q2',3)}
                      className='me-1'
                    />
                    NA
                  </label>
                </div>
                <div>
                  <p>Is cricket a popular sport in many countries?</p>
                  <label className='me-2' htmlFor="Q3-Yes">
                    <input
                      {...register("Q3")}
                      type="radio"
                      value="Yes"
                      id="Q3-Yes"
                      checked={activeMode.Q3 === 'Yes' ? true : false}
                      onChange={() => handleCheckBox('Yes', 'Q3',3)}
                      className='me-1'
                    />
                    Yes
                  </label>
                  <label className='me-2' htmlFor="Q3-No">
                    <input
                      {...register("Q3")}
                      type="radio"
                      value="No"
                      id="Q3-No"
                      checked={activeMode.Q3 === 'No' ? true : false}
                      onChange={() => handleCheckBox('No', 'Q3',3)}
                      className='me-1'
                    />
                    No
                  </label>
                  <label className='me-2' htmlFor="Q3-NA">
                    <input
                      {...register("Q3")}
                      type="radio"
                      value="NA"
                      id="Q3-NA"
                      checked={activeMode.Q3 === 'NA' ? true : false}
                      onChange={() => handleCheckBox('NA', 'Q3',3)}
                      className='me-1'
                    />
                    NA
                  </label>
                </div> */}
                {active ? <div className="d-flex justify-content-left mt-3">
                  <Button className='me-2' color="primary" outline type="submit">
                    Submit
                  </Button>{" "}
                  <Button color="danger" outline>
                    Cancel
                  </Button>
                </div> : <></>}
              </form>

              {/* <form onSubmit={handleSubmit((e)=>onSubmit(e))}>
                <div>
                  <p>Is cricket a popular sport in many countries?</p>
                  <label className='me-2' htmlFor="Q1-Yes">
                    <input
                      {...register("Q1")}
                      type="radio"
                      value="Yes"
                      id="Q1-Yes"
                      checked={activeMode.Q1 === 'Yes' ? true : false}
                      onChange={() => handleCheckBox('Yes', 'Q1',3)}
                      className='me-1'
                    />
                    Yes
                  </label>
                  <label className='me-2' htmlFor="Q1-No">
                    <input
                      {...register("Q1")}
                      type="radio"
                      value="No"
                      id="Q1-No"
                      checked={activeMode.Q1 === 'No' ? true : false}
                      onChange={() => handleCheckBox('No', 'Q1',3)}
                      className='me-1'
                    />
                    No
                  </label>
                  <label className='me-2' htmlFor="Q1-NA">
                    <input
                      {...register("Q1")}
                      type="radio"
                      value="NA"
                      id="Q1-NA"
                      checked={activeMode.Q1 === 'NA' ? true : false}
                      onChange={() => handleCheckBox('NA', 'Q1',3)}
                      className='me-1'
                    />
                    NA
                  </label>
                </div>
                <div>
                  <p>Is cricket a popular sport in many countries?</p>
                  <label className='me-2' htmlFor="Q2-Yes">
                    <input
                      {...register("Q2")}
                      type="radio"
                      value="Yes"
                      id="Q2-Yes"
                      checked={activeMode.Q2 === 'Yes' ? true : false}
                      onChange={() => handleCheckBox('Yes', 'Q2',3)}
                      className='me-1'
                    />
                    Yes
                  </label>
                  <label className='me-2' htmlFor="Q2-No">
                    <input
                      {...register("Q2")}
                      type="radio"
                      value="No"
                      id="Q2-No"
                      checked={activeMode.Q2 === 'No' ? true : false}
                      onChange={() => handleCheckBox('No', 'Q2',3)}
                      className='me-1'
                    />
                    No
                  </label>
                  <label className='me-2' htmlFor="Q2-NA">
                    <input
                      {...register("Q2")}
                      type="radio"
                      value="NA"
                      id="Q2-NA"
                      checked={activeMode.Q2 === 'NA' ? true : false}
                      onChange={() => handleCheckBox('NA', 'Q2',3)}
                      className='me-1'
                    />
                    NA
                  </label>
                </div>
                <div>
                  <p>Is cricket a popular sport in many countries?</p>
                  <label className='me-2' htmlFor="Q3-Yes">
                    <input
                      {...register("Q3")}
                      type="radio"
                      value="Yes"
                      id="Q3-Yes"
                      checked={activeMode.Q3 === 'Yes' ? true : false}
                      onChange={() => handleCheckBox('Yes', 'Q3',3)}
                      className='me-1'
                    />
                    Yes
                  </label>
                  <label className='me-2' htmlFor="Q3-No">
                    <input
                      {...register("Q3")}
                      type="radio"
                      value="No"
                      id="Q3-No"
                      checked={activeMode.Q3 === 'No' ? true : false}
                      onChange={() => handleCheckBox('No', 'Q3',3)}
                      className='me-1'
                    />
                    No
                  </label>
                  <label className='me-2' htmlFor="Q3-NA">
                    <input
                      {...register("Q3")}
                      type="radio"
                      value="NA"
                      id="Q3-NA"
                      checked={activeMode.Q3 === 'NA' ? true : false}
                      onChange={() => handleCheckBox('NA', 'Q3',3)}
                      className='me-1'
                    />
                    NA
                  </label>
                </div>
                {active ? <div className="d-flex justify-content-left mt-3">
                  <Button className='me-2' color="primary" outline type="submit">
                    Submit
                  </Button>{" "}
                  <Button color="danger" outline>
                    Cancel
                  </Button>
                </div> : <></>}
              </form> */}
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default AccordianComp;
