import{e as t}from"./iframe-BO2lV8Fr.js";import{R as s}from"./arrayEqualityCheck-BPZLCCv_.js";import{L as m}from"./LineChart-DnhtAW_Y.js";import{L as c}from"./Line-QXdRrMDG.js";import{X as d}from"./XAxis-n0cJUWOz.js";import{R as l}from"./RechartsHookInspector-BaEmilk5.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DHbskwPQ.js";import"./PolarUtils-CZtkokJH.js";import"./RechartsWrapper-CnX2hcx7.js";import"./hooks-CyQEzp2Y.js";import"./axisSelectors-C55ZO64o.js";import"./zIndexSlice-OMKiStTn.js";import"./CartesianChart-BlrMuAtJ.js";import"./chartDataContext-Dtblt1is.js";import"./CategoricalChart-mKGFwIoi.js";import"./Layer-IoZ0rL1L.js";import"./ReactUtils-CB6ifrXE.js";import"./Label-4EeKD-N4.js";import"./Text-B2hif4xC.js";import"./DOMUtils-5fMbRa2e.js";import"./ZIndexLayer-CKe6oR6h.js";import"./ActivePoints-D9PJXPxG.js";import"./Dot-jMjXiq3a.js";import"./types-uDYlV2go.js";import"./RegisterGraphicalItemId-wG1yfeVq.js";import"./ErrorBarContext-BB-sopap.js";import"./GraphicalItemClipPath-D6vjaQ-6.js";import"./SetGraphicalItem-BSkVMDfa.js";import"./useAnimationId-B_L243Vk.js";import"./getRadiusAndStrokeWidthFromDot-DJdRuXTC.js";import"./ActiveShapeUtils-DVU6eaup.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CuSLDrEq.js";import"./Trapezoid-DXmIi2NN.js";import"./Sector-BGeEC3JQ.js";import"./Symbols-BsRtfl74.js";import"./Curve-BbZIFp84.js";import"./CartesianAxis-wvny4geP.js";import"./index-Ci4CsAoU.js";import"./ChartSizeDimensions-BEuPB0uv.js";import"./OffsetShower-C3B37-9_.js";import"./PlotAreaShower-Bds63cu3.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
