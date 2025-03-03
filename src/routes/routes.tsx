import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import Login from '../pages/authentication/Login';
import ErrorPage from '../pages/error/ErrorPage';
import TermsCondition from '../pages/dashboard/PrivacyPolicy';

import Notification from '../pages/dashboard/Notification';
import ForgetPassword from '../pages/authentication/ForgetPassword';
import VerifyOtp from '../pages/authentication/VerifyOtp';
import NewPassword from '../pages/authentication/NewPassword';

import TotalEaring from '../pages/dashboard/TotalEaring/TotalEaring';
import Dashboard from '../pages/dashboard/dasboard/Dashboard';

import PrivacyPolicy from '../pages/dashboard/PrivacyPolicy';
import EditProfile from '../pages/dashboard/profile/EditProfile';
import ChangePassword from '../pages/dashboard/profile/ChangePassword';
import Donate from '../pages/dashboard/donate/Donate';
import TopCommunities from '../pages/dashboard/topCommunities/TopCommunities';
import Events from '../pages/dashboard/events/Events';
import Users from '../pages/dashboard/users/Users';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Dashboard /> },
            { path: 'users', element: <Users /> },
            { path: 'donate', element: <Donate /> },
            { path: 'events', element: <Events /> },
            { path: 'totalEaring', element: <TotalEaring /> },
            { path: 'top-communities', element: <TopCommunities /> },
            { path: 'terms-condition', element: <TermsCondition /> },
            { path: 'policy', element: <PrivacyPolicy /> },

            { path: 'notification', element: <Notification /> },
            { path: 'edit-profile', element: <EditProfile /> },
            { path: 'change-password', element: <ChangePassword /> },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/forget-password', element: <ForgetPassword /> },
    { path: '/verify-otp', element: <VerifyOtp /> },
    { path: '/new-password', element: <NewPassword /> },
]);

export default router;
