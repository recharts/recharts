import{e as t}from"./iframe-Db4zTqbk.js";import{R as s}from"./arrayEqualityCheck-3CRW7fvn.js";import{L as m}from"./LineChart-C2dHvM0r.js";import{L as c}from"./Line-CQ-0i_va.js";import{X as d}from"./XAxis-2YmY08Fs.js";import{R as l}from"./RechartsHookInspector-CrEL5moc.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C9skBriC.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-FQCKz-X1.js";import"./hooks-ryz_uIK2.js";import"./axisSelectors-blz0ZUDW.js";import"./zIndexSlice-CrYwnyyD.js";import"./CartesianChart-YyNzumgC.js";import"./chartDataContext-C75QL-LK.js";import"./CategoricalChart-CqxC4z6s.js";import"./Layer-Cflbp2vf.js";import"./ReactUtils-OGo3X-P4.js";import"./Label-CqrigLpP.js";import"./Text-B-BVNWA6.js";import"./DOMUtils-CXvwiz2o.js";import"./ZIndexLayer-BUznzSNs.js";import"./ActivePoints-6rHP0Mli.js";import"./Dot-CXLbb6f5.js";import"./types-BTyyhFf_.js";import"./RegisterGraphicalItemId-Dl15i-mE.js";import"./ErrorBarContext-EfIpxhpK.js";import"./GraphicalItemClipPath-BZwY5GCl.js";import"./SetGraphicalItem-DZCf9fqS.js";import"./useAnimationId-CxVKnk1J.js";import"./getRadiusAndStrokeWidthFromDot-BNWRpCju.js";import"./ActiveShapeUtils-DuwLTnau.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C_uWIMPJ.js";import"./Trapezoid-m-4m64o7.js";import"./Sector-CU3fNncw.js";import"./Symbols-G_hIZhWd.js";import"./Curve-D50n1SBe.js";import"./CartesianAxis-CUgWXt_R.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-Bol23Ne6.js";import"./ChartSizeDimensions-CMbAaaLi.js";import"./OffsetShower-n4gU0hEx.js";import"./PlotAreaShower-Dgj_k8x2.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
