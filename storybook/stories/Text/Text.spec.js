import React from 'react';

import Text from './Text';

import { verifySnapshot } from '../../utils/testUtils';

describe('Text', () => {
	describe('Snapshots', () => {
		it('renders correctly', () => {
			verifySnapshot(<Text>Text</Text>);
		});
		it('renders xlarge correctly', () => {
			verifySnapshot(<Text size="xlarge">Text</Text>);
		});
		it('renders large correctly', () => {
			verifySnapshot(<Text size="large">Text</Text>);
		});
		it('renders medium correctly', () => {
			verifySnapshot(<Text size="medium">Text</Text>);
		});
		it('renders small correctly', () => {
			verifySnapshot(<Text size="small">Text</Text>);
		});
		it('renders small correctly', () => {
			verifySnapshot(<Text xsize="small">Text</Text>);
		});
		it('renders muted correctly', () => {
			verifySnapshot(<Text muted>Text</Text>);
		});
	});
});
