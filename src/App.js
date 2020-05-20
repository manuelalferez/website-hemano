import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home/Home";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import Contact from "./Component/Contact/Contact";
import Layout from "./Component/Layout/Layout";
import Post from "./Component/CV/CV";
import GA from "./GoogleAnalytics";
import ScrollToTop from "./Component/ScrollToTop";
import Work from "./Component/Work/Work";
import CV from "./Component/CV/CV";

function App() {
  return (
    <BrowserRouter>
      {GA.init() && <GA.RouteTracker />}
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cv" component={CV} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/blog/post/:id" component={Post} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
