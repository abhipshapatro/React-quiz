import { useState } from "react";
import Date from "./Components/Date";
import Questions from "./Components/Questions";

function App() {

  return (
    <div className="flex flex-col items-center justify-start mx-auto bg-bgGray rounded-3xl shadow-lg shadow-lightGray h-full w-fit ">
      <div className="container flex items-center justify-center mt-5">
        {/* date */}
        <Date />
      </div>
      <div className="container flex items-center justify-center my-7">
        {/* questions */}
        <Questions />
      </div>
      
    </div>
  );
}

export default App;

//   console.log("inside add ques handler")
  //   let id;
  //   if(quesList.length === 0)
  //     id = 0;
  //   else id = quesList[quesList.length - 1].id +1;

  //   const myQuestions = [{
  //     id: id,
  //     question: ques
  //   }]

  //   quesList = setQuesList([...quesList, myQuestions])
  //   console.table(quesList)
  // }

  // const removeLastQues = (ques) => {
  //   setQues(quesList.filter((e) => {
  //     return e !== (ques.id -1);
  //   })
  //   )