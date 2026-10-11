import{R as t}from"./iframe-DfTkQmXX.js";import{j as a}from"./RechartsWrapper-DxAPF2hj.js";import{R as p}from"./zIndexSlice-CK1KsdwK.js";import{C as n}from"./ComposedChart-DiyxxUr9.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BdKxadRr.js";import{X as l}from"./XAxis-DoFqVwCs.js";import{Y as h}from"./YAxis-D7HuTQbC.js";import{L as c}from"./Legend-kahq9B90.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DzYEjrKC.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BlOH_04s.js";import"./throttle-BVJmkUn0.js";import"./index-Ba59U2Y8.js";import"./index-CsAN8_eV.js";import"./isWellBehavedNumber-BsgXnYfL.js";import"./d3-scale-DmiuGQyG.js";import"./index-CKqFjhNi.js";import"./index-MdrQnTxf.js";import"./renderedTicksSlice-Br06-4O3.js";import"./index-B9XVTu1f.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DTtp-RK_.js";import"./chartDataContext-0kN3l1x_.js";import"./CategoricalChart-W3tTj6f2.js";import"./Layer-B_W6fsjz.js";import"./Curve-gJd5arqO.js";import"./types-D3zQeAKc.js";import"./step-BPp5YbXE.js";import"./path-DyVhHtw_.js";import"./activeStyles-BILREjwj.js";import"./Label-SXOQPAQ7.js";import"./Text-B1vqPWff.js";import"./pageBackground-Bwi0dJpd.js";import"./useId-Dtq_j8MX.js";import"./useBackwardsCompatibleTheme-19GRtDCt.js";import"./ZIndexLayer-DPEED4Hn.js";import"./useAnimationId-BR_dOTuF.js";import"./dataEntryStyles-U8DJYbqc.js";import"./ActivePoints-dsaCSJiB.js";import"./Dot-CX7jfzvx.js";import"./ErrorBarContext-CN6zyEVc.js";import"./GraphicalItemClipPath-xajKPwIx.js";import"./SetGraphicalItem-CbFA-TWr.js";import"./getRadiusAndStrokeWidthFromDot-DArtm6VW.js";import"./ActiveShapeUtils-CGTBxphT.js";import"./useGraphicalItemIdentity-C9Z0QIkA.js";import"./CartesianAxis-DeGU3T7P.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CWELWbKP.js";import"./symbol-z0GjC0cu.js";import"./useElementOffset-Cn3V7naw.js";import"./uniqBy-DNn1deX1.js";import"./iteratee-BgZoIgJ1.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
