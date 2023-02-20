import { useGetIdentity, useOne } from '@pankod/refine-core';

import { Profile } from 'components';

const myProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: 'users',
    id: user?.userid,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return <div>myProfile</div>;
};

export default myProfile;
