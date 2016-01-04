import React, {PropTypes} from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
class DefaultTooltipContent extends React.Component {

  static displayName = 'TooltipContent';

  static propTypes = {
    separator: PropTypes.string,
    formatter: PropTypes.func,
    itemStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    label: PropTypes.any,
    data: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.any,
      value: PropTypes.number,
      unit: PropTypes.any,
    })),
  };

  static defaultProps = {
    separator: ' : ',
    itemStyle: {},
    labelStyle: {},
  };

  constructor(props) {
    super(props);
  }

  renderContent() {
    const {data, separator, formatter, itemStyle} = this.props;

    if (data && data.length) {
      const listStyle = {padding: 0, margin: 0};
      const items = data.map((entry, i) => {
        const finalItemStyle = {
          display: 'block',
          paddingTop: 4,
          paddingBottom: 4,
          color: entry.color || '#000',
          ...itemStyle,
        };
        const finalFormatter = entry.formatter || formatter;

        return (
          <li className="tooltip-item" key={'tooltip-item-' + i} style={finalItemStyle}>
            <span className="name">{entry.key}</span>
            <span className="separator">{separator}</span>
            <span className="value">{finalFormatter ? finalFormatter(entry.value, entry.key) : entry.value}</span>
            <span className="unit">{entry.unit || ''}</span>
          </li>
        );
      });

      return <ul className="tooltip-item-list" style={listStyle}>{items}</ul>;
    }
  }

  render() {
    const {labelStyle, label} = this.props;
    const finalLabelStyle = {
      margin: 0,
      ...labelStyle,
    };

    return (
      <div className="tooltip-default">
        <p className="tooltip-label" style={finalLabelStyle}>{label}</p>
        {this.renderContent()}
      </div>
    );
  }
}

export default DefaultTooltipContent;
