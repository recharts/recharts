import{R as t}from"./iframe-C7tNsTpK.js";import{j as a}from"./RechartsWrapper-BucpRp_7.js";import{R as p}from"./zIndexSlice-T7oa9RdZ.js";import{C as n}from"./ComposedChart-CgHuYAC3.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CHcJJgNV.js";import{X as l}from"./XAxis-C2gvQZpV.js";import{Y as h}from"./YAxis-aXsdWW2g.js";import{L as c}from"./Legend-D7Umu2tl.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DbdXlzmI.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CxImXzGX.js";import"./throttle-DNLiVZh5.js";import"./index-BESlF8Z2.js";import"./index-swZv8iIV.js";import"./isWellBehavedNumber-w95Ql-ta.js";import"./d3-scale-CAID8NmZ.js";import"./index-BolqH0tk.js";import"./index-CS0OILw8.js";import"./renderedTicksSlice-j7Pa5BYg.js";import"./index-DDzOQsUA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B_1K3lTu.js";import"./chartDataContext-B0xxoqnf.js";import"./CategoricalChart-Lk1sxOY3.js";import"./Layer-DP-YoZN_.js";import"./Curve-BN4KP-pW.js";import"./types-OUsJcmF8.js";import"./step-wm288KJA.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-gSeOcFSg.js";import"./Label-CEwaTgR3.js";import"./Text-UOL45mL4.js";import"./pageBackground-B-TVGQhf.js";import"./useId-6XeKOM79.js";import"./useBackwardsCompatibleTheme-BtQBwdq6.js";import"./ZIndexLayer-jLHUg-ly.js";import"./useAnimationId-Bb7S2zXD.js";import"./ActivePoints-BhhwgACW.js";import"./Dot-BqSzvkx_.js";import"./RegisterGraphicalItemId-CplM38Xw.js";import"./ErrorBarContext-Z3h8hxY9.js";import"./GraphicalItemClipPath-nv6N7UDG.js";import"./SetGraphicalItem-CiL25rkH.js";import"./getRadiusAndStrokeWidthFromDot-BJ6oq1Q3.js";import"./ActiveShapeUtils-5hficCmD.js";import"./useGraphicalItemIdentity-wn6P8Qk2.js";import"./CartesianAxis-BaDX4wf1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B0hmSjF7.js";import"./symbol-NUkZhKvQ.js";import"./useElementOffset-zMNgU5oi.js";import"./uniqBy-Bwz-78ds.js";import"./iteratee-CFobVmxc.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
