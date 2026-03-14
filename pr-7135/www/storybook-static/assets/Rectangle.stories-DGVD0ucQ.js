import{e as t}from"./iframe-Bv9A2uSW.js";import{R as o}from"./Rectangle-C9QMG00E.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Y5jGROg-.js";import"./useAnimationId-5b7iZFah.js";const i={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"1500"}},defaultValue:1500},animationEasing:{table:{type:{summary:"(union of 9 variants)"},category:"Animation",defaultValue:{summary:"ease"}},defaultValue:"ease"},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},height:{description:"Height of the rectangle in pixels.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"false"}},defaultValue:!1},isUpdateAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"false"}},defaultValue:!1},onClick:{description:"The customized event handler of click on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOut:{description:"The customized event handler of mouseout on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOver:{description:"The customized event handler of mouseover on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},radius:{description:`The radius of corners.

If you provide a single number, it applies to all four corners.
If you provide an array of four numbers, they apply to top-left, top-right, bottom-right, bottom-left corners respectively.`,table:{type:{summary:"[number, number, number, number] | number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},width:{description:"Width of the rectangle in pixels.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},x:{description:"The x-coordinate of top left point of the rectangle.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},y:{description:"The y-coordinate of top left point of the rectangle.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0}},p={component:o,argTypes:i},e={render:s=>t.createElement("svg",{height:"100%",width:"100%"},t.createElement(o,{...s})),args:{radius:7,x:10,y:10,height:200,width:300,stroke:"#000",strokeWidth:5,fill:"#67ba67",isAnimationActive:!0,isUpdateAnimationActive:!0,animationBegin:0,animationDuration:1500}};var a,n,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Record<string, any>) => {
    return <svg height="100%" width="100%">
        <Rectangle {...args} />
      </svg>;
  },
  args: {
    radius: 7,
    x: 10,
    y: 10,
    height: 200,
    width: 300,
    stroke: '#000',
    strokeWidth: 5,
    fill: '#67ba67',
    isAnimationActive: true,
    isUpdateAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const g=["API"];export{e as API,g as __namedExportsOrder,p as default};
