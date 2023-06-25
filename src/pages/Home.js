import "./Home.css";

function Home() {
  return (
    <>
      <h1 className="text-center mt-3 mb-5">Welcome To My Crud App</h1>
      <div className="input-group mar-50">
        <button className="input-group-text">Subscribe</button>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInputGroup1"
            placeholder="Enter Your Email Address"
          />
          <label for="floatingInputGroup1">E-mail</label>
        </div>
      </div>
    </>
  );
}
export default Home;
