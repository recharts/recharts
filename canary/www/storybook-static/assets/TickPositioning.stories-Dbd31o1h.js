import{R as t}from"./iframe-Dsugo_zg.js";import{R as m}from"./zIndexSlice-CQ8Dq6Rw.js";import{L as s}from"./LineChart-BILblmZW.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Ng1r7DkL.js";import{X as l}from"./XAxis-BtWHE8Ii.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Dn_ZGj_2.js";import"./index-hfwoyc40.js";import"./index-BltQKr7J.js";import"./get-B4-DsMlp.js";import"./resolveDefaultProps-ByiopbeA.js";import"./isWellBehavedNumber-BXhYPRs7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3mVticM.js";import"./index-B1HEKGfm.js";import"./index-B6DCYcPU.js";import"./renderedTicksSlice-CsDLwy59.js";import"./axisSelectors-DuSkawJ1.js";import"./d3-scale-C9TIKeBC.js";import"./string-B6fdYHAA.js";import"./CartesianChart-UK3tQwAh.js";import"./chartDataContext-D_whFwD4.js";import"./CategoricalChart-FdwMdvH0.js";import"./Layer-PDKsNXXB.js";import"./Curve-ZHf_GWFM.js";import"./types-BdpIxXW8.js";import"./step-BaYniHaQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BcVxVlvs.js";import"./Label-Dv0ON-tn.js";import"./Text-BrgPWmaV.js";import"./DOMUtils-Bp38L-kM.js";import"./ZIndexLayer-CosUoOTg.js";import"./useAnimationId-BEJfwvjz.js";import"./ActivePoints-B-oBY2kZ.js";import"./Dot-zHN_KyIs.js";import"./RegisterGraphicalItemId-VkMnq2n0.js";import"./ErrorBarContext-BTy60tqZ.js";import"./GraphicalItemClipPath-DVeVc-Gk.js";import"./SetGraphicalItem-CiVD-7Sz.js";import"./getRadiusAndStrokeWidthFromDot-BuDs2Yv2.js";import"./ActiveShapeUtils-DQiBB_Ml.js";import"./CartesianAxis-1FBfSHCk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
