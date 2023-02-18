import { useList } from '@pankod/refine-core';
import { Typography, Box } from '@pankod/refine-mui';

import { AgentCard } from 'components';

const agent = () => {
  const { data, isLoading, isError } = useList({
    resource: 'users',
  });

  const allAgents = data?.data;

  return <div>agent</div>;
};

export default agent;
