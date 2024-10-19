const NotFound = () => {
  return (
    <div className="flex items-center flex-col justify-center fixed top-0 left-0 right-0 bottom-0 z-[999] bg-light overflow-hidden">
      <h1 className="text-5xl text-dark-brown font-bold">404</h1>
      <p>Page not found</p>
      <a href="/" className="mt-4">
        Go back home
      </a>
    </div>
  );
};

export default NotFound;
