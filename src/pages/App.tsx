import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from './signIn';
import MainLayout from '../layouts/MainLayout';
import Follower from './follower';
import Dashboard from './dashboard';
import Global from './global';
import UserDetail from './userDetail';
import Prize from './prize';
import LoginStatus from './loginStatus';
import Limits from './limits';
import PushNotifications from './pushNotifications';
import PrizeManagement from './prizeManagement';
import Roles from './roles';
import Users from './users';
import Administrator from './administrator';
import AdministratorDetail from './administratorDetail';
import InviteTemplates from './InviteTemplates';
import Wheel from './wheel'

const App: React.FC = () => {
  return (
    <div className="App relative">
      <Routes>
        <Route path="/" element={<SignIn />}>
          <Route index element={<SignIn />} />
        </Route>
        <Route path="user" element={<MainLayout />}>
          <Route path="users" >
            <Route index element={<Users />} />
            <Route path=":id" element={<UserDetail />} />
          </Route>
          <Route path="administrators" >
            <Route index element={<Administrator />} />
            <Route path=":id" element={<AdministratorDetail />} />
          </Route>
          <Route path="role" element={<Roles />} />
        </Route>
        <Route path="dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="global" element={<MainLayout />}>
          <Route index element={<LoginStatus />} />
          <Route path="login" element={<LoginStatus />} />
          <Route path="limits" element={<Limits />} />
        </Route>
        <Route path="invite" element={<MainLayout />}>
          <Route index element={<InviteTemplates />} />
        </Route>
        <Route path="communications" element={<MainLayout />}>
          <Route index element={<PushNotifications />} />
          <Route path="notification" element={<PushNotifications />} />
        </Route>
        <Route path="game" element={<MainLayout />}>
          <Route index element={<Prize />} />
          <Route path="prize" element={<Prize />} />
          <Route path="prize-management" element={<PrizeManagement />} />
          <Route path="wheel" element={<Wheel />} />
        </Route>
        <Route path="reporting" element={<MainLayout />}>
          <Route index element={<Global />} />
          <Route path="mobile" element={<Follower />} />
          <Route path="invites" element={<Follower />} />
          <Route path="winnings" element={<Follower />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;