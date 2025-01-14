import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Text } from './Text';
import { Dialog } from './Dialog';
import { Button } from './Button';

function DialogStory() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <>
      <Box mb="4">
        <Text as="p" mb="2">
          Basic Dialog
        </Text>

        <Dialog onDismiss={() => setOpen1(false)} isOpen={open1}>
          <Box maxWidth="600px" padding="4">
            <Text>Hello from Dialog</Text>
            <Button ml="3" onClick={() => setOpen1(false)}>
              Close
            </Button>
          </Box>
        </Dialog>

        <Button onClick={() => setOpen1(true)}>Open</Button>
      </Box>
      <Box mb="4">
        <Text as="p" mb="2">
          Dialog with long content
        </Text>

        <Dialog onDismiss={() => setOpen2(false)} isOpen={open2}>
          <Box maxWidth="600px" padding="4">
            <Text>Hello from Dialog</Text>
            <Button ml="3" onClick={() => setOpen2(false)}>
              Close
            </Button>
            <Box height="100px" bg="grays.1" mt="3" />
            <Box height="100px" bg="grays.2" />
            <Box height="100px" bg="grays.3" />
            <Box height="100px" bg="grays.4" />
            <Box height="100px" bg="grays.5" />
            <Box height="100px" bg="grays.6" mb="3" />
          </Box>
        </Dialog>

        <Button onClick={() => setOpen2(true)}>Open</Button>
      </Box>
    </>
  );
}

storiesOf('Components|Dialog', module).add('default', () => <DialogStory />);
