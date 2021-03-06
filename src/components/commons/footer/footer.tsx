import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();
	return (
		<>
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
			>
				<Grid item xs={12}>
					<Typography
						variant="body2"
						color="textSecondary"
						align="center"
					>
						{t('commons.footer.version.text')}:
						{process.env.REACT_APP_UI_VERSION}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography
						variant="body2"
						color="textSecondary"
						align="center"
					>
						{t('commons.footer.commit.text')}:
						{process.env.REACT_APP_UI_COMMIT_SHA}
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default Footer;
