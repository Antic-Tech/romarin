import React from 'react';

import Text from './Text';

import { verifySnapshot } from '../../utils/testUtils';

describe('Text', () => {
	describe('Snapshots', () => {
		it('renders correctly', () => {
			verifySnapshot(<Text>Text</Text>);
		});
	});
});
