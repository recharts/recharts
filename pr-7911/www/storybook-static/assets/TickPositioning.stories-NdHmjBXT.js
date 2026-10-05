import{R as t}from"./iframe-DM7I_Yyj.js";import{R as m}from"./zIndexSlice-fCEc0s5F.js";import{L as s}from"./LineChart-PZ-nrNBh.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BuB5QTku.js";import{X as l}from"./XAxis-C9bS5ZnW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D9z--FMJ.js";import"./index-tOsCsIz0.js";import"./index-BSGAosA0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-juvHZLkB.js";import"./isWellBehavedNumber-CD6T6Jdg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8avap2Ow.js";import"./axisSelectors-C4a64MXg.js";import"./d3-scale-BeCTSUmZ.js";import"./index-BPHh1qic.js";import"./index-CtbzcRhJ.js";import"./renderedTicksSlice-D73l8EHs.js";import"./index-1HyAGRae.js";import"./CartesianChart-BtvlbeE8.js";import"./chartDataContext-Bv5z90Vo.js";import"./CategoricalChart-DChxHazb.js";import"./Layer-BuDBFoKe.js";import"./Curve-DCsdrtWm.js";import"./types-C2i2rvmz.js";import"./step-BWu1v0QN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bps8ucZ8.js";import"./Label-D7T4Ye9K.js";import"./Text-BHb-71ue.js";import"./DOMUtils-x3LNgLWi.js";import"./useId-Cqy_j9lJ.js";import"./useBackwardsCompatibleTheme-ZcFSMvkr.js";import"./ZIndexLayer-DKb6XHFw.js";import"./useAnimationId-ByMoBfgF.js";import"./ActivePoints-6ohdy_Z2.js";import"./Dot-C28FoeNl.js";import"./RegisterGraphicalItemId-CHv-hOW4.js";import"./ErrorBarContext-u65-Bu8d.js";import"./GraphicalItemClipPath-ByPtBGRG.js";import"./SetGraphicalItem-BuE0ytWh.js";import"./getRadiusAndStrokeWidthFromDot-Bx2TZeXM.js";import"./ActiveShapeUtils-C8wHq7T4.js";import"./useGraphicalItemIdentity-w6WnNdhF.js";import"./CartesianAxis-CnfqwB17.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
