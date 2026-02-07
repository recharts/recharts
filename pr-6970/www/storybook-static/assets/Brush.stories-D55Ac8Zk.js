import{r as v,e}from"./iframe-DMofGbdh.js";import{B as i}from"./Brush-B0IYmwlt.js";import{R}from"./arrayEqualityCheck-CsoqXgVI.js";import{C as p}from"./ComposedChart-k3-ghRdj.js";import{L as t}from"./Line-DWJPZGSf.js";import{R as c}from"./RechartsHookInspector-DJgQFG2f.js";import{X as S}from"./XAxis-D0dacd78.js";import{Y as A}from"./YAxis-B_yG4ERH.js";import{C as m}from"./CartesianGrid-BbwQGwf7.js";import{L as w}from"./Legend-CU91CAOR.js";import{R as d}from"./ReferenceLine-BKkXMQuP.js";import{L as B}from"./LineChart-DyaJeajr.js";import{T as N}from"./Tooltip-66CrTFVH.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cr3Nq4ZU.js";import"./axisSelectors-CeuWGW4U.js";import"./Layer-BiV0mvq6.js";import"./Text-BOWHjgiZ.js";import"./DOMUtils-DCHqYg2a.js";import"./chartDataContext-K-dQ-k-3.js";import"./RechartsWrapper-C7CsVMpm.js";import"./hooks-DQLTrr19.js";import"./zIndexSlice-CsA5GGWo.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DWOZMVOy.js";import"./CategoricalChart-D_GR9jLw.js";import"./ReactUtils-Dv6d3MQ5.js";import"./Label-DxmFoslz.js";import"./ZIndexLayer-CWIihq-M.js";import"./ActivePoints-CDeWGkl5.js";import"./Dot-_CebNPSK.js";import"./types-DMK1Hrm-.js";import"./RegisterGraphicalItemId-D7ibYuhl.js";import"./ErrorBarContext-BGJbOelu.js";import"./GraphicalItemClipPath-mCG1gtli.js";import"./SetGraphicalItem-ttx2b7Qz.js";import"./useAnimationId-CkpaA0hy.js";import"./getRadiusAndStrokeWidthFromDot-a8uwl8jU.js";import"./ActiveShapeUtils-D8pbFwx0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWfmzqul.js";import"./Trapezoid-CRq1iTfA.js";import"./Sector-BMWgIsRC.js";import"./Symbols-iw9OdhhJ.js";import"./Curve-Dep4Vom7.js";import"./index-B5a3_tnM.js";import"./ChartSizeDimensions-qqjl0QHD.js";import"./OffsetShower-E8NqoCsg.js";import"./PlotAreaShower-DPYwAHFd.js";import"./CartesianAxis-BNGc91Ri.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-zXirM7Sf.js";import"./iteratee-D-sLGYHE.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-yID6NUUz.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
