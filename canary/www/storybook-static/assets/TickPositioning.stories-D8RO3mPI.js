import{R as t}from"./iframe-DwOXtgzn.js";import{R as m}from"./zIndexSlice-Dmyle4yQ.js";import{L as s}from"./LineChart-DkDtbDgs.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BJ3iVMCT.js";import{X as l}from"./XAxis-VTalBozJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-xTjEl_pc.js";import"./index-CrEwMW4H.js";import"./index-QUHlWLUZ.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bx4BRzZ6.js";import"./isWellBehavedNumber-CHPTSSoT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mJXYZQqb.js";import"./index-ELFXx2ej.js";import"./index-bc6z-CkW.js";import"./renderedTicksSlice-DOm8uXLN.js";import"./axisSelectors-Dzpx2B0P.js";import"./d3-scale-MfXP3SuX.js";import"./CartesianChart-EebZWKim.js";import"./chartDataContext-C0SbFtj0.js";import"./CategoricalChart-D1DyaryK.js";import"./Layer-DB__irZe.js";import"./Curve-7y6VsND5.js";import"./types-BWK-xR3U.js";import"./step-AQXoGS_1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C0i9fXY5.js";import"./Label-CIRdFLpv.js";import"./Text-CSVGnOzm.js";import"./DOMUtils-B10qim04.js";import"./ZIndexLayer-IkkcGrga.js";import"./useAnimationId-7jXy7qds.js";import"./ActivePoints-Lpp61Dot.js";import"./Dot-B5UvlLlr.js";import"./RegisterGraphicalItemId-BuwJHRgI.js";import"./ErrorBarContext-DxS1VdHw.js";import"./GraphicalItemClipPath-CjcrufCA.js";import"./SetGraphicalItem-k8fj3X8g.js";import"./getRadiusAndStrokeWidthFromDot-D8rcgLH2.js";import"./ActiveShapeUtils-Bczue4Wz.js";import"./CartesianAxis-DdjJEKUq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
