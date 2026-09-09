import{R as a}from"./iframe-VXxHrawH.js";import{t as c}from"./Tick-DyycEu3I.js";import{C as s}from"./CartesianAxis-Dhdcn9ZL.js";import{S as m}from"./isWellBehavedNumber-CkFzhS37.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-B3kAMod2.js";import"./resolveDefaultProps-D5Zdg-cB.js";import"./Text-DwkoCOGf.js";import"./DOMUtils-xAHEQowW.js";import"./useId-poNdh1JU.js";import"./useBackwardsCompatibleTheme-CAqean3d.js";import"./Label-KqVvCdTF.js";import"./PolarUtils-CTnnDHZv.js";import"./zIndexSlice-DgTA0TxE.js";import"./throttle-BWlQSnjt.js";import"./index-Cou_EQ7F.js";import"./index-Ci4a_PyE.js";import"./ZIndexLayer-ChcfhIs7.js";import"./types-DHxYQYQn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-S6Tl6gbL.js";import"./index-BrnOmBWl.js";import"./index-CdTW_BBW.js";import"./isBuffer-BG75eWKN.js";const u={x:{description:"The x-coordinate of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},y:{description:"The y-coordinate of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},width:{description:"The width of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},height:{description:"The height of axis.",table:{type:{summary:"Number",defaultValue:0},category:"General"}},orientation:{description:"The orientation of axis.",table:{type:{summary:"top | bottom | left | right",defaultValue:"bottom"},category:"General"}},viewBox:{description:"The box of viewing area.",table:{type:{summary:"Object",defaultValue:{x:0,y:0,width:0,height:0}},category:"General"}},axisLine:{description:"If set false, no axis line will be drawn. If set a object, the option is the configuration of axis line.",table:{type:{summary:"Boolean | Object",defaultValue:!0},category:"General"}},tickLine:{description:`If set false, no axis tick lines will be drawn. If set a object,
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
