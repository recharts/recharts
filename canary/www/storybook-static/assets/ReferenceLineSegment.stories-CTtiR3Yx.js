import{e}from"./iframe-C9RdRDH3.js";import{R as i}from"./arrayEqualityCheck-HNNWYF-c.js";import{C as p}from"./ComposedChart-CznI7Qr9.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-lcSY4Olk.js";import{X as s}from"./XAxis-zBRK63wF.js";import{Y as c}from"./YAxis-JD4R_vdV.js";import{L as d}from"./Line-hOd9fGN2.js";import{R as g}from"./ReferenceLine-C5pkViR6.js";import{R as f}from"./RechartsHookInspector-CTsDIORN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cmmY0qvO.js";import"./immer-Bs-9thuH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BmF3qkQ2.js";import"./index-DVhUM6Av.js";import"./hooks-wHvHG3dE.js";import"./axisSelectors-D6QzvLNM.js";import"./d3-scale-C5VHC7vJ.js";import"./zIndexSlice-BbsfkO0E.js";import"./renderedTicksSlice-BEDhfrBW.js";import"./CartesianChart-CdaihLfO.js";import"./chartDataContext-BYUFQouT.js";import"./CategoricalChart-DNwSkE9v.js";import"./CartesianAxis-B-LYb471.js";import"./Layer-Br4TNC_V.js";import"./Text-wGfDkrTn.js";import"./DOMUtils-Btd4Fsjb.js";import"./Label-nmn7wUcC.js";import"./ZIndexLayer-BHSqW2ug.js";import"./types-zOKv99jr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BodNcXDX.js";import"./ActivePoints-DehllWrE.js";import"./Dot-D09_z6XC.js";import"./RegisterGraphicalItemId-lJJ2Llx7.js";import"./ErrorBarContext-Df_rxzkL.js";import"./GraphicalItemClipPath-BaxGUmwM.js";import"./SetGraphicalItem-OEoYsD-F.js";import"./useAnimationId-Dkvf8CAV.js";import"./getRadiusAndStrokeWidthFromDot-B5vJvzV2.js";import"./ActiveShapeUtils-CdfDZypJ.js";import"./isPlainObject-BkahSEKD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D2WqxHR4.js";import"./Trapezoid-CaO4Za9k.js";import"./Sector-Dlz-xsu0.js";import"./Symbols-D5iKcEZY.js";import"./symbol-B9BxRARk.js";import"./step-By0pLWNs.js";import"./Curve-j2GFynBi.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-iNo1MV8G.js";import"./ChartSizeDimensions-BfBAtZfD.js";import"./OffsetShower-DGVkIb09.js";import"./PlotAreaShower-DbkHyMR-.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
