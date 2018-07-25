import React from 'react';

import Icon from './Icon';

import { verifySnapshot } from '../../utils/testUtils';

describe('Icon', () => {
	  describe('Snapshots', () => {
		    it('renders correctly', () => {
			      verifySnapshot(<Icon/>);
		    });
	  });
});
