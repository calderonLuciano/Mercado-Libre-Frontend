import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const SearchPage = lazy(() => import('./pages/search/search.page'));
const ItemsPage = lazy(() => import('./pages/items/items.page'));
const ItemDetailPage = lazy(() => import('./pages/itemDetail/itemDetail.page'))

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={SearchPage}/>
        <Route exact path="/items" component={ItemsPage}/>
        <Route exact path="/items/:id" component={ItemDetailPage}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
