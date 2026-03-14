import{e as t}from"./iframe-B0wKxNpK.js";import{R as n}from"./arrayEqualityCheck-5nuhtSeT.js";import{L as s}from"./LineChart-Brahxgvc.js";import{L as c}from"./Line-DOcSrsPt.js";import{X as d}from"./XAxis-y_MJiFx9.js";import{R as l}from"./RechartsHookInspector-DYn9zJB9.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CIdIqjjC.js";import"./immer-DUb1bWtb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CrtUXLbx.js";import"./index-Cnz4_p8Q.js";import"./hooks-oSTNajEI.js";import"./axisSelectors-C1uueI6X.js";import"./d3-scale-CQFM5VB3.js";import"./zIndexSlice-BcKpuoZl.js";import"./renderedTicksSlice-dfIm6fl5.js";import"./CartesianChart-CLpt04B_.js";import"./chartDataContext-CfWR9eN6.js";import"./CategoricalChart-DBWdCLL2.js";import"./Layer-DSIwel9q.js";import"./ReactUtils-sKOkm0_2.js";import"./Label-BdkcMQDU.js";import"./Text-DlBKXZA-.js";import"./DOMUtils-CSAF-8sx.js";import"./ZIndexLayer-70VD5Z7C.js";import"./ActivePoints-BSvrQoGF.js";import"./Dot-DXpreqzJ.js";import"./types-CYNiifb0.js";import"./RegisterGraphicalItemId-CDkf5IwF.js";import"./ErrorBarContext-B1oYf-9A.js";import"./GraphicalItemClipPath-BCjuGXXY.js";import"./SetGraphicalItem-Be0sJCS3.js";import"./useAnimationId-BdZ_5XMP.js";import"./getRadiusAndStrokeWidthFromDot-C3Mll_Mr.js";import"./ActiveShapeUtils-D6gjATQs.js";import"./isPlainObject-CDFz0xXj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLIXCh-E.js";import"./Trapezoid-DtGJqYre.js";import"./Sector-CjeW4NDg.js";import"./Symbols-D24cFx-Z.js";import"./symbol-CrLzL-Wg.js";import"./step-CkYKWKxI.js";import"./Curve-DiJIjJff.js";import"./CartesianAxis-BqdAX1QZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CyRoQl_d.js";import"./ChartSizeDimensions-Bu6AufwQ.js";import"./OffsetShower-Crn6XKfz.js";import"./PlotAreaShower-YsEXXYRG.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
