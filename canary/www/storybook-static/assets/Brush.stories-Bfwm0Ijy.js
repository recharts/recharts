import{r as g,R as e}from"./iframe-Dc8RWhrw.js";import{B as i}from"./Brush-CfeEPOZQ.js";import{R as B}from"./zIndexSlice-Cue9wPom.js";import{C as p}from"./ComposedChart-Da7iSmDy.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-DLQNFulf.js";import{L as D}from"./LineChart-VvO9JrvE.js";import{R as m}from"./ReferenceLine-DSMu1spW.js";import{C as d}from"./CartesianGrid-EdnxPRMs.js";import{X as S}from"./XAxis-VfLZ80on.js";import{Y as A}from"./YAxis-DMp-u3Mu.js";import{L as R}from"./Legend-DzwEZ1vL.js";import{T as w}from"./Tooltip-B7ikUiQC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-Cp8eUZax.js";import"./resolveDefaultProps-CQDlpFo_.js";import"./Text-rfXwlvlz.js";import"./DOMUtils-DSrFB3FI.js";import"./isWellBehavedNumber-DkJxcyfZ.js";import"./useBackwardsCompatibleTheme-CTZrd8Ez.js";import"./chartDataContext-DlTklTQC.js";import"./axisSelectors-Bp8YmQgj.js";import"./throttle-Cgdnnn4b.js";import"./index-BX7yfnHr.js";import"./index-DHKxMT0C.js";import"./d3-scale-DDaZL63N.js";import"./RechartsWrapper-Ba4_XV41.js";import"./index-BjTDJtXe.js";import"./index-D_nZwztl.js";import"./renderedTicksSlice-CNJBn7mW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B63GIjUf.js";import"./CategoricalChart-CI6oyNVX.js";import"./Curve-BbQ0Czte.js";import"./types-D48DJ4qI.js";import"./step-U7mgLYlb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-HOD2wt3W.js";import"./Label-DGIRTg37.js";import"./ZIndexLayer-BPoBYBwu.js";import"./useAnimationId-ljtrSyr1.js";import"./ActivePoints-CudWYWcW.js";import"./Dot-B7OI2cN8.js";import"./RegisterGraphicalItemId-DxgWNIY4.js";import"./ErrorBarContext-Bc_XovT5.js";import"./GraphicalItemClipPath-vsH9TZYh.js";import"./SetGraphicalItem-Bhl9AfEO.js";import"./getRadiusAndStrokeWidthFromDot-CGlrm7Es.js";import"./ActiveShapeUtils-CqRtCd2Y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-l76NyjyY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-GzXlAdpY.js";import"./symbol-DU6b7_X7.js";import"./useElementOffset-DHGkrUt4.js";import"./uniqBy-Di3gtafg.js";import"./iteratee-UaQdxZu-.js";import"./Cross-CDhtS5Tq.js";import"./Rectangle-CIo59f_q.js";import"./util-Dxo8gN5i.js";import"./Sector-CL2E5vKM.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const je=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,je as __namedExportsOrder,Fe as default};
