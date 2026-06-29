import{R as t}from"./iframe-ClhUNVnE.js";import{R as m}from"./zIndexSlice-Bj_mEjES.js";import{L as s}from"./LineChart-ZCre-wO6.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CrJoEyU1.js";import{X as l}from"./XAxis-LUnQ02U1.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CYmjgX02.js";import"./index-CMNlKXgY.js";import"./index-WRHCQy9e.js";import"./get-Uq0DWhIe.js";import"./resolveDefaultProps-xxbn2Y0z.js";import"./isWellBehavedNumber-BZGd7hgQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CH-OQa-8.js";import"./index-CKsF35O1.js";import"./index-D_-76jNe.js";import"./renderedTicksSlice-D-beSFYC.js";import"./axisSelectors-B_omKdC_.js";import"./d3-scale-CyxXVHj6.js";import"./CartesianChart-DVNFcAED.js";import"./chartDataContext-DT2zm0Bo.js";import"./CategoricalChart-BXjBj4uL.js";import"./Layer-De05M5So.js";import"./Curve-B40-WnjD.js";import"./types-B-IY3TCA.js";import"./step-DSY_NY5u.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CjVS2mh2.js";import"./Label-C7_QXzyC.js";import"./Text-6OmgeIvW.js";import"./DOMUtils-CtaL4Ln2.js";import"./ZIndexLayer-DGNmh353.js";import"./useAnimationId-CT1xX_cr.js";import"./ActivePoints-BylsHrz1.js";import"./Dot-BZCqqavc.js";import"./RegisterGraphicalItemId-EpH2csVt.js";import"./ErrorBarContext-Dhef0H9H.js";import"./GraphicalItemClipPath-BcvmXpNm.js";import"./SetGraphicalItem-D69pntSs.js";import"./getRadiusAndStrokeWidthFromDot-CPyWUTuJ.js";import"./ActiveShapeUtils-DM6q8ZUn.js";import"./CartesianAxis-6ub_g_j0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ot=["TickPositioning"];export{r as TickPositioning,ot as __namedExportsOrder,it as default};
