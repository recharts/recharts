import{r as g,R as e}from"./iframe-DFAuwNet.js";import{B as i}from"./Brush-CJ4L_rjK.js";import{R as B}from"./zIndexSlice-BwFDZpKd.js";import{C as p}from"./ComposedChart-q9x7DXH3.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-Ck4HwCGm.js";import{L as D}from"./LineChart-DRGdb7oC.js";import{R as m}from"./ReferenceLine-CpOb35GM.js";import{C as d}from"./CartesianGrid-V4BOpx7k.js";import{X as S}from"./XAxis-DCGzkxjE.js";import{Y as A}from"./YAxis-WC2qqL6y.js";import{L as R}from"./Legend-WX_q8tyf.js";import{T as w}from"./Tooltip-zZkLTzqk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bfs700CB.js";import"./d3-scale-Bflz5-05.js";import"./immer-D4TP_Tl0.js";import"./index-D5vqZcHk.js";import"./index-XHGddEUW.js";import"./string-B6fdYHAA.js";import"./Layer-pSJwYJA9.js";import"./resolveDefaultProps-DvMn3fRK.js";import"./Text-D4VTZiA_.js";import"./DOMUtils-Cjgkd6jo.js";import"./isWellBehavedNumber-DOBIUQY2.js";import"./chartDataContext-qOKnmm5w.js";import"./RechartsWrapper-B5EEfMW7.js";import"./index-Bdvp9zfN.js";import"./index-CzPHYk5P.js";import"./renderedTicksSlice-C1GYWdqG.js";import"./axisSelectors-rO5_sQtu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DsW2iWMz.js";import"./CategoricalChart-F9q04IPB.js";import"./Curve-qtCfGxfc.js";import"./types-CKCIF696.js";import"./step-BT8dCn-b.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BG4KszHn.js";import"./Label-BiYGQ8wu.js";import"./ZIndexLayer-CzNUPV7f.js";import"./useAnimationId-BPtcTRZO.js";import"./ActivePoints-BsPL6iaG.js";import"./Dot-B8AKLV5l.js";import"./RegisterGraphicalItemId-CzkMeR6l.js";import"./ErrorBarContext-BoGExbnB.js";import"./GraphicalItemClipPath-DXkB_bbX.js";import"./SetGraphicalItem-CYy4gzAa.js";import"./getRadiusAndStrokeWidthFromDot-rwyYVhSm.js";import"./ActiveShapeUtils-CrgbqME0.js";import"./CartesianAxis-DrCLR5OG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-GnIyknFZ.js";import"./symbol-BgUL2hTi.js";import"./useElementOffset-Cr66zOZa.js";import"./uniqBy-BxbvDsAq.js";import"./iteratee-BYBBNzGi.js";import"./Cross-DEUDd6Yc.js";import"./Rectangle-VpINru7-.js";import"./Sector-6Z0dG1em.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
