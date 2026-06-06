import{r as g,R as e}from"./iframe-BiXVY0YN.js";import{B as i}from"./Brush-nuWkJOHX.js";import{R as B}from"./zIndexSlice-nY6JNSg8.js";import{C as p}from"./ComposedChart-Cf4jkg33.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-DjzxsS4q.js";import{L as D}from"./LineChart-CuhODK-Q.js";import{R as m}from"./ReferenceLine-BZXiF7uq.js";import{C as d}from"./CartesianGrid-DOHYVCTU.js";import{X as S}from"./XAxis-8aOHTtEo.js";import{Y as A}from"./YAxis-Da5Yhwpa.js";import{L as R}from"./Legend-Cuei_W9Z.js";import{T as w}from"./Tooltip-CONywgA0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DSfNO7n4.js";import"./d3-scale-Bqjw06G0.js";import"./immer-Bguoov5l.js";import"./index-nFhQ5GlG.js";import"./index-C9pEG8B_.js";import"./string-B6fdYHAA.js";import"./Layer-uuEILT3S.js";import"./resolveDefaultProps-DD4XGInB.js";import"./Text-DmK0i7Bz.js";import"./DOMUtils-C2cF8Szu.js";import"./isWellBehavedNumber-DE5idxcf.js";import"./chartDataContext-CjUfDHdj.js";import"./RechartsWrapper-C7VFUx7Q.js";import"./index-BDCsY1Bp.js";import"./index-PSniF_G7.js";import"./renderedTicksSlice-D3zVHdBs.js";import"./axisSelectors-aUKbGV01.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D3egFHKO.js";import"./CategoricalChart-BzNcO88n.js";import"./Curve-D7wuzLSQ.js";import"./types-CLXMlpTC.js";import"./step-BzaqppXW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DfhrJO_Z.js";import"./Label-BJ6MA63M.js";import"./ZIndexLayer-6ebEplbW.js";import"./useAnimationId-CfBicigm.js";import"./ActivePoints-B-SHt4Wz.js";import"./Dot-BnLwvEMd.js";import"./RegisterGraphicalItemId-MDxIerXT.js";import"./ErrorBarContext-DrwdD_lh.js";import"./GraphicalItemClipPath-DNkkSszT.js";import"./SetGraphicalItem-AeS5weMQ.js";import"./getRadiusAndStrokeWidthFromDot-LZlKw0gF.js";import"./ActiveShapeUtils-RN-LxFg0.js";import"./CartesianAxis-eCQKtisH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-BELca2ug.js";import"./symbol-DzSheJ7o.js";import"./useElementOffset-CPLS44DG.js";import"./uniqBy-CcGBVuj2.js";import"./iteratee-STjWE_qx.js";import"./Cross-C3BpIl7J.js";import"./Rectangle-DuKXzg_S.js";import"./Sector-jQ_V-qCe.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
