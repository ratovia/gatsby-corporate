import React from 'react';

import Header from "../../components/Header/header"

export default {
  title: 'Corporate/Header',
  component: Header,
};

const Template = (args) => <Header {...args}/>;


export const ScrollHeader = Template.bind({});
ScrollHeader.args = {
  isScrollEffect: true,
};
export const NonScrollHeader = Template.bind({});
NonScrollHeader.args = {
  isScrollEffect: false,
};
