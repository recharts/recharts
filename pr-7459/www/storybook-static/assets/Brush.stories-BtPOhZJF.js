import{r as g,R as e}from"./iframe-CoKy4elT.js";import{B as i}from"./Brush-5M7qvbLj.js";import{R as B}from"./zIndexSlice-CY4yYEbq.js";import{C as p}from"./ComposedChart-BVJUWbH_.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-SzjmsAH7.js";import{L as D}from"./LineChart-DozK8Vwu.js";import{R as m}from"./ReferenceLine-Bz9nEPcP.js";import{C as d}from"./CartesianGrid-CbNhhmdD.js";import{X as S}from"./XAxis-DsRQf7G7.js";import{Y as A}from"./YAxis-BJGGz_YN.js";import{L as R}from"./Legend-D3IpGgUQ.js";import{T as w}from"./Tooltip-K6a2MI97.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BfSl0Rns.js";import"./d3-scale-xTkB24fT.js";import"./immer-lWVojOeC.js";import"./index-Bjw5bEKW.js";import"./index-B3BiA27P.js";import"./string-B6fdYHAA.js";import"./Layer-k2Wdsuzq.js";import"./resolveDefaultProps-CDt21lVt.js";import"./Text-DL1Q3xYK.js";import"./DOMUtils-YWM1N8Io.js";import"./isWellBehavedNumber-1a8W8TdO.js";import"./chartDataContext-JpjBb8GI.js";import"./RechartsWrapper-DkPhnPXC.js";import"./index-B6XlI2wQ.js";import"./index-C3h5ViMU.js";import"./renderedTicksSlice-DBzopiP-.js";import"./axisSelectors-D-8m2pyG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DX79lhQp.js";import"./CategoricalChart-DaCgDPQn.js";import"./Curve-B2xh1z9j.js";import"./types-Du-R6iBe.js";import"./step-DAyKFUyW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CIond_pq.js";import"./Label-MtH_fF3i.js";import"./ZIndexLayer-Gbc9J2Kq.js";import"./useAnimationId-DCY8-kt_.js";import"./ActivePoints-BzkJ5aTL.js";import"./Dot-CVh_JGUT.js";import"./RegisterGraphicalItemId-CuDS2LmP.js";import"./ErrorBarContext-DteVVWve.js";import"./GraphicalItemClipPath-BE9EOFft.js";import"./SetGraphicalItem-Bcs0Y3bf.js";import"./getRadiusAndStrokeWidthFromDot-DFePIRu3.js";import"./ActiveShapeUtils-CdBo7Ldv.js";import"./CartesianAxis-DoYCv6Ih.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-mGXHXz_j.js";import"./symbol-D9vQ6-Jo.js";import"./useElementOffset-DOdjfFuB.js";import"./uniqBy-CtAtk69m.js";import"./iteratee-BljMhTLe.js";import"./Cross-Bpe2S7--.js";import"./Rectangle-CO7CILtg.js";import"./Sector-COV7TTg8.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var L,b,K;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Xe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Xe as __namedExportsOrder,Ge as default};
