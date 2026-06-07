import{R as e}from"./iframe-BqYy1R0H.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as s}from"./zIndexSlice-V534Dm1F.js";import{A as l}from"./AreaChart-BZS8h4vx.js";import{C as m}from"./CartesianGrid-B4_mJDYh.js";import{X as d}from"./XAxis-BqSBdy-L.js";import{Y as p}from"./YAxis-BqslSc7g.js";import{A as c}from"./Area-D91gZ_Vv.js";import{T as h}from"./Tooltip-CKKNj2xq.js";const f={component:s,docs:{autodocs:!1}},t={render:i=>e.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",flexGrow:1}},e.createElement("h6",null,"Flexbox sibling"),e.createElement("div",{style:{flexGrow:1}},e.createElement(s,{...i},e.createElement(l,{width:500,height:400,data:n,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(p,null),e.createElement(c,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(h,null))))),args:{width:"80%",height:"80%"}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const g=["API"],R=Object.freeze(Object.defineProperty({__proto__:null,API:t,__namedExportsOrder:g,default:f},Symbol.toStringTag,{value:"Module"}));export{t as A,R as C};
