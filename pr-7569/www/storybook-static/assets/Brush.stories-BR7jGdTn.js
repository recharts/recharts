import{r as g,R as e}from"./iframe-3EJ0a-7l.js";import{B as i}from"./Brush-FrOKUPaS.js";import{R as B}from"./zIndexSlice-c2FXiYNl.js";import{C as p}from"./ComposedChart-D-953FuV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-C2MKmrJp.js";import{L as D}from"./LineChart-kthfGLX1.js";import{R as m}from"./ReferenceLine-9S4vho1W.js";import{C as d}from"./CartesianGrid-RxuE0wOS.js";import{X as S}from"./XAxis-C3QGe7ZQ.js";import{Y as A}from"./YAxis-DWgMRUiY.js";import{L as R}from"./Legend-DLd4l6Y5.js";import{T as w}from"./Tooltip-w5RIzRlq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-DpkyIzcZ.js";import"./resolveDefaultProps-BuDtgz7X.js";import"./Text-Tcv7e8Zm.js";import"./DOMUtils-DXgkUmDa.js";import"./isWellBehavedNumber-BhkIWxYY.js";import"./chartDataContext-D6a_Yhjw.js";import"./RechartsWrapper-Bn0d5D9a.js";import"./index-BjSUzMQ4.js";import"./index-tuDXSbu0.js";import"./index-0T8Ohuwb.js";import"./index-Bew5wRIt.js";import"./throttle-CPX4UzZG.js";import"./renderedTicksSlice-gv74no8c.js";import"./axisSelectors-Bmyn61pB.js";import"./d3-scale-iKC8386d.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BDgOOMut.js";import"./CategoricalChart-CxrO1b6T.js";import"./Curve-BO7dzXGY.js";import"./types-CU0G9DUW.js";import"./step-oroBBTM2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_aFnnDci.js";import"./Label-C0w-bdKA.js";import"./ZIndexLayer-DNvDkown.js";import"./useAnimationId-BfMO6PtV.js";import"./ActivePoints-DJDGdwM2.js";import"./Dot-Cv5hb360.js";import"./RegisterGraphicalItemId-DGaDllRs.js";import"./ErrorBarContext-BbLTkDCO.js";import"./GraphicalItemClipPath-BH3HlCRV.js";import"./SetGraphicalItem-BJF2lEB0.js";import"./getRadiusAndStrokeWidthFromDot-Ds3sY1DQ.js";import"./ActiveShapeUtils-Cy1FCqFR.js";import"./CartesianAxis-Bfa5m128.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-BSONYbmQ.js";import"./symbol-C2xiebrn.js";import"./useElementOffset-9xxsp0Py.js";import"./uniqBy-CgpcgpAe.js";import"./iteratee-CsQVFiVH.js";import"./Cross-DMbiAaWb.js";import"./Rectangle-CVPfCn-u.js";import"./util-Dxo8gN5i.js";import"./Sector-DYvV7H0n.js";const Xe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
