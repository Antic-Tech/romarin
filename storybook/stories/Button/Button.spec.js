import React from 'react';
import Button from './Button';

import { verifySnapshot } from '../../utils/testUtils';

describe('Button', () => {
	describe('Snapshots', () => {
		it('renders correctly', () => {
			verifySnapshot(<Button label="Hello Button"/>);
		});
	});
});
