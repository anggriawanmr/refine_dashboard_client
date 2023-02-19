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
  return <div>AgentCard</div>;
};

export default AgentCard;
