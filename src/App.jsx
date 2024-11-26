import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-green-500">
        Hello world!
      </h1>
      <button className="btn btn-primary">Primary</button>
      <div>
        <div className="card sm:max-w-sm">
          <figure>
            <img
              src="https://cdn.flyonui.com/fy-assets/components/card/image-9.png"
              alt="Watch"
            />
          </figure>
          <div className="card-body">
            <h5 className="card-title mb-2.5">Apple Smart Watch</h5>
            <p className="mb-4">
              Stay connected, motivated, and healthy with the latest Apple
              Watch.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
              <button className="btn btn-secondary btn-soft">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
