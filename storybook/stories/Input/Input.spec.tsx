import React from 'react';

import Input from './Input';

import { verifySnapshot } from '../../utils/testUtils';

describe('Input', () => {
	describe('Snapshots', () => {
		it('renders correctly', () => {
			verifySnapshot(<Input />);
		});
	});
});
