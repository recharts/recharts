import{R as t}from"./iframe-BYch73GC.js";import{j as a}from"./RechartsWrapper-BLQkthbe.js";import{R as p}from"./zIndexSlice-mAK65TxS.js";import{C as n}from"./ComposedChart-DaJB9Tix.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-rfnzjjTx.js";import{X as l}from"./XAxis-DvBxon3R.js";import{Y as h}from"./YAxis-lTNE--Lq.js";import{L as c}from"./Legend-C0uLIxN-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DWdkSMZg.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B4VSjfJY.js";import"./throttle-BEoPPt7A.js";import"./index-BeTLkY2H.js";import"./index-Bc_o9NJn.js";import"./isWellBehavedNumber-BP9XFgrX.js";import"./d3-scale-B2BH8dUM.js";import"./index-BIGQU915.js";import"./index-Q_fYP1Tj.js";import"./renderedTicksSlice-BkcMIj-K.js";import"./index-D3IuKIwS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cwhwr6-l.js";import"./chartDataContext-WIuoRrqx.js";import"./CategoricalChart-13njktaQ.js";import"./Layer-BCbhxOAa.js";import"./Curve-6yvIYj3p.js";import"./types-CIbUV0Xf.js";import"./step-dz2nmhBH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D4BR2dBY.js";import"./Label-BRuA27Hh.js";import"./Text-C5jLRMCm.js";import"./DOMUtils-DGuhwttO.js";import"./useId-BzCCYXNS.js";import"./useBackwardsCompatibleTheme-BIqSCxVj.js";import"./ZIndexLayer-CKmbkchN.js";import"./useAnimationId-CPbSSa-W.js";import"./ActivePoints-Bxq6WSlq.js";import"./Dot-DSBm0u0z.js";import"./RegisterGraphicalItemId-C0FXSJZg.js";import"./ErrorBarContext-BZq9v9h8.js";import"./GraphicalItemClipPath-6dEZaUUD.js";import"./SetGraphicalItem-BJF1DUih.js";import"./getRadiusAndStrokeWidthFromDot-DlDYRf0f.js";import"./ActiveShapeUtils-p0MunX2r.js";import"./useGraphicalItemIdentity-_0Nc-geg.js";import"./CartesianAxis-CWGo8wQX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B9l_Ouh1.js";import"./symbol-DSvElD_H.js";import"./useElementOffset-CXQ9oZOv.js";import"./uniqBy-Dk_A4srz.js";import"./iteratee-CLHchHka.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
