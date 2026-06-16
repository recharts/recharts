import{r as g,R as e}from"./iframe-C_T02oQn.js";import{B as i}from"./Brush-DvQVTrMP.js";import{R as B}from"./zIndexSlice-PaMIo_4H.js";import{C as p}from"./ComposedChart-D2veWJ82.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-Bkm0IHhG.js";import{L as D}from"./LineChart-gaPBcPpD.js";import{R as m}from"./ReferenceLine-cXuCnNA8.js";import{C as d}from"./CartesianGrid-JkXasBLp.js";import{X as S}from"./XAxis-9hDWnVEM.js";import{Y as A}from"./YAxis-CAA9Sn25.js";import{L as R}from"./Legend-BSh8bNuS.js";import{T as w}from"./Tooltip-CzaIn816.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C7erGA50.js";import"./d3-scale-BkdgfgBA.js";import"./immer-B6lblpQa.js";import"./index-Dlc1g4gM.js";import"./index-Ca6EOx6F.js";import"./string-B6fdYHAA.js";import"./Layer-DjmjZ8nK.js";import"./resolveDefaultProps-m_js62KJ.js";import"./Text-BPMY0rSA.js";import"./DOMUtils-D0fMC5uZ.js";import"./isWellBehavedNumber-BCiXswn1.js";import"./chartDataContext-BpZSWeLp.js";import"./RechartsWrapper-B6sFF1OD.js";import"./index-C8_JgXbr.js";import"./index-D8uzW4ZU.js";import"./renderedTicksSlice-CaJKKs-e.js";import"./axisSelectors-BhG2tLgr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BDn-adSN.js";import"./CategoricalChart-DJkiCneY.js";import"./Curve-YTaF5YAP.js";import"./types-BgdJMLXg.js";import"./step-DxTezoeO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BUXgV9u-.js";import"./Label-PISAROHv.js";import"./ZIndexLayer-BEphblF2.js";import"./useAnimationId-BP6MXfIJ.js";import"./ActivePoints-wYW31SoX.js";import"./Dot-BqWNwI4e.js";import"./RegisterGraphicalItemId-CLd-qaBQ.js";import"./ErrorBarContext-BlU25AOm.js";import"./GraphicalItemClipPath-hcKIGZeq.js";import"./SetGraphicalItem-CYOjbzSp.js";import"./getRadiusAndStrokeWidthFromDot-BgRiSanx.js";import"./ActiveShapeUtils-CWkOqTvX.js";import"./CartesianAxis-Du2JQot0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-uE90l84i.js";import"./symbol-CvYDruQ3.js";import"./useElementOffset-DhbYobY7.js";import"./uniqBy-CWJ7W0V1.js";import"./iteratee-CidJxIEL.js";import"./Cross-Cxjm4Cmv.js";import"./Rectangle-C_fFb_u8.js";import"./Sector-_x2Ka2K-.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
