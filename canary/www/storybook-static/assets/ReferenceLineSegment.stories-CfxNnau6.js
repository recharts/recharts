import{e}from"./iframe-DnKPxY7a.js";import{R as i}from"./arrayEqualityCheck-BRLe4SS-.js";import{C as p}from"./ComposedChart-CHH2nWqC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BUMSM3nv.js";import{X as s}from"./XAxis-BAn9u7ZP.js";import{Y as c}from"./YAxis-RGcfB1__.js";import{L as d}from"./Line-Bh8WdYsJ.js";import{R as g}from"./ReferenceLine-D3c647T7.js";import{R as f}from"./RechartsHookInspector-C1a5f-X8.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DOqUyIeg.js";import"./immer-D9hLCfsI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-nQtYlSir.js";import"./index-CC8a_PKZ.js";import"./hooks-DeeMtons.js";import"./axisSelectors-BXdD8PxV.js";import"./d3-scale-C2xqHqad.js";import"./zIndexSlice-KD1BDYTU.js";import"./renderedTicksSlice-CFEn4_Md.js";import"./CartesianChart-Coa75cqV.js";import"./chartDataContext-CJJd-wkg.js";import"./CategoricalChart-hpH9n4Dg.js";import"./CartesianAxis-BuD04Hve.js";import"./Layer-DeK52Cv4.js";import"./Text-CqYxA_ST.js";import"./DOMUtils-0c6Z1U3w.js";import"./Label-75Lwdv3P.js";import"./ZIndexLayer-BFRrJfPa.js";import"./types-CYYN-QxE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-4peIRB2B.js";import"./ActivePoints-DbUAoEhp.js";import"./Dot-CNgvsTba.js";import"./RegisterGraphicalItemId-DwM7Te_7.js";import"./ErrorBarContext-DIOAcn2L.js";import"./GraphicalItemClipPath-DAZ9bgmo.js";import"./SetGraphicalItem-BlPK52Q_.js";import"./useAnimationId-DEpRCopS.js";import"./getRadiusAndStrokeWidthFromDot-C1w0XMVH.js";import"./ActiveShapeUtils-CgK_A1V3.js";import"./isPlainObject-DfAQHXtw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-y2LFFHGo.js";import"./Trapezoid-DNxvKaBL.js";import"./Sector-CnwcOah-.js";import"./Symbols-KdBGH5vz.js";import"./symbol-CiognWkM.js";import"./step-xT0L5jQX.js";import"./Curve-Dkc-iOzw.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CdavTI8c.js";import"./ChartSizeDimensions-CY_4B8hK.js";import"./OffsetShower-BXqoFf7d.js";import"./PlotAreaShower-CJTPHZ_L.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
