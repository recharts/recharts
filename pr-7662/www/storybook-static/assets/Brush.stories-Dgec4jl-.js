import{r as g,R as e}from"./iframe-cFlQwHEa.js";import{B as s}from"./Brush-7O8CK1DV.js";import{R as B}from"./zIndexSlice-DDYeRltP.js";import{C as p}from"./ComposedChart-Cr_zCTxJ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-DJAGFMBk.js";import{L as D}from"./LineChart-B63Bi82v.js";import{R as m}from"./ReferenceLine-DIMTHM02.js";import{C as d}from"./CartesianGrid-Du-AYzOW.js";import{X as S}from"./XAxis-B2GHVOpr.js";import{Y as A}from"./YAxis-kKnqa52f.js";import{L as R}from"./Legend-BJF1jmuM.js";import{T as w}from"./Tooltip-Bkr9r7AO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-BgSWIZl1.js";import"./resolveDefaultProps-C2OiAFwa.js";import"./Text-BuwjYicu.js";import"./DOMUtils-BFAGFFMB.js";import"./isWellBehavedNumber-BSAPeCSS.js";import"./useId-B6yN-zUw.js";import"./useBackwardsCompatibleTheme-BqDTENvH.js";import"./chartDataContext-BvjIPTZo.js";import"./axisSelectors--mu7xJ5Y.js";import"./throttle-DAdIMx4T.js";import"./index-DglaFOn3.js";import"./index-C-TRi17m.js";import"./d3-scale-CkWKTTx7.js";import"./RechartsWrapper-BXBBXfmC.js";import"./index-CSK5_VVc.js";import"./index-Dtvx5j6b.js";import"./renderedTicksSlice-D983KGZ4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-fiOEBM8R.js";import"./CategoricalChart-BBemHSvC.js";import"./Curve-CyS7BkRL.js";import"./types-ChcMjuwl.js";import"./step-DcRYwHfR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DKR9bXgi.js";import"./Label-JW-KtVqW.js";import"./ZIndexLayer-p7Pk0-Yp.js";import"./useAnimationId-BEPJjOtf.js";import"./ActivePoints-CjX0WMZa.js";import"./Dot-BayKRhRn.js";import"./RegisterGraphicalItemId-BQvNsPKC.js";import"./ErrorBarContext-BnnhnyAe.js";import"./GraphicalItemClipPath-uMqpd6od.js";import"./SetGraphicalItem-B-flkej3.js";import"./getRadiusAndStrokeWidthFromDot-CPAqKToh.js";import"./ActiveShapeUtils-CR14wFnm.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BIZkK73U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-Q3AzLqoX.js";import"./symbol-BmR2DuwM.js";import"./useElementOffset-B0E-eh4h.js";import"./uniqBy-CNtWXDS-.js";import"./iteratee-DpEh8_N1.js";import"./Cross-L6msifUZ.js";import"./Rectangle-2lH1Rq4W.js";import"./util-Dxo8gN5i.js";import"./Sector-B5Mk_QuW.js";const je={component:s},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(s,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(s,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},i={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(s,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const qe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,i as NoChartBrush,o as PanoramicBrush,qe as __namedExportsOrder,je as default};
