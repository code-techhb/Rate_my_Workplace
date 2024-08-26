import { Box } from '@mui/material';

const trytry = ({ width = '100%', height = '100%', ...props }) => (
  <Box
    sx={{
      position: 'absolute',
      width: width,
      height: height,
      backgroundImage: 'url("/gradient.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '10px',
      ...props.sx,
    }}
    {...props}
  />
);

export default trytry;
