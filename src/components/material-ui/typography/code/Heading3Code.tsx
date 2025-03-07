import CodeDialog from 'src/components/shared/CodeDialog';
const Heading3Code = () => {
  return (
    <>
      <CodeDialog>
        {`

import { Typography } from '@mui/material';

<Typography variant="h3">h3. Heading</Typography>`}
      </CodeDialog>
    </>
  );
};

export default Heading3Code;
