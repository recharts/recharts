import{R as t}from"./iframe-BnwEvHVd.js";import{j as a}from"./RechartsWrapper-BZ464iUK.js";import{R as p}from"./zIndexSlice-0uCOCVRk.js";import{C as n}from"./ComposedChart-9rcgHVH2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BNCbCy8a.js";import{X as l}from"./XAxis-DhFvYOTq.js";import{Y as h}from"./YAxis-DnmtLm62.js";import{L as c}from"./Legend-BzhiZ7y-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-jnzqtWcb.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DzcPpi8v.js";import"./throttle-BMoDiTen.js";import"./index-iHvm3R8g.js";import"./index-BwBYuMQi.js";import"./isWellBehavedNumber-f8_DWfMW.js";import"./d3-scale-RQ0i9OyJ.js";import"./index-2KzukYLG.js";import"./index-B3VczQm-.js";import"./renderedTicksSlice-DPG0-UfT.js";import"./index-CKyU5yK6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DbrCyOh2.js";import"./chartDataContext-fkcf5wCl.js";import"./CategoricalChart-BZFbMC-H.js";import"./Layer-BqkYBUjY.js";import"./Curve-DLP8Li3q.js";import"./types-CpWaLS-D.js";import"./step-C-chH2xx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DFYzdMOG.js";import"./Label-DKFxt1KE.js";import"./Text-COiNjqEn.js";import"./DOMUtils-DMR3fXS7.js";import"./useId-BMcLep4I.js";import"./useBackwardsCompatibleTheme-eKW0IOYq.js";import"./ZIndexLayer-BALG2eh-.js";import"./useAnimationId-Bx9pchZd.js";import"./ActivePoints-BZ2W0rhn.js";import"./Dot-DTeilXrV.js";import"./RegisterGraphicalItemId-DgVfOOm7.js";import"./ErrorBarContext-DiS9VGRo.js";import"./GraphicalItemClipPath-lDnflq8u.js";import"./SetGraphicalItem-D3Y1kq9t.js";import"./getRadiusAndStrokeWidthFromDot-BZxUZerd.js";import"./ActiveShapeUtils-BQOop8W6.js";import"./useGraphicalItemIdentity-DGhBBybr.js";import"./CartesianAxis-DJc2UaR_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BDau7v6Y.js";import"./symbol-DF9gfUCP.js";import"./useElementOffset-vRae3IDL.js";import"./uniqBy-CL-auK3D.js";import"./iteratee-0wRIkf1Y.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
