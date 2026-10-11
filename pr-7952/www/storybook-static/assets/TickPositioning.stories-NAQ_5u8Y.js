import{R as t}from"./iframe-DIGZheBd.js";import{R as m}from"./zIndexSlice-_cU-ODvm.js";import{L as s}from"./LineChart-C3MIainG.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-sf0r7qgd.js";import{X as l}from"./XAxis-JeVlcNJo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BSuBUnwb.js";import"./index-d4xmlami.js";import"./index-Ddn_7QMu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-7SQuNWZq.js";import"./isWellBehavedNumber-DN4lRp81.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZtBBFTk.js";import"./axisSelectors-D8SOTwsy.js";import"./d3-scale-DdurYsOp.js";import"./index-CQhVaGTX.js";import"./index-DhWUPbJL.js";import"./renderedTicksSlice-v8ZBDgTH.js";import"./index-CiMP-PEk.js";import"./CartesianChart-qIKAIThb.js";import"./chartDataContext-F14SePCT.js";import"./CategoricalChart-CmpWafRJ.js";import"./Layer-CyJKyehG.js";import"./Curve-DTsvKbrn.js";import"./types-MK9UFfTC.js";import"./step-DnA-tUNV.js";import"./path-DyVhHtw_.js";import"./activeStyles-BNdVOgR8.js";import"./Label-DdnBRnzY.js";import"./Text-OwXAxNhC.js";import"./pageBackground-CxPMNoKP.js";import"./useId-C_XdBO39.js";import"./useBackwardsCompatibleTheme-CVHM2al0.js";import"./ZIndexLayer-Csfe5z3g.js";import"./useAnimationId-ddL2Z7oo.js";import"./dataEntryStyles-B4e5hdgG.js";import"./ActivePoints-DCRcJ-JV.js";import"./Dot-Dr6-XXth.js";import"./ErrorBarContext-Bx6RRNyu.js";import"./GraphicalItemClipPath-DV_97DBL.js";import"./SetGraphicalItem-BLdBkmkm.js";import"./getRadiusAndStrokeWidthFromDot-CEhKuZ-K.js";import"./ActiveShapeUtils-Cn4dsa1I.js";import"./useEffectiveDataKey-DDZKQvTb.js";import"./CartesianAxis--bh-_8od.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
