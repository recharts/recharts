import{r as g,R as e}from"./iframe-BXeHtRRc.js";import{B as i}from"./Brush-DHrDa_Uw.js";import{R as B}from"./zIndexSlice-cE44OqOD.js";import{C as p}from"./ComposedChart-CG0nrh_K.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-Bi2pbqFq.js";import{L as D}from"./LineChart-ClOyCldg.js";import{R as m}from"./ReferenceLine-CIiXKj3M.js";import{C as d}from"./CartesianGrid-B491ywc-.js";import{X as S}from"./XAxis-tstPVLiw.js";import{Y as A}from"./YAxis-BMejmk_u.js";import{L as R}from"./Legend-ClYQKqQo.js";import{T as w}from"./Tooltip-Di0nKIFE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CJL6L62i.js";import"./d3-scale-D1ymsn93.js";import"./immer-DNshJjPH.js";import"./index-DvJ-fn_5.js";import"./index-B4hVWkse.js";import"./string-B6fdYHAA.js";import"./Layer-G87RycP8.js";import"./resolveDefaultProps-C9hL96mo.js";import"./Text-CgCa4wia.js";import"./DOMUtils-Bki5Qsqq.js";import"./isWellBehavedNumber-D2wsJvGw.js";import"./chartDataContext-Cl-sRnxe.js";import"./RechartsWrapper-BlW5dnlL.js";import"./index-BDGfSbM8.js";import"./index-Ovc1MJjY.js";import"./renderedTicksSlice-Bxd2HCuP.js";import"./axisSelectors-DwMRPNyX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CfUKecxL.js";import"./CategoricalChart-Dcf-SEqg.js";import"./Curve-DVgI-4Ur.js";import"./types-DFlY2any.js";import"./step-CWqUN4bQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cld-WhT6.js";import"./Label-CmgKG_wT.js";import"./ZIndexLayer-CdPLtMFq.js";import"./useAnimationId-DKoglaf7.js";import"./ActivePoints-BIzkJXPu.js";import"./Dot-BuBaCmSt.js";import"./RegisterGraphicalItemId-CoToPco7.js";import"./ErrorBarContext-BsZ2YOp7.js";import"./GraphicalItemClipPath-Behn_RHh.js";import"./SetGraphicalItem-DrQ2NJnA.js";import"./getRadiusAndStrokeWidthFromDot-BwFthNRz.js";import"./ActiveShapeUtils-BHpJL8IG.js";import"./CartesianAxis-DlPp-Ttd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-wPfMfouo.js";import"./symbol-C_HdaqhA.js";import"./useElementOffset-D1DpNGPa.js";import"./uniqBy-CZHTY20m.js";import"./iteratee-BSnhLzO_.js";import"./Cross-Ds8fiepC.js";import"./Rectangle-BLmys3HY.js";import"./Sector-V3leyB8_.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
