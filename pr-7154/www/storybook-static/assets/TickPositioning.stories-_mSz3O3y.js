import{e as t}from"./iframe-DsUMSIoB.js";import{R as n}from"./arrayEqualityCheck-CZsQnfge.js";import{L as s}from"./LineChart-ByHPdVaM.js";import{L as c}from"./Line-CB6y22ET.js";import{X as d}from"./XAxis-BzmMsMrb.js";import{R as l}from"./RechartsHookInspector-DFkKDQjz.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dxu6XJ62.js";import"./immer-D_NmV9ya.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mUXPQGkR.js";import"./index-BFxM37Jd.js";import"./hooks-VVLooFbP.js";import"./axisSelectors-BtEB30-b.js";import"./d3-scale-B0RJDOHU.js";import"./zIndexSlice-BDZOwce-.js";import"./renderedTicksSlice-TGaTZgu3.js";import"./CartesianChart-Duzb9tyy.js";import"./chartDataContext-DJEsKFHL.js";import"./CategoricalChart-LslF1x-i.js";import"./Layer-CW99gOx_.js";import"./ReactUtils-BqswSBIq.js";import"./Label-DJgqAx1l.js";import"./Text-DgusKYHb.js";import"./DOMUtils-ByvJp_q1.js";import"./ZIndexLayer-tLtAagmx.js";import"./ActivePoints-CHYb11Tn.js";import"./Dot-D-uZOgZW.js";import"./types-DN9VSCi_.js";import"./RegisterGraphicalItemId-BclML1JJ.js";import"./ErrorBarContext-DPQTg4jn.js";import"./GraphicalItemClipPath-CgRDa1Kp.js";import"./SetGraphicalItem-k0XQScGi.js";import"./useAnimationId-DmBkD_4u.js";import"./getRadiusAndStrokeWidthFromDot-DpPgV3ut.js";import"./ActiveShapeUtils-Dj4smYQ8.js";import"./isPlainObject-DFvEMqvd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIwirMVx.js";import"./Trapezoid-tpniWtB4.js";import"./Sector-pL7nB78h.js";import"./Symbols-BAzW_gm6.js";import"./symbol-DKO9W9xf.js";import"./step-eBA07Zoi.js";import"./Curve-BkdTmnon.js";import"./CartesianAxis-CoMq3-ST.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CfUCN5Mt.js";import"./ChartSizeDimensions-CcoGZBL4.js";import"./OffsetShower-BdILJQRM.js";import"./PlotAreaShower-DssL7f_B.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ht=["TickPositioning"];export{r as TickPositioning,ht as __namedExportsOrder,vt as default};
