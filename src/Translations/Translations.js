import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'

import HookTranslation from './HookTranslation'
import ComponentTranslation from './ComponentTranslation'
import HocTranslation from './HocTranslation'

const translationComponents = {
  hook: HookTranslation,
  component: ComponentTranslation,
  hoc: HocTranslation
}

const Translations = ({ method }) => {
  const baseTranslations = [
    "normal",
    "interpolated",
    "formatted",
    "plural",
    "nested",
    "contextual"
  ]
  const translations = method === 'component'
    ? [...baseTranslations, 'html']
    : baseTranslations

  return (
    <Box px={2} pb={2}>
      <Grid container spacing={2}>
        {translations.map(translation => {
          const Translation = translationComponents[method]
          return (
            <Grid xs={4} item key={translation}>
              <Card>
                <Translation messageKey={translation} />
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Translations