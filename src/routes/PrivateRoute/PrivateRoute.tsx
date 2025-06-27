import { Navigate, useLocation } from 'react-router-dom';
import { useGetProfileQuery } from '../../redux/apiSlice/profile/profile';
import Loading from '../../components/shared/Loading';

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
    const location = useLocation();

    const { data: profile, isFetching, isLoading, isError } = useGetProfileQuery(undefined);

    if (isLoading || isFetching) {
        return <Loading />;
    }

    if (isError || !profile?.data) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    if (profile?.data?.role === 'SUPER_ADMIN') {
        return children;
    }

    return <Navigate to="/login" />;
}
