import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/common/Login';
import Signup from './Pages/common/Signup';
import Home from './Pages/user/Home';
import AdminDashboard from './Pages/admin/Dashboard';
import PostsHome from './Pages/user/posts/Home';
import WorkoutPlansHome from './Pages/user/workoutPlans/Home';
import MealPlansHome from './Pages/user/mealPlans/Home';
import WorkoutStatusesHome from './Pages/user/workoutStatuses/Home';
import NotFound from './Pages/common/NotFound';
import StickyFooter from './components/Footer/StickyFooter';
import ContactUs from './Pages/common/ContactUs';
import AboutUs from './Pages/common/AboutUs';
import AddPost from './Pages/user/posts/AddPost';
import AddMealPlan from './Pages/user/mealPlans/AddMealPlan';
import AddWorkoutPlan from './Pages/user/workoutPlans/AddWorkoutPlan';
import AddWorkoutStatus from './Pages/user/workoutStatuses/AddWorkoutStatus';

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={1000} />

      <Routes>


        {/*common Routes*/}

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about' element={<AboutUs />} />

        {/*user Routes*/}
        <Route path='/' element={<Home />} />
        <Route path='/workoutPlans/home' element={<WorkoutPlansHome />} />
        <Route path='/workoutPlans/addWorkoutPlan' element={<AddWorkoutPlan />} />

        <Route path='/posts/home' element={<PostsHome />} />
        <Route path='/posts/addPost' element={<AddPost />} />

        <Route path='/mealPlans/home' element={<MealPlansHome />} />
        <Route path='/mealPlans/addMealPlan' element={<AddMealPlan />} />

        <Route path='/workoutStatuses/home' element={<WorkoutStatusesHome />} />
        <Route path='/workoutStatuses/addWorkoutStatus' element={<AddWorkoutStatus />} />
         

        {/*Admin Routes*/}
        <Route path='/dashboard' element={<AdminDashboard />}>
         
        </Route>

      </Routes>
      <StickyFooter />

    </BrowserRouter>
  )
}