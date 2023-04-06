import  { useState } from 'react';
import { Section  } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Container } from './Container/Container.styled';
export function App ()  {

 
  const[good, setGood] = useState (0);
  const[neutral, setNeutral] = useState (0);
  const[bad, setBad] = useState (0);

  const options = ['good', 'neutral', 'bad'];
  const totalFeedback = good + neutral + bad; 
  const positiveFeedbackPercentage = Math.round(good / totalFeedback * 100);
  
  const updateFeedback  = (button) => {

    switch (button)  {
    case 'good': 
    setGood  (prevState => prevState + 1)
    break;
    case 'neutral':
      setNeutral (prevState => prevState + 1)
      break;
      case 'bad':
        setBad (prevState => prevState + 1)
        break;
        default:
          return;
    }
  };
  

  
  

 
  

  
   


   
    return (
      <Container>
        <Section title='Please leave feedback'>
        <FeedbackOptions 
        options={options}
          onLeaveFeedback={updateFeedback}
           />
         </Section>
         
          
   
       
    
       <Section title='Statistics'>
       {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
           total={totalFeedback}
            goodPersentage={positiveFeedbackPercentage}
          />
         
          ) : (
        <Notification message={"There is no feedback"} /> ) }
        </Section>
  </Container>
    
   
    )

          }
    
    

  
