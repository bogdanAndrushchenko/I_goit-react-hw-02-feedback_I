import React, { Component } from 'react';

import s from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={s.Section}>
        <h2 className={s.Section__title}>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;
