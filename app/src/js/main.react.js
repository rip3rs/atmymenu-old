/**
 * The main entry point
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header.react';

class App extends React.Component {
    render() {
        return(
            <main>
                <Header />
            </main>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('wrapper'));
// export default App;
