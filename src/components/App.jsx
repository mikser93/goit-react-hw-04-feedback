import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const onBtnClick = event => {
  const target = event.target.name;
  switch (target) {
    case 'good':
      setGood(prev => prev + 1);
      break;
    case 'neutral':
      setNeutral(prev => prev + 1);
      break;
    case 'bad':
      setBad(prev => prev + 1);
      break;
    default:
      throw new Error('Unexpected value');
  }
}

return (
  <>
    <Section title="Please leave feedback">
      <FeedbackOptions
        state={{ good, neutral, bad }}
        onLeaveFeedback={onBtnClick}
      />
    </Section>
    <Section title="Statistics">
      <Statistics state={{ good, neutral, bad }} />
    </Section>
  </>
);
};
