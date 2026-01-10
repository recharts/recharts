import{e}from"./iframe-DFbc2wnk.js";import{R as i}from"./arrayEqualityCheck-DNx-7st0.js";import{C as a}from"./ComposedChart-b5llXj5F.js";import{C as p}from"./CartesianGrid-yYQlEY0W.js";import{X as n}from"./XAxis-DGAvxfHG.js";import{Y as s}from"./YAxis-BmkMcK7A.js";import{L as c}from"./Line-CeZSySXS.js";import{R as d}from"./ReferenceLine-B1cKkgiJ.js";import{R as g}from"./RechartsHookInspector-BArVV55G.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ClO_iFbZ.js";import"./PolarUtils-BDvNNmDF.js";import"./RechartsWrapper-PvLVQTSN.js";import"./hooks-zOgLtc1N.js";import"./axisSelectors-BtV4vldP.js";import"./zIndexSlice-DhoG6ae-.js";import"./CartesianChart-DAIV8Ndc.js";import"./chartDataContext-Coc1sgsX.js";import"./CategoricalChart-UkGGk_Hv.js";import"./CartesianAxis-C9Id4cvu.js";import"./Layer-qN8dyvlM.js";import"./Text-DCmcV5md.js";import"./DOMUtils-Bie9vKOH.js";import"./Label-CS9yD1bY.js";import"./ZIndexLayer-DxPlI_9c.js";import"./types-CdWStgLs.js";import"./ReactUtils-BJsLkXPe.js";import"./ActivePoints-BIgMZJDi.js";import"./Dot-DRgklH7x.js";import"./RegisterGraphicalItemId-BFMXufyl.js";import"./ErrorBarContext-DSr7txyg.js";import"./GraphicalItemClipPath-Dc38YvNS.js";import"./SetGraphicalItem-DlUa5gp3.js";import"./useAnimationId-B9C_B4hh.js";import"./getRadiusAndStrokeWidthFromDot-oEQcqU2-.js";import"./ActiveShapeUtils-BSQcxVua.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-tz9WvN-g.js";import"./Trapezoid-CRho5hrx.js";import"./Sector-BE1YiTfv.js";import"./Symbols--iTzKkzh.js";import"./Curve-CTbZZW_i.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DEbDUIbN.js";import"./ChartSizeDimensions-BvKst1DG.js";import"./OffsetShower-BMIsB7Uf.js";import"./PlotAreaShower-CrjZWfAt.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
