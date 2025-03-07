import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import Login from '../pages/authentication/Login';
import ErrorPage from '../pages/error/ErrorPage';
import TermsCondition from '../pages/dashboard/PrivacyPolicy';

import Notification from '../pages/dashboard/Notification';
import ForgetPassword from '../pages/authentication/ForgetPassword';
import VerifyOtp from '../pages/authentication/VerifyOtp';
import NewPassword from '../pages/authentication/NewPassword';

import Earing from '../pages/dashboard/earing/Earing';
import Dashboard from '../pages/dashboard/dasboard/Dashboard';

import PrivacyPolicy from '../pages/dashboard/PrivacyPolicy';
import EditProfile from '../pages/dashboard/profile/EditProfile';
import ChangePassword from '../pages/dashboard/profile/ChangePassword';
import Donate from '../pages/dashboard/donate/Donate';
import TopCommunities from '../pages/dashboard/topCommunities/TopCommunities';
import Events from '../pages/dashboard/events/Events';
import Users from '../pages/dashboard/users/Users';
import Agency from '../pages/dashboard/agency/Agency';
import Profile from '../pages/dashboard/profile/Profle';
import SignUp from '../pages/authentication/SignUp';
import Category from '../pages/dashboard/category/Category';
// import Setting from '../pages/dashboard/setting/Setting';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/users', element: <Users /> },
            { path: '/donate', element: <Donate /> },
            { path: '/events', element: <Events /> },
            { path: '/earing', element: <Earing /> },
            { path: '/agency', element: <Agency /> },
            { path: '/category', element: <Category /> },
            // { path: '/profile', element: <Setting /> },
            { path: '/top-communities', element: <TopCommunities /> },
            { path: '/about-us', element: <TermsCondition /> },
            { path: '/terms-condition', element: <TermsCondition /> },
            { path: '/policy', element: <PrivacyPolicy /> },

            { path: '/notification', element: <Notification /> },
            { path: '/profile', element: <Profile /> },
            { path: '/edit-profile', element: <EditProfile /> },
            { path: '/change-password', element: <ChangePassword /> },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/forget-password', element: <ForgetPassword /> },
    { path: '/verify-otp', element: <VerifyOtp /> },
    { path: '/new-password', element: <NewPassword /> },
]);

export default router;
