import React from 'react';
import IconButton from './IconButton';

import { verifySnapshot } from '../../utils/testUtils';

jest.mock('react-native-vector-icons', () => ({ MaterialIcons: () => null }));

describe('IconButton', () => {
	describe('Snapshots', () => {
		it('renders correctly', () => {
			verifySnapshot(<IconButton />);
		});
	});
});
