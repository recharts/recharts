import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-Dy7ciYWo.js";import{n as a,t as o}from"./Legend-DiG0OfkN.js";import{n as s,t as c}from"./Tooltip-tAkHHdqP.js";import{n as l,t as u}from"./CartesianGrid-DXJ2CyMi.js";import{n as d,t as f}from"./Area-DAKsflsV.js";import{n as p,t as m}from"./XAxis-B3WODRl4.js";import{n as h,t as g}from"./YAxis-CZypjyHs.js";import{n as _,t as v}from"./AreaChart-CKbF59GU.js";import{n as y,t as b}from"./ComposedChart-BSnkeRRU.js";import{r as x,t as S}from"./Page-DUsfWi7y.js";import{n as C,t as w}from"./utils-vqcWnakT.js";import{n as T,t as E}from"./ComposedChartArgs-BTSdCahn.js";var D,O,k,A,j;function M(){return(M=t((()=>{D=e(n()),y(),d(),i(),a(),s(),p(),h(),_(),l(),S(),C(),T(),O={component:b},k={render:e=>D.createElement(r,{width:`100%`,height:300},D.createElement(b,{margin:{top:20,right:20,bottom:20,left:20},data:x},D.createElement(f,{isAnimationActive:!1,dataKey:`uv`,...e}),D.createElement(o,null),D.createElement(m,{dataKey:`name`}),D.createElement(g,null),D.createElement(c,null))),args:w(E),parameters:{docs:{description:{story:`You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.`}}}},A={render:()=>{let[e,t]=(0,D.useState)(!0);return D.createElement(`div`,null,D.createElement(`button`,{type:`button`,onClick:()=>t(!e)},`Toggle Tooltip`),D.createElement(v,{width:500,height:400,data:x,margin:{top:10,right:30,left:0,bottom:0}},D.createElement(u,{strokeDasharray:`3 3`}),D.createElement(m,{dataKey:`name`}),D.createElement(g,null),D.createElement(f,{type:`monotone`,dataKey:`uv`,stackId:`1`,stroke:`#8884d8`,fill:`#8884d8`}),D.createElement(f,{type:`monotone`,dataKey:`pv`,stackId:`1`,stroke:`#82ca9d`,fill:`#82ca9d`}),D.createElement(f,{type:`monotone`,dataKey:`amt`,stackId:`1`,stroke:`#ffc658`,fill:`#ffc658`}),e&&D.createElement(c,null)))},args:{}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={300}>
        <ComposedChart margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Area isAnimationActive={false} dataKey="uv" {...args} />
          {/* All further components are added to show the interaction with the Area properties */}
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: getStoryArgsFromArgsTypesObject(ComposedChartArgs),
  parameters: {
    docs: {
      description: {
        story: 'You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [toggle, setToggle] = useState(true);
    return <div>
        <button type="button" onClick={() => setToggle(!toggle)}>
          Toggle Tooltip
        </button>

        <AreaChart width={500} height={400} data={pageData} margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          {toggle && <Tooltip />}
        </AreaChart>
      </div>;
  },
  args: {}
}`,...A.parameters?.docs?.source}}},j=[`AreaChartWithAccessibilityLayer`,`AccessibleWithButton`]})))()}M();export{A as AccessibleWithButton,k as AreaChartWithAccessibilityLayer,j as __namedExportsOrder,O as default};