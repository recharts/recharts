import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';

class Highlight extends PureComponent {
  static propTypes = {
    innerHTML: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    innerHTML: false,
    className: null,
  };

  ref = React.createRef();

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    const domNode = this.ref.current;
    const nodes = domNode.querySelectorAll('pre code');

    if (nodes.length > 0) {
      for (let i = 0; i < nodes.length; i++) {
        hljs.highlightBlock(nodes[i]);
      }
    }
  }

  render() {
    const { innerHTML, children, className } = this.props;

    if (innerHTML) {
      // eslint-disable-next-line react/no-danger
      return <div ref={this.ref} dangerouslySetInnerHTML={{ __html: children }} className={className || null} />;
    }

    return (
      <pre ref={this.ref}>
        <code className={className}>{children}</code>
      </pre>
    );
  }
}

export default Highlight;
