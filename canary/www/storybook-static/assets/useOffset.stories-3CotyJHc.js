import{R as t}from"./iframe-DTfUMuxI.js";import{e as p}from"./CategoricalChart-DjP0Xpt7.js";import{R as a}from"./zIndexSlice-DgbTd9h0.js";import{C as s}from"./ComposedChart-OGPUNqC6.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-B98wDZe7.js";import{X as d}from"./XAxis-CKFG07JY.js";import{Y as h}from"./YAxis-DiRZk9gW.js";import{L as g}from"./Legend-Bt2iSyJP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-n6ARRQU-.js";import"./index-Cd9XPR7L.js";import"./index-C-gVZ3HS.js";import"./index-C6ZCQ8Cr.js";import"./index-dA-GAX4g.js";import"./throttle-DSBiY2UW.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DsiYN-l1.js";import"./axisSelectors-D0YyYzBU.js";import"./resolveDefaultProps-B2iqIMJj.js";import"./isWellBehavedNumber-CJoo6Zl9.js";import"./d3-scale-DrphVPA4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-b6kMC5fp.js";import"./chartDataContext-DbVx922-.js";import"./Layer-fCILtQSz.js";import"./Curve-CDLgz_Rx.js";import"./types-CausIaox.js";import"./step-D8Xe5eP9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DnEACLZT.js";import"./Label-Sgtp5mjO.js";import"./Text-8vykb6TY.js";import"./DOMUtils-CP4go6fM.js";import"./ZIndexLayer-BhQOtpEj.js";import"./useAnimationId-BT6QlGBk.js";import"./ActivePoints-1q3Ryxbz.js";import"./Dot-Br2mhGeX.js";import"./RegisterGraphicalItemId-1AKHmh8R.js";import"./ErrorBarContext-4arHz5n6.js";import"./GraphicalItemClipPath-Bk6qs07-.js";import"./SetGraphicalItem-BNqcqmMc.js";import"./getRadiusAndStrokeWidthFromDot-D9ottDdP.js";import"./ActiveShapeUtils-DX8BqYxQ.js";import"./CartesianAxis-CzVgKTyr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BOI72eZ2.js";import"./symbol-CpDIKgsQ.js";import"./useElementOffset-DrOTra1T.js";import"./uniqBy-C0UbEHN4.js";import"./iteratee-DaP6RRgm.js";const dt={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(s,{data:n,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ht=["UseOffset"];export{r as UseOffset,ht as __namedExportsOrder,dt as default};
