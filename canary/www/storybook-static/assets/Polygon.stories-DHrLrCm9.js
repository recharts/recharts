import{R as e}from"./iframe-Ce1K7ebi.js";import{P as s}from"./Polygon-B6ix9Boi.js";import{R as a}from"./zIndexSlice-8Zo3fsoU.js";import{C as i}from"./ComposedChart-COfY451m.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BJIMs5EG.js";import"./resolveDefaultProps-DSV9zLoY.js";import"./immer-wBCCevMF.js";import"./index-s0WSFyA7.js";import"./index-AjZPfGGe.js";import"./isWellBehavedNumber-CQ8pg5Hb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BrIlX8W1.js";import"./index-BorxIHRi.js";import"./index-gt-wl4xF.js";import"./renderedTicksSlice-GRKlOorj.js";import"./axisSelectors-CwdMfS2t.js";import"./d3-scale-Dx0XyOwO.js";import"./CartesianChart-BDjFqgQH.js";import"./chartDataContext-CPsHUBNm.js";import"./CategoricalChart-CSIi67W8.js";const v={baseLinePoints:{table:{type:{summary:"Array<Coordinate>"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},connectNulls:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},onClick:{description:"The customized event handler of click on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOut:{description:"The customized event handler of mouseout on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOver:{description:"The customized event handler of mouseover on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup on the polygon",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},points:{description:"The coordinates of all the vertexes of the polygon, like an array of objects with x and y coordinates.",table:{type:{summary:"Array<Coordinate>"},category:"General"}}},x=[{x:100,y:100},{x:300,y:100},{x:100,y:300},{x:300,y:300}],B={component:s,argTypes:v},o={render:t=>e.createElement(a,{width:"100%",height:500},e.createElement(i,{width:500,height:300,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{...t}))),args:{points:x,stroke:"#000",fill:"red"}},r={render:t=>e.createElement(a,{width:"100%",height:500},e.createElement(i,{width:250,height:250,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{...t}))),args:{points:[{x:50,y:50},{x:0,y:100},{x:0,y:200},{x:100,y:200},{x:100,y:100},null],stroke:"#000",fill:"red",connectNulls:!0}},n={render:t=>e.createElement(a,{width:"100%",height:500},e.createElement(i,{width:250,height:250,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{...t}))),args:{points:[{x:40,y:20},{x:60,y:20},{x:60,y:60},{x:70,y:60},{x:50,y:90},{x:30,y:60},{x:40,y:60}],baseLinePoints:[{x:15,y:95},{x:85,y:95}],stroke:"#000",fill:"red",connectNulls:!1}};var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,y,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(y=r.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};var h,g,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const I=["API","UsingConnectNulls","UsingBaselinePoints"];export{o as API,n as UsingBaselinePoints,r as UsingConnectNulls,I as __namedExportsOrder,B as default};
