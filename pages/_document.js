import Document, { Head, Html, Main, NextScript } from 'next/document'


class Mydocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel="preload" href="/fonts/IBMPlexSans-Bold.ttf" as="font" crossOrigin="anonymous" />
                    <link rel="preload" href="/fonts/IBMPlexSans-Regular.ttf" as="font" crossOrigin="anonymous" />
                    <link rel="preload" href="/fonts/IBMPlexSans-Semibold.ttf" as="font" crossOrigin="anonymous" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


export default Mydocument;
