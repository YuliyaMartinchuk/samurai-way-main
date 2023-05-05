import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import s from "./components/ Dialogs/Dialogs.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/ Dialogs/Dialogs";
import  {RootStateType, StoreType} from './redux/state'

type AppProps = {
    // store:StoreType
    _state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


const App: React.FC <AppProps> = (props) => {
    // const  state = props.store.getState()

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={props._state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        profilePage={props._state.profilePage}
                        addPostProfile={props.addPost.bind(props._state)}
                        updateNewPostText={props.updateNewPostText.bind(props._state)}
                    />}
                    />
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogsPage={props._state.dialogsPage}/>}/>
                    {/*    // dialogs={ state.dialogsPage.dialogs}*/}
                    {/*    // messages={state.dialogsPage.messages}*/}
                    {/*/>}/>*/}
                    {/*<Route path = "/news" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}
                    {/*<Route path = "/music" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}
                    {/*<Route path = "/settings" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}

                </div>


            </div>
        </BrowserRouter>
    );
}

export default App;
