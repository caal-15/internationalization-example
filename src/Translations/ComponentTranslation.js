import React from 'react'
import { Trans } from 'react-i18next'
import CardHeader from '@material-ui/core/CardContent'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const ComponentTranslation = ({ messageKey }) => {
  switch (messageKey) {
    case 'normal':
      return (
        <>
          <CardHeader>
            <Typography color="primary" variant="h5" component="h2">
              <Trans i18nKey="normalTranslation.title"/>
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography varian="body1">
              <Trans i18nKey="normalTranslation.content"/>
            </Typography>
          </CardContent>
        </>
      )
    case 'interpolated':
      return (
        <>
          <CardHeader>
            <Typography color="primary" variant="h5" component="h2">
              <Trans i18nKey="interpolatedTranslation.title" />
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body1">
              <Trans
                i18nKey="interpolatedTranslation.content"
                values={{
                  car: { color: 'black', weight: '789kg' },
                  owner: "Maritza"
                }}
              >
              </Trans>
            </Typography>
          </CardContent>
        </>
      )
    case 'formatted':
      return (
        <>
          <CardHeader>
            <Typography color="primary" variant="h5" component="h2">
              <Trans i18nKey="formattedTranslation.title"/>
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography varian="body1">
              <Trans
                i18nKey="formattedTranslation.content"
                values={{ date: new Date() }}
              />
            </Typography>
          </CardContent>
        </>
      )
    case 'plural':
      return (
        <>
          <CardHeader>
            <Typography color="primary" variant="h5" component="h2">
              <Trans i18nKey="pluralTranslation.title" />
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body1">
              <Trans i18nKey="pluralTranslation.content" />{" "}
              <Trans i18nKey="pluralTranslation.pluralSimple" count={1} />{", "}
              <Trans i18nKey="pluralTranslation.pluralSimple" count={5} />
              <br /><br />
              <Trans i18nKey="pluralTranslation.contentCount" />{" "}
              <Trans
                i18nKey="pluralTranslation.pluralCount"
                count={0}
                values={{ count: 0 }}
              />{", "}
              <Trans
                i18nKey="pluralTranslation.pluralCount"
                count={1}
                values={{ count: 1 }}
              />{", "}
              <Trans
                i18nKey="pluralTranslation.pluralCount"
                count={5}
                values={{ count: 5 }}
              />
            </Typography>
          </CardContent>
        </>
      )
    case 'nested':
      return (
        <>
          <CardHeader>
            <Typography color="primary" variant="h5" component="h2">
              <Trans i18nKey="nestedTranslation.title" />
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography varian="body1">
              <Trans
                i18nKey="nestedTranslation.content"
                name="Flanders"
                values= {{ name: 'Flanders' }}
              />
            </Typography>
          </CardContent>
        </>
      )
    case 'contextual':
      return (
        <>
          <CardHeader>
            <Typography color="primary" variant="h5" component="h2">
              <Trans i18nKey="contextualTranslation.title" />
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography varian="body1">
              <Trans i18nKey="contextualTranslation.content" />{" "}
              <Trans
                i18nKey="contextualTranslation.inlaw"
                tOptions={{ context: 'female' }}
              />{", "}
              <Trans
                i18nKey="contextualTranslation.inlaw"
                tOptions={{ context: 'male' }}
              />
            </Typography>
          </CardContent>
        </>
      )
    case 'html':
      return (
        <>
          <CardHeader>
            <Typography color="primary" variant="h5" component="h2">
              <Trans i18nKey="htmlTranslation.title" />
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography varian="body1">
              <Trans i18nKey="htmlTranslation.content">
                a<strong>b</strong>c<em>d</em>
              </Trans>
            </Typography>
          </CardContent>
        </>
      )
    default:
      return null
  }
}

export default ComponentTranslation