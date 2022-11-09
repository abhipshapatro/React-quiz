import React, { useState } from "react";

export default function Questions() {
  // const [ques, setQues] = useState(null);
  const [quesList, setQuesList] = useState([]);
  const [inputQues, setInputQues] = useState([{ question: '', hint: '' }]);
  const [count, setCount] = useState(1);

  const handleCount = (type) => {
    type === "increment" ? setCount(count + 1) : setCount(count - 1);
  };
  const handleChange = (index, e) => {
    let data = [...inputQues];
    data[index][e.target.question] = e.target.value
    setInputQues(data)
    console.log(inputQues)
  };

  function addQuesHandler(e) {
    let newList = {question: '', hint: ''}
    setInputQues([...inputQues, newList])
    console.log(inputQues);
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleRemove(){
    // quesList.pop();
    // quesList = data.filter((ques) => ques. !== i);
    console.log(quesList);
  }

  return (
    <div className="container w-full items-center justify-center mx-10">
      <form onSubmit={handleSubmit}>
        { inputQues.map((input, index) => {
          return(
            // {/* main div */}
          <div key={index} className="flex flex-col">
            {/* header */}
            <div className="mb-2">
              <h1 className="text-center text-3xl text-white">
                Question {count}
              </h1>
            </div>
            {/* item 1 */}
            <div className="flex items-center justify-center w-full ">
              <input
                className="w-full rounded-lg px-4 py-2 bg-darkGray text-white placeholder-lightGray"
                type="text"
                name="question"
                value={input.question}
                placeholder="Question"
                onChange={event => handleChange(index, event)}
              />
            </div>
            {/* item 2 */}
            <div className="flex items-center justify-center w-full gap-5 my-4 ">
              <input
                className="w-full rounded-lg px-4 py-2 bg-darkGray text-white placeholder-white"
                type="text"
                placeholder="Option 1"
              />
              <input
                className="w-full rounded-lg px-4 py-2 bg-darkGray text-white placeholder-white"
                type="text"
                placeholder="Option 2"
              />
            </div>
            {/* item 3 */}
            <div className="flex items-center justify-center w-full gap-5 my-2 ">
              <input
                className="w-full rounded-lg px-4 py-2 bg-darkGray text-white placeholder-lightGray"
                type="text"
                placeholder="Option 3"
              />
              <input
                className="w-full rounded-lg px-4 py-2 bg-darkGray text-white placeholder-lightGray"
                type="text"
                placeholder="Option 4"
              />
            </div>
            {/* item 4 - dropdown */}
            <div className="flex items-center justify-center w-full ">
              <select className="w-full text-white rounded-lg bg-darkGray outline-none p-2 my-2">
                <option>Select answer</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
              </select>
            </div>
            {/* item 5 - hint */}
            <div className="flex items-center justify-center w-full ">
              <textarea
                className="bg-darkGray text-white placeholder-lightGray w-full my-2 p-4 rounded-lg"
                name="hint"
                id=""
                rows="2"
                placeholder="Hint"
              ></textarea>
            </div>
            {/* item 6 - file */}
            <div className="flex items-center justify-center w-full ">
              <input
                className="my-8 p-2 rounded-lg text-white text-sm bg-darkGray"
                type="file"
                name=""
                id=""
              />
            </div>
            {/* delete btn */}
            <div className="flex items-center justify-center w-full ">
              <button className="w-full bg-brightRed rounded-lg p-2 text-white">
                Delete
              </button>
            </div>
            {/* add + remove btn */}
            <div className="flex items-center justify-between w-full gap-20 ">
              <button
                // onClick={addQuesHandler}
                onClick={() => {
                  addQuesHandler();
                  handleCount("increment");
                }}
                className="w-full bg-darkGray rounded-lg my-10 px-2 py-3 text-white"
              >
                Add Question
              </button>
              <button
                onClick={() => {
                  handleRemove();
                  handleCount("decrement");
                }}
                className="w-full bg-darkGray rounded-lg my-10 px-2 py-3 text-white"
              >
                Remove Last Question
              </button>
            </div>
            {/* submit  */}
            <div className="flex items-center justify-center w-full ">
              <button
              // onClick={handleSubmit} 
              className='w-full bg-brightGreen rounded-lg p-2 text-white'>Submit</button>
            </div>
          </div>)
        })}
      </form>
    </div>
  )}

            {/* main div */}
        // <div className="flex flex-col">
        //   {/* header */}
        //   <div className="mb-2">
        //     <h1 className="text-center text-3xl text-white">
        //       Question {count}
        //     </h1>
        //   </div>
        //   {/* item 1 */}
        //   <div className="flex items-center justify-center w-full ">
        //     <input
        //       onChange={handleAdd}
        //       className="w-full rounded-lg px-4 py-2 bg-darkGray text-white placeholder-lightGray"
        //       type="text"
        //       name="question"
        //       value={inputQues.question}
        //       placeholder="Question"
        //     />
        //   </div>
        //   {/* item 2 */}
        //   <div className="flex items-center justify-center w-full gap-5 my-4 ">
        //     <input
        //       className="w-full rounded-lg px-4 py-2 bg-darkGray text-white placeholder-white"
        //       type="text"
        //       placeholder="Option 1"
        //     />
        //     <input
        //       className="w-full rounded-lg px-4 py-2 bg-darkGray text-white placeholder-white"
        //       type="text"
        //       placeholder="Option 2"
        //     />
        //   </div>
        //   {/* item 3 */}
        //   <div className="flex items-center justify-center w-full gap-5 my-2 ">
        //     <input
        //       className="w-full rounded-lg px-4 py-2 bg-darkGray text-white placeholder-lightGray"
        //       type="text"
        //       placeholder="Option 3"
        //     />
        //     <input
        //       className="w-full rounded-lg px-4 py-2 bg-darkGray text-white placeholder-lightGray"
        //       type="text"
        //       placeholder="Option 4"
        //     />
        //   </div>
        //   {/* item 4 - dropdown */}
        //   <div className="flex items-center justify-center w-full ">
        //     <select className="w-full text-white rounded-lg bg-darkGray outline-none p-2 my-2">
        //       <option>Select answer</option>
        //       <option value="1">Option 1</option>
        //       <option value="2">Option 2</option>
        //       <option value="3">Option 3</option>
        //       <option value="4">Option 4</option>
        //     </select>
        //   </div>
        //   {/* item 5 - hint */}
        //   <div className="flex items-center justify-center w-full ">
        //     <textarea
        //       className="bg-darkGray text-white placeholder-lightGray w-full my-2 p-4 rounded-lg"
        //       name="hint"
        //       id=""
        //       rows="2"
        //       placeholder="Hint"
        //     ></textarea>
        //   </div>
        //   {/* item 6 - file */}
        //   <div className="flex items-center justify-center w-full ">
        //     <input
        //       className="my-8 p-2 rounded-lg text-white text-sm bg-darkGray"
        //       type="file"
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {/* delete btn */}
        //   <div className="flex items-center justify-center w-full ">
        //     <button className="w-full bg-brightRed rounded-lg p-2 text-white">
        //       Delete
        //     </button>
        //   </div>
        //   {/* add + remove btn */}
        //   <div className="flex items-center justify-between w-full gap-20 ">
        //     <button
        //       // onClick={addQuesHandler}
        //       onClick={() => {
        //         addQuesHandler();
        //         handleCount("increment");
        //       }}
        //       className="w-full bg-darkGray rounded-lg my-10 px-2 py-3 text-white"
        //     >
        //       Add Question
        //     </button>
        //     <button
        //       onClick={() => {
        //         handleRemove();
        //         handleCount("decrement");
        //       }}
        //       className="w-full bg-darkGray rounded-lg my-10 px-2 py-3 text-white"
        //     >
        //       Remove Last Question
        //     </button>
        //   </div>
        //   {/* submit  */}
        //   <div className="flex items-center justify-center w-full ">
        //     <button
        //     // onClick={handleSubmit} 
        //     className='w-full bg-brightGreen rounded-lg p-2 text-white'>Submit</button>
        //   </div>
        // </div>