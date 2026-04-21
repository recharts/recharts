import{e}from"./iframe-Bcfp4gz2.js";import{R as i}from"./arrayEqualityCheck-C7nhyHTD.js";import{C as p}from"./ComposedChart-Dd-O_a-n.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BqOAHNSB.js";import{X as s}from"./XAxis-vG8PL4e8.js";import{Y as c}from"./YAxis-B-SMb25K.js";import{L as d}from"./Line-uj957uT5.js";import{R as g}from"./ReferenceLine-D6kW6pwM.js";import{R as f}from"./RechartsHookInspector-BszpLvid.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BFYcbhKc.js";import"./immer-BOB4YBM5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-oIgYQ0Bc.js";import"./index-DWGu8Hbo.js";import"./hooks-BDG_pI4i.js";import"./axisSelectors-m2hcYKPS.js";import"./d3-scale-asomCCUw.js";import"./zIndexSlice-B4mf_ahs.js";import"./renderedTicksSlice-DoKS3HBz.js";import"./CartesianChart-DUoDAX5X.js";import"./chartDataContext-DRkSLvZO.js";import"./CategoricalChart-DMKrtdHX.js";import"./CartesianAxis-BD2FdChl.js";import"./Layer-dm3uY3ni.js";import"./Text-BwYljqkd.js";import"./DOMUtils-LPbE6vOu.js";import"./Label-CPi3yA0f.js";import"./ZIndexLayer-CN_pcG12.js";import"./types-CW3aex39.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CDQ4T4jj.js";import"./ActivePoints-BTuMGVKf.js";import"./Dot-CTGPVd-d.js";import"./RegisterGraphicalItemId-CieNk-m4.js";import"./ErrorBarContext-DI9yyOgU.js";import"./GraphicalItemClipPath-DfLgheiY.js";import"./SetGraphicalItem-Brvtr_jy.js";import"./useAnimationId-DPbHG1Kj.js";import"./getRadiusAndStrokeWidthFromDot-DetK7hqo.js";import"./ActiveShapeUtils-CMXUA0Jt.js";import"./isPlainObject-Bh7-lls7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cckl3Elf.js";import"./Trapezoid-BX_HaGLv.js";import"./Sector-B02xc5N3.js";import"./Symbols-CWxW6NbL.js";import"./symbol-Blzy8oY_.js";import"./step-B9DAnMjl.js";import"./Curve-t8yIlp7a.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CTn1De8H.js";import"./ChartSizeDimensions-BtWRNYOc.js";import"./OffsetShower-BUjaH3s6.js";import"./PlotAreaShower-B0TzAHKQ.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
