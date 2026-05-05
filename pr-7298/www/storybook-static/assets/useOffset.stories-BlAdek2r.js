import{e as t}from"./iframe-r2w7kZeJ.js";import{O as p}from"./OffsetShower-vABa0YEq.js";import{d as a}from"./hooks-B_Z23ri5.js";import{R as s}from"./arrayEqualityCheck-0L0A4nkz.js";import{C as n}from"./ComposedChart-LwEwWDis.js";import{p as f}from"./Page-Cj8EiXz7.js";import{L as h}from"./Line-z9zeEmq5.js";import{X as d}from"./XAxis-CW9ZaA2b.js";import{Y as g}from"./YAxis-I9saElLN.js";import{L as c}from"./Legend-05jea6bq.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-lBZtOA5X.js";import"./immer-CfvCTpDj.js";import"./axisSelectors-CJgn9_ry.js";import"./d3-scale-CTtR7bXz.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-EjMTnW0n.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1HJqk7Yh.js";import"./index-W-AgMbp-.js";import"./zIndexSlice-DqYPZFIv.js";import"./renderedTicksSlice-B-NBeGNG.js";import"./CartesianChart-BFAKYLf8.js";import"./chartDataContext-BjsyC2cu.js";import"./CategoricalChart-Beyzarg4.js";import"./Layer-CMwqxUY2.js";import"./ReactUtils-BYDoU0L1.js";import"./Label-m6h3W7WS.js";import"./Text-DLc1wT1a.js";import"./DOMUtils-KJq6QJZu.js";import"./ZIndexLayer-CC246p5z.js";import"./ActivePoints-Ddlw9Tet.js";import"./Dot-JZESmYel.js";import"./types-ywkvGoUt.js";import"./RegisterGraphicalItemId-Bf-Aw6v0.js";import"./ErrorBarContext--RrhajOR.js";import"./GraphicalItemClipPath-uc4YpIA_.js";import"./SetGraphicalItem-C7uPVjvE.js";import"./useAnimationId-BkxSeEj0.js";import"./getRadiusAndStrokeWidthFromDot-B1ykn1OV.js";import"./ActiveShapeUtils-Df9SSVU9.js";import"./isPlainObject--i_1cxYd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvpuUb1d.js";import"./Trapezoid-BCSEHN2t.js";import"./Sector-D4bQnZgU.js";import"./Symbols-CbDfRlok.js";import"./symbol-JIUkL0GL.js";import"./step-CB3ZoZU9.js";import"./Curve-E_V9yRSe.js";import"./CartesianAxis-DqNMO4sJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Cp48T0Gk.js";import"./uniqBy-DkZlGKl-.js";import"./iteratee-BY0-7en0.js";const ut={title:"API/hooks/useOffset",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(s,{width:e.width,height:e.height},t.createElement(n,{data:f,margin:e.margin},t.createElement(h,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(c,null),t.createElement(p,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
