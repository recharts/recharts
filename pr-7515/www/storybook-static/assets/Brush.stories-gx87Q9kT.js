import{r as g,R as e}from"./iframe-ClZ97IhH.js";import{B as i}from"./Brush-Dl-O4aO6.js";import{R as B}from"./zIndexSlice-C5PhT0E1.js";import{C as p}from"./ComposedChart-B1E1zelw.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-2hGhSOE2.js";import{L as D}from"./LineChart-Cc7CvVjY.js";import{R as m}from"./ReferenceLine-BEOl0Ecw.js";import{C as d}from"./CartesianGrid-Up-r6Jpo.js";import{X as S}from"./XAxis-CNZNRqSN.js";import{Y as A}from"./YAxis-HP_sdQVr.js";import{L as R}from"./Legend-NU_4K7aq.js";import{T as w}from"./Tooltip-uwiVUldc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-av8QWZYv.js";import"./resolveDefaultProps-CcaTf9gV.js";import"./Text-CUeHZ0Lm.js";import"./DOMUtils-C7DdSVbv.js";import"./isWellBehavedNumber-BOULWsxq.js";import"./chartDataContext-DXptRcnW.js";import"./RechartsWrapper-BLJ6xSnq.js";import"./index-CFJQbE9C.js";import"./index-6l3olgx1.js";import"./index-CrQHS0ha.js";import"./index-D9OO5l1d.js";import"./throttle-CenVclrT.js";import"./renderedTicksSlice-Cu1gA7XW.js";import"./axisSelectors-YPPwLD-Y.js";import"./d3-scale-BrF_Bfnv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CLbAeK38.js";import"./CategoricalChart-CU7_I9di.js";import"./Curve-DEZWs80m.js";import"./types-CfFSLUx9.js";import"./step-RKP5ji2w.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ugycet-g.js";import"./Label-Bh1DkGaJ.js";import"./ZIndexLayer-DzfxsJEt.js";import"./useAnimationId-BXxNbWRb.js";import"./ActivePoints-JUHjUNnj.js";import"./Dot-C94-4eAI.js";import"./RegisterGraphicalItemId-XhYDb4e7.js";import"./ErrorBarContext-D5P-GrTa.js";import"./GraphicalItemClipPath-DgZI2AKv.js";import"./SetGraphicalItem-DzMBG2H0.js";import"./getRadiusAndStrokeWidthFromDot-CiF60Eet.js";import"./ActiveShapeUtils-SliXRAYD.js";import"./CartesianAxis-BkbswnOw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-BV7W1Jn4.js";import"./symbol-C8RgFcPM.js";import"./useElementOffset-Bq5Vxvej.js";import"./uniqBy-WOO0nBZ6.js";import"./iteratee-B_h2EV3R.js";import"./Cross-WVRf3tAf.js";import"./Rectangle-DcxWrdiG.js";import"./util-Dxo8gN5i.js";import"./Sector-BInnoliH.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
