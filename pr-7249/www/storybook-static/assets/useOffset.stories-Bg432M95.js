import{e as t}from"./iframe-BL30a25n.js";import{O as p}from"./OffsetShower-D6jdoegT.js";import{d as a}from"./hooks-Bu6pJnUO.js";import{R as s}from"./arrayEqualityCheck-CTdhw7v2.js";import{C as n}from"./ComposedChart-CwvxB3E8.js";import{p as f}from"./Page-Cj8EiXz7.js";import{L as h}from"./Line-K5AsLX-F.js";import{X as d}from"./XAxis-BuEHyROH.js";import{Y as g}from"./YAxis-97iCNCLl.js";import{L as c}from"./Legend-BFEw6qz3.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-tl2VnG3o.js";import"./immer-BLjYPncX.js";import"./axisSelectors-CmxwFFvW.js";import"./d3-scale-DN4NcrYH.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dhgfu696.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSatPt3_.js";import"./index-DaX2Q3AK.js";import"./zIndexSlice-DuEq0Nzw.js";import"./renderedTicksSlice-BNblKiJo.js";import"./CartesianChart-DOXn6f_f.js";import"./chartDataContext-BvCVPcPU.js";import"./CategoricalChart-Cg95RMGg.js";import"./Layer-DbzzoT5W.js";import"./ReactUtils-CvEgiikN.js";import"./Label-tOosDzC9.js";import"./Text-Da5MrtOo.js";import"./DOMUtils-2S3W7qMd.js";import"./ZIndexLayer-Ct2VJKyV.js";import"./ActivePoints-DLmu87F_.js";import"./Dot-D_x5JJ0f.js";import"./types-DngVF1gy.js";import"./RegisterGraphicalItemId-NIdQMjW7.js";import"./ErrorBarContext-C--UypnL.js";import"./GraphicalItemClipPath-CvO0vgi7.js";import"./SetGraphicalItem-DqX3zCIa.js";import"./useAnimationId-StTSWEFx.js";import"./getRadiusAndStrokeWidthFromDot-BWR1tZh1.js";import"./ActiveShapeUtils-DyYtBEWy.js";import"./isPlainObject-DHekL-Pq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dbi9MvBK.js";import"./Trapezoid-DF1LPrGo.js";import"./Sector-By56eltg.js";import"./Symbols-DWmX7Ql_.js";import"./symbol-DiJYHTEZ.js";import"./step-COhLjfgX.js";import"./Curve-C9Gn1Z7l.js";import"./CartesianAxis-6XJOi0JN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BRFRz_JX.js";import"./uniqBy-DLUxpX6I.js";import"./iteratee-D6pKSZwg.js";const ut={title:"API/hooks/useOffset",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(s,{width:e.width,height:e.height},t.createElement(n,{data:f,margin:e.margin},t.createElement(h,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(c,null),t.createElement(p,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <OffsetShower />
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ot=["UseOffset"];export{r as UseOffset,Ot as __namedExportsOrder,ut as default};
