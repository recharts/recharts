import{e as t}from"./iframe-B8YYEd9G.js";import{R as s}from"./arrayEqualityCheck-BJSPs_LU.js";import{L as m}from"./LineChart-Cg0B8JYq.js";import{L as c}from"./Line-y7KrniF9.js";import{X as d}from"./XAxis-Dznlbswx.js";import{R as l}from"./RechartsHookInspector-C0QywKAE.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Css_XkGu.js";import"./PolarUtils-DYWzGjDu.js";import"./RechartsWrapper-pZyt8ABU.js";import"./hooks-CoDkm5OR.js";import"./axisSelectors-DqEy3XQD.js";import"./zIndexSlice-BLNkJo_X.js";import"./CartesianChart-DBZcJX6H.js";import"./chartDataContext-D4iCOjmy.js";import"./CategoricalChart-DO0H3PuU.js";import"./Layer-ChuaoeIg.js";import"./ReactUtils-DfY637Lx.js";import"./Label-XqAMTaA_.js";import"./Text-DUM-8xR_.js";import"./DOMUtils-C8hDQeGd.js";import"./ZIndexLayer-DX8lEGHQ.js";import"./ActivePoints-Bd5JoJfn.js";import"./Dot-DPdeHNxG.js";import"./types-CnVGCqEL.js";import"./RegisterGraphicalItemId-CVcSXCce.js";import"./ErrorBarContext-TR9hiCFQ.js";import"./GraphicalItemClipPath-q0Itpwcd.js";import"./SetGraphicalItem-B4U1VyG2.js";import"./useAnimationId-pnmN_K1g.js";import"./getRadiusAndStrokeWidthFromDot-DM4Yrxyr.js";import"./ActiveShapeUtils-DiiELvjB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-1iaHX5tZ.js";import"./Trapezoid-C7ogOYif.js";import"./Sector-BNyMoo46.js";import"./Symbols-jZ2_n1nU.js";import"./Curve-B-G6e6PZ.js";import"./CartesianAxis-BAmncUEg.js";import"./index-C4mlw0NF.js";import"./ChartSizeDimensions-BeS7eDbq.js";import"./OffsetShower-mhU6p0_K.js";import"./PlotAreaShower-Br2_XSTr.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
