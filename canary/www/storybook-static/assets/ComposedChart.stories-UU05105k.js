import{e}from"./iframe-Dh_IuGPW.js";import{a as Z}from"./ChartProps-h4DKB0dX.js";import{C as h}from"./ComposedChart-BT1Cqczr.js";import{t as _}from"./Time-CZh6Vidc.js";import{A as d}from"./Area-UkM-Gu6x.js";import{B as a}from"./Bar-CUQ38gs9.js";import{L as s}from"./Line-BSUfhiQO.js";import{R}from"./arrayEqualityCheck-7YZsQ9Yt.js";import{R as P}from"./RechartsHookInspector--VVdTSeU.js";import{X as c}from"./XAxis-BVn7zGv-.js";import{Y as p}from"./YAxis-FBaKUNO9.js";import{L as f}from"./Legend-sGrsloJr.js";import{C as y}from"./CartesianGrid-BjJCRgc8.js";import{R as X}from"./ReferenceLine-jwnEYsvy.js";import{R as Y}from"./ReferenceDot-Bs_d4Ej4.js";import{B as F}from"./Brush-CB1xGMUg.js";import{L as I}from"./LineChart-Hj2VhSzS.js";import{T as u}from"./Tooltip-D0RdDoPW.js";import{S as M}from"./Scatter-BDFciFB9.js";import{p as r}from"./Page-Cj8EiXz7.js";const O={argTypes:{...Z},component:h},g={render:t=>e.createElement(R,{width:"100%",height:300},e.createElement(h,{...t,data:r,margin:{top:20,right:20,bottom:20,left:20}},t.children,e.createElement(P,null)))},n={...g,args:{data:r,children:e.createElement(e.Fragment,null,e.createElement(d,{type:"monotone",dataKey:"amt",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(a,{dataKey:"uv"}),e.createElement(s,{dataKey:"pv"}))}},o={...g,args:{data:r,children:e.createElement(e.Fragment,null,e.createElement(c,{dataKey:"name",scale:"band"}),e.createElement(p,null),e.createElement(f,{layout:"vertical",align:"right",verticalAlign:"middle"}),e.createElement(y,{stroke:"#f5f5f5"}),e.createElement(d,{type:"monotone",dataKey:"amt",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(a,{dataKey:"uv",fill:"#ff7300"}),e.createElement(a,{dataKey:"pv",barSize:20,fill:"#413ea0"}),e.createElement(X,{x:"Page C",stroke:"red",label:"Max PV PAGE"}),e.createElement(Y,{x:"Page C",y:1300,stroke:"red"}),e.createElement(F,null,e.createElement(I,null,e.createElement(s,{dataKey:"uv",stroke:"#ff7300",dot:!1}))),e.createElement(u,null))}},l={...g,args:{data:r,children:e.createElement(e.Fragment,null,e.createElement(c,{dataKey:"name"}),e.createElement(p,null),e.createElement(f,{layout:"vertical",align:"right",verticalAlign:"middle"}),e.createElement(y,{stroke:"#f5f5f5"}),e.createElement(d,{type:"monotone",dataKey:"amt",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(a,{dataKey:"pv",barSize:20,fill:"#413ea0"}),e.createElement(M,{dataKey:"pv",fill:"red"}),e.createElement(F,null),e.createElement(u,null))}},i={...g,args:{data:r,children:e.createElement(e.Fragment,null,e.createElement(c,null),e.createElement(p,null),e.createElement(f,null),e.createElement(y,{stroke:"#f5f5f5"}),e.createElement(a,{dataKey:"pv",barSize:20,fill:"#413ea0"}),e.createElement(s,{type:"monotone",dataKey:"pv",stroke:"#ff7300"}),e.createElement(u,null))}},m={render:t=>{const G=H=>H.toLocaleString("en-GB",{timeZone:"UTC",dateStyle:"medium"});return e.createElement("div",{style:{width:"600px"}},e.createElement("p",null,"A ComposedChart of time scale"),e.createElement(R,{width:"100%",height:500},e.createElement("div",{className:"composed-chart-wrapper"},e.createElement(h,{width:600,height:400,data:t.timeData,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(y,{stroke:"#f5f5f5"}),e.createElement(c,{dataKey:"x",domain:[t.from.getTime(),t.to.getTime()],scale:"time",type:"number",tick:{fontSize:10,fill:"red"},tickFormatter:G}),e.createElement(p,null),e.createElement(f,null),e.createElement(d,{type:"monotone",dataKey:"y",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(a,{dataKey:"y",barSize:20,fill:"#413ea0"}),e.createElement(s,{type:"monotone",dataKey:"y",stroke:"#ff7300"}),e.createElement(u,null),e.createElement(P,null)))))},args:{from:new Date("2019-07-04T00:00:00.000Z"),to:new Date("2019-07-10T00:00:00.000Z"),timeData:_,data:r}};var E,C,v;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
    data: pageData,
    children: <>
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="uv" />
        <Line dataKey="pv" />
      </>
  }
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var k,K,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
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
}`,...(S=(K=o.parameters)==null?void 0:K.docs)==null?void 0:S.source}}};var A,L,T;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
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
}`,...(T=(L=l.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var x,b,B;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
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
}`,...(B=(b=i.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var z,D,w;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    from: new Date('2019-07-04T00:00:00.000Z'),
    to: new Date('2019-07-10T00:00:00.000Z'),
    timeData,
    data: pageData
  }
}`,...(w=(D=m.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const j=["SimpleChart","ComplexChart","LineBarAreaScatter","LineBarHorizontal","LineBarAreaScatterTimeScale"],pe=Object.freeze(Object.defineProperty({__proto__:null,ComplexChart:o,LineBarAreaScatter:l,LineBarAreaScatterTimeScale:m,LineBarHorizontal:i,SimpleChart:n,__namedExportsOrder:j,default:O},Symbol.toStringTag,{value:"Module"}));export{pe as C,n as S};
