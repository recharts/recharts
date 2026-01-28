import{e as t}from"./iframe-C4IWMahh.js";import{R as s}from"./arrayEqualityCheck-0GnG-RUv.js";import{L as m}from"./LineChart-Cp0A7Rqc.js";import{L as c}from"./Line-4z32avHq.js";import{X as d}from"./XAxis-BngJLTZF.js";import{R as l}from"./RechartsHookInspector-CpFOwYB5.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DtgeT8pD.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-D1ed8gsV.js";import"./hooks-D4XFO7pe.js";import"./axisSelectors-BJBfabjw.js";import"./zIndexSlice-CIYOR3wZ.js";import"./CartesianChart-D8zP0xhX.js";import"./chartDataContext-kpLSUwh0.js";import"./CategoricalChart-DyuPf8cz.js";import"./Layer-CdQ-wzgp.js";import"./ReactUtils-DjwylJ1a.js";import"./Label-C0TeAK2L.js";import"./Text-TpjxoAAm.js";import"./DOMUtils-BgZ5XZxL.js";import"./ZIndexLayer-BJJTWLZI.js";import"./ActivePoints-uikp9xPQ.js";import"./Dot-B6v543Pb.js";import"./types-Dnr4tbcG.js";import"./RegisterGraphicalItemId-CADIBD7u.js";import"./ErrorBarContext-C2hEeIYE.js";import"./GraphicalItemClipPath-CTryCVIw.js";import"./SetGraphicalItem-Qx2BbNwy.js";import"./useAnimationId-DNnry8cr.js";import"./getRadiusAndStrokeWidthFromDot-DZBvYZ8u.js";import"./ActiveShapeUtils-Dhbc_DTR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-3bF21H.js";import"./Trapezoid-CRuG6j_-.js";import"./Sector-wIi7OYIA.js";import"./Symbols-BZom7IJQ.js";import"./Curve-DlsjNj4d.js";import"./CartesianAxis-DOkMNxmt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-aiWA5sXu.js";import"./ChartSizeDimensions-DBfcvr5j.js";import"./OffsetShower-CMENuWZ2.js";import"./PlotAreaShower-c29i0cb1.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
