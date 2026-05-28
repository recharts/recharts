import{e}from"./iframe-B1pz1HPh.js";import{P as s}from"./Polygon-BwfWdjzl.js";import{g as a}from"./arrayEqualityCheck-CGszzuoD.js";import{C as i}from"./ComposedChart-DL9Bpu5J.js";import{R as l}from"./RechartsHookInspector-Ba9PVlAC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BMF326Ad.js";import"./immer-D5ZK6-zj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_DMEy6X.js";import"./index-CONuoc65.js";import"./hooks-_Fqb7rcn.js";import"./axisSelectors-rNwEbhlr.js";import"./d3-scale-COb-tvd6.js";import"./zIndexSlice-D685U5bi.js";import"./renderedTicksSlice-CvGe_rQ2.js";import"./CartesianChart-DW92cNBQ.js";import"./chartDataContext-CaM10qH-.js";import"./CategoricalChart-Bv4j4Ty_.js";import"./index-rYM0k6kK.js";import"./ChartSizeDimensions-DucsnCfP.js";import"./OffsetShower-C5l1TQVl.js";import"./PlotAreaShower-D97eaCHy.js";const x={baseLinePoints:{table:{type:{summary:"Array<Coordinate>"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},connectNulls:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},onClick:{description:"The customized event handler of click on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOut:{description:"The customized event handler of mouseout on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOver:{description:"The customized event handler of mouseover on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},points:{description:"The coordinates of all the vertexes of the polygon, like an array of objects with x and y coordinates.",table:{type:{summary:"Array<Coordinate>"},category:"General"}}},f=[{x:100,y:100},{x:300,y:100},{x:100,y:300},{x:300,y:300}],F={component:s,argTypes:x},o={render:t=>e.createElement(a,{width:"100%",height:500},e.createElement(i,{width:500,height:300,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{...t}),e.createElement(l,null))),args:{points:f,stroke:"#000",fill:"red"}},r={render:t=>e.createElement(a,{width:"100%",height:500},e.createElement(i,{width:250,height:250,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{...t}),e.createElement(l,null))),args:{points:[{x:50,y:50},{x:0,y:100},{x:0,y:200},{x:100,y:200},{x:100,y:100},null],stroke:"#000",fill:"red",connectNulls:!0}},n={render:t=>e.createElement(a,{width:"100%",height:500},e.createElement(i,{width:250,height:250,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{...t}),e.createElement(l,null))),args:{points:[{x:40,y:20},{x:60,y:20},{x:60,y:60},{x:70,y:60},{x:50,y:90},{x:30,y:60},{x:40,y:60}],baseLinePoints:[{x:15,y:95},{x:85,y:95}],stroke:"#000",fill:"red",connectNulls:!1}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={500} height={300} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <Polygon {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    points: pointDefault,
    stroke: '#000',
    fill: 'red'
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var y,d,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={250} height={250} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <Polygon {...args} />
          <RechartsHookInspector />
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
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,u,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={250} height={250} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <Polygon {...args} />
          <RechartsHookInspector />
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
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const J=["API","UsingConnectNulls","UsingBaselinePoints"];export{o as API,n as UsingBaselinePoints,r as UsingConnectNulls,J as __namedExportsOrder,F as default};
