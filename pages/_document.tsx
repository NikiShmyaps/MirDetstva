//tag manager and intercom disabled
import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { GoogleTagManager, Noscript } from '@scripts';

class MyDocument extends Document {
	render() {
		return (
			<Html style={{ scrollBehavior: 'smooth' }}>
				<Head>
					<link rel="icon" href="./favicons/favicon.png" type="image/png" />
					<link
						href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@300;400;500;600;700&display=swap"
						rel="stylesheet"
					></link>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
						rel="stylesheet"
					></link>
					<link
						href="https://fonts.googleapis.com/css2?family=Azeret+Mono&family=Black+Han+Sans&family=Montserrat&family=Open+Sans&display=swap"
						rel="stylesheet"
					></link>

					<link
						href="https://fonts.googleapis.com/css2?family=Azeret+Mono&family=Black+Han+Sans&family=Open+Sans&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<body id="body">
					<Main />
					<div id="portal" />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
