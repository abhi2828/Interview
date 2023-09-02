import React, { useState } from 'react';

const Accordion2 = () => {
  const [accordion2Data, setAccordionData] = useState([
    // Define your questions and their initial states here
    { question: 'Question 1', answer: 'No' },
    { question: 'Question 2', answer: 'No' },
    // Add more questions as needed
  ]);

  const [editableAccordion, setEditableAccordion] = useState(0);

  const handleRadioChange = (index, value) => {
    const updatedAccordionData = [...accordionData];
    updatedAccordionData[index].answer = value;
    setAccordionData(updatedAccordionData);

    if (value === 'Yes' || value === 'NA') {
      // Enable the next accordion for editing
      setEditableAccordion(editableAccordion + 1);
    } else {
      // Disable the next accordion if any question is set to 'No'
      setEditableAccordion(editableAccordion - 1);
    }
  };

  const renderAccordion = (index) => (
    <div key={index} className="accordion">
      <h2>Accordion {index + 1}</h2>
      {accordionData.map((item, i) => (
        <div key={i} className="question">
          <p>{item.question}</p>
          <label>
            <input
              type="radio"
              value="Yes"
              checked={item.answer === 'Yes'}
              onChange={() => handleRadioChange(i, 'Yes')}
              disabled={editableAccordion !== index}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="No"
              checked={item.answer === 'No'}
              onChange={() => handleRadioChange(i, 'No')}
              disabled={editableAccordion !== index}
            />
            No
          </label>
          <label>
            <input
              type="radio"
              value="NA"
              checked={item.answer === 'NA'}
              onChange={() => handleRadioChange(i, 'NA')}
              disabled={editableAccordion !== index}
            />
            NA
          </label>
        </div>
      ))}
      {editableAccordion === index && (
        <div className="actions">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      )}
    </div>
  );

  return (
    <div className="accordion-container">
      {[0, 1, 2].map((index) => renderAccordion(index))}
    </div>
  );
};

export default Accordion;
