import{R as t}from"./iframe-ZXtfb4yD.js";import{j as a}from"./RechartsWrapper-DeOd3865.js";import{R as p}from"./zIndexSlice-BYWdHlTe.js";import{C as n}from"./ComposedChart-C5IMSRfW.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BY4VeKsv.js";import{X as l}from"./XAxis-DLWMZedb.js";import{Y as h}from"./YAxis-CpZ4maZ2.js";import{L as c}from"./Legend-BH-_2P9C.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-xIIdHmm9.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B-7UnAhK.js";import"./throttle-UQol_oMR.js";import"./index-SIPxA2ka.js";import"./index-Bo6RSdvh.js";import"./isWellBehavedNumber-DxKoG7Ba.js";import"./d3-scale-CLk4WDw9.js";import"./index-BxR6IAN7.js";import"./index-CZ8YJbDi.js";import"./renderedTicksSlice-D1lcrg0m.js";import"./index-Bj13Gnlq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-yzowS7n9.js";import"./chartDataContext-Vgws8ib_.js";import"./CategoricalChart-DidrDbM3.js";import"./Layer-BNcbfxWn.js";import"./Curve-DVYTdeVn.js";import"./types-D_Nat2yf.js";import"./step-CUKBWZW0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-sQcK0Cnf.js";import"./Label-C_XzWtLw.js";import"./Text-DV_FynOi.js";import"./DOMUtils-C0C9d7iI.js";import"./useId-0Gl7JyMf.js";import"./useBackwardsCompatibleTheme-C4wl67U3.js";import"./ZIndexLayer-Ck2jrevN.js";import"./useAnimationId-BzcgW_0X.js";import"./ActivePoints-DR8A-WKS.js";import"./Dot-DNV1GHEu.js";import"./RegisterGraphicalItemId-BLTTAUNU.js";import"./ErrorBarContext-CM-xdG0H.js";import"./GraphicalItemClipPath-Du8p1Oou.js";import"./SetGraphicalItem-QMczFyB9.js";import"./getRadiusAndStrokeWidthFromDot-B0p8dzOs.js";import"./ActiveShapeUtils-C4fIJN7R.js";import"./useGraphicalItemIdentity-DEuXq7FQ.js";import"./CartesianAxis-DsWhwIZU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DhJA3WlI.js";import"./symbol-DqJrO93a.js";import"./useElementOffset-D-a4c_KO.js";import"./uniqBy-CHRSp9IT.js";import"./iteratee-CkKkD8L0.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
