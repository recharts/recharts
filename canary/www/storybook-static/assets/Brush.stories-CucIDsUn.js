import{r as g,R as e}from"./iframe-0BZy6ovm.js";import{B as i}from"./Brush-CzzR_Qwq.js";import{R as B}from"./zIndexSlice-BIk5RwDD.js";import{C as p}from"./ComposedChart-BZt5HSsG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-BqjDeTuk.js";import{L as D}from"./LineChart-DY4IBODK.js";import{R as m}from"./ReferenceLine-Ua6Fh3cd.js";import{C as d}from"./CartesianGrid-C1oJnFXa.js";import{X as S}from"./XAxis-CpzBATa7.js";import{Y as A}from"./YAxis-vaHPQHN5.js";import{L as R}from"./Legend-BYhpegXH.js";import{T as w}from"./Tooltip-CZnNvi-A.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-6uGVVV7y.js";import"./resolveDefaultProps-DgX86JLB.js";import"./Text-Bh7Xcfw9.js";import"./DOMUtils-D2BAAnEX.js";import"./isWellBehavedNumber-D86CElyX.js";import"./useBackwardsCompatibleTheme-CXpr_aCI.js";import"./chartDataContext-BAuSJd-k.js";import"./axisSelectors-D-aV3CxY.js";import"./throttle-DiDu5xyi.js";import"./index-TucVX7sw.js";import"./index-BJl6RyTQ.js";import"./d3-scale-D3apC1JT.js";import"./RechartsWrapper-DN-j5lzD.js";import"./index-C9HBA5-V.js";import"./index-BRBcTSHI.js";import"./renderedTicksSlice-BqoCmvXn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-n4Lt6mFH.js";import"./CategoricalChart-hrSTyr7f.js";import"./Curve-80kkET8R.js";import"./types-CUmyHBBS.js";import"./step-LsS_armE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B0lHzkOL.js";import"./Label-C0FrVcAE.js";import"./ZIndexLayer-AgSG9OQ6.js";import"./useAnimationId-D-aszzjL.js";import"./ActivePoints-Cv_MWE-P.js";import"./Dot-B2MNIfB_.js";import"./RegisterGraphicalItemId-BhyVkMoB.js";import"./ErrorBarContext-D0zljKj-.js";import"./GraphicalItemClipPath-BgcM8yOE.js";import"./SetGraphicalItem-CM7A1obe.js";import"./getRadiusAndStrokeWidthFromDot-BStcUf-0.js";import"./ActiveShapeUtils-BtFIRlOA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D2KJhy7k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-Dw0UsXtJ.js";import"./symbol-CC9QiqhF.js";import"./useElementOffset-DjmvUNAh.js";import"./uniqBy-B6coPXXs.js";import"./iteratee-XKFyRSES.js";import"./Cross-BtKgilIw.js";import"./Rectangle-Qt8i-seL.js";import"./util-Dxo8gN5i.js";import"./Sector-CPbFIiWl.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
