import{R as t}from"./iframe-BkeN00Xj.js";import{j as a}from"./RechartsWrapper-C3Vxgl3Z.js";import{R as p}from"./zIndexSlice-B-x7pTGs.js";import{C as n}from"./ComposedChart-o64gktPG.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BystEDAn.js";import{X as l}from"./XAxis-CtkFJuG7.js";import{Y as h}from"./YAxis-DJRwhJXR.js";import{L as c}from"./Legend-Bk8wjFJ6.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DZDkJdvH.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CdQeSFob.js";import"./throttle-DVvQgSvv.js";import"./index-Ssjmhn91.js";import"./index-Doqq19He.js";import"./isWellBehavedNumber-DpaF5Qbq.js";import"./d3-scale-59I2Ahhc.js";import"./index-Bp16jrAu.js";import"./index-CzDQGSqQ.js";import"./renderedTicksSlice-EekJT0xr.js";import"./index-BW_MIuEw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-HYPnZu6o.js";import"./chartDataContext-BeegK0cj.js";import"./CategoricalChart-acAC1yFW.js";import"./Layer-CQvSRJEy.js";import"./Curve-CqZmQlC4.js";import"./types-CHY5UDxi.js";import"./step-6rSS0kJE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D-Ov5Ds2.js";import"./Label-C5oKPJnD.js";import"./Text-B4YmNBvy.js";import"./DOMUtils-BtNtGSBk.js";import"./useId-CoUZj2D9.js";import"./useBackwardsCompatibleTheme-CO7BXTf3.js";import"./ZIndexLayer-BM7jKjXD.js";import"./useAnimationId-DIIcOQR8.js";import"./ActivePoints-BZpnaHk5.js";import"./Dot-BSZNpi6H.js";import"./RegisterGraphicalItemId-SBK7zBb4.js";import"./ErrorBarContext-CjOXvaZb.js";import"./GraphicalItemClipPath-BVRs7DWi.js";import"./SetGraphicalItem-BLpQqeaN.js";import"./getRadiusAndStrokeWidthFromDot-C0jg-2Bd.js";import"./ActiveShapeUtils-KH5PmLPO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-LtwF5IC-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-AyonCz9c.js";import"./symbol-D8YHtFfZ.js";import"./useElementOffset-B7hTb3Ey.js";import"./uniqBy-CPVlAjhe.js";import"./iteratee-xMasKDoT.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
