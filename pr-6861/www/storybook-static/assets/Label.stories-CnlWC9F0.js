import{e}from"./iframe-BzK4IM4O.js";import{g as d}from"./utils-ePvtT4un.js";import{p as g}from"./LabelListProps-Dr1jjSR5.js";import{D as f,R as h}from"./arrayEqualityCheck-DntSlYRe.js";import{L as r}from"./Label-Cw9dZn4K.js";import{L as y}from"./LineChart-m8pMGU70.js";import{C as P}from"./CartesianGrid-D-ISYqWZ.js";import{L as x}from"./Line-BDor0g31.js";import{Y as v}from"./YAxis-FFHKkbRQ.js";import{X as R}from"./XAxis-BEioX7l9.js";import{R as u}from"./RechartsHookInspector-Blpd2IS8.js";import{R as A}from"./RadarChart-BO9tAJKE.js";import{R as C}from"./Radar-DZuiwxm4.js";import{P as E}from"./PolarGrid-ifJbUXIn.js";import{P as k}from"./PolarAngleAxis-hpIfye7S.js";import{P as L}from"./PolarRadiusAxis-BbVcYHuI.js";import{p as b}from"./Page-DPte-9pC.js";const n={value:{description:"The value of label, which can be specified by this prop or the children of <Label />",control:{type:"text"},table:{type:{summary:"string | number"},category:"Content"}},position:g,offset:{description:'The offset to the specified "position"',control:{type:"number"},table:{type:{summary:"number"},defaultValue:5,category:"Position"}},children:{description:'The value of label, which can be specified by this props or the props "value". (Optional)',control:{type:"text"},table:{type:{summary:"string | number"},category:"Content"}},content:{description:"If set a React element, the option is the custom react element of rendering label. If set a function, the function will be called to render label content. (Optional)",table:{type:{summary:"ReactElement | Function"},category:"Content"}},id:{description:"The unique id of this component, which will be used to generate unique clip path id internally. This props is suggested to be set in SSR. (Optional)",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},zIndex:{description:"zIndex decides the vertical stacking order of components.",control:{type:"number"},table:{type:{summary:"number"},defaultValue:f.label,category:"Position"}},angle:{description:"The rotate angle of Text. (Optional)",control:{type:"number"},table:{type:{summary:"number"},defaultValue:0,category:"Position"}},textAnchor:{description:"The horizontal text anchor position. If undefined, it is set automatically based on the label position.",control:{type:"select"},options:[void 0,"start","middle","end","inherit"],table:{type:{summary:"undefined | start | middle | end | inherit"},category:"Position",defaultValue:void 0}},textBreakAll:{description:"When true, enables character-level breaking instead of word-level breaking. When false, breaks at word boundaries.",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:!1,category:"Content"}},viewBox:{table:{disable:!0}},parentViewBox:{table:{disable:!0}},formatter:{table:{disable:!0}},index:{table:{disable:!0}},labelRef:{table:{disable:!0}}},w={argTypes:n,component:r,tags:["!autodocs"]},o={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(y,{data:b,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(P,null),e.createElement(x,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(v,{tick:!1}),e.createElement(R,{dataKey:"name",tick:!1}),e.createElement(r,{value:`Position: ${t.position}`,...t}),e.createElement(u,null))),args:{...d(n),position:"center"}},a={render:t=>e.createElement(A,{width:800,height:800,data:b,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(C,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(E,null),e.createElement(k,{dataKey:"name"}),e.createElement(L,{tick:!1}),e.createElement(r,{value:`Position: ${t.position}`,...t}),e.createElement(u,null)),args:{...d(n),position:"center"}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart data={pageData} margin={{
        top: 100,
        bottom: 100,
        left: 100,
        right: 100
      }}>
          <CartesianGrid />
          <Line type="monotone" dataKey="uv" stroke="#111" />
          <YAxis tick={false} />
          <XAxis dataKey="name" tick={false} />
          <Label value={\`Position: \${args.position}\`} {...args} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelProps),
    position: 'center'
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var p,m,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <RadarChart width={800} height={800} data={pageData} margin={{
      top: 30,
      bottom: 30,
      left: 100,
      right: 100
    }}>
        <Radar type="monotone" dataKey="uv" fill="rgba(0, 200, 200, 0.2)" />
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis tick={false} />
        <Label value={\`Position: \${args.position}\`} {...args} />
        <RechartsHookInspector />
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelProps),
    position: 'center'
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const T=["CartesianPositions","PolarPositions"],W=Object.freeze(Object.defineProperty({__proto__:null,CartesianPositions:o,PolarPositions:a,__namedExportsOrder:T,default:w},Symbol.toStringTag,{value:"Module"}));export{W as C,o as a};
