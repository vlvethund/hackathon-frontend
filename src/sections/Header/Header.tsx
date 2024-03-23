import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

import { FlexBox } from '@/components/styled';
import { title } from '@/config';
import useTheme from '@/store/theme';

function Header() {
  const [theme] = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }} data-pw={`theme-${theme}`} className="bg-white">
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            <Button color="info">{title}</Button>
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
