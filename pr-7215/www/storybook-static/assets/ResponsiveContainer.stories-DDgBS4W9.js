import{e}from"./iframe-CagDbm-R.js";import{p as n}from"./Page-DPte-9pC.js";import{g as s}from"./arrayEqualityCheck-Bn08yLiN.js";import{A as l}from"./AreaChart-D1WHMNkM.js";import{C as m}from"./CartesianGrid-Cp-b4wtl.js";import{X as d}from"./XAxis-CyILEj33.js";import{Y as p}from"./YAxis-Qo8_bXaH.js";import{A as c}from"./Area-CIS6Q8fU.js";import{T as h}from"./Tooltip-Bx81jUJN.js";import{R as f}from"./RechartsHookInspector-pMEJlnqX.js";const g={component:s,docs:{autodocs:!1}},t={render:i=>e.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",flexGrow:1}},e.createElement("h6",null,"Flexbox sibling"),e.createElement("div",{style:{flexGrow:1}},e.createElement(s,{...i},e.createElement(l,{width:500,height:400,data:n,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(p,null),e.createElement(c,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(h,null),e.createElement(f,null))))),args:{width:"80%",height:"80%"}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
