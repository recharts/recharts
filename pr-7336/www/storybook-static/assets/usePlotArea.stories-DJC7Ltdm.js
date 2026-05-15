import{e as t}from"./iframe-C_AsYugi.js";import{P as a}from"./PlotAreaShower-CMsAoFdB.js";import{c as p}from"./hooks-DRvuAM61.js";import{R as s}from"./arrayEqualityCheck-xvllERIt.js";import{C as n}from"./ComposedChart-cY0MWVeZ.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-QUZhKIKJ.js";import{X as h}from"./XAxis-DH_rN-kM.js";import{Y as c}from"./YAxis-gzpn2USg.js";import{L as g}from"./Legend-CiVde6Tb.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-Dh66BsMo.js";import"./immer-BPZQF6xW.js";import"./axisSelectors-D6N9K5pJ.js";import"./d3-scale-bPIVgrq4.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CerPTbDf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0wr5dja.js";import"./index-DBNDbbEj.js";import"./zIndexSlice-CVos1qNt.js";import"./renderedTicksSlice-CULSuwf6.js";import"./CartesianChart-Bf-pcG1N.js";import"./chartDataContext-DxmOKRxG.js";import"./CategoricalChart-C3pZv0iV.js";import"./Layer-Dz5BSX-y.js";import"./ReactUtils-BIcQ9LuG.js";import"./Label-Ck2nWAbG.js";import"./Text-CQ7cV61I.js";import"./DOMUtils-BnflEJNu.js";import"./ZIndexLayer-Dpd4MxoT.js";import"./ActivePoints-D_gOxfcF.js";import"./Dot-E0S9rOFh.js";import"./types-DFzRwbJd.js";import"./RegisterGraphicalItemId-Br_TTAem.js";import"./ErrorBarContext-Di7xd7Lk.js";import"./GraphicalItemClipPath-DUplZfGU.js";import"./SetGraphicalItem-DnFjb-ph.js";import"./useAnimationId-GLik1JQl.js";import"./getRadiusAndStrokeWidthFromDot-CMmixfMt.js";import"./ActiveShapeUtils-BW3KdMee.js";import"./isPlainObject-yome26yk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSXX-_zw.js";import"./Trapezoid-BE4mHG6h.js";import"./Sector-RBT64hMb.js";import"./Symbols-BrylnLFr.js";import"./symbol-Cv3vZKNL.js";import"./step-BNGIjVY6.js";import"./Curve-DqcNZQQ9.js";import"./CartesianAxis-Qsc6tL7N.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CcesUvCf.js";import"./uniqBy-BwUTREYv.js";import"./iteratee-0Dlmk-XD.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
