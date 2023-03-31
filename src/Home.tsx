//this is the content for the home page. Hopefully it looks nice!

function HomePage() {
  return (
    <>
      <div className="container text-center py-1">
        <h1>Joel Hilton's Movie Page</h1>
        <h3>This is a very simple website to display 3 things</h3>
        <ul className="list-group list-group-flush my-0">
          <li className="list-group-item bg-transparent border-0">
            A landing page (this page)
          </li>
          <li className="list-group-item bg-transparent border-0">
            A podcast page
          </li>
          <li className="list-group-item bg-transparent border-0">
            A page to display Joel's movie collection
          </li>
        </ul>
        <br></br>
        <br></br>
        <img
          src="./JoelHiltonHeadshot.jpg"
          alt="joel"
          className="img-fluid w-1"
        ></img>
        <br></br>
        <br></br>

        <div className="container-fluid bg-dark text-light py-3">
          <footer className="bg-dark text-light py-2">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p>Copyright © 2023, Joel Hilton.</p>
                </div>
                <div className="col-md-6 text-md-right">
                  <p>Designed by JAMES LEAR!! So cool!!</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default HomePage;

// This is the home page
