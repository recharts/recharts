import{e}from"./iframe-DRzfceQj.js";import{R as i}from"./arrayEqualityCheck-rosVEDiH.js";import{C as p}from"./ComposedChart-cRVCNOzO.js";import{C as a}from"./CartesianGrid-Bod_OhoR.js";import{X as n}from"./XAxis-sc_rEheo.js";import{Y as s}from"./YAxis-BpCe0zSN.js";import{L as c}from"./Line-CrboDBA_.js";import{R as d}from"./ReferenceLine-DswuOvat.js";import{R as g}from"./RechartsHookInspector-iKfkRHZC.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Yo3rtldJ.js";import"./immer-CpErEFQU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cr19GrQC.js";import"./index-DhdVzYen.js";import"./hooks-BGhayb2I.js";import"./axisSelectors-KcSamBS9.js";import"./d3-scale-DMFBv7ef.js";import"./zIndexSlice-DFfzt0na.js";import"./renderedTicksSlice-WbT8TKLW.js";import"./CartesianChart-BpAHu02o.js";import"./chartDataContext-uibfkBE8.js";import"./CategoricalChart-BFsoF5NC.js";import"./CartesianAxis-BV4F2Vv5.js";import"./Layer-sUtHTMZe.js";import"./Text-5VoS0hOZ.js";import"./DOMUtils-D7MRyEG_.js";import"./Label-CCBnxLca.js";import"./ZIndexLayer-rLB6bkwI.js";import"./types-BIqkUGja.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BLIIVErJ.js";import"./ActivePoints-CuDefpBg.js";import"./Dot-Dx5TMf-G.js";import"./RegisterGraphicalItemId-CA-NkALt.js";import"./ErrorBarContext-CVJ7HQM6.js";import"./GraphicalItemClipPath-C-4x0c47.js";import"./SetGraphicalItem-DmvCdKvK.js";import"./useAnimationId-B4oBcBYL.js";import"./getRadiusAndStrokeWidthFromDot-geV46oeC.js";import"./ActiveShapeUtils-sMNt0TF2.js";import"./isPlainObject-8xjKwYHh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CbvKmtU7.js";import"./Trapezoid-DfLXoIUq.js";import"./Sector-BA0kpTkH.js";import"./Symbols-DyXfCvIa.js";import"./symbol-CU4mK3u6.js";import"./step-vYfigx3D.js";import"./Curve-BAw1ZqwZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DKayDJ64.js";import"./ChartSizeDimensions-BcANsdLL.js";import"./OffsetShower-MalEY5Hj.js";import"./PlotAreaShower-BKiBhzbZ.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
