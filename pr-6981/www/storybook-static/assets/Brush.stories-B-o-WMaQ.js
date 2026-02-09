import{r as v,e}from"./iframe-_ezCe_To.js";import{B as i}from"./Brush-DecKbcTj.js";import{R}from"./arrayEqualityCheck-OWAMtNJc.js";import{C as p}from"./ComposedChart-BZQ3F3Nq.js";import{L as t}from"./Line-tdadl7hT.js";import{R as c}from"./RechartsHookInspector-D5tzqIDa.js";import{X as S}from"./XAxis-CcLZPlVE.js";import{Y as A}from"./YAxis-CEv_a0Mr.js";import{C as m}from"./CartesianGrid--UGEY6i0.js";import{L as w}from"./Legend-DQAgJHSc.js";import{R as d}from"./ReferenceLine-Baf6-2pJ.js";import{L as B}from"./LineChart-Dvl28mN4.js";import{T as N}from"./Tooltip-6tB19Q6f.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-R_saYEpi.js";import"./axisSelectors-LsrbDDJC.js";import"./Layer-BtA8wuUB.js";import"./Text-CYvn3qP_.js";import"./DOMUtils-CBHTypWU.js";import"./chartDataContext-Bh5VlY_Q.js";import"./RechartsWrapper-B3l68k8X.js";import"./hooks-DGCPXX4G.js";import"./zIndexSlice-Dca2j4f-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C47j_-ZF.js";import"./CategoricalChart-BLLc755m.js";import"./ReactUtils-B0BDd-2i.js";import"./Label-CHFqoGJt.js";import"./ZIndexLayer-CWThG05g.js";import"./ActivePoints-CJI24LGC.js";import"./Dot-C4tiY8Du.js";import"./types-DgqTh4_l.js";import"./RegisterGraphicalItemId-C1YzkRSv.js";import"./ErrorBarContext-DrqmUEJ9.js";import"./GraphicalItemClipPath-BQEIoeEz.js";import"./SetGraphicalItem-DNE92K4u.js";import"./useAnimationId-BzKwp2Yk.js";import"./getRadiusAndStrokeWidthFromDot-D-FWk1PK.js";import"./ActiveShapeUtils-C67ovaxo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-citx9Y_h.js";import"./Trapezoid-CX1vw1n4.js";import"./Sector-Cl8ZFmwF.js";import"./Symbols-DtsjZSQh.js";import"./Curve-C2x4bgof.js";import"./index-DsSUOPyu.js";import"./ChartSizeDimensions-BekARe9N.js";import"./OffsetShower-DpjGgrQ9.js";import"./PlotAreaShower-OcEMvBwg.js";import"./CartesianAxis-DGvPXtLW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-4FfSo6Pq.js";import"./iteratee-TzTVZzOt.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-F4v7qyNt.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (_args: Args) => {
    const [startIndex, setStartIndex] = useState<number | undefined>(2);
    const [endIndex, setEndIndex] = useState<number | undefined>(5);
    return <>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" isAnimationActive={false} />

            <Brush startIndex={startIndex} endIndex={endIndex} onChange={e => {
            setEndIndex(e.endIndex);
            setStartIndex(e.startIndex);
          }} alwaysShowText />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
        <input type="number" aria-label="startIndex" value={startIndex} onChange={evt => {
        const num = Number(evt.target.value);
        if (Number.isInteger(num)) setStartIndex(num);
      }} />
        <input aria-label="endIndex" value={endIndex} onChange={evt => {
        const num = Number(evt.target.value);
        if (Number.isInteger(num)) setEndIndex(num);
      }} />
      </>;
  }
}`,...(x=(E=a.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var I,f,L;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (_args: Args) => {
    return <ComposedChart width={600} height={300} data={pageData} margin={{
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
        r: 8
      }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <ReferenceLine stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
        <Brush dataKey="name">
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
        <Tooltip />
        <RechartsHookInspector />
      </ComposedChart>;
  }
}`,...(L=(f=o.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var b,K,D;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (_args: Args) => {
    return <ComposedChart width={600} height={300} data={pageData}>
        <Brush>
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
        <RechartsHookInspector />
      </ComposedChart>;
  }
}`,...(D=(K=s.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};const We=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,We as __namedExportsOrder,Oe as default};
