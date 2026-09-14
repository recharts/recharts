import{R as e}from"./iframe-bFSgLdPD.js";import{P as s}from"./Polygon-BxN0GCNz.js";import{R as a}from"./zIndexSlice-D5upya8o.js";import{C as i}from"./ComposedChart-rnVwwIMy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dwo3cyUv.js";import"./throttle-u-v2gKhP.js";import"./index-Dx35Wad7.js";import"./index-Bahp64_w.js";import"./isWellBehavedNumber-CxGT-_DT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BY-4gTQl.js";import"./axisSelectors-jpWGPgQR.js";import"./d3-scale-DJKaPyhK.js";import"./index-CNz3Scut.js";import"./index-XM-eSlQm.js";import"./renderedTicksSlice-BcG7Kuye.js";import"./index-DzQCF7Uo.js";import"./CartesianChart-tk8PYi9A.js";import"./chartDataContext-DUbpY4V-.js";import"./CategoricalChart-DBfHTq3P.js";const v={baseLinePoints:{description:'An optional second set of coordinates. When provided, Polygon fills the\narea enclosed between `points` and `baseLinePoints` similar to a data\nline and its baseline. If `stroke` is set (and isn\'t `"none"`), the\noutline of `points` and of `baseLinePoints` are also each stroked\nseparately. Used e.g. by Radar in "range" mode to draw a min/max band.',table:{type:{summary:"Array<Coordinate>"},category:"General"}},className:{description:"The SVG element's class name.",control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},connectNulls:{description:"Whether to connect the curve across null points.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},onClick:{description:"The customized event handler of click on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOut:{description:"The customized event handler of mouseout on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOver:{description:"The customized event handler of mouseover on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},points:{description:"The coordinates of all the vertexes of the polygon, like an array of objects with x and y coordinates.",table:{type:{summary:"Array<Coordinate>"},category:"General"}}},x=[{x:100,y:100},{x:300,y:100},{x:100,y:300},{x:300,y:300}],B={component:s,argTypes:v},t={render:n=>e.createElement(a,{width:"100%",height:500},e.createElement(i,{width:500,height:300,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{...n}))),args:{points:x,stroke:"#000",fill:"red"}},o={render:n=>e.createElement(a,{width:"100%",height:500},e.createElement(i,{width:250,height:250,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{...n}))),args:{points:[{x:50,y:50},{x:0,y:100},{x:0,y:200},{x:100,y:200},{x:100,y:100},null],stroke:"#000",fill:"red",connectNulls:!0}},r={render:n=>e.createElement(a,{width:"100%",height:500},e.createElement(i,{width:250,height:250,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{...n}))),args:{points:[{x:40,y:20},{x:60,y:20},{x:60,y:60},{x:70,y:60},{x:50,y:90},{x:30,y:60},{x:40,y:60}],baseLinePoints:[{x:15,y:95},{x:85,y:95}],stroke:"#000",fill:"red",connectNulls:!1}},W=["API","UsingConnectNulls","UsingBaselinePoints"];var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,d,y;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(d=o.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var h,g,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{t as API,r as UsingBaselinePoints,o as UsingConnectNulls,W as __namedExportsOrder,B as default};
