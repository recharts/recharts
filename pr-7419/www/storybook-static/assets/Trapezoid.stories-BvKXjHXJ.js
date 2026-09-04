import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{n as r,t as i}from"./Trapezoid-ySqq-4jQ.js";var a;function o(){return(o=t((()=>{a={animationBegin:{control:{type:`number`},table:{type:{summary:`number`},category:`Animation`,defaultValue:{summary:`0`}},defaultValue:0},animationDuration:{control:{type:`number`},table:{type:{summary:`number`},category:`Animation`,defaultValue:{summary:`1500`}},defaultValue:1500},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:`Animation`,defaultValue:{summary:`ease`}},defaultValue:`ease`},className:{control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},height:{description:`Height of the trapezoid in pixels.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},isUpdateAnimationActive:{description:`If set to true, trapezoid will update and render with a gradual fade-in animation from left to right.`,control:{type:`boolean`},table:{type:{summary:`boolean`},category:`Animation`,defaultValue:{summary:`false`}},defaultValue:!1},lowerWidth:{description:`Width of the lower horizontal side of the trapezoid in pixels.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},onClick:{description:`The customized event handler of click on the trapezoid`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseDown:{description:`The customized event handler of mousedown on the trapezoid`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseEnter:{description:`The customized event handler of mouseenter on the trapezoid`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseLeave:{description:`The customized event handler of mouseleave on the trapezoid`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseMove:{description:`The customized event handler of mousemove on the trapezoid`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseOut:{description:`The customized event handler of mouseout on the trapezoid`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseOver:{description:`The customized event handler of mouseover on the trapezoid`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseUp:{description:`The customized event handler of mouseup on the trapezoid`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},upperWidth:{description:`Width of the upper horizontal side of the trapezoid in pixels.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},x:{description:`The x-coordinate of top left point of the trapezoid.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},y:{description:`The y-coordinate of top left point of the trapezoid.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0}}})))()}var s,c,l,u;function d(){return(d=t((()=>{s=e(n()),r(),o(),c={component:i,argTypes:a},l={render:e=>s.createElement(`svg`,{height:`100%`,width:`%100`},s.createElement(i,e)),args:{x:85,y:10,upperWidth:50,lowerWidth:200,height:200,fill:`#67ba67`,isAnimationActive:!0,isUpdateAnimationActive:!0,animationBegin:0,animationDuration:1500,animationEasing:`ease`,stroke:`black`,strokeWidth:3}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`API`]})))()}d();export{l as API,u as __namedExportsOrder,c as default};