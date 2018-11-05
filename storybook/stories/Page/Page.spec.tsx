import React from 'react';
import { verifySnapshot } from '../../utils/testUtils';
import Page from './Page';

describe('Page', () => {
	describe('Snapshots', () => {
		it('renders correctly', () => {
			verifySnapshot(<Page />);
		});
	});
});
