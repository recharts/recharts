import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{Ot as r,Vn as i,t as a,u as o}from"./iframe-BiMB5Acc.js";var s,c=e((()=>{s={baseLinePoints:{table:{type:{summary:`Array<Coordinate>`},category:`General`}},className:{control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},connectNulls:{control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`}},onClick:{description:`The customized event handler of click on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseDown:{description:`The customized event handler of mousedown on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseEnter:{description:`The customized event handler of mouseenter on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseLeave:{description:`The customized event handler of mouseleave on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseMove:{description:`The customized event handler of mousemove on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseOut:{description:`The customized event handler of mouseout on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseOver:{description:`The customized event handler of mouseover on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseUp:{description:`The customized event handler of mouseup on the polygon`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},points:{description:`The coordinates of all the vertexes of the polygon, like an array of objects with x and y coordinates.`,table:{type:{summary:`Array<Coordinate>`},category:`General`}}}})),l,u,d,f,p,m,h;e((()=>{l=t(n()),a(),c(),u=[{x:100,y:100},{x:300,y:100},{x:100,y:300},{x:300,y:300}],d={component:r,argTypes:s},f={render:e=>l.createElement(i,{width:`100%`,height:500},l.createElement(o,{width:500,height:300,margin:{top:5,right:30,left:20,bottom:5}},l.createElement(r,e))),args:{points:u,stroke:`#000`,fill:`red`}},p={render:e=>l.createElement(i,{width:`100%`,height:500},l.createElement(o,{width:250,height:250,margin:{top:5,right:30,left:20,bottom:5}},l.createElement(r,e))),args:{points:[{x:50,y:50},{x:0,y:100},{x:0,y:200},{x:100,y:200},{x:100,y:100},null],stroke:`#000`,fill:`red`,connectNulls:!0}},m={render:e=>l.createElement(i,{width:`100%`,height:500},l.createElement(o,{width:250,height:250,margin:{top:5,right:30,left:20,bottom:5}},l.createElement(r,e))),args:{points:[{x:40,y:20},{x:60,y:20},{x:60,y:60},{x:70,y:60},{x:50,y:90},{x:30,y:60},{x:40,y:60}],baseLinePoints:[{x:15,y:95},{x:85,y:95}],stroke:`#000`,fill:`red`,connectNulls:!1}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`API`,`UsingConnectNulls`,`UsingBaselinePoints`]}))();export{f as API,m as UsingBaselinePoints,p as UsingConnectNulls,h as __namedExportsOrder,d as default};