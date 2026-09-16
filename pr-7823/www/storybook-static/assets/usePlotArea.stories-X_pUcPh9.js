import{R as t}from"./iframe-BehVlOkm.js";import{j as a}from"./RechartsWrapper-0yqzaTB4.js";import{R as p}from"./zIndexSlice-CdmzvBWn.js";import{C as n}from"./ComposedChart-CYwBQNg8.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-xZ_IkCzK.js";import{X as l}from"./XAxis-CQVzim4L.js";import{Y as h}from"./YAxis-Ds0Z47iT.js";import{L as c}from"./Legend-CfuiwBwX.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-9hqPoiPG.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DyVT26JG.js";import"./throttle-3ebqMYzS.js";import"./index-nl04o6LQ.js";import"./index-lttadt3D.js";import"./isWellBehavedNumber-BwNlQ7J1.js";import"./d3-scale-DlStqn9j.js";import"./index-CaKklxJL.js";import"./index-BrZJdMim.js";import"./renderedTicksSlice-dw4JvkQu.js";import"./index-BxFZJssh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DZXsAfAP.js";import"./chartDataContext-COawrzjC.js";import"./CategoricalChart-Bb7rG0O4.js";import"./Layer-Drrwe-kT.js";import"./Curve-DIgGrV17.js";import"./types-CAE_u7CX.js";import"./step-DaHJvpwY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DX3Aqvyi.js";import"./Label-3Vi5DR-p.js";import"./Text-DdbsBRSW.js";import"./DOMUtils-DRfi6Z_9.js";import"./useId-TSoobfid.js";import"./useBackwardsCompatibleTheme-DC96YUQX.js";import"./ZIndexLayer-C8fMsiAz.js";import"./useAnimationId-PYM0HN7I.js";import"./ActivePoints-CSlqy7_R.js";import"./Dot-BJdMpeRo.js";import"./RegisterGraphicalItemId-B_HypSlK.js";import"./ErrorBarContext-BsuukL4-.js";import"./GraphicalItemClipPath-DHrIaKZQ.js";import"./SetGraphicalItem-ke9OEdFg.js";import"./getRadiusAndStrokeWidthFromDot-Dn20e6Na.js";import"./ActiveShapeUtils-DgsGKv18.js";import"./useGraphicalItemIdentity-CpoXyJzx.js";import"./CartesianAxis-Dh9d1hc7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DuGenZrt.js";import"./symbol-0ztgqzus.js";import"./useElementOffset-Dm1K4Zpo.js";import"./uniqBy-CS225_ZI.js";import"./iteratee-VXBxxD8z.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
