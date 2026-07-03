import{R as t}from"./iframe-Bqhaiwq8.js";import{e as p}from"./CategoricalChart-BqinH4KG.js";import{R as a}from"./zIndexSlice-BJS-a__d.js";import{C as s}from"./ComposedChart-oTFXmOZl.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-Bp-E22-P.js";import{X as d}from"./XAxis-Du5noYHq.js";import{Y as h}from"./YAxis-BtCExx2a.js";import{L as g}from"./Legend-CXGIZ9cu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D0HX42ff.js";import"./index-QuJ2DhnT.js";import"./index-DxkzSUWz.js";import"./index-CENQUa5y.js";import"./index-ChBrJC7P.js";import"./throttle-C_LSyirk.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-dCTNHtgX.js";import"./axisSelectors-Dd8okoki.js";import"./resolveDefaultProps-Bz_Hg9tX.js";import"./isWellBehavedNumber-Be3mi6aN.js";import"./d3-scale-i5sn4jpY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DUun358R.js";import"./chartDataContext-BxVBYRL6.js";import"./Layer-Co0F7rtj.js";import"./Curve-DUDGkuFv.js";import"./types-OmV-cVYy.js";import"./step-Yi3ifzmX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ZUM4uHMT.js";import"./Label-D7swILSN.js";import"./Text-BtH8DQvC.js";import"./DOMUtils-BpHmJx8-.js";import"./ZIndexLayer-CIZ0RaUe.js";import"./useAnimationId-D0jk17bx.js";import"./ActivePoints-DZkQMisB.js";import"./Dot-BTqZFgU3.js";import"./RegisterGraphicalItemId-BMXEaOnC.js";import"./ErrorBarContext-CWwmFSat.js";import"./GraphicalItemClipPath-9FMv3-Ih.js";import"./SetGraphicalItem-CKezQY-K.js";import"./getRadiusAndStrokeWidthFromDot-BRzjy3Uy.js";import"./ActiveShapeUtils-DZHTMyL3.js";import"./CartesianAxis-217VZgzf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BCm7UEXQ.js";import"./symbol-DfC1e8FG.js";import"./useElementOffset-CmWzJYxc.js";import"./uniqBy-yoTZI67c.js";import"./iteratee-CsXi7xCb.js";const dt={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(s,{data:n,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
