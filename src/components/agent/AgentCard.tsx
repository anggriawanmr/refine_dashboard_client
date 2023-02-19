import { EmailOutlined, LocationCity, Phone, Place } from '@mui/icons-material';
import { useGetIdentity } from '@pankod/refine-core/dist/hooks';
import { Typography, Box, Stack } from '@pankod/refine-mui';
import { Link } from '@pankod/refine-react-router-v6';

import { AgentCardProp, InfoBarProps } from 'interfaces/agent';

const AgentCard = ({
  id,
  name,
  email,
  avatar,
  noOfProperties,
}: AgentCardProp) => {
  const { data: currentUser } = useGetIdentity();

  const generateLink = () => {
    if (currentUser.email === email) return '/my-profile';

    return `/agent/show/${id}`;
  };

  return <Box component={Link} to={generateLink()}></Box>;
};

export default AgentCard;
