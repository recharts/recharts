import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,J as i,Q as a,R as o,Rt as s,Vn as c,kn as l,m as u,t as d,u as f}from"./iframe-BiMB5Acc.js";import{t as p}from"./data-J2vpPkF6.js";import{r as m}from"./Page-C0w_0_Yr.js";import{n as h,t as g}from"./utils-4uF5A2JM.js";import{n as _,t as v}from"./ComposedChartArgs-f-9wms1F.js";var y,b,x,S,C;e((()=>{y=t(n()),d(),p(),h(),_(),b={component:f},x={render:e=>y.createElement(c,{width:`100%`,height:300},y.createElement(f,{margin:{top:20,right:20,bottom:20,left:20},data:m},y.createElement(i,{isAnimationActive:!1,dataKey:`uv`,...e}),y.createElement(l,null),y.createElement(r,{dataKey:`name`}),y.createElement(o,null),y.createElement(s,null))),args:g(v),parameters:{docs:{description:{story:`You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.`}}}},S={render:()=>{let[e,t]=(0,y.useState)(!0);return y.createElement(`div`,null,y.createElement(`button`,{type:`button`,onClick:()=>t(!e)},`Toggle Tooltip`),y.createElement(u,{width:500,height:400,data:m,margin:{top:10,right:30,left:0,bottom:0}},y.createElement(a,{strokeDasharray:`3 3`}),y.createElement(r,{dataKey:`name`}),y.createElement(o,null),y.createElement(i,{type:`monotone`,dataKey:`uv`,stackId:`1`,stroke:`#8884d8`,fill:`#8884d8`}),y.createElement(i,{type:`monotone`,dataKey:`pv`,stackId:`1`,stroke:`#82ca9d`,fill:`#82ca9d`}),y.createElement(i,{type:`monotone`,dataKey:`amt`,stackId:`1`,stroke:`#ffc658`,fill:`#ffc658`}),e&&y.createElement(s,null)))},args:{}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`AreaChartWithAccessibilityLayer`,`AccessibleWithButton`]}))();export{S as AccessibleWithButton,x as AreaChartWithAccessibilityLayer,C as __namedExportsOrder,b as default};