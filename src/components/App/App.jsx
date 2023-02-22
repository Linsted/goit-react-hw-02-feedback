import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { SectionFeedback } from "components/SectionFeedback/SectionFeedback";
import { Statistics } from "components/Statistics/Statistics";
import React from "react";




export class App extends React.Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  

  handleFeedbacks = (option) => {
    this.setState((prevState) => {

      return {
        [option]: prevState[option] + 1,
      }
      
    })
    
  }


  render() {
  
    const { state,handleFeedbacks } = this;
    const totalFeedbacks = state.good + state.neutral + state.bad;
    const postitveFeedbacks = Math.round((state.good / totalFeedbacks) * 100);
     return (
      
        <SectionFeedback title="Please leave feedback">
         <FeedbackOptions
           options={Object.keys(state)}
           onLeaveFeedback={handleFeedbacks} />
         
         < Statistics
           good={state.good}
           neutral={state.neutral}
           bad={state.bad}
           total={totalFeedbacks}
            positivePercentage={postitveFeedbacks ? postitveFeedbacks : 0}
          />
         
         </SectionFeedback>
         
       
  );
   }
   
 
};
