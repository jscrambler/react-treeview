'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TreeView = _react2['default'].createClass({
  displayName: 'TreeView',

  propTypes: {
    collapsed: _react.PropTypes.bool,
    defaultCollapsed: _react.PropTypes.bool,
    nodeLabel: _react.PropTypes.node.isRequired
  },

  getInitialState: function getInitialState() {
    return { collapsed: this.props.defaultCollapsed };
  },

  handleClick: function handleClick() {
    this.setState({ collapsed: !this.state.collapsed });
    if (this.props.onClick) {
      var _props;

      (_props = this.props).onClick.apply(_props, arguments);
    }
  },

  render: function render() {
    var _props2 = this.props;
    var _props2$collapsed = _props2.collapsed;
    var collapsed = _props2$collapsed === undefined ? this.state.collapsed : _props2$collapsed;
    var _props2$className = _props2.className;
    var className = _props2$className === undefined ? '' : _props2$className;
    var nodeLabel = _props2.nodeLabel;
    var children = _props2.children;

    var rest = _objectWithoutProperties(_props2, ['collapsed', 'className', 'nodeLabel', 'children']);

    var arrowClassName = 'tree-view_arrow';
    var containerClassName = 'tree-view_children';
    var itemClassName = 'tree-view_item';
    if (collapsed) {
      arrowClassName += ' tree-view_arrow-collapsed';
      containerClassName += ' tree-view_children-collapsed';
      itemClassName += ' collapsed';
    }

    var arrow = _react2['default'].createElement(
      'div',
      _extends({}, rest, {
        className: className + ' ' + arrowClassName }),
      '▾'
    );

    return _react2['default'].createElement(
      'div',
      { className: 'tree-view' },
      _react2['default'].createElement(
        'div',
        { className: itemClassName, onClick: this.handleClick },
        arrow,
        nodeLabel
      ),
      _react2['default'].createElement(
        'div',
        { className: containerClassName },
        children
      )
    );
  }
});

exports['default'] = TreeView;
module.exports = exports['default'];