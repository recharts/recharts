import{e}from"./iframe-DAZKVxz9.js";import{R as i}from"./arrayEqualityCheck-dPOQS8pO.js";import{C as p}from"./ComposedChart-DTJu-yAB.js";import{C as a}from"./CartesianGrid-B_MixTEO.js";import{X as n}from"./XAxis-DrBlWbCQ.js";import{Y as s}from"./YAxis-BKsd-W4f.js";import{L as c}from"./Line-CV7E2c22.js";import{R as d}from"./ReferenceLine-BQkOQut4.js";import{R as g}from"./RechartsHookInspector-B2Mat80Z.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Xx_SsgwN.js";import"./immer-4-TXwIq-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjWlMXU1.js";import"./index-D3IpfJcR.js";import"./hooks-Dot9B-8s.js";import"./axisSelectors-DztuZ7GM.js";import"./d3-scale-ChhyAw2W.js";import"./zIndexSlice-D3HE9JYU.js";import"./renderedTicksSlice-BvtRkGHb.js";import"./CartesianChart-CKg6csWi.js";import"./chartDataContext-DGYaAAtE.js";import"./CategoricalChart-DeG47lga.js";import"./CartesianAxis-B8h3nSA3.js";import"./Layer-B5mQaLs_.js";import"./Text-CNFMu9xe.js";import"./DOMUtils-Dpu0-rWt.js";import"./Label-DNW4k13o.js";import"./ZIndexLayer-CksZ3gAG.js";import"./types-4_oq0AJp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CccuW9N4.js";import"./ActivePoints-bxmGK7jd.js";import"./Dot-CM5RhIFl.js";import"./RegisterGraphicalItemId-NvV6Z6oD.js";import"./ErrorBarContext-baTIc42o.js";import"./GraphicalItemClipPath-Dp6p8o2v.js";import"./SetGraphicalItem-D9fO1f5d.js";import"./useAnimationId-Bfut_0eb.js";import"./getRadiusAndStrokeWidthFromDot-D5fiNOfX.js";import"./ActiveShapeUtils-CSU1QkFK.js";import"./isPlainObject-BF_n072g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-nMN8f2_i.js";import"./Trapezoid-DUbCLHLc.js";import"./Sector-DBc0T8Rp.js";import"./Symbols-D-cPayMS.js";import"./symbol-BHK6xqri.js";import"./step-DOJR22o0.js";import"./Curve-ZE8xv1Ny.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B6PIiwfp.js";import"./ChartSizeDimensions-BLB7KQxE.js";import"./OffsetShower-DvPblFBG.js";import"./PlotAreaShower-CQAhfZmY.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
