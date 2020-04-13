import React from 'react'
import CardHeader from '@material-ui/core/CardContent'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'



const HookTranslation = ({ messageKey }) => {
  const { t } = useTranslation()

  switch (messageKey) {
    case 'normal':
      return (
        <>
          <CardHeader>
            <Typography color="primary" variant="h5" component="h2">
              {t('normalTranslation.title')}
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography varian="body1">
              {t('normalTranslation.content')}
            </Typography>
          </CardContent>
        </>
      )
    case 'interpolated':
      return (
        <>
          <CardHeader>
            <Typography color="primary" variant="h5" component="h2">
              {t('interpolatedTranslation.title')}
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body1">
              {t(
                'interpolatedTranslation.content',
                { car: { color: 'black', weight: '789kg' }, owner: "Maritza" }
              )}
            </Typography>
          </CardContent>
        </>
      )
    case 'formatted':
      return (
        <>
          <CardHeader>
            <Typography color="primary" variant="h5" component="h2">
              {t('formattedTranslation.title')}
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography varian="body1">
              {t('formattedTranslation.content', { date: new Date() })}
            </Typography>
          </CardContent>
        </>
      )
    case 'plural':
      return (
        <>
          <CardHeader>
            <Typography color="primary" variant="h5" component="h2">
              {t('pluralTranslation.title')}
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body1">
              {t('pluralTranslation.content')}{" "}
              {t('pluralTranslation.pluralSimple', { count: 1 })}{", "}
              {t('pluralTranslation.pluralSimple', { count: 5 })}<br /><br />
              {t('pluralTranslation.contentCount')}{" "}
              {t('pluralTranslation.pluralCount', { count: 0 })}{", "}
              {t('pluralTranslation.pluralCount', { count: 1 })}{", "}
              {t('pluralTranslation.pluralCount', { count: 5 })}
            </Typography>
          </CardContent>
        </>
      )
      case 'nested':
        return (
          <>
            <CardHeader>
              <Typography color="primary" variant="h5" component="h2">
                {t('nestedTranslation.title')}
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography varian="body1">
                {t('nestedTranslation.content', { name: 'Flanders' })}
              </Typography>
            </CardContent>
          </>
        )
      case 'contextual':
        return (
          <>
            <CardHeader>
              <Typography color="primary" variant="h5" component="h2">
                {t('contextualTranslation.title')}
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography varian="body1">
                {t('contextualTranslation.content')}{" "}
                {t('contextualTranslation.inlaw', { context: 'female' })}{", "}
                {t('contextualTranslation.inlaw', { context: 'male' })}
              </Typography>
            </CardContent>
          </>
        )
    default:
      return null
  }
}

export default HookTranslation