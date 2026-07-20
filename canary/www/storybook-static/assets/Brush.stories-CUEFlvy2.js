import{r as g,R as e}from"./iframe-B9NgERoL.js";import{B as i}from"./Brush-DRxqgskm.js";import{R as B}from"./zIndexSlice-CeMrsmMa.js";import{C as p}from"./ComposedChart-DqPZ70OF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line--rEciFbL.js";import{L as D}from"./LineChart-BUiD6lRJ.js";import{R as m}from"./ReferenceLine-BVKf_5j1.js";import{C as d}from"./CartesianGrid-ByMgXI7P.js";import{X as S}from"./XAxis-aLbTU0vL.js";import{Y as A}from"./YAxis-BZ7igdn9.js";import{L as R}from"./Legend-DLhTpBr2.js";import{T as w}from"./Tooltip-C5co7ZAz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-C_3qb5EZ.js";import"./resolveDefaultProps-Dx164Y1F.js";import"./Text-ouhTNjrK.js";import"./DOMUtils-BpJWFEfX.js";import"./isWellBehavedNumber-bmfh_B4y.js";import"./chartDataContext-MrXPhuTJ.js";import"./RechartsWrapper-BIufO86S.js";import"./index-IJSHzaJE.js";import"./index-D4sqhJ-M.js";import"./index-1yiXAU6d.js";import"./index-U01BUWsX.js";import"./throttle-DaANxDja.js";import"./renderedTicksSlice-Cqze-A-7.js";import"./axisSelectors-Cp9fRWWc.js";import"./d3-scale-CeApqfqF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1OHX_Vn.js";import"./CategoricalChart-BaN3vUEH.js";import"./Curve-VzKcWA61.js";import"./types-fCUwHeLW.js";import"./step-D7ajG_sH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C-FRFA-Z.js";import"./Label-D0wu2lTJ.js";import"./ZIndexLayer-B-abFFm7.js";import"./useAnimationId-Dul1SXp-.js";import"./ActivePoints-CC4YCm4F.js";import"./Dot-CinH8xYi.js";import"./RegisterGraphicalItemId-DqMxb_Dg.js";import"./ErrorBarContext-Dl5oIQ1g.js";import"./GraphicalItemClipPath-BesQYa1_.js";import"./SetGraphicalItem-KoMfzPcE.js";import"./getRadiusAndStrokeWidthFromDot-CFmXYxCt.js";import"./ActiveShapeUtils-CBSWPzIX.js";import"./CartesianAxis-CU4wTzgV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-C6oyQ2HE.js";import"./symbol-BI0SklJ7.js";import"./useElementOffset-DIAEj78D.js";import"./uniqBy-par6alwm.js";import"./iteratee-zl5NzN92.js";import"./Cross-Bl5UJ-0f.js";import"./Rectangle-jixavVBj.js";import"./util-Dxo8gN5i.js";import"./Sector-BMaFtHt3.js";const Xe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Ye=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Ye as __namedExportsOrder,Xe as default};
