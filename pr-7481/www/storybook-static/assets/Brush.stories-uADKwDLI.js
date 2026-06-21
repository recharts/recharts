import{r as g,R as e}from"./iframe-BIq879V5.js";import{B as i}from"./Brush-CFhlzygr.js";import{R as B}from"./zIndexSlice-D4TMV-f8.js";import{C as p}from"./ComposedChart-Y-P0CO1c.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-nYWcwLYL.js";import{L as D}from"./LineChart-De2-ShXe.js";import{R as m}from"./ReferenceLine-QNDINLXP.js";import{C as d}from"./CartesianGrid-BnlL1Sxs.js";import{X as S}from"./XAxis-BeATFl8n.js";import{Y as A}from"./YAxis-CWb6gVw3.js";import{L as R}from"./Legend-1jgSUACd.js";import{T as w}from"./Tooltip-BdWrv2yu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dlp4HEDU.js";import"./d3-scale-D2-Kj7HA.js";import"./immer-Bhe1IepA.js";import"./index-Bxqp1uTz.js";import"./index-1ZXeTe4f.js";import"./Layer-BQ46hdaR.js";import"./resolveDefaultProps-D0mYDCdG.js";import"./Text-D9ArQUyF.js";import"./DOMUtils-U4n6Sms4.js";import"./isWellBehavedNumber-2nx214wI.js";import"./chartDataContext-DENfjobA.js";import"./RechartsWrapper-5ZbCTkSQ.js";import"./index-CoQnCr93.js";import"./index-qY5ecPCO.js";import"./renderedTicksSlice-wj6PxGI_.js";import"./axisSelectors-BEDQXBlF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D5C06Dh0.js";import"./CategoricalChart-B9HsjgZj.js";import"./Curve-D0B4vo0F.js";import"./types-sdPoIcnS.js";import"./step-CMJu7Zx7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cplqb3ZM.js";import"./Label-CdyMu7UM.js";import"./ZIndexLayer-kG0uRxU5.js";import"./useAnimationId-7GzLXqBz.js";import"./ActivePoints-CAIFOa-o.js";import"./Dot-CeNBRJNR.js";import"./RegisterGraphicalItemId-CM4cjQUT.js";import"./ErrorBarContext-DapMvKSQ.js";import"./GraphicalItemClipPath-DLFobv0X.js";import"./SetGraphicalItem-DenlJqlF.js";import"./getRadiusAndStrokeWidthFromDot-Ezu5xS7M.js";import"./ActiveShapeUtils-DMlqT6AD.js";import"./CartesianAxis-DnWuLXim.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-CDQO2QHa.js";import"./symbol-axVFD4mK.js";import"./useElementOffset-De8Wm0sc.js";import"./uniqBy-Cuqkmugs.js";import"./iteratee-4c0JIRob.js";import"./Cross-CVqkxvmf.js";import"./Rectangle-Be09360W.js";import"./util-Dxo8gN5i.js";import"./Sector-Bk378S7z.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
