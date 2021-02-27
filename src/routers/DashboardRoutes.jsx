import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";
export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/react-heroes-app/marvel" component={MarvelScreen} />
          <Route exact path="/react-heroes-app/dc" component={DcScreen} />
          <Route exact path="/react-heroes-app/hero/:heroeId" component={HeroScreen} />
          <Route  path="/react-heroes-app/search" component={SearchScreen} />

          <Redirect to="/react-heroes-app/marvel" />
        </Switch>
      </div>
    </>
  );
};
