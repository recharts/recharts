import{R as t}from"./iframe-CdVkyLHS.js";import{R as m}from"./zIndexSlice-GOyP9Zss.js";import{L as s}from"./LineChart-C5NhKWyk.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Piz3hUqR.js";import{X as l}from"./XAxis-CRNnSUZ9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CdLGvlu3.js";import"./index-QyElv-Xn.js";import"./index-DvCc_EAq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CH_tZ1CV.js";import"./isWellBehavedNumber-CukO4dTL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJIttxHk.js";import"./index-OMOk9pzv.js";import"./index-DysuFDaN.js";import"./axisSelectors-BJboZDv2.js";import"./d3-scale-C_ybSH9a.js";import"./renderedTicksSlice-nlBTJT3n.js";import"./CartesianChart-DH_QKR3e.js";import"./chartDataContext-vMtbxlvm.js";import"./CategoricalChart-Bmub6W6K.js";import"./Layer-DsEuCMxp.js";import"./Curve-BU_gswLL.js";import"./types-D7MUQAXd.js";import"./step-CTvr7swL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B_5qg-lC.js";import"./Label-Cwb8kt4E.js";import"./Text-Bg49R2O8.js";import"./DOMUtils-yV6fdCO6.js";import"./useBackwardsCompatibleTheme-BUV415Lc.js";import"./ZIndexLayer-CnILDHp4.js";import"./useAnimationId-CnyNJ0d7.js";import"./ActivePoints-D2jscU_r.js";import"./Dot-J0nM858J.js";import"./RegisterGraphicalItemId-D7VKY1D2.js";import"./ErrorBarContext-BWl2zb09.js";import"./GraphicalItemClipPath-kU06yTtA.js";import"./SetGraphicalItem-CKTCd1Uv.js";import"./getRadiusAndStrokeWidthFromDot-Clc9jd4p.js";import"./ActiveShapeUtils-C96E8Hlz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Cg3yJD5r.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,pt as default};
