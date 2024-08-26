import { Box } from '@mui/material';

const GradientOverlay = ({ width = '100%', height = '100%', ...props }) => (
  <Box
    sx={{
      position: 'absolute',
      width: '60%',
      height: '60%',
      backgroundImage: 'url("/gradient.png")',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      borderRadius: '10px',
      backgroundRepeat: 'no-repeat',
      ...props.sx,
    }}
    {...props}
  />
);

export default GradientOverlay;
