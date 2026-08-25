import{r as g,R as e}from"./iframe-BISZbF8S.js";import{B as s}from"./Brush-CAgPjT6G.js";import{R as B}from"./zIndexSlice-tLqWCh4O.js";import{C as p}from"./ComposedChart-Bb88RiXV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-Ct3QeI60.js";import{L as D}from"./LineChart-CqgocpWI.js";import{R as m}from"./ReferenceLine-ClSdh-hL.js";import{C as d}from"./CartesianGrid-D6cWZXXE.js";import{X as S}from"./XAxis-DhvWA3ze.js";import{Y as A}from"./YAxis-m7WuayWG.js";import{L as R}from"./Legend-DJM3szzM.js";import{T as w}from"./Tooltip-C8DzValB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-qSEbrkuT.js";import"./resolveDefaultProps-Wc0qnLHS.js";import"./Text-DWq927Nt.js";import"./DOMUtils-CTLtTqZ2.js";import"./isWellBehavedNumber-C9XsHOt-.js";import"./useId-DvaMlJaB.js";import"./useBackwardsCompatibleTheme-DE0n-uz4.js";import"./chartDataContext-iswJ2W_c.js";import"./axisSelectors-SJG9ph2l.js";import"./throttle-qMyvzBrr.js";import"./index-hSuJddDh.js";import"./index-DIL3iNST.js";import"./d3-scale-DNcorMEn.js";import"./RechartsWrapper-een6OCKs.js";import"./index-BW9K1TDZ.js";import"./index-Ce0beIqY.js";import"./renderedTicksSlice-bJIEIhcB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-GFukGdve.js";import"./CategoricalChart-CluxlQf_.js";import"./Curve-DnqgdcKJ.js";import"./types-DYnGyjc0.js";import"./step-DstMREJ8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DssiNuXL.js";import"./Label--u0r0Ebh.js";import"./ZIndexLayer-DScewirg.js";import"./useAnimationId-BeL21vg8.js";import"./ActivePoints-Ccjhq822.js";import"./Dot-ClbVOSp4.js";import"./RegisterGraphicalItemId-DfyOG4VN.js";import"./ErrorBarContext-DGuh-__T.js";import"./GraphicalItemClipPath-b6ezYgAg.js";import"./SetGraphicalItem-DKxsB3By.js";import"./getRadiusAndStrokeWidthFromDot-CSyFsC-5.js";import"./ActiveShapeUtils-PTy3S8F2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D7TS5Yfq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-DJ_45wTn.js";import"./symbol-CO_j5HDg.js";import"./useElementOffset-D_71pDwY.js";import"./uniqBy-1z9FZ0dO.js";import"./iteratee-azZ5Zz_L.js";import"./Cross-BlvQQYk4.js";import"./Rectangle-B6oc1dJQ.js";import"./util-Dxo8gN5i.js";import"./Sector-D33X9QbA.js";const je={component:s},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(s,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(s,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},i={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(s,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(C=a.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var E,I,f;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
      </ComposedChart>;
  }
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var L,b,K;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
      </ComposedChart>;
  }
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const qe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,i as NoChartBrush,o as PanoramicBrush,qe as __namedExportsOrder,je as default};
