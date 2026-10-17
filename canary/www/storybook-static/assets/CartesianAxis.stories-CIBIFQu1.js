import{R as a}from"./iframe-DnfWaB1B.js";import{t as c}from"./Tick-DyycEu3I.js";import{C as s}from"./CartesianAxis-CiEPj5kn.js";import{S as m}from"./isWellBehavedNumber-B2TPiKzz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-CESakEtd.js";import"./resolveDefaultProps-8EGHXmvb.js";import"./Text-18vmCMJW.js";import"./pageBackground-BZcgsdhX.js";import"./useId-EMQHPSSh.js";import"./useBackwardsCompatibleTheme-Csjmt-9c.js";import"./Label-DErBiWtx.js";import"./PolarUtils-CTnnDHZv.js";import"./zIndexSlice-BT6q8CVb.js";import"./throttle-BlHdMJGb.js";import"./index-CMtaCruM.js";import"./index-B-M-aHgw.js";import"./ZIndexLayer-CVLoryN8.js";import"./types-vzKdATLY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Diudvbk0.js";import"./index-CNOFauDT.js";import"./index-DwRvwf7P.js";import"./isBuffer-AZzsDYE7.js";const u={x:{description:"The x-coordinate of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},y:{description:"The y-coordinate of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},width:{description:"The width of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},height:{description:"The height of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},orientation:{description:"The orientation of axis.",table:{type:{summary:"top | bottom | left | right",defaultValue:"bottom"},category:"General"}},viewBox:{description:"The box of viewing area.",table:{type:{summary:"Object",defaultValue:{x:0,y:0,width:0,height:0}},category:"General"}},axisLine:{description:"If set false, no axis line will be drawn. If set a object, the option is the configuration of axis line.",table:{type:{summary:"Boolean | Object",defaultValue:!0},category:"General"}},tickLine:{description:`If set false, no axis tick lines will be drawn. If set a object,
      the option is the configuration of tick lines.`,table:{type:{summary:"Boolean | Object",defaultValue:!0},category:"General"}},minTickGap:{description:"The minimum gap between two adjacent labels.",table:{type:{summary:"Number",defaultValue:5},category:"General"}},tickSize:{description:"The length of tick line.",table:{type:{summary:"Number",defaultValue:6},category:"General"}},interval:{description:`If set 0, all the ticks will be shown. If set preserveStart", "preserveEnd" or "preserveStartEnd",
      the ticks which is to be shown or hidden will be calculated automatically.`,table:{type:{summary:'"preserveStart" | "preserveEnd" | "preserveStartEnd" | "equidistantPreserveStart" | Number',defaultValue:"preserveEnd"},category:"General"},options:["preserveStart","preserveStartEnd","preserveEnd","equidistantPreserveStart",0,1,2,3,4,5],control:{type:"select"}},tick:{description:`If set false, no ticks will be drawn. If set a object, the option is the configuration of ticks.
      If set a React element, the option is the custom react element of drawing ticks. If set a function,
      the function will be called to render customized tick.`,table:{type:{summary:"Boolean | Object | ReactElement | Function",defaultValue:null},category:"General"}},label:{description:`If set a string or a number, default label will be drawn, and the option is content.
      If set a React element, the option is the custom react element of drawing label.
      If set a function, the function will be called to render customized label.`,table:{type:{summary:"String | Number | ReactElement | Function",defaultValue:null},category:"General"}},mirror:{description:"If set true, flips ticks around the axis line, displaying the labels inside the chart instead of outside.",table:{type:{summary:"Boolean",defaultValue:!1},category:"General"}},tickMargin:{description:"The margin between tick line and tick.",table:{type:{summary:"Number"},category:"General"}}},W={component:s,argTypes:{...u}},e={render:l=>{const[t,r]=[600,300];return a.createElement(m,{width:t,height:r,viewBox:{x:0,y:0,width:t,height:r}},a.createElement(s,{viewBox:{x:0,y:0,width:t,height:r},...l}))},args:{ticks:c,orientation:"bottom",interval:"preserveEnd",width:500,height:600}},C=["API"];var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{e as API,C as __namedExportsOrder,W as default};
