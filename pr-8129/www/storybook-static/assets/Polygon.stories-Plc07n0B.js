import{R as e}from"./iframe-COxqCazb.js";import{P as s}from"./Polygon-BzFKH4k6.js";import{R as a}from"./zIndexSlice-B4X5qRzI.js";import{C as i}from"./ComposedChart-DWRPdfx_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./fillDefinitions-HVISG19w.js";import"./pageBackground-zdIyeBG0.js";import"./resolveDefaultProps-yMt3tC3j.js";import"./throttle-D4LJPOuI.js";import"./index-CmlNloJu.js";import"./index-BFPgWdWH.js";import"./RechartsWrapper-MgEDcD8h.js";import"./axisSelectors-uSjAZrah.js";import"./polarAxisSelectors-a1oAG-SZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8xTnIof.js";import"./index-BQ5RDrN3.js";import"./index-BymcG2zO.js";import"./renderedTicksSlice-CPgi-eJ3.js";import"./index-BE8xWht0.js";import"./CartesianChart-lA_wA_-C.js";import"./ZIndexPortal-B9PAyW6q.js";import"./CategoricalChart-C0aYCun5.js";const f={baseLinePoints:{description:'An optional second set of coordinates. When provided, Polygon fills the\narea enclosed between `points` and `baseLinePoints` similar to a data\nline and its baseline. If `stroke` is set (and isn\'t `"none"`), the\noutline of `points` and of `baseLinePoints` are also each stroked\nseparately. Used e.g. by Radar in "range" mode to draw a min/max band.',table:{type:{summary:"Array<Coordinate>"},category:"General"}},className:{description:"The SVG element's class name.",control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},connectNulls:{description:"Whether to connect the curve across null points.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},fill:{description:"The fill of the polygon. Either a color string, or a {@link RechartsFill} object with an SVG definition,\nsuch as a pattern or a gradient. Recharts renders the definition with a unique ID.\nSet the `color` of the fill object: there is no theme color to fall back to.",control:{type:"color"},table:{type:{summary:"RechartsFill | string"},category:"Style"}},onClick:{description:"The customized event handler of click on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOut:{description:"The customized event handler of mouseout on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOver:{description:"The customized event handler of mouseover on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},points:{description:"The coordinates of all the vertexes of the polygon, like an array of objects with x and y coordinates.",table:{type:{summary:"Array<Coordinate>"},category:"General"}}},v=[{x:100,y:100},{x:300,y:100},{x:100,y:300},{x:300,y:300}],F={component:s,argTypes:f},t={render:n=>e.createElement(a,{width:"100%",height:500},e.createElement(i,{width:500,height:300,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{...n}))),args:{points:v,stroke:"#000",fill:"red"}},o={render:n=>e.createElement(a,{width:"100%",height:500},e.createElement(i,{width:250,height:250,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{...n}))),args:{points:[{x:50,y:50},{x:0,y:100},{x:0,y:200},{x:100,y:200},{x:100,y:100},null],stroke:"#000",fill:"red",connectNulls:!0}},r={render:n=>e.createElement(a,{width:"100%",height:500},e.createElement(i,{width:250,height:250,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{...n}))),args:{points:[{x:40,y:20},{x:60,y:20},{x:60,y:60},{x:70,y:60},{x:50,y:90},{x:30,y:60},{x:40,y:60}],baseLinePoints:[{x:15,y:95},{x:85,y:95}],stroke:"#000",fill:"red",connectNulls:!1}},V=["API","UsingConnectNulls","UsingBaselinePoints"];var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{t as API,r as UsingBaselinePoints,o as UsingConnectNulls,V as __namedExportsOrder,F as default};
