import{R as t}from"./iframe-DDa7m_LV.js";import{R as m}from"./zIndexSlice-BGDMq11w.js";import{L as s}from"./LineChart-ysHc9lpv.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CgnFp_Ki.js";import{X as l}from"./XAxis-C_90q5ur.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CDcbaTsx.js";import"./index-DKvxLdaY.js";import"./index-CQwxmzXl.js";import"./get-BkRD0rv1.js";import"./resolveDefaultProps-_rtxDhh1.js";import"./isWellBehavedNumber-BpYCTIWP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BP1nC8TI.js";import"./index-xetC29GH.js";import"./index-Dqdzi7xh.js";import"./renderedTicksSlice-BldZtaeN.js";import"./axisSelectors-B-E6faSk.js";import"./d3-scale-lQF3DEYD.js";import"./CartesianChart-DQyQReh2.js";import"./chartDataContext-BCuk8KYe.js";import"./CategoricalChart-B4hxnAvN.js";import"./Layer-DzM6lalT.js";import"./Curve-1MKNX4lJ.js";import"./types-BQpkl3V-.js";import"./step-xwmEGnAg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B4Or3-X4.js";import"./Label-CwmoSFs2.js";import"./Text-CRfJilvw.js";import"./DOMUtils-jl9bWopj.js";import"./ZIndexLayer-DErURTRW.js";import"./useAnimationId-DndzYlXq.js";import"./ActivePoints-2d86kPF5.js";import"./Dot-CTvLKOFz.js";import"./RegisterGraphicalItemId-D1XWxMPg.js";import"./ErrorBarContext-Cme-vC5F.js";import"./GraphicalItemClipPath-CN8GtY4s.js";import"./SetGraphicalItem-DU_Y3HPI.js";import"./getRadiusAndStrokeWidthFromDot-CcrjGEgC.js";import"./ActiveShapeUtils-CUSMx5gC.js";import"./CartesianAxis-BYwyVqNa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
