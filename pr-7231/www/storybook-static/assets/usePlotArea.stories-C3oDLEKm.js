import{e as t}from"./iframe-ClXyKNgm.js";import{P as a}from"./PlotAreaShower-Ji8AleEw.js";import{c as p}from"./hooks-BkOTtN17.js";import{R as s}from"./arrayEqualityCheck-CyG4bWUs.js";import{C as n}from"./ComposedChart-GRruxady.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DczUaO1B.js";import{X as h}from"./XAxis-BLwhd0IJ.js";import{Y as c}from"./YAxis-CJcxVAZe.js";import{L as g}from"./Legend-BDxx4_Kv.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DpOcPLnw.js";import"./immer-CtYLZrTd.js";import"./axisSelectors-DQofLmtB.js";import"./d3-scale-PvLZ5v4V.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B-5xg8HJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-UQqzQ8rP.js";import"./index-CwEdYiZd.js";import"./zIndexSlice-Dm0UpM_Z.js";import"./renderedTicksSlice-BNvm7omS.js";import"./CartesianChart-DPC4KDkL.js";import"./chartDataContext-Bjc2K54y.js";import"./CategoricalChart-BKNmBDhd.js";import"./Layer-BeDFs85c.js";import"./ReactUtils-Dlva77EJ.js";import"./Label-YkL7q8Nt.js";import"./Text-o1n-qtV3.js";import"./DOMUtils-CHkqX7Ip.js";import"./ZIndexLayer-cavkLRXR.js";import"./ActivePoints-BtoLWo_Y.js";import"./Dot-CTW0FmYa.js";import"./types-C9EK63kj.js";import"./RegisterGraphicalItemId-BL_NupUm.js";import"./ErrorBarContext-PkrPZ9Kd.js";import"./GraphicalItemClipPath-DtnEohhM.js";import"./SetGraphicalItem-taT8ii8S.js";import"./useAnimationId-C8K-aL18.js";import"./getRadiusAndStrokeWidthFromDot-DuLFzzBx.js";import"./ActiveShapeUtils-BifvGgSB.js";import"./isPlainObject-B5RD0MRm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BAftZiAJ.js";import"./Trapezoid-BOXkO72-.js";import"./Sector-BWSYDmpz.js";import"./Symbols-BGqZ-C7G.js";import"./symbol-DPWTbt42.js";import"./step-hxAHDxbx.js";import"./Curve-gxNk9RQQ.js";import"./CartesianAxis-XpuqdPkr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D8EKn9F9.js";import"./uniqBy-DAnNh5o7.js";import"./iteratee-C5vdph3w.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
