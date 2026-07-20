import{R as t}from"./iframe-BUBMop56.js";import{R as m}from"./zIndexSlice-BFOCeNjP.js";import{L as s}from"./LineChart-DlLskTlf.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-ChQucypc.js";import{X as l}from"./XAxis-Beu0D676.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D75nL504.js";import"./index-CySDvqVz.js";import"./index-CgGvCayo.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-C_KdVhp0.js";import"./isWellBehavedNumber-CCPoxx8d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DIZMbcTA.js";import"./index-D9WH3_pB.js";import"./index-CYnUHsqF.js";import"./renderedTicksSlice-BpqvL_BB.js";import"./axisSelectors-CCSlXmRc.js";import"./d3-scale-BKS6cnWE.js";import"./CartesianChart-BmaucleZ.js";import"./chartDataContext-BpFZdk1W.js";import"./CategoricalChart-a6ycapdr.js";import"./Layer-CEgjWxAQ.js";import"./Curve-B8ZzY9nf.js";import"./types-CIINUjJb.js";import"./step-nlwLlUk8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-T6oPSFaY.js";import"./Label-C8PySNEK.js";import"./Text-DL-t9yLw.js";import"./DOMUtils-Bej4Btff.js";import"./ZIndexLayer-BKbyZAtu.js";import"./useAnimationId-BjgoYA5x.js";import"./ActivePoints-DFwLh6HZ.js";import"./Dot-3ZhUHudT.js";import"./RegisterGraphicalItemId-BChVYVcH.js";import"./ErrorBarContext-D15ZYdOL.js";import"./GraphicalItemClipPath-0CoE9plv.js";import"./SetGraphicalItem-DM6DkeHR.js";import"./getRadiusAndStrokeWidthFromDot-BMrKZbwO.js";import"./ActiveShapeUtils-Dow-vWc_.js";import"./CartesianAxis-DqkvNHf2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
