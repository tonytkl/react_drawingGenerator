const Error = () => {
  return (
    <div className="flex flex-col items-center p-6 text-center">
      <h1 className="text-4xl font-bold">
        Looks like you are viewing the app from small screen
      </h1>
      <img src="apology.png" alt="apology" className="mt-10 animate-bounce" />
      <h2 className="text-2xl font-semibold">
        Please view the app from a screen with a width of 1920px or more
      </h2>
    </div>
  );
};

export default Error;
