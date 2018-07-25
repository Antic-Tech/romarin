import { mount, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

export const renderComponent = (jsx, { shallowRender = true, store } = {}) => {
	const renderOptions = { context: { store } };

	if (shallowRender) {
		return shallow(jsx, renderOptions);
	}

	return mount(jsx, renderOptions);
};

export const componentFactory = Component => (props = {}, options = {}) => {
	return renderComponent(<Component {...props} />, options);
};

export const getTree = jsx => renderer.create(jsx).toJSON();

export const verifySnapshot = jsx => {
	const tree = getTree(jsx);

	expect(tree).toMatchSnapshot();
};
