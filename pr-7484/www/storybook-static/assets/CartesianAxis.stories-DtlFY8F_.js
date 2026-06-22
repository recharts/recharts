import{R as a}from"./iframe-DX1vtGMO.js";import{t as c}from"./Tick-DyycEu3I.js";import{C as s}from"./CartesianAxis-BmLV-dG0.js";import{S as u}from"./isWellBehavedNumber-BhjTCj8F.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Cgjumwe9.js";import"./Layer-D3wyNfAg.js";import"./resolveDefaultProps-Evu9rMXK.js";import"./Text-DdDBf3IT.js";import"./DOMUtils-9dw7u23l.js";import"./Label-D5WIiRBw.js";import"./PolarUtils-CTnnDHZv.js";import"./zIndexSlice-CBHqXPZu.js";import"./immer-CyjJLdoY.js";import"./index-CFOnPmwL.js";import"./index-BhJxPluG.js";import"./ZIndexLayer-DdHbybrS.js";import"./types-wjbQlydb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DGFQGuI_.js";const m={x:{description:"The x-coordinate of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},y:{description:"The y-coordinate of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},width:{description:"The width of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},height:{description:"The height of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},orientation:{description:"The orientation of axis.",table:{type:{summary:"top | bottom | left | right",defaultValue:"bottom"},category:"General"}},viewBox:{description:"The box of viewing area.",table:{type:{summary:"Object",defaultValue:{x:0,y:0,width:0,height:0}},category:"General"}},axisLine:{description:"If set false, no axis line will be drawn. If set a object, the option is the configuration of axis line.",table:{type:{summary:"Boolean | Object",defaultValue:!0},category:"General"}},tickLine:{description:`If set false, no axis tick lines will be drawn. If set a object,
      the option is the configuration of tick lines.`,table:{type:{summary:"Boolean | Object",defaultValue:!0},category:"General"}},minTickGap:{description:"The minimum gap between two adjacent labels.",table:{type:{summary:"Number",defaultValue:5},category:"General"}},tickSize:{description:"The length of tick line.",table:{type:{summary:"Number",defaultValue:6},category:"General"}},interval:{description:`If set 0, all the ticks will be shown. If set preserveStart", "preserveEnd" or "preserveStartEnd",
      the ticks which is to be shown or hidden will be calculated automatically.`,table:{type:{summary:'"preserveStart" | "preserveEnd" | "preserveStartEnd" | "equidistantPreserveStart" | Number',defaultValue:"preserveEnd"},category:"General"},options:["preserveStart","preserveStartEnd","preserveEnd","equidistantPreserveStart",0,1,2,3,4,5],control:{type:"select"}},tick:{description:`If set false, no ticks will be drawn. If set a object, the option is the configuration of ticks.
      If set a React element, the option is the custom react element of drawing ticks. If set a function,
      the function will be called to render customized tick.`,table:{type:{summary:"Boolean | Object | ReactElement | Function",defaultValue:null},category:"General"}},label:{description:`If set a string or a number, default label will be drawn, and the option is content.
      If set a React element, the option is the custom react element of drawing label.
      If set a function, the function will be called to render customized label.`,table:{type:{summary:"String | Number | ReactElement | Function",defaultValue:null},category:"General"}},mirror:{description:"If set true, flips ticks around the axis line, displaying the labels inside the chart instead of outside.",table:{type:{summary:"Boolean",defaultValue:!1},category:"General"}},tickMargin:{description:"The margin between tick line and tick.",table:{type:{summary:"Number"},category:"General"}}},R={component:s,argTypes:{...m}},e={render:l=>{const[t,r]=[600,300];return a.createElement(u,{width:t,height:r,viewBox:{x:0,y:0,width:t,height:r}},a.createElement(s,{viewBox:{x:0,y:0,width:t,height:r},...l}))},args:{ticks:c,orientation:"bottom",interval:"preserveEnd",width:500,height:600}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const A=["API"];export{e as API,A as __namedExportsOrder,R as default};
