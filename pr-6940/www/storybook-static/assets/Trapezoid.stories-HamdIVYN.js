import{e as t}from"./iframe-DKKmvtM4.js";import{T as n}from"./Trapezoid-RWF7Vajg.js";const s={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"1500"}},defaultValue:1500},animationEasing:{control:{type:"select"},options:["linear","ease","ease-in","ease-out","ease-in-out"],table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear"'},category:"Animation",defaultValue:{summary:"ease"}},defaultValue:"ease"},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},height:{description:"Height of the trapezoid in pixels.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},isUpdateAnimationActive:{description:"If set to true, trapezoid will update and render with a gradual fade-in animation from left to right.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"false"}},defaultValue:!1},lowerWidth:{description:"Width of the lower horizontal side of the trapezoid in pixels.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},onClick:{description:"The customized event handler of click on the trapezoid",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown on the trapezoid",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the trapezoid",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the trapezoid",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove on the trapezoid",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOut:{description:"The customized event handler of mouseout on the trapezoid",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOver:{description:"The customized event handler of mouseover on the trapezoid",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup on the trapezoid",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},upperWidth:{description:"Width of the upper horizontal side of the trapezoid in pixels.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},x:{description:"The x-coordinate of top left point of the trapezoid.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},y:{description:"The y-coordinate of top left point of the trapezoid.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0}},u={component:n,argTypes:s},e={render:i=>t.createElement("svg",{height:"100%",width:"%100"},t.createElement(n,{...i})),args:{x:85,y:10,upperWidth:50,lowerWidth:200,height:200,fill:"#67ba67",isAnimationActive:!0,isUpdateAnimationActive:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",stroke:"black",strokeWidth:3}};var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <svg height="100%" width="%100">
        <Trapezoid {...args} />
      </svg>;
  },
  args: {
    ...{
      x: 85,
      y: 10,
      upperWidth: 50,
      lowerWidth: 200,
      height: 200,
      fill: '#67ba67',
      isAnimationActive: true,
      isUpdateAnimationActive: true,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: 'ease',
      stroke: 'black',
      strokeWidth: 3
    }
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const l=["API"],p=Object.freeze(Object.defineProperty({__proto__:null,API:e,__namedExportsOrder:l,default:u},Symbol.toStringTag,{value:"Module"}));export{e as A,p as C};
