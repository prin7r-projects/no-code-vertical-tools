import { useQuery } from 'wasp/client/operations';
import { getUser } from '@src/user/operations';

export const DashboardPage = () => {
  const { data: user, isLoading } = useQuery(getUser);

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <div>Please log in</div>;

  const role = user.role || 'buyer';

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Logged in as: {user.email} ({role})</p>

      {role === 'buyer' && (
        <div>
          <h2 className="text-xl mb-2">Buyer Dashboard</h2>
          <p>View your subscriptions, manage cancellations, request refunds.</p>
        </div>
      )}

      {role === 'builder' && (
        <div>
          <h2 className="text-xl mb-2">Builder Dashboard</h2>
          <p>View your tools, track MRR, check payouts.</p>
        </div>
      )}

      {role === 'operator' && (
        <div>
          <h2 className="text-xl mb-2">Operator Dashboard</h2>
          <p>Review submissions, manage tools, run payouts.</p>
        </div>
      )}
    </div>
  );
};
