import{R as r}from"./iframe-D4kLWznI.js";import{C as s}from"./CartesianAxis-BbZQB26a.js";import{S as c}from"./zIndexSlice-B28gm5Zj.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-BiQ6tIpf.js";import"./resolveDefaultProps-CJYKgT8A.js";import"./get-CjriyByo.js";import"./Text-NG93JaM3.js";import"./ZIndexLayer-DTTyUNkX.js";import"./index-K9fqWjcX.js";import"./index-BZ6MCrYJ.js";import"./Label-CC2QlraV.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Jvx5Hvrj.js";import"./throttle-q19G1wYU.js";import"./types-C0VOENzr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BRzk6Zuy.js";import"./index-BukBKnfG.js";import"./index-BSDf5RkV.js";import"./isBuffer-AZzsDYE7.js";const d=[{value:10,coordinate:50,index:0},{value:1e3,coordinate:100,index:1},{value:20,coordinate:150,index:2},{value:40,coordinate:200,index:3},{value:90,coordinate:250,index:4},{value:"Recharts",coordinate:300,index:5},{value:"React",coordinate:350,index:6},{value:"A",coordinate:400,index:7},{value:"B",coordinate:450,index:8},{value:"C",coordinate:500,index:9}],u={x:{description:"The x-coordinate of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},y:{description:"The y-coordinate of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},width:{description:"The width of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},height:{description:"The height of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},orientation:{description:"The orientation of axis.",table:{type:{summary:"top | bottom | left | right",defaultValue:"bottom"},category:"General"}},viewBox:{description:"The box of viewing area.",table:{type:{summary:"Object",defaultValue:{x:0,y:0,width:0,height:0}},category:"General"}},axisLine:{description:"If set false, no axis line will be drawn. If set a object, the option is the configuration of axis line.",table:{type:{summary:"Boolean | Object",defaultValue:!0},category:"General"}},tickLine:{description:`If set false, no axis tick lines will be drawn. If set a object,
      the option is the configuration of tick lines.`,table:{type:{summary:"Boolean | Object",defaultValue:!0},category:"General"}},minTickGap:{description:"The minimum gap between two adjacent labels.",table:{type:{summary:"Number",defaultValue:5},category:"General"}},tickSize:{description:"The length of tick line.",table:{type:{summary:"Number",defaultValue:6},category:"General"}},interval:{description:`If set 0, all the ticks will be shown. If set preserveStart", "preserveEnd" or "preserveStartEnd",
      the ticks which is to be shown or hidden will be calculated automatically.`,table:{type:{summary:'"preserveStart" | "preserveEnd" | "preserveStartEnd" | "equidistantPreserveStart" | Number',defaultValue:"preserveEnd"},category:"General"},options:["preserveStart","preserveStartEnd","preserveEnd","equidistantPreserveStart",0,1,2,3,4,5],control:{type:"select"}},tick:{description:`If set false, no ticks will be drawn. If set a object, the option is the configuration of ticks.
      If set a React element, the option is the custom react element of drawing ticks. If set a function,
      the function will be called to render customized tick.`,table:{type:{summary:"Boolean | Object | ReactElement | Function",defaultValue:null},category:"General"}},label:{description:`If set a string or a number, default label will be drawn, and the option is content.
      If set a React element, the option is the custom react element of drawing label.
      If set a function, the function will be called to render customized label.`,table:{type:{summary:"String | Number | ReactElement | Function",defaultValue:null},category:"General"}},mirror:{description:"If set true, flips ticks around the axis line, displaying the labels inside the chart instead of outside.",table:{type:{summary:"Boolean",defaultValue:!1},category:"General"}},tickMargin:{description:"The margin between tick line and tick.",table:{type:{summary:"Number"},category:"General"}}},A={component:s,argTypes:{...u}},e={render:l=>{const[t,a]=[600,300];return r.createElement(c,{width:t,height:a,viewBox:{x:0,y:0,width:t,height:a}},r.createElement(s,{viewBox:{x:0,y:0,width:t,height:a},...l}))},args:{ticks:d,orientation:"bottom",interval:"preserveEnd",width:500,height:600}},C=["API"];var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: Record<string, any>) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <Surface width={surfaceWidth} height={surfaceHeight} viewBox={{
      x: 0,
      y: 0,
      width: surfaceWidth,
      height: surfaceHeight
    }}>
        <CartesianAxis viewBox={{
        x: 0,
        y: 0,
        width: surfaceWidth,
        height: surfaceHeight
      }} {...args} />
      </Surface>;
  },
  args: {
    ticks,
    orientation: 'bottom',
    interval: 'preserveEnd',
    width: 500,
    height: 600
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{e as API,C as __namedExportsOrder,A as default};
