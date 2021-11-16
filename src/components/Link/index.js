import React from 'react';
import styles from './link.module.css'

// Option 1 (Function)
export function Link_func(props) {
  const { href, text } = props;
  return (
    <a className={styles.link} href={href}>
      {text}
    </a>
  );
}

// Option 2: Class
export class Link_class extends React.Component {
  render() {
    const { href, text } = this.props;
    return (
      <a className={styles.link} href={href}>
        {text}
      </a>
    );
  }
}
