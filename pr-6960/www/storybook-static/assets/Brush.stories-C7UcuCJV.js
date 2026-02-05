import{r as v,e}from"./iframe-BDkb7FkG.js";import{B as i}from"./Brush-C4JcF-1I.js";import{R}from"./arrayEqualityCheck-B0TJyWD5.js";import{C as p}from"./ComposedChart-Ccent4P8.js";import{L as t}from"./Line-CgXkRzu8.js";import{R as c}from"./RechartsHookInspector-BNEsfHz6.js";import{X as S}from"./XAxis-CmGav0vS.js";import{Y as A}from"./YAxis-Q5HYawHS.js";import{C as m}from"./CartesianGrid-D4TC9vM6.js";import{L as w}from"./Legend-BhCA1bNt.js";import{R as d}from"./ReferenceLine-cA9uMoIi.js";import{L as B}from"./LineChart-B2qKPL5H.js";import{T as N}from"./Tooltip-DLj7yf-b.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BeK5tOdD.js";import"./axisSelectors-BNLmthUg.js";import"./Layer-DN29fGq2.js";import"./Text-DNxSgO5d.js";import"./DOMUtils-DkX8_PYo.js";import"./chartDataContext-BN0HTO99.js";import"./RechartsWrapper-mZGj0Z3E.js";import"./hooks-DxXidz5r.js";import"./zIndexSlice-CEfchlTx.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D8s7iQvN.js";import"./CategoricalChart-QMn_55Fk.js";import"./ReactUtils-Bu2m7OLZ.js";import"./Label-557v0PPI.js";import"./ZIndexLayer-CSKx51xZ.js";import"./ActivePoints-CkZqhQS2.js";import"./Dot-Cj5br_BU.js";import"./types-lD78ZLRW.js";import"./RegisterGraphicalItemId-CVSGS5U1.js";import"./ErrorBarContext-Cklgrfin.js";import"./GraphicalItemClipPath-PGYoXjM4.js";import"./SetGraphicalItem-D0--qzX6.js";import"./useAnimationId-Dt_DMrVN.js";import"./getRadiusAndStrokeWidthFromDot-B9swL3GN.js";import"./ActiveShapeUtils-BT6H0snO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdEMe32h.js";import"./Trapezoid-BYTF93yz.js";import"./Sector-BDLqy63u.js";import"./Symbols-cZo6AVu-.js";import"./Curve-BhcGGWB4.js";import"./index-BiD0RfS5.js";import"./ChartSizeDimensions-DMf6nTY3.js";import"./OffsetShower-CLob0hRN.js";import"./PlotAreaShower-DdbC7e3E.js";import"./CartesianAxis-CqOMvTf3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Cm-nycv7.js";import"./iteratee-BCcKgiDG.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-D9nqiwKw.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
