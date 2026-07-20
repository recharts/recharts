import{R as t}from"./iframe-rlLReeiH.js";import{R as m}from"./zIndexSlice-dET_x_8J.js";import{L as s}from"./LineChart-B7qTrTXd.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DYTHbSmy.js";import{X as l}from"./XAxis-BANsvQjN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-7RYQhcti.js";import"./index-CKdVYzDL.js";import"./index-Bbfl3u8C.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Df8vYP0G.js";import"./isWellBehavedNumber-BS7XWWNW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2Dg61vQO.js";import"./index-BOTGdiK-.js";import"./index-QXSF1qjq.js";import"./renderedTicksSlice-D5uSNu5L.js";import"./axisSelectors-RWAxTq2z.js";import"./d3-scale-kKXY2gAc.js";import"./CartesianChart-keWWrUD3.js";import"./chartDataContext-ylOfrWr_.js";import"./CategoricalChart-z2rCkgdR.js";import"./Layer-yUpNfqTk.js";import"./Curve-7HuuJXLM.js";import"./types-Dt7L5GFC.js";import"./step-C_7J8XoD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DR-XZCrI.js";import"./Label-D0R02xnC.js";import"./Text-Bv5QIM4O.js";import"./DOMUtils-DlxBAltB.js";import"./ZIndexLayer-s_cuGEJZ.js";import"./useAnimationId-Dx24Y47b.js";import"./ActivePoints-CnoLHeSd.js";import"./Dot-BHxvOKDj.js";import"./RegisterGraphicalItemId-CQs7WMwj.js";import"./ErrorBarContext-DLDAQNmT.js";import"./GraphicalItemClipPath-DSUy1vxD.js";import"./SetGraphicalItem-D7UC0AFj.js";import"./getRadiusAndStrokeWidthFromDot-Bxzf33Tp.js";import"./ActiveShapeUtils-BqK4gs0R.js";import"./CartesianAxis-DB3D7e8-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
