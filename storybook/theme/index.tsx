import { merge } from 'lodash';
import React from 'react';
import { BaseTheme } from '../definitions/Base.theme';
import { Theme } from '../definitions/Theme';
import buttonTheme from '../stories/Button/Button.theme';
import checkboxTheme from '../stories/Checkbox/Checkbox.theme';
import dividerTheme from '../stories/Divider/Divider.theme';
import inputTheme from '../stories/Input/Input.theme';
import pageTheme from '../stories/Page/Page.theme';
import textTheme from '../stories/Text/Text.theme';
import touchableTheme from '../stories/Touchable/Touchable.theme';
import coreTheme from './core.theme';

function getBaseTheme(coreTheme: BaseTheme): Theme {
	return {
		base: coreTheme,
		page: pageTheme(coreTheme),
		checkbox: checkboxTheme(coreTheme),
		button: buttonTheme(coreTheme),
		text: textTheme(coreTheme),
		input: inputTheme(coreTheme),
		touchable: touchableTheme(coreTheme),
		divider: dividerTheme(coreTheme)
	};
}

function getTheme(newTheme: Theme = {}): Theme {
	const updatedCore:BaseTheme = {
		...coreTheme,
		...newTheme.base
	}

	const updatedTheme = getBaseTheme(updatedCore)

	return merge(updatedTheme, newTheme);
}

export const ThemeContext = React.createContext();
export const withTheme = (Component) =>
	class WithTheme extends React.Component {
	
		render() {
			return (
				<ThemeContext.Consumer>{(theme) => <Component {...this.props} theme={getTheme(theme)} />}</ThemeContext.Consumer>
			);
		}
	};