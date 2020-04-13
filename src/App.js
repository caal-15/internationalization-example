import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import { useTranslation } from 'react-i18next'

import Translations from './Translations'

const App = () => {
  const [method, setMethod] = useState('hook')
  const { i18n } = useTranslation()

  const { language } = i18n
  const currentLanguage = language.split('-')[0]

  return (
    <Container>
      <Box p={4}>
        <Typography
          variant="h2"
          component="h1"
          color="primary"
          gutterBottom
        >
          I18Next Demonstration
          <Box>
            <ButtonGroup variant="text">
              <Button
                color={method === 'hook' ? 'primary' : undefined}
                onClick={() => setMethod('hook')}
              >
                Hook
              </Button>
              <Button
                color={method === 'component' ? 'primary' : undefined}
                onClick={() => setMethod('component')}
              >
                Component
              </Button>
              <Button
                color={method === 'hoc' ? 'primary' : undefined}
                onClick={() => setMethod('hoc')}
              >
                HOC
              </Button>
            </ButtonGroup>
            <ButtonGroup variant="text">
              <Button
                color={currentLanguage === 'en' ? 'primary' : undefined}
                onClick={() => i18n.changeLanguage('en')}
              >
                English
              </Button>
              <Button
                color={currentLanguage === 'es' ? 'primary' : undefined}
                onClick={() => i18n.changeLanguage('es')}
              >
                Spanish
              </Button>
            </ButtonGroup>
          </Box>
        </Typography>
      </Box>
      <Translations method={method} />
    </Container>
  );
}

export default App;
