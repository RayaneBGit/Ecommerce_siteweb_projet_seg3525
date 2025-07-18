import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { PanierProvider } from './PanierContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PanierProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PanierProvider>
);

