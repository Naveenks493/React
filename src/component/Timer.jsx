

function SimpleGreeting() {
  const now = new Date();
  const hour = now.getHours();
 const time = now.toLocaleTimeString();

  let greeting = "Hello!";
  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }
  const period = hour >= 12 ? "PM" : "AM";

  const showSleepMessage = hour >= 22;

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2>{greeting}</h2>
      <p>
        Current Time: {time} {period}
      </p>
      {showSleepMessage && <p>Its late! Go to bed </p>}
      <link to >Navigate</link>
    </div>
  );
}

export default SimpleGreeting;