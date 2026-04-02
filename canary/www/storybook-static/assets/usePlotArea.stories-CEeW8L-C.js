import{e as t}from"./iframe-C9RdRDH3.js";import{P as a}from"./PlotAreaShower-DbkHyMR-.js";import{c as p}from"./hooks-wHvHG3dE.js";import{R as s}from"./arrayEqualityCheck-HNNWYF-c.js";import{C as n}from"./ComposedChart-CznI7Qr9.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-hOd9fGN2.js";import{X as h}from"./XAxis-zBRK63wF.js";import{Y as c}from"./YAxis-JD4R_vdV.js";import{L as g}from"./Legend-DIEi59UA.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BfBAtZfD.js";import"./immer-Bs-9thuH.js";import"./axisSelectors-D6QzvLNM.js";import"./d3-scale-C5VHC7vJ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cmmY0qvO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BmF3qkQ2.js";import"./index-DVhUM6Av.js";import"./zIndexSlice-BbsfkO0E.js";import"./renderedTicksSlice-BEDhfrBW.js";import"./CartesianChart-CdaihLfO.js";import"./chartDataContext-BYUFQouT.js";import"./CategoricalChart-DNwSkE9v.js";import"./Layer-Br4TNC_V.js";import"./ReactUtils-BodNcXDX.js";import"./Label-nmn7wUcC.js";import"./Text-wGfDkrTn.js";import"./DOMUtils-Btd4Fsjb.js";import"./ZIndexLayer-BHSqW2ug.js";import"./ActivePoints-DehllWrE.js";import"./Dot-D09_z6XC.js";import"./types-zOKv99jr.js";import"./RegisterGraphicalItemId-lJJ2Llx7.js";import"./ErrorBarContext-Df_rxzkL.js";import"./GraphicalItemClipPath-BaxGUmwM.js";import"./SetGraphicalItem-OEoYsD-F.js";import"./useAnimationId-Dkvf8CAV.js";import"./getRadiusAndStrokeWidthFromDot-B5vJvzV2.js";import"./ActiveShapeUtils-CdfDZypJ.js";import"./isPlainObject-BkahSEKD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D2WqxHR4.js";import"./Trapezoid-CaO4Za9k.js";import"./Sector-Dlz-xsu0.js";import"./Symbols-D5iKcEZY.js";import"./symbol-B9BxRARk.js";import"./step-By0pLWNs.js";import"./Curve-j2GFynBi.js";import"./CartesianAxis-B-LYb471.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-1-iEdSlv.js";import"./uniqBy-Ctz7O3Q0.js";import"./iteratee-CqWD3rtL.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
