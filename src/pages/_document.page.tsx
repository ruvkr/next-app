/**
 * This custom document is required for styled-component to work
 */

import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
        });
      };

      const initialProps = await Document.getInitialProps(ctx);
      const styledComponentStyles = sheet.getStyleElement();

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styledComponentStyles}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default MyDocument;
