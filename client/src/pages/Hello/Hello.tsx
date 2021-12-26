import React from 'react';

// a server side call
function Hello() {
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <div className="Hello">
      <header className="hello-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default Hello;
