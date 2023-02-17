import { Typography, Box, Stack } from '@pankod/refine-mui';
import {
  useDelete,
  useGetIdentity,
  useShow,
} from '@pankod/refine-core/dist/hooks';
import { useParams, useNavigate } from '@pankod/refine-react-router-v6';
import {
  ChatBubble,
  Delete,
  Edit,
  Phone,
  Place,
  Star,
} from '@mui/icons-material';

import { CustomButton } from 'components';

const propertyDetails = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const { id } = useParams();
  const { mutate } = useDelete();
  const { queryResult } = useShow();

  const { data, isLoading, isError } = queryResult;

  const propertyDetails = data?.data ?? {};

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Box
      borderRadius="15px"
      padding="20px"
      bgcolor="#fcfcfc"
      width="fit-content"
    >
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Details
      </Typography>
    </Box>
  );
};

export default propertyDetails;
