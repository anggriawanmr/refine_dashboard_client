import { useGetIdentity, useOne } from '@pankod/refine-core';

import { Profile } from 'components';

const MyProfile = () => {
  const { data: User } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: 'users',
    id: User?.userid,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <Profile
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};

export default MyProfile;
