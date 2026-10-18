import{R as e}from"./iframe-Cs9VT9SX.js";import{p as i}from"./Page-Cj8EiXz7.js";import{R as o}from"./zIndexSlice-BdtHtScS.js";import{A as l}from"./AreaChart-de0d8xAj.js";import{C as m}from"./CartesianGrid-CRWRpzt9.js";import{X as d}from"./XAxis-ZXwUP9Th.js";import{Y as p}from"./YAxis-vNX_kYng.js";import{A as c}from"./Area-BfIZZxI2.js";import{T as h}from"./Tooltip-DBB7x4xM.js";const f={component:o,docs:{autodocs:!1}},t={render:s=>e.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",flexGrow:1}},e.createElement("h6",null,"Flexbox sibling"),e.createElement("div",{style:{flexGrow:1}},e.createElement(o,{...s},e.createElement(l,{width:500,height:400,data:i,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(p,null),e.createElement(c,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(h,null))))),args:{width:"80%",height:"80%"}},g=["API"];var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>;
  },
  args: {
    width: '80%',
    height: '80%'
  }
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const R=Object.freeze(Object.defineProperty({__proto__:null,API:t,__namedExportsOrder:g,default:f},Symbol.toStringTag,{value:"Module"}));export{t as A,R as C};
