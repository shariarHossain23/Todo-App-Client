import Fotter from '../Shared/Fotter';
import Navbar from '../Shared/Navbar';
import DisplayTodo from './DisplayTodo';

const Home = () => {
    return (

        <div>
            <Navbar></Navbar>
        <div className='px-12 mt-20'>
           <DisplayTodo></DisplayTodo>
        </div>
        <Fotter></Fotter>
        </div>
    );
};

export default Home;