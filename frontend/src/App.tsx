import { useEffect } from 'react';
import { getHealth } from './services/api';
import { Scanner } from './pages/Scanner';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Result } from './pages/Result';
import { Dashboard } from './pages/Dashboard';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';

function App() {
	useEffect(() => {
		getHealth().then(console.log);
	}, []);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Scanner />} />
				<Route path='/scanner' element={<Scanner />} />
				<Route path='/result' element={<Result />} />
				<Route path='/dashboard' element={<Dashboard data={[]} />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
