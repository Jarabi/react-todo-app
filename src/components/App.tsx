import BackgroundHeading from './BackgroundHeading';
import Header from './Header';
import TodoList from './TodoList';
import Sidebar from './Sidebar';
import Footer from './Footer';

function App() {
    return (
        <div className='flex flex-col justify-center items-center font-sans bg-[#f1d4b3] min-h-screen'>
            <BackgroundHeading />
            <main className='relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden'>
                <Header />
                <TodoList />
                <Sidebar />
            </main>
            <Footer />
        </div>
    );
}

export default App;
