import{R as t}from"./iframe-BR9um8hy.js";import{j as a}from"./RechartsWrapper-Dp-C2Hzh.js";import{R as p}from"./zIndexSlice-DInTlpQm.js";import{C as n}from"./ComposedChart-BVZ7f1kE.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B2Y8w_7v.js";import{X as l}from"./XAxis-Df2VZum-.js";import{Y as h}from"./YAxis-BaWzKsyn.js";import{L as c}from"./Legend-DggfOM0T.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DqQmI4tj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-AyLSKa9B.js";import"./throttle-BcqT3vfz.js";import"./index-C-g-WGda.js";import"./index-DxJwgSab.js";import"./isWellBehavedNumber-DRhRXNpZ.js";import"./d3-scale-CDw_eAgY.js";import"./index-BkxIjOFS.js";import"./index-BFcGxk9F.js";import"./renderedTicksSlice-CoNN11f9.js";import"./index-DXgo6F3y.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DZcLq4iA.js";import"./chartDataContext-Bt8Fe_rW.js";import"./CategoricalChart-DmGnRbfN.js";import"./Layer-BBDuFZTy.js";import"./Curve-C4vXdRCg.js";import"./types-C8x07v5_.js";import"./step-Dcjunjbb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DpNUe9OS.js";import"./Label-DksyNS0g.js";import"./Text-CRGxz7fL.js";import"./DOMUtils-Duc3pHlK.js";import"./useId-BgrQ9U0l.js";import"./useBackwardsCompatibleTheme-DOuVjsc2.js";import"./ZIndexLayer-BGQSpetD.js";import"./useAnimationId-CK-e-_3G.js";import"./ActivePoints-D1dlEVO6.js";import"./Dot-C4b3VHLo.js";import"./RegisterGraphicalItemId-BT1l9jKw.js";import"./ErrorBarContext-B2oMN3ea.js";import"./GraphicalItemClipPath-D0pxdHNA.js";import"./SetGraphicalItem-CjDcCpNq.js";import"./getRadiusAndStrokeWidthFromDot-D1WfNQgz.js";import"./ActiveShapeUtils-B8gsJAZs.js";import"./useGraphicalItemIdentity-BYoj9he0.js";import"./CartesianAxis-Ctt1NdjE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BQkqE9tF.js";import"./symbol-BZX7kSso.js";import"./useElementOffset-Buf92wBZ.js";import"./uniqBy-CLhcCcda.js";import"./iteratee-RhNK36r-.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
