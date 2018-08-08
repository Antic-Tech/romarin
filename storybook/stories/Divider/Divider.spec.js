import React from 'react';
import Divider from './Divider';

import { verifySnapshot } from '../../utils/testUtils';

describe('Divider', () => {
	describe('Snapshots', () => {
		it('renders correctly', () => {
			verifySnapshot(<Divider />);
		});

		it('renders correctly with label', () => {
			verifySnapshot(<Divider label="Label" />);
		});
	});
});
