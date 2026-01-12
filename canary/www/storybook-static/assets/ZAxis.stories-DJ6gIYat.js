import{e}from"./iframe-DS-q9W3A.js";import{g as m}from"./utils-ePvtT4un.js";import{S as p}from"./ReactUtils-W1w-s9kx.js";import{Z as s}from"./ZAxis-BeYziGi-.js";import{R as c}from"./arrayEqualityCheck-uWyKn9kd.js";import{S as l}from"./ScatterChart-DnlTiDRv.js";import{X as u}from"./XAxis-B6LMs64M.js";import{Y as d}from"./YAxis-Dl_2Ddpc.js";import{C as y}from"./CartesianGrid-uZbhVA3R.js";import{S as g}from"./Scatter-i2pxDT6Y.js";import{T as h}from"./Tooltip-jPfqbMk0.js";import{R as f}from"./RechartsHookInspector-BZrvl649.js";import{p as A}from"./Page-DPte-9pC.js";const n={zAxisId:{description:"The id of z-axis which is corresponding to the data.",table:{type:{summary:"string | number"},defaultValue:{summary:0},category:"General"}},unit:{description:"The unit of data displayed in the axis.",table:{type:{summary:"string | number"},category:"General"}},range:{description:"The range of axis.",table:{type:{summary:"number[]"},defaultValue:{summary:"[64,64]"},category:"General"}},scale:{description:'If "auto" set, the scale function is decided by the type of chart, and the props type.',options:p,control:{type:"select"},table:{type:{summary:"ScaleType | Function"},defaultValue:{summary:"auto"},category:"General"}},domain:{description:"The domain of scale in this axis.",table:{type:{summary:"AxisDomain"},category:"General"}}},b={argTypes:n,component:s},t={render:i=>e.createElement(c,{width:"100%",height:500},e.createElement(l,{width:400,height:400,margin:{top:20,right:20,bottom:0,left:20}},e.createElement(u,{type:"number",dataKey:"uv"}),e.createElement(d,{type:"number",dataKey:"amt"}),e.createElement(s,{...i}),e.createElement(y,null),e.createElement(g,{name:"pageData",data:A}),e.createElement(h,null),e.createElement(f,null))),args:{...m(n),unit:"km",name:"A name",dataKey:"pv",range:[0,2e3],type:"number",scale:"auto"}};var a,r,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ScatterChart width={400} height={400} margin={{
        top: 20,
        right: 20,
        bottom: 0,
        left: 20
      }}>
          <XAxis type="number" dataKey="uv" />
          <YAxis type="number" dataKey="amt" />
          <ZAxis {...args} />
          <CartesianGrid />
          <Scatter name="pageData" data={pageData} />
          <Tooltip />
          <RechartsHookInspector />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ZAxisArgTypes),
    unit: 'km',
    name: 'A name',
    dataKey: 'pv',
    range: [0, 2000],
    type: 'number',
    scale: 'auto'
  }
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const x=["API"],O=Object.freeze(Object.defineProperty({__proto__:null,API:t,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{t as A,O as C};
