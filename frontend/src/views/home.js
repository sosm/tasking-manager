import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FormattedMessage } from 'react-intl';
import { Alert } from '../components/alert';
import { Jumbotron, SecondaryJumbotron } from '../components/homepage/jumbotron';
import homeMessages from '../components/homepage/messages';

export function Home() {
  return (
    <div className="pull-center">
      <Jumbotron />
      <ErrorBoundary
        fallback={
          <div className="pt5 pb2 ph6-l ph4">
            <Alert type="error">
              <FormattedMessage {...homeMessages.statsLoadingError} />
            </Alert>
          </div>
        }
      />
    </div>
  );
}
