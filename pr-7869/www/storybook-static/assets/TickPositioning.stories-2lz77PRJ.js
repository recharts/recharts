import{R as t}from"./iframe-B0ZE5sWn.js";import{R as m}from"./zIndexSlice-CRYD7Kkj.js";import{L as s}from"./LineChart-DQa07Vkb.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-ChohRp9N.js";import{X as l}from"./XAxis-DxhJhgqY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D8bbTBc2.js";import"./index-DSEHXiiH.js";import"./index-CVaJFnop.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DkU3qXBk.js";import"./isWellBehavedNumber-c-pVuqcz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_J70Kvy.js";import"./axisSelectors-CmZ6PEb7.js";import"./d3-scale-BSLND3-m.js";import"./index-CUIhphZ8.js";import"./index-CrLSWODu.js";import"./renderedTicksSlice-2DEyX82P.js";import"./index-x3K7igv_.js";import"./CartesianChart-DEyr3eWS.js";import"./chartDataContext-C_Y-GQC5.js";import"./CategoricalChart-BW6OVLWc.js";import"./Layer-B5uUwgDJ.js";import"./Curve-DHsBKDuU.js";import"./types-CvLOqkZ2.js";import"./step-CGkCO3y3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DDDw_SSj.js";import"./Label-CDRY23He.js";import"./Text-hT0G9UKp.js";import"./DOMUtils-BtIen-TW.js";import"./useId-CIOpxIEE.js";import"./useBackwardsCompatibleTheme-C9hE96Ha.js";import"./ZIndexLayer-COO7NwIi.js";import"./useAnimationId-xIPnyE2V.js";import"./ActivePoints-jrQT7wQp.js";import"./Dot-BuzDkghy.js";import"./RegisterGraphicalItemId-DvHsssZk.js";import"./ErrorBarContext-DIoqVk5E.js";import"./GraphicalItemClipPath-CP8DwxaV.js";import"./SetGraphicalItem-AgCaMkoB.js";import"./getRadiusAndStrokeWidthFromDot-fsgEyTwP.js";import"./ActiveShapeUtils-DW159Z87.js";import"./useGraphicalItemIdentity-DKLRMGU-.js";import"./CartesianAxis-Cze39DWA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
