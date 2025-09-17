import React, { PureComponent } from 'react';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import sh from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('jsx', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('sh', sh);

type HighlightProps = {
  className?: string;
  children: string;
};

class Highlight extends PureComponent<HighlightProps> {
  static defaultProps = {
    className: null,
  };

  ref = React.createRef<HTMLPreElement>();

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    const domNode = this.ref.current;
    if (domNode == null) {
      return;
    }
    const nodes: NodeListOf<HTMLElement> = domNode.querySelectorAll('pre code');

    if (nodes.length > 0) {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].removeAttribute('data-highlighted');
        hljs.highlightElement(nodes[i]);
      }
    }
  }

  render() {
    const { children, className } = this.props;

    return (
      <pre ref={this.ref}>
        <code className={className}>{children}</code>
      </pre>
    );
  }
}

export default Highlight;
