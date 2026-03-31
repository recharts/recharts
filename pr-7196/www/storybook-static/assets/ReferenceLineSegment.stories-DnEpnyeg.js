import{e}from"./iframe-BOzdYMSK.js";import{R as i}from"./arrayEqualityCheck-C-L8EdU9.js";import{C as p}from"./ComposedChart-CMGQFiN-.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-EB-7kOGj.js";import{X as s}from"./XAxis-BCEpc3K6.js";import{Y as c}from"./YAxis-FsZJz6tV.js";import{L as d}from"./Line-CMTElOTG.js";import{R as g}from"./ReferenceLine-2tb-B-gI.js";import{R as f}from"./RechartsHookInspector-BxQ7npCV.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2gE7AyU9.js";import"./immer-BswUgWWB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BKlBI8B-.js";import"./index-DlDmkRAf.js";import"./hooks-DABVmJA-.js";import"./axisSelectors-D0SqUNzA.js";import"./d3-scale-BLmRkdBI.js";import"./zIndexSlice-C7XasEZZ.js";import"./renderedTicksSlice-Br0n-FAv.js";import"./CartesianChart-CYCDZmDe.js";import"./chartDataContext-CLnWO5Qo.js";import"./CategoricalChart-DnUtLsS8.js";import"./CartesianAxis-CvCr5PgT.js";import"./Layer-B9qQTSv5.js";import"./Text-BrQPjMdx.js";import"./DOMUtils-BtSYpCvp.js";import"./Label-Dx_BRROg.js";import"./ZIndexLayer-DSuS-vq3.js";import"./types-o0ZEOggY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B7_pPpqU.js";import"./ActivePoints-pX3DuQoW.js";import"./Dot-B9xnb9v8.js";import"./RegisterGraphicalItemId-BExwrCQG.js";import"./ErrorBarContext-Bo7z398t.js";import"./GraphicalItemClipPath-CABkDL1Y.js";import"./SetGraphicalItem-CvulM7lS.js";import"./useAnimationId-DdiGbGls.js";import"./getRadiusAndStrokeWidthFromDot-DHr5ycqw.js";import"./ActiveShapeUtils-DtwM1IUK.js";import"./isPlainObject-ugbSTU2W.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7iw7enh.js";import"./Trapezoid-BZWxKB8U.js";import"./Sector-O1WOLqS-.js";import"./Symbols-CMXu8a67.js";import"./symbol-BCO6WfvA.js";import"./step-C508TLAF.js";import"./Curve-BClDVh5D.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DozVodwh.js";import"./ChartSizeDimensions-DfVhVyBn.js";import"./OffsetShower-Cv0VvbUT.js";import"./PlotAreaShower-DAwEQHde.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
