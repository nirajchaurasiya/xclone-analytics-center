import RoutesElem from "./imports";
export default function App() {
  return (
    <RoutesElem.Router>
      <RoutesElem.Header />
      <RoutesElem.Routes>
        <RoutesElem.Route
          exact
          path="/"
          element={
            <div className="in-development-mode">
              <div>
                <h4>This page is in development!!</h4>
                <p>A tweet will be posted when this page is complete.</p>
              </div>
            </div>
          }
        />
      </RoutesElem.Routes>
    </RoutesElem.Router>
  );
}
