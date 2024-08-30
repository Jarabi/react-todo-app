import React from 'react';
import ReactDOM from 'react-dom/client';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';
import App from './components/App.tsx';
import TodosContextProvider from './contexts/TodosContextProvider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <KindeProvider
            clientId='e0788a8a2f2948f0843adf42bc70edc6'
            domain='https://managemytasks.kinde.com'
            redirectUri={
                process.env.NODE_ENV === 'production'
                    ? 'https://react-todo-app-khaki-eight.vercel.app/'
                    : 'http://localhost:5173'
            }
            logoutUri={
                process.env.NODE_ENV === 'production'
                    ? 'https://react-todo-app-khaki-eight.vercel.app/'
                    : 'http://localhost:5173'
            }
        >
            <TodosContextProvider>
                <App />
            </TodosContextProvider>
        </KindeProvider>
    </React.StrictMode>
);
