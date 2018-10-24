import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PostsIndex from '../components/posts_index';
import PostsNew from '../components/posts_new';
import PostsShow from '../components/posts_show';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/posts/new" component={PostsNew}/>
                        <Route path="/posts/:id" component={PostsShow}/>
                        <Route path="/" component={PostsIndex}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
};

export default App;