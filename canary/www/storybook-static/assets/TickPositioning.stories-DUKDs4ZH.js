import{R as t}from"./iframe-7RWUuhSd.js";import{R as m}from"./zIndexSlice-C-1xueag.js";import{L as s}from"./LineChart-DxO3DmnE.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CL693QeV.js";import{X as l}from"./XAxis-C-yl8jm9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C227k_Ys.js";import"./index-DH_Nh8tm.js";import"./index-ST-ozWV_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DASEB5Wz.js";import"./isWellBehavedNumber-BpVUwl5Y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bxby6BNU.js";import"./index-BfsW4WVk.js";import"./index-CJpx5Qie.js";import"./axisSelectors-DDo2hoqB.js";import"./d3-scale-BsnTxIDO.js";import"./renderedTicksSlice-CZ8pQT90.js";import"./CartesianChart-Cp-UDomk.js";import"./chartDataContext-CBmAGHT1.js";import"./CategoricalChart-Dy4quV1E.js";import"./Layer-BumiLaGI.js";import"./Curve-K5B3Xoou.js";import"./types-DB_EcD1u.js";import"./step-9lMeGmm4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-awhheCod.js";import"./Label-DVgNkXBe.js";import"./Text-C5AxehkZ.js";import"./DOMUtils-CAVKjQcs.js";import"./RechartsThemeContext-ajl3dqdh.js";import"./ZIndexLayer-CjyDq4Qz.js";import"./useAnimationId-CBjNqWHO.js";import"./ActivePoints-DdYZ5tMW.js";import"./Dot-KQ9Tkozj.js";import"./RegisterGraphicalItemId-1lBEDF1k.js";import"./ErrorBarContext-CFwTRIJP.js";import"./GraphicalItemClipPath-BA1h2NiZ.js";import"./SetGraphicalItem-90z5HlWu.js";import"./getRadiusAndStrokeWidthFromDot-CVzIRP5K.js";import"./ActiveShapeUtils-DetKTjsC.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DWQJI5tm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
