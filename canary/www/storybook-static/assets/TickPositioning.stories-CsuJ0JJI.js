import{e as t}from"./iframe-Dke1PXsj.js";import{R as s}from"./arrayEqualityCheck-DYUGm-S-.js";import{L as m}from"./LineChart-CK5wfzL4.js";import{L as c}from"./Line-BUK5Np1E.js";import{X as d}from"./XAxis-A5wiYRJ2.js";import{R as l}from"./RechartsHookInspector-DESYImpk.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D9EPHdLe.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-Dr-F8YT1.js";import"./hooks-DCQ9wQGY.js";import"./axisSelectors-Ck1fvBYL.js";import"./zIndexSlice-CdkZF_KN.js";import"./CartesianChart-Db_LpN91.js";import"./chartDataContext-DpjwG2mb.js";import"./CategoricalChart-B37YLYot.js";import"./Layer-B0EXSY1R.js";import"./ReactUtils-BSYO7pn7.js";import"./Label-BJpGMmXt.js";import"./Text-CbLXC33T.js";import"./DOMUtils-DWpZ1fz3.js";import"./ZIndexLayer-Dd-3eNlO.js";import"./ActivePoints-DYWx7XLw.js";import"./Dot-D-awbIR4.js";import"./types-DDM_Xxay.js";import"./RegisterGraphicalItemId-BcZQiTRu.js";import"./ErrorBarContext-Bd_5n0Q0.js";import"./GraphicalItemClipPath-DAk4z-8q.js";import"./SetGraphicalItem-tvSnb31d.js";import"./useAnimationId-CaTohdQl.js";import"./getRadiusAndStrokeWidthFromDot-D9qqWM8m.js";import"./ActiveShapeUtils-CVSjVyuV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Be-yypRZ.js";import"./Trapezoid-Cffcn2bg.js";import"./Sector-DEw-Ho6t.js";import"./Symbols-BgJQYoix.js";import"./Curve-DAvXUCHx.js";import"./CartesianAxis-DELVukVs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CL0r-bPV.js";import"./ChartSizeDimensions-GFw4Kaqh.js";import"./OffsetShower-l-ss4yV0.js";import"./PlotAreaShower-D_tFdLxx.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
