# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

Open source JS library to help you build a single page web page.  Helps you to change data without reloading the whole page. You use JSX to write your code, so you can use the HTML or CSS concepts that you know to help you write your JS.

1. Describe component state.

useState is used to store property values, and you can call that state to change the data.

1. Describe props.

Props pass information into you JSX HTML. you call information from your parents component with props but can’t go back from child to parent.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

useEffect brings in your API and sends out your data. You have to make sure you use dependencies so you don't break your browere calling the data too many times. While in the useEffect, you set setUseState to be able to call your data into your react components.