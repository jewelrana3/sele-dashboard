import Chart from './Chart';
import EventStates from './EventStates';
import RecentUser from './RcentUser';

export default function Dashboard() {
    return (
        <div>
            <div>
                <EventStates />
            </div>
            <div>
                <Chart />
            </div>
            <div className="mt-5">
                <RecentUser />
            </div>
        </div>
    );
}
