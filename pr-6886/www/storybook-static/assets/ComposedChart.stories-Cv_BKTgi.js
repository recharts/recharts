import{e}from"./iframe-AMdIPtJ_.js";import{C as r}from"./ComposedChartArgs-C2i17Xi4.js";import{g as d}from"./utils-ePvtT4un.js";import{C}from"./ComposedChart-CdZS-7p_.js";import{t as Z}from"./Time-CZh6Vidc.js";import{A as p}from"./Area-DPurmNsA.js";import{B as a}from"./Bar-D9MB7HPN.js";import{L as c}from"./Line-DT_lVAK5.js";import{R as P}from"./arrayEqualityCheck-3UyTPjiS.js";import{R as G}from"./RechartsHookInspector-Bq93gymj.js";import{X as f}from"./XAxis-CXCVRDkD.js";import{Y as g}from"./YAxis-L1AiUQKA.js";import{L as y}from"./Legend-C8erwHas.js";import{C as u}from"./CartesianGrid-Cp4flrLp.js";import{R as _}from"./ReferenceLine-B225hnET.js";import{R as X}from"./ReferenceDot-BfcGB-YZ.js";import{B as H}from"./Brush-Dq97vpN4.js";import{L as Y}from"./LineChart-muAAJLdr.js";import{T as h}from"./Tooltip-Diu-5ejz.js";import{S as I}from"./Scatter-BTwBuBbO.js";import{p as o}from"./Page-Cj8EiXz7.js";const M={argTypes:r,component:C},E={render:t=>e.createElement(P,{width:"100%",height:300},e.createElement(C,{...t,data:o,margin:{top:20,right:20,bottom:20,left:20}},t.children,e.createElement(G,null)))},n={name:"Simple Chart",...E,args:{...d(r),data:o,children:e.createElement(e.Fragment,null,e.createElement(p,{type:"monotone",dataKey:"amt",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(a,{dataKey:"uv"}),e.createElement(c,{dataKey:"pv"}))}},l={...E,args:{...d(r),data:o,children:e.createElement(e.Fragment,null,e.createElement(f,{dataKey:"name",scale:"band"}),e.createElement(g,null),e.createElement(y,{layout:"vertical",align:"right",verticalAlign:"middle"}),e.createElement(u,{stroke:"#f5f5f5"}),e.createElement(p,{type:"monotone",dataKey:"amt",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(a,{dataKey:"uv",fill:"#ff7300"}),e.createElement(a,{dataKey:"pv",barSize:20,fill:"#413ea0"}),e.createElement(_,{x:"Page C",stroke:"red",label:"Max PV PAGE"}),e.createElement(X,{x:"Page C",y:1300,stroke:"red"}),e.createElement(H,null,e.createElement(Y,null,e.createElement(c,{dataKey:"uv",stroke:"#ff7300",dot:!1}))),e.createElement(h,null))}},m={...E,args:{...d(r),data:o,children:e.createElement(e.Fragment,null,e.createElement(f,{dataKey:"name"}),e.createElement(g,null),e.createElement(y,{layout:"vertical",align:"right",verticalAlign:"middle"}),e.createElement(u,{stroke:"#f5f5f5"}),e.createElement(p,{type:"monotone",dataKey:"amt",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(c,{type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(a,{dataKey:"pv",barSize:20,fill:"#413ea0"}),e.createElement(I,{dataKey:"pv",fill:"red"}),e.createElement(H,null),e.createElement(h,null))}},i={...E,args:{...d(r),data:o,children:e.createElement(e.Fragment,null,e.createElement(f,null),e.createElement(g,null),e.createElement(y,null),e.createElement(u,{stroke:"#f5f5f5"}),e.createElement(a,{dataKey:"pv",barSize:20,fill:"#413ea0"}),e.createElement(c,{type:"monotone",dataKey:"pv",stroke:"#ff7300"}),e.createElement(h,null))}},s={render:t=>{const O=j=>j.toLocaleString("en-GB",{timeZone:"UTC",dateStyle:"medium"});return e.createElement("div",{style:{width:"600px"}},e.createElement("p",null,"A ComposedChart of time scale"),e.createElement(P,{width:"100%",height:500},e.createElement("div",{className:"composed-chart-wrapper"},e.createElement(C,{width:600,height:400,data:t.timeData,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(u,{stroke:"#f5f5f5"}),e.createElement(f,{dataKey:"x",domain:[t.from.getTime(),t.to.getTime()],scale:"time",type:"number",tick:{fontSize:10,fill:"red"},tickFormatter:O}),e.createElement(g,null),e.createElement(y,null),e.createElement(p,{type:"monotone",dataKey:"y",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(a,{dataKey:"y",barSize:20,fill:"#413ea0"}),e.createElement(c,{type:"monotone",dataKey:"y",stroke:"#ff7300"}),e.createElement(h,null),e.createElement(G,null)))))},args:{...d(r),from:new Date("2019-07-04T00:00:00.000Z"),to:new Date("2019-07-10T00:00:00.000Z"),timeData:Z,data:o}};var A,v,S;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Simple Chart',
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="uv" />
        <Line dataKey="pv" />
      </>
  }
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var k,K,T;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="uv" fill="#ff7300" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
        <ReferenceDot x="Page C" y={1300} stroke="red" />
        <Brush>
          <LineChart>
            <Line dataKey="uv" stroke="#ff7300" dot={false} />
          </LineChart>
        </Brush>
        <Tooltip />
      </>
  }
}`,...(T=(K=l.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};var b,L,x;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <XAxis dataKey="name" />
        <YAxis />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Scatter dataKey="pv" fill="red" />
        <Brush />
        <Tooltip />
      </>
  }
}`,...(x=(L=m.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var B,z,D;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <XAxis />
        <YAxis />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="pv" stroke="#ff7300" />
        <Tooltip />
      </>
  }
}`,...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var F,w,R;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args: Args) => {
    const tickFormatter = (tick: Date) => {
      return tick.toLocaleString('en-GB', {
        /*
         * Forced timezone so that our visual diff renders the same for all contributors.
         * In real app you will probably leave timeZone undefined
         */
        timeZone: 'UTC',
        dateStyle: 'medium'
      });
    };
    return <div style={{
      width: '600px'
    }}>
        <p>A ComposedChart of time scale</p>
        <ResponsiveContainer width="100%" height={500}>
          <div className="composed-chart-wrapper">
            <Composed width={600} height={400} data={args.timeData} margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="x" domain={[args.from.getTime(), args.to.getTime()]} scale="time" type="number" tick={{
              fontSize: 10,
              fill: 'red'
            }} tickFormatter={tickFormatter} />
              <YAxis />
              <Legend />
              <Area type="monotone" dataKey="y" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="y" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="y" stroke="#ff7300" />
              <Tooltip />
              <RechartsHookInspector />
            </Composed>
          </div>
        </ResponsiveContainer>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    from: new Date('2019-07-04T00:00:00.000Z'),
    to: new Date('2019-07-10T00:00:00.000Z'),
    timeData,
    data: pageData
  }
}`,...(R=(w=s.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const N=["API","ComplexChart","LineBarAreaScatter","LineBarHorizontal","LineBarAreaScatterTimeScale"],ge=Object.freeze(Object.defineProperty({__proto__:null,API:n,ComplexChart:l,LineBarAreaScatter:m,LineBarAreaScatterTimeScale:s,LineBarHorizontal:i,__namedExportsOrder:N,default:M},Symbol.toStringTag,{value:"Module"}));export{n as A,ge as C};
