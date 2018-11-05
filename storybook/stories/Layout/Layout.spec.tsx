import React from 'react';
import { verifySnapshot } from '../../utils/testUtils';
import { Column, Row } from './Layout';

describe('Row', () => {
	describe('Snapshots', () => {
		it('renders correctly', () => {
			verifySnapshot(<Row />);
		});
	});
});

describe('Column', () => {
	describe('Snapshots', () => {
		it('renders correctly', () => {
			verifySnapshot(<Column />);
		});
	});
});
