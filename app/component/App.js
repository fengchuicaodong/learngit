/**
 * Created by liumanli on 2018/1/18.
 */
import React from 'react';
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';
import '../style/app.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Sidebar/>
                <Content/>
            </div>
        )
    }
}
export default App;