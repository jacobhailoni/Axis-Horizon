import React, { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

const defaultItems: AccordionItem[] = [
  {
    question: 'Is my technology allowed on tech?',
    answer: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
  },
  {
    question: 'How to soft launch your business?',
    answer: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
  },
  {
    question: 'How to turn visitors into contributors',
    answer: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
  },
  {
    question: 'How can I find my solutions?',
    answer: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
  },
];

interface AccordionProps {
  items?: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items = defaultItems }) => {
  const [activeKey, setActiveKey] = useState<number | null>(1);

  const handleToggle = (key: number) => {
    setActiveKey(prev => (prev === key ? null : key));
  };

  return (
    <ul className="accordion-box mt-30 wow fadeInRight">
      {items.map((item, index) => {
        const key = index + 1;
        return (
        <li
          key={key}
          className={`accordion block ${activeKey === key ? 'active-block' : ''}`}
          onClick={() => handleToggle(key)}
        >
          <div className={`acc-btn ${activeKey === key ? 'active' : ''}`}>
            {item.question}
            <div className="icon fa fa-plus" />
          </div>
          <div className={`acc-content ${activeKey === key ? 'current' : ''}`}>
            <div className="content">
              <div className="text">{item.answer}</div>
            </div>
          </div>
        </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
