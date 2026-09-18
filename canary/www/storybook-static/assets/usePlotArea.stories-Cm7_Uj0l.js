import{R as t}from"./iframe-Ddpx1fWB.js";import{j as a}from"./RechartsWrapper-FUuE5Yxf.js";import{R as p}from"./zIndexSlice-Dat8LqkZ.js";import{C as n}from"./ComposedChart-TNMAuPjN.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cu73NfCf.js";import{X as l}from"./XAxis-8Q1XE2yS.js";import{Y as h}from"./YAxis-pV8_VGP8.js";import{L as c}from"./Legend-wMr1z0y2.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BLbyA7M-.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CiMHZLFM.js";import"./throttle-Ergr3tXF.js";import"./index-BHGR1bQY.js";import"./index-C2RGX2bO.js";import"./isWellBehavedNumber-PbzFmx8z.js";import"./d3-scale-NbpcncSt.js";import"./index-zj--lfIw.js";import"./index-wao6mAsQ.js";import"./renderedTicksSlice-DtbmQ7NB.js";import"./index-C_z5dzD1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DITQYbNx.js";import"./chartDataContext-XIbG-eFQ.js";import"./CategoricalChart-DNv1TYBb.js";import"./Layer-BY9KVYkA.js";import"./Curve-ZF8x5Xsx.js";import"./types-C_VxKCLR.js";import"./step-Dtj6_Cxq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D2-ekEtz.js";import"./Label-CuNWF2Cl.js";import"./Text-CA0gQCIk.js";import"./DOMUtils-njKIQFOw.js";import"./useId-HK3tGk78.js";import"./useBackwardsCompatibleTheme-DbKpiFxe.js";import"./ZIndexLayer-DWZuS9R-.js";import"./useAnimationId-B2yc1CEt.js";import"./ActivePoints-BO0qnNRs.js";import"./Dot-Wca6oVOE.js";import"./RegisterGraphicalItemId-BPWJzGfs.js";import"./ErrorBarContext-VVT7--30.js";import"./GraphicalItemClipPath-BJA8iJ0Z.js";import"./SetGraphicalItem-wnpZS34C.js";import"./getRadiusAndStrokeWidthFromDot-DUoLQNHB.js";import"./ActiveShapeUtils-CuFPShbj.js";import"./useGraphicalItemIdentity-CUnlnBu6.js";import"./CartesianAxis-3VtOE9qK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-ZhZb-jZH.js";import"./symbol-C9U6a4gB.js";import"./useElementOffset-COfGaiv8.js";import"./uniqBy-BOzPUYij.js";import"./iteratee-Ck7XhHqD.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
