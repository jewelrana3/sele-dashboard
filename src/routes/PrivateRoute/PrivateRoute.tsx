import { Navigate, useLocation } from 'react-router-dom';
import { useGetProfileQuery } from '../../redux/apiSlice/profile/profile';

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
    const location = useLocation();

    const { data: profile, isFetching, isLoading, isError } = useGetProfileQuery(undefined);

    if (isLoading || isFetching) {
        return <span>Loading...</span>;
    }

    if (isError || !profile?.data) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    if (profile?.data?.role === 'SUPER_ADMIN') {
        return children;
    }

    return <Navigate to="/login" />;
}
