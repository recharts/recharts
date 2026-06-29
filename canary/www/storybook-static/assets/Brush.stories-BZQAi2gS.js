import{r as g,R as e}from"./iframe-Ce1K7ebi.js";import{B as i}from"./Brush-DQ8CYm4A.js";import{R as B}from"./zIndexSlice-8Zo3fsoU.js";import{C as p}from"./ComposedChart-COfY451m.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-Beg62wAW.js";import{L as D}from"./LineChart-DT5pJmHK.js";import{R as m}from"./ReferenceLine-lcGK79Kq.js";import{C as d}from"./CartesianGrid-BOpB_UQw.js";import{X as S}from"./XAxis-3C9aClrU.js";import{Y as A}from"./YAxis-DnjNgR7C.js";import{L as R}from"./Legend-BQlBEeuR.js";import{T as w}from"./Tooltip-iZJNV3dm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BJIMs5EG.js";import"./d3-scale-Dx0XyOwO.js";import"./immer-wBCCevMF.js";import"./index-s0WSFyA7.js";import"./index-AjZPfGGe.js";import"./Layer-B1_feEXA.js";import"./resolveDefaultProps-DSV9zLoY.js";import"./Text-BYOeWYK5.js";import"./DOMUtils-DkFEIDQF.js";import"./isWellBehavedNumber-CQ8pg5Hb.js";import"./chartDataContext-CPsHUBNm.js";import"./RechartsWrapper-BrIlX8W1.js";import"./index-BorxIHRi.js";import"./index-gt-wl4xF.js";import"./renderedTicksSlice-GRKlOorj.js";import"./axisSelectors-CwdMfS2t.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BDjFqgQH.js";import"./CategoricalChart-CSIi67W8.js";import"./Curve-BMLS1vNR.js";import"./types-EmN6t4vl.js";import"./step-fKuN5Fcd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DUKSjkGs.js";import"./Label-CmiiW9da.js";import"./ZIndexLayer-CVK_cW1P.js";import"./useAnimationId-BsE4V4Ok.js";import"./ActivePoints-DVEwrhzj.js";import"./Dot-fVsrRUzo.js";import"./RegisterGraphicalItemId-CAijELDs.js";import"./ErrorBarContext-ZtUvHt5X.js";import"./GraphicalItemClipPath-DDqY4rhz.js";import"./SetGraphicalItem-CTmxPNcP.js";import"./getRadiusAndStrokeWidthFromDot-B3GcRvO7.js";import"./ActiveShapeUtils-DLpYpzZO.js";import"./CartesianAxis-vXS1PjkI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-BDRy21CR.js";import"./symbol-aMWaQb_D.js";import"./useElementOffset-DXn7gAmc.js";import"./uniqBy-DJfS3mll.js";import"./iteratee-CHawhTEq.js";import"./Cross-BmB1UWT9.js";import"./Rectangle-C8DUmN55.js";import"./util-Dxo8gN5i.js";import"./Sector-SjY5azCI.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
