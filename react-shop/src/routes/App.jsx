import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.css';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ChangePassword from '../containers/ChangePassword';
import CreateAccount from '../containers/CreateAccount';
import EditAccount from '../containers/EditAccount';

const App = () => {
	return (
		<BrowserRouter>

			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/recovery-password" element={<RecoveryPassword />} />
					<Route path="/change-password" element={<ChangePassword />} />
					<Route path="/create-account" element={<CreateAccount />} />
					<Route path="/edit-account" element={<EditAccount />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Layout>

		</BrowserRouter>


	);
}

export default App;