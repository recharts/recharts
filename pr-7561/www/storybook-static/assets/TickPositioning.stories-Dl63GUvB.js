import{R as t}from"./iframe-wiglGnBh.js";import{R as m}from"./zIndexSlice-DGL63V4L.js";import{L as s}from"./LineChart-BZywx2T1.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-9lFzyWlx.js";import{X as l}from"./XAxis-DcNyXe69.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BMNVPqSq.js";import"./index-Mz84GrVY.js";import"./index-s4-LlFgK.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BM8NmOex.js";import"./isWellBehavedNumber-DsqaaTNJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5SoXlYEo.js";import"./index-WWLocB5H.js";import"./index-1ZP6iUpr.js";import"./renderedTicksSlice-BYFI-WHt.js";import"./axisSelectors-BaS0q6Il.js";import"./d3-scale-Bn4UFc1s.js";import"./CartesianChart-Us5vBUdh.js";import"./chartDataContext-JmkVpeXS.js";import"./CategoricalChart-D2_16EkL.js";import"./Layer-nH5sm9p4.js";import"./Curve-BWqxyQw0.js";import"./types-BoamgyWM.js";import"./step-eMzlrjiD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B9y47QYM.js";import"./Label-B3PbOJvm.js";import"./Text-BTuAOKpf.js";import"./DOMUtils-LT1AML3l.js";import"./ZIndexLayer-jQgtLS9e.js";import"./useAnimationId-2tqnpEoJ.js";import"./ActivePoints-DHpr5egm.js";import"./Dot-BqBjCBos.js";import"./RegisterGraphicalItemId-BK4vqvvE.js";import"./ErrorBarContext-BdKRNCre.js";import"./GraphicalItemClipPath-RZ6a2McD.js";import"./SetGraphicalItem-BXbX8E7N.js";import"./getRadiusAndStrokeWidthFromDot-DbINMjnd.js";import"./ActiveShapeUtils-C95mhFam.js";import"./CartesianAxis-CUoTvBNy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
