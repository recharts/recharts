import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{n as a,t as o}from"./Polygon-BINTpNFL.js";import{n as s,t as c}from"./ComposedChart-BMuDWuTx.js";var l;function u(){return(u=t((()=>{l={baseLinePoints:{description:'An optional second set of coordinates. When provided, Polygon fills the\narea enclosed between `points` and `baseLinePoints` similar to a data\nline and its baseline. If `stroke` is set (and isn\'t `"none"`), the\noutline of `points` and of `baseLinePoints` are also each stroked\nseparately. Used e.g. by Radar in "range" mode to draw a min/max band.',table:{type:{summary:`Array<Coordinate>`},category:`General`}},className:{description:`The SVG element's class name.`,control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},connectNulls:{description:`Whether to connect the curve across null points.`,control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`}},onClick:{description:`The customized event handler of click on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseDown:{description:`The customized event handler of mousedown on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseEnter:{description:`The customized event handler of mouseenter on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseLeave:{description:`The customized event handler of mouseleave on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseMove:{description:`The customized event handler of mousemove on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseOut:{description:`The customized event handler of mouseout on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseOver:{description:`The customized event handler of mouseover on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseUp:{description:`The customized event handler of mouseup on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},points:{description:`The coordinates of all the vertexes of the polygon, like an array of objects with x and y coordinates.`,table:{type:{summary:`Array<Coordinate>`},category:`General`}}}})))()}var d,f,p,m,h,g,_;function v(){return(v=t((()=>{d=e(n()),s(),a(),i(),u(),f=[{x:100,y:100},{x:300,y:100},{x:100,y:300},{x:300,y:300}],p={component:o,argTypes:l},m={render:e=>d.createElement(r,{width:`100%`,height:500},d.createElement(c,{width:500,height:300,margin:{top:5,right:30,left:20,bottom:5}},d.createElement(o,e))),args:{points:f,stroke:`#000`,fill:`red`}},h={render:e=>d.createElement(r,{width:`100%`,height:500},d.createElement(c,{width:250,height:250,margin:{top:5,right:30,left:20,bottom:5}},d.createElement(o,e))),args:{points:[{x:50,y:50},{x:0,y:100},{x:0,y:200},{x:100,y:200},{x:100,y:100},null],stroke:`#000`,fill:`red`,connectNulls:!0}},g={render:e=>d.createElement(r,{width:`100%`,height:500},d.createElement(c,{width:250,height:250,margin:{top:5,right:30,left:20,bottom:5}},d.createElement(o,e))),args:{points:[{x:40,y:20},{x:60,y:20},{x:60,y:60},{x:70,y:60},{x:50,y:90},{x:30,y:60},{x:40,y:60}],baseLinePoints:[{x:15,y:95},{x:85,y:95}],stroke:`#000`,fill:`red`,connectNulls:!1}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={500} height={300} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <Polygon {...args} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    points: pointDefault,
    stroke: '#000',
    fill: 'red'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={250} height={250} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <Polygon {...args} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    points: [{
      x: 50,
      y: 50
    }, {
      x: 0,
      y: 100
    }, {
      x: 0,
      y: 200
    }, {
      x: 100,
      y: 200
    }, {
      x: 100,
      y: 100
    }, null],
    stroke: '#000',
    fill: 'red',
    connectNulls: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={250} height={250} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <Polygon {...args} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    points: [{
      x: 40,
      y: 20
    }, {
      x: 60,
      y: 20
    }, {
      x: 60,
      y: 60
    }, {
      x: 70,
      y: 60
    }, {
      x: 50,
      y: 90
    }, {
      x: 30,
      y: 60
    }, {
      x: 40,
      y: 60
    }],
    baseLinePoints: [{
      x: 15,
      y: 95
    }, {
      x: 85,
      y: 95
    }],
    stroke: '#000',
    fill: 'red',
    connectNulls: false
  }
}`,...g.parameters?.docs?.source}}},_=[`API`,`UsingConnectNulls`,`UsingBaselinePoints`]})))()}v();export{m as API,g as UsingBaselinePoints,h as UsingConnectNulls,_ as __namedExportsOrder,p as default};