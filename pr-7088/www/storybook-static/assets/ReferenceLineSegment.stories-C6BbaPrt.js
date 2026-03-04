import{e}from"./iframe-BDLVz6Jf.js";import{R as i}from"./arrayEqualityCheck-CUwHcVyI.js";import{C as p}from"./ComposedChart-B8vrvgyV.js";import{C as a}from"./CartesianGrid-C_vcoOOS.js";import{X as n}from"./XAxis-rGGZujHk.js";import{Y as s}from"./YAxis-DhrJBh1G.js";import{L as c}from"./Line-89TDDsmY.js";import{R as d}from"./ReferenceLine-Bksx3xYM.js";import{R as g}from"./RechartsHookInspector-DdlV-82E.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAE8a2S7.js";import"./immer-D7ppHI2d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BNGXTKCd.js";import"./index-B5IfmkK5.js";import"./hooks-Ko0NVQx4.js";import"./axisSelectors-BoSmHer2.js";import"./d3-scale-DrvOhfRi.js";import"./zIndexSlice-Dba-j24Y.js";import"./renderedTicksSlice-DzYlWn1c.js";import"./CartesianChart-DHmZ3TGF.js";import"./chartDataContext-DTy_zcLY.js";import"./CategoricalChart-D0nQYz7Q.js";import"./CartesianAxis-DpZWUA10.js";import"./Layer-E90Uxi_N.js";import"./Text-Dnj_UFsP.js";import"./DOMUtils-C38zHxQe.js";import"./Label-BpAHaxyT.js";import"./ZIndexLayer-CeMtlwqL.js";import"./types-eu_lG70M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Z_uY6BWT.js";import"./ActivePoints-YBAJTo47.js";import"./Dot-ed0ZAtVZ.js";import"./RegisterGraphicalItemId-DgsZoNJO.js";import"./ErrorBarContext-CHqnPMdC.js";import"./GraphicalItemClipPath-52erAg5v.js";import"./SetGraphicalItem-D-MDoVx7.js";import"./useAnimationId-DiGR44lM.js";import"./getRadiusAndStrokeWidthFromDot-gJJ60q-F.js";import"./ActiveShapeUtils-1odowpJ3.js";import"./isPlainObject-D6WBWEYO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MA5abZlf.js";import"./Trapezoid-B0zvPW8H.js";import"./Sector-Bzk7xgyA.js";import"./Symbols-UHZicULa.js";import"./symbol-DWU8_PrF.js";import"./step-BVw-sImN.js";import"./Curve-BkotQ_Ul.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B1g-GKPY.js";import"./ChartSizeDimensions-Cz26FwCM.js";import"./OffsetShower-Dsw4B39y.js";import"./PlotAreaShower-BsznV7xN.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
