import{R as t}from"./iframe-CgwPoQay.js";import{R as m}from"./zIndexSlice-Cwvky78x.js";import{L as s}from"./LineChart-D2mHRn83.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CMHOXWP-.js";import{X as l}from"./XAxis-DOtySNzv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-sMY3RlhH.js";import"./index-CNkBm-lM.js";import"./index-CM8NzWzV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CD_cqqva.js";import"./isWellBehavedNumber-CfD7xUgW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DoOmmi72.js";import"./index-BgE4sbhX.js";import"./index-CvpagMBh.js";import"./axisSelectors-D5ccOzPk.js";import"./d3-scale-DtIIfQy7.js";import"./renderedTicksSlice-BmzsuTjh.js";import"./CartesianChart-CcUm8bov.js";import"./chartDataContext-3T-WNdut.js";import"./CategoricalChart-O1QH-Owv.js";import"./Layer-DjRO5iA4.js";import"./Curve-a8euvDpU.js";import"./types-D2pCS11Q.js";import"./step-DTTmkP9p.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-9ERF5uBB.js";import"./Label-CwBi1oPN.js";import"./Text-DLEzBygV.js";import"./DOMUtils-DewFbXuK.js";import"./useBackwardsCompatibleTheme-CY8sdwmg.js";import"./ZIndexLayer-BiLuwpYl.js";import"./useAnimationId-C35lEnnz.js";import"./ActivePoints-CCBXRjBa.js";import"./Dot-DB8vVey7.js";import"./RegisterGraphicalItemId-AM6jbCCW.js";import"./ErrorBarContext-6qbGOpK0.js";import"./GraphicalItemClipPath-M1v6x7Pp.js";import"./SetGraphicalItem-Cz63GpQf.js";import"./getRadiusAndStrokeWidthFromDot-2t6d-1jI.js";import"./ActiveShapeUtils-CYWv9Vsk.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DLTPH4hp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
