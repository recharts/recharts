import{e as t}from"./iframe-CjnSqbHY.js";import{G as n}from"./Styles-CVZG1vZQ.js";import{C as i}from"./Cross-BEO3jmNv.js";import{R as h}from"./arrayEqualityCheck-Cu3uzYRG.js";import{C as m}from"./ComposedChart-C1GJHbWV.js";import{R as p}from"./RechartsHookInspector-Df5OjUd3.js";const c={component:i,argTypes:{y:{description:"The y-coordinate of the horizontal line of the cross.",table:{type:{summary:"number"}}},x:{description:"The x-coordinate of the vertical line of the cross.",table:{type:{summary:"number"}}},top:{description:"The y-coordinate of the top left point in the boundary box of the cross.",table:{type:{summary:"number"}}},left:{description:"The x-coordinate of the top left point in the boundary box of the cross.",table:{type:{summary:"number"}}},height:{description:"The height of the vertical line of the cross.",table:{type:{summary:"number"}}},width:{description:"The width of the horizontal line of the cross.",table:{type:{summary:"number"}}},...n}},e={render:a=>t.createElement(h,{width:"100%",height:500},t.createElement(m,{width:500,height:300,margin:{top:5,right:30,left:20,bottom:5}},t.createElement(i,{...a}),t.createElement(p,null))),args:{y:100,x:500,top:0,left:0,height:1e3,width:1e3,stroke:"#000",fill:"none",strokeDasharray:"3 3",strokeWidth:10,strokeOpacity:.5}};var o,r,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={500} height={300} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <Cross {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    y: 100,
    x: 500,
    top: 0,
    left: 0,
    height: 1000,
    width: 1000,
    stroke: '#000',
    fill: 'none',
    strokeDasharray: '3 3',
    strokeWidth: 10,
    strokeOpacity: 0.5
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const l=["API"],C=Object.freeze(Object.defineProperty({__proto__:null,API:e,__namedExportsOrder:l,default:c},Symbol.toStringTag,{value:"Module"}));export{e as A,C};
