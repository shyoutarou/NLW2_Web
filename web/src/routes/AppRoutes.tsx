import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';

const AppRoutes: React.FC = () => (
    <BrowserRouter  >
<        Route path="/" exact component={Landing} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
        {/* <Route path="/profile" component={TeacherProfile} />
        <Route path="/success" component={Notify} /> */}
    </BrowserRouter>
);

export default AppRoutes;