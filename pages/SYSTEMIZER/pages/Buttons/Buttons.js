import React from 'react';

// components
import Button from 'COMPONENTS/Button';

export default () => (
  <div>
    <Button className="button" id="main_btn" onClick={() => { console.log('click'); }}>Button</Button>
    <Button outlined>Button</Button>
    <Button color="danger" flat>Button</Button>
    <Button color="danger" shape="rounded" outlined>Button</Button>
    <Button color="warning" outlined>Button</Button>
    <Button color="warning" shape="sharp">Button</Button>
    <Button color="success" outlined>Button</Button>
    <Button color="success">Button</Button>
    <Button color="secondary" outlined>Button</Button>
    <Button color="secondary">Button</Button>
  </div>
);
