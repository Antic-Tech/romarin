// import Icon from '@components/Icon/Icon.component';
import React from 'react';
import { ScrollView } from 'react-native';
import ThemeProvider from '../../theme';

export default class Checkbox extends React.Component {
	render() {
		const { padded, children, ...props } = this.props;

		return (
			<ScrollView
				style={{
					backgroundColor: ThemeProvider.theme.pageBackgroundColor,
					padding: padded ? ThemeProvider.theme.pagePadding : undefined
				}}
				{...props}
			>
				{children}
			</ScrollView>
		);
	}
}
