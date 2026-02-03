import{e}from"./iframe-DPPC5LCd.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as s}from"./arrayEqualityCheck-Dvk8KT0D.js";import{A as l}from"./AreaChart-BDH0-Eqc.js";import{C as m}from"./CartesianGrid-CvB-qYbV.js";import{X as d}from"./XAxis-BG2Y_xwU.js";import{Y as p}from"./YAxis-BkVN0NTj.js";import{A as c}from"./Area-LKaQD5Ma.js";import{T as h}from"./Tooltip-Vhvc3XfR.js";import{R as f}from"./RechartsHookInspector-Blp8PL-4.js";const g={component:s,docs:{autodocs:!1}},t={render:i=>e.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",flexGrow:1}},e.createElement("h6",null,"Flexbox sibling"),e.createElement("div",{style:{flexGrow:1}},e.createElement(s,{...i},e.createElement(l,{width:500,height:400,data:n,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(p,null),e.createElement(c,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(h,null),e.createElement(f,null))))),args:{width:"80%",height:"80%"}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  // https://github.com/recharts/recharts/issues/172
  render: (args: Args) => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      flexGrow: 1
    }}>
        <h6>Flexbox sibling</h6>
        <div style={{
        flexGrow: 1
      }}>
          <ResponsiveContainer {...args}>
            <AreaChart width={500} height={400} data={pageData} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              <Tooltip />
              <RechartsHookInspector />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>;
  },
  args: {
    width: '80%',
    height: '80%'
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const u=["API"],k=Object.freeze(Object.defineProperty({__proto__:null,API:t,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{t as A,k as C};
