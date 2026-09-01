import{r as g,R as e}from"./iframe-Dk9ZDdT1.js";import{B as s}from"./Brush-CdltPHaD.js";import{R as B}from"./zIndexSlice-DeceblpS.js";import{C as p}from"./ComposedChart-BKh5yr5N.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-CTBd3E56.js";import{L as D}from"./LineChart-DWznxct4.js";import{R as m}from"./ReferenceLine-Ba66oZwO.js";import{C as d}from"./CartesianGrid-B7u57R78.js";import{X as S}from"./XAxis-A_28Fvyn.js";import{Y as A}from"./YAxis-BG4jVm_S.js";import{L as R}from"./Legend-CCsIj-6h.js";import{T as w}from"./Tooltip-DxRWiHMA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-DmyqVj_Z.js";import"./resolveDefaultProps-zYTWecoa.js";import"./Text-DxLESXkZ.js";import"./DOMUtils-BpNuC4xp.js";import"./isWellBehavedNumber-CxvtDvRb.js";import"./useId-DehfeINH.js";import"./useBackwardsCompatibleTheme-C4vQm8Qy.js";import"./chartDataContext-QSp1AmWQ.js";import"./axisSelectors-DxLef304.js";import"./throttle-DIOOZof0.js";import"./index-CmUfEz5q.js";import"./index-B2rutIU6.js";import"./d3-scale-MpKXBNtT.js";import"./RechartsWrapper-DP2ymT_2.js";import"./index-BxlkNIur.js";import"./index-bvujDpj7.js";import"./renderedTicksSlice-Ckrd08To.js";import"./index-DbhjdF6k.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DIP7sg4A.js";import"./CategoricalChart-Bx3cIM0F.js";import"./Curve-1m4xWofF.js";import"./types-B5p8Vh7N.js";import"./step-CLhWgX2G.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BJxfKwUv.js";import"./Label-B5fu-9Ux.js";import"./ZIndexLayer-DeueZom8.js";import"./useAnimationId-Br2uK6cb.js";import"./ActivePoints-FU3V29Uc.js";import"./Dot-Dxbx8gos.js";import"./RegisterGraphicalItemId-z6QxmQfF.js";import"./ErrorBarContext-BvizcH0k.js";import"./GraphicalItemClipPath-CdL4vBCz.js";import"./SetGraphicalItem-BbnWj2u0.js";import"./getRadiusAndStrokeWidthFromDot-CO6bt368.js";import"./ActiveShapeUtils-EOWKKtqz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DltOMyOx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-COFyOQ-q.js";import"./symbol-C02v1ewE.js";import"./useElementOffset-KhQd1oWd.js";import"./uniqBy-CX3aiEBe.js";import"./iteratee-CvAqSA3n.js";import"./Cross-Pm4B82Mc.js";import"./Rectangle-Cb1y9t4l.js";import"./util-Dxo8gN5i.js";import"./Sector-DlwIDXc0.js";const qe={component:s},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(s,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(s,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},i={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(s,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const He=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,i as NoChartBrush,o as PanoramicBrush,He as __namedExportsOrder,qe as default};
