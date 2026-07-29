import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,H as i,R as a,Vn as o,g as s,t as c}from"./iframe-BqVvK_R4.js";import{C as l,t as u}from"./data-J2vpPkF6.js";import{n as d,t as f}from"./utils-4uF5A2JM.js";import{n as p,t as m}from"./ScatterChartArgs-f-9wms1F.js";var h,g,_,v;e((()=>{h=t(n()),u(),c(),d(),p(),g={argTypes:m,component:s},_={name:`Simple`,render:e=>{let{data:t,...n}=e;return h.createElement(o,{width:`100%`,height:400},h.createElement(s,n,h.createElement(r,{dataKey:`x`}),h.createElement(a,{dataKey:`y`}),h.createElement(i,{data:t})))},args:{...f(m),data:l,margin:{top:0,right:0,bottom:0,left:0}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const {
      data,
      ...rest
    } = args;
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...rest}>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter data={data} />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    data: coordinateData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`API`]}))();export{_ as API,v as __namedExportsOrder,g as default};