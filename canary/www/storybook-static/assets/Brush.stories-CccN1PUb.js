import{r as g,R as e}from"./iframe-DzBbDK3f.js";import{B as i}from"./Brush-rg-3GcGU.js";import{R as B}from"./zIndexSlice-BhAJBvui.js";import{C as p}from"./ComposedChart-DlJ6UxJ6.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-fO8G_nMa.js";import{L as D}from"./LineChart-DKy3mVqB.js";import{R as m}from"./ReferenceLine-BUYByQg3.js";import{C as d}from"./CartesianGrid-saqq4ujh.js";import{X as S}from"./XAxis-CQnsilRX.js";import{Y as A}from"./YAxis-DfXf3Bj6.js";import{L as R}from"./Legend-CQzj61K0.js";import{T as w}from"./Tooltip-B0uFRFn0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-B36j_mfg.js";import"./d3-scale-qbHfyqh1.js";import"./immer-DQoMHntF.js";import"./index-BPARkMMW.js";import"./index-DKCqHE7S.js";import"./string-B6fdYHAA.js";import"./Layer-BXEIHXdm.js";import"./resolveDefaultProps-0BSwoaCz.js";import"./Text-Cjl7teQi.js";import"./DOMUtils-BTYTQ9_I.js";import"./isWellBehavedNumber-DiHCDXDD.js";import"./chartDataContext-Czi5ozBn.js";import"./RechartsWrapper-8vZdR5pa.js";import"./index-tjSc758v.js";import"./index-Blqr4elb.js";import"./renderedTicksSlice-B9_diZXM.js";import"./axisSelectors-VQ5WENH-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DtImfiMD.js";import"./CategoricalChart-DVCKFz9W.js";import"./Curve-BT7bGYlu.js";import"./types-NVYIi3uc.js";import"./step-DAtqKpLg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B0itj7bz.js";import"./Label-CGWWfPsR.js";import"./ZIndexLayer-DpRTlowh.js";import"./useAnimationId-B-2-DeJx.js";import"./ActivePoints-BMU7oyBA.js";import"./Dot-DJtVuX_I.js";import"./RegisterGraphicalItemId-gHdffHfG.js";import"./ErrorBarContext-BH6nTEug.js";import"./GraphicalItemClipPath-iFuYGze8.js";import"./SetGraphicalItem-BisBTBFQ.js";import"./getRadiusAndStrokeWidthFromDot-DqCoJDrQ.js";import"./ActiveShapeUtils-CdFzq6u2.js";import"./CartesianAxis-CeDbxL1s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-CRepvFVB.js";import"./symbol-Ccc45hYA.js";import"./useElementOffset-DluJVRhv.js";import"./uniqBy-DjJrV_db.js";import"./iteratee-CGKb1kMs.js";import"./Cross-CwjOYZ8e.js";import"./Rectangle-BlGzqP8k.js";import"./Sector-Bgl1uNuC.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
