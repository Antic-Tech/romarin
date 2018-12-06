// import Icon from '@components/Icon/Icon.component';
import React from 'react';
import { ScrollView } from 'react-native';
import { withTheme } from '../../theme';

class Page extends React.Component {
	render() {
		const { padded, theme, children, ...props } = this.props;

		return (
			<ScrollView
				style={{
					backgroundColor: theme.page.backgroundColor,
					padding: padded ? theme.page.padding : undefined
				}}
				{...props}
			>
				{children}
			</ScrollView>
		);
	}
}
export default withTheme(Page)
