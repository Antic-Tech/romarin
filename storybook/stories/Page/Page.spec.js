import React from 'react';
import { verifySnapshot } from '../../utils/testUtils';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
	describe('Snapshots', () => {
		it('renders correctly', () => {
			verifySnapshot(<Checkbox />);
			verifySnapshot(<Checkbox checked />);
		});
	});
});
