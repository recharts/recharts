import{r as g,R as e}from"./iframe-CdBlg-At.js";import{B as s}from"./Brush-yIhfbcHT.js";import{R as B}from"./zIndexSlice-Bd2ctzyz.js";import{C as p}from"./ComposedChart-Ba360Gul.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-DD9BeI-K.js";import{L as D}from"./LineChart--S3b8ipQ.js";import{R as m}from"./ReferenceLine-BK9H6dlB.js";import{C as d}from"./CartesianGrid-CciaTcJr.js";import{X as S}from"./XAxis-2XVZuSLi.js";import{Y as A}from"./YAxis-CCdrxwQa.js";import{L as R}from"./Legend-CcznjWgK.js";import{T as w}from"./Tooltip-DkrMtHEK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-DJ6KlbON.js";import"./resolveDefaultProps-BE0meIIe.js";import"./Text-B72QzR_J.js";import"./DOMUtils-B8jV7L5A.js";import"./isWellBehavedNumber-DGTEliAX.js";import"./useId-CTQIK8VB.js";import"./useBackwardsCompatibleTheme-DVBTPBZT.js";import"./chartDataContext-8OMpeo_C.js";import"./axisSelectors-B8B8qq9w.js";import"./throttle-BMwUG5uc.js";import"./index-Yyk8WWPT.js";import"./index-D9Herklh.js";import"./d3-scale-BBzFAB1R.js";import"./RechartsWrapper-BtwnjrPH.js";import"./index-BTlZQ11f.js";import"./index-COSgbA9u.js";import"./renderedTicksSlice-D-b_FiBU.js";import"./index-B_ni8hx5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-5haPaxu4.js";import"./CategoricalChart-KxwhOg8o.js";import"./Curve-C6WQoFll.js";import"./types-BwgN4eIA.js";import"./step-CSVR4QN1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DF8TZk9M.js";import"./Label-BhvRy9p8.js";import"./ZIndexLayer-BRtQaXip.js";import"./useAnimationId-C5J-XAz0.js";import"./ActivePoints-DeQkjxY4.js";import"./Dot-6-JAF9mR.js";import"./RegisterGraphicalItemId-CHEBFfi8.js";import"./ErrorBarContext-CT7bwl-o.js";import"./GraphicalItemClipPath-DCCqyqY0.js";import"./SetGraphicalItem-BiBqIxpO.js";import"./getRadiusAndStrokeWidthFromDot-D0f765St.js";import"./ActiveShapeUtils-DmMWVfaj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CVVHUAde.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-DsDFX5_W.js";import"./symbol-BOju37_N.js";import"./useElementOffset-DhmioEfl.js";import"./uniqBy-CvvZwjKG.js";import"./iteratee-DqsE923K.js";import"./Cross-DK2lyT6M.js";import"./Rectangle-WNRZi7C8.js";import"./util-Dxo8gN5i.js";import"./Sector-CoXPRBsG.js";const qe={component:s},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(s,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(s,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},i={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(s,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},He=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};export{a as ControlledBrush,i as NoChartBrush,o as PanoramicBrush,He as __namedExportsOrder,qe as default};
