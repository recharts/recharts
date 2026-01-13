import{e as t}from"./iframe-Cz5RPrzo.js";import{R as s}from"./arrayEqualityCheck-DuhA3hrU.js";import{L as m}from"./LineChart-DnRvq2Dx.js";import{L as c}from"./Line-pgE5fomn.js";import{X as d}from"./XAxis-Dad-gt40.js";import{R as l}from"./RechartsHookInspector-DP8xCOal.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-x0GM_Fqy.js";import"./PolarUtils-BqV0Lm0k.js";import"./RechartsWrapper-cu-FIaeq.js";import"./hooks-BM-KAHTV.js";import"./axisSelectors-B5q7pd7-.js";import"./zIndexSlice-CcJ--Fig.js";import"./CartesianChart-eteQYMRm.js";import"./chartDataContext-CuN30YAe.js";import"./CategoricalChart-LFVK4bCX.js";import"./Layer-CngTgEke.js";import"./ReactUtils-BQq-yyvu.js";import"./Label-XMPDelhI.js";import"./Text-BayrHrEj.js";import"./DOMUtils-m1R-l7fT.js";import"./ZIndexLayer-DopQY-kA.js";import"./ActivePoints-DbZXc6w0.js";import"./Dot-ChSBHykE.js";import"./types-D1v_Rc2a.js";import"./RegisterGraphicalItemId-B1o2SWmz.js";import"./ErrorBarContext-BeejT6aM.js";import"./GraphicalItemClipPath-apQ9eD6L.js";import"./SetGraphicalItem-BmMKLEXu.js";import"./useAnimationId-ifmUbYmC.js";import"./getRadiusAndStrokeWidthFromDot-BufAZu8L.js";import"./ActiveShapeUtils-D5xwOR7W.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2aKHHpL.js";import"./Trapezoid-CFJnjNBB.js";import"./Sector-D7vvH_6F.js";import"./Symbols-R3z9Gbft.js";import"./Curve-C0KXugLq.js";import"./CartesianAxis-D-RjJSot.js";import"./index-nSyYgmIS.js";import"./ChartSizeDimensions-BL9_hnvT.js";import"./OffsetShower-9oUxrKwL.js";import"./PlotAreaShower-CCuY3b1X.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
