import{e}from"./iframe-2t9JIeSz.js";import{G as r,d as c}from"./CartesianComponentShared-BGjrRDZW.js";import{A as l}from"./AnimationProps-CWko-cer.js";import{C as m}from"./ChartProps-BCGtP1Xa.js";import{g as t}from"./utils-ePvtT4un.js";import{o as d,a as y,b as g,c as f,d as E,e as h,f as A,g as v,h as S,i as b,E as F}from"./EventHandlers-JVOOzquU.js";import{G as p}from"./Styles-CVZG1vZQ.js";import{A as C}from"./ActiveShapeProps-DWeRMoVm.js";import{F as u,a as T}from"./FunnelChart-CK9aMx6e.js";import{R as D}from"./arrayEqualityCheck-Ne24Ckb0.js";import{L as K}from"./ReactUtils-3f6_sZO7.js";import{L as O}from"./Legend-BBddR5ra.js";import{R as B}from"./RechartsHookInspector-l9P1RfFo.js";const L={argTypes:{nameKey:{description:"The key of each sector's name.",table:{type:{summary:"String"},defaultValue:{summary:"name"},category:"General"}},legendType:{description:"The type of icon in legend. If set to 'none', no legend item will be rendered.",table:{type:{summary:"line | plainline | square | rect| circle | cross | diamond | square | star | triangle | wye | none"},defaultValue:"rect",category:"Style"}},...C,...l,animationBegin:{description:"Delays the start of the animation by the specified number of milliseconds.",type:{name:"number"},defaultValue:400,table:{category:"Animation"}},dataKey:c,id:r.id,name:r.name,...p,...m,...F,onAnimationStart:b,onAnimationEnd:S,onClick:v,onMouseDown:A,onMouseUp:h,onMouseMove:E,onMouseOver:f,onMouseOut:g,onMouseEnter:y,onMouseLeave:d},component:u},a={render:n=>e.createElement(D,{width:"100%",height:200},e.createElement(T,{layout:"horizontal"},e.createElement(u,{dataKey:n.dataKey,...n},e.createElement(K,{dataKey:"name",fill:"#000",position:"right",stroke:"none"}),e.createElement(O,null)),e.createElement(B,null))),args:{...t(l),...t(r),...t(p),...t(m),width:400,dataKey:"value",stroke:"#424242",isAnimationActive:!0,lastShapeType:"rectangle",orientation:"horizontal",data:[{fill:"#EEEEEE",name:"A",value:1009},{fill:"#E0E0E0",name:"B",value:903},{fill:"#BDBDBD",name:"C",value:756},{fill:"#9E9E9E",name:"D",value:622},{fill:"#757575",name:"E",value:602},{fill:"#424242",name:"F",value:580}]}};var o,s,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={200}>
        <FunnelChart layout="horizontal">
          <Funnel dataKey={args.dataKey} {...args}>
            <LabelList dataKey="name" fill="#000" position="right" stroke="none" />
            <Legend />
          </Funnel>
          <RechartsHookInspector />
        </FunnelChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AnimationProps),
    ...getStoryArgsFromArgsTypesObject(General),
    ...getStoryArgsFromArgsTypesObject(GeneralStyle),
    ...getStoryArgsFromArgsTypesObject(ChartSizeProps),
    width: 400,
    dataKey: 'value',
    stroke: '#424242',
    isAnimationActive: true,
    lastShapeType: 'rectangle',
    orientation: 'horizontal',
    data: [{
      fill: '#EEEEEE',
      name: 'A',
      value: 1009
    }, {
      fill: '#E0E0E0',
      name: 'B',
      value: 903
    }, {
      fill: '#BDBDBD',
      name: 'C',
      value: 756
    }, {
      fill: '#9E9E9E',
      name: 'D',
      value: 622
    }, {
      fill: '#757575',
      name: 'E',
      value: 602
    }, {
      fill: '#424242',
      name: 'F',
      value: 580
    }]
  }
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const M=["API"],U=Object.freeze(Object.defineProperty({__proto__:null,API:a,__namedExportsOrder:M,default:L},Symbol.toStringTag,{value:"Module"}));export{a as A,U as C};
