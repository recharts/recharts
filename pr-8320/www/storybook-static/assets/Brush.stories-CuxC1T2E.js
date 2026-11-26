import{r as g,R as e}from"./iframe-DEVQjgtg.js";import{B as i}from"./Brush-ra1faIpe.js";import{R as B}from"./zIndexSlice-DfK8JSFq.js";import{C as p}from"./ComposedChart-CkNI_L7v.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-DIzt92wi.js";import{L as D}from"./LineChart-DCF6Cc-p.js";import{R as m}from"./ReferenceLine-ChbyyFVV.js";import{C as d}from"./CartesianGrid-qpQnI3BO.js";import{X as S}from"./XAxis-BW3rW0v-.js";import{Y as A}from"./YAxis-DNUJzVJY.js";import{L as R}from"./Legend-CuHxeQW8.js";import{T as w}from"./Tooltip-BsOHq51C.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-Cr563h4j.js";import"./resolveDefaultProps-CwoRT4vA.js";import"./get-CjriyByo.js";import"./Text-B9Mi7Fii.js";import"./ZIndexLayer-FMAzY6FJ.js";import"./index-Cpcs4tmX.js";import"./index-C95LL0D7.js";import"./chartDataContext-DImnS5HH.js";import"./axisSelectors-t3BvEa3q.js";import"./throttle-icp-MZ_z.js";import"./polarAxisSelectors-DOgnXW1S.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Co6YNHM_.js";import"./RechartsWrapper-CfFuT0mb.js";import"./index-fXrCovV3.js";import"./index-TVJDl2u2.js";import"./renderedTicksSlice-2D_h0Nlg.js";import"./index-Cxp_oZwY.js";import"./fillDefinitions-D1YpghSP.js";import"./CartesianChart-pH5TOmhe.js";import"./CategoricalChart-BtHLUBe9.js";import"./getRadiusAndStrokeWidthFromDot-g6-mSPtW.js";import"./Curve-a_jcRLJ0.js";import"./types-B0JGDzFy.js";import"./step-CpcYtbS4.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DAcHMSZ1.js";import"./Label-CuMp2cQz.js";import"./ActivePoints-Dpho8RxE.js";import"./Dot-p_BgihRi.js";import"./activeStyles-D4aY95Js.js";import"./useAnimationId-CMFy88eN.js";import"./Symbols-CuwdJXxk.js";import"./symbol-Dp50t1em.js";import"./ErrorBarContext-D5jMJqSB.js";import"./SetGraphicalItem-CsW3luzS.js";import"./ActiveShapeUtils-DqT038Y8.js";import"./useEffectiveDataKey-Cx2ptCsW.js";import"./CartesianAxis-CPxmijCh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-M02b1bSW.js";import"./uniqBy-RXDCBnIw.js";import"./iteratee-69chSGWI.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C_0Oj-h0.js";import"./Rectangle-BvNq4YWD.js";import"./util-Dxo8gN5i.js";import"./Sector-B86o0IXH.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,je as __namedExportsOrder,Fe as default};
