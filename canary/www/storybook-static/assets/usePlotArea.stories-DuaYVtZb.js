import{R as t}from"./iframe-Bz6TqJnq.js";import{j as a}from"./RechartsWrapper--vq1vTqI.js";import{R as p}from"./zIndexSlice-C-cqgMlF.js";import{C as n}from"./ComposedChart-BAS1f6y5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DELGVTYz.js";import{X as l}from"./XAxis-DVlM8vXe.js";import{Y as h}from"./YAxis-CRFRlUFA.js";import{L as c}from"./Legend-Ba21IbkL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DEKZytWh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BfBX80u0.js";import"./throttle-BuIt2HDm.js";import"./index-BQLoICSq.js";import"./index-beBiy9wx.js";import"./isWellBehavedNumber-M6S8uXi3.js";import"./d3-scale-twe7FoUl.js";import"./index-etoInMv6.js";import"./index-DlUolpmt.js";import"./renderedTicksSlice-DQraWAfi.js";import"./index-C9aozdfF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DP7g5nZU.js";import"./chartDataContext-D2R1zViF.js";import"./CategoricalChart-CRL5ERGJ.js";import"./Layer-BX7MhZ6S.js";import"./Curve-M6KVk8IF.js";import"./types-4BkRWtr0.js";import"./step-BK8r0hX3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DDH0_5C2.js";import"./Label-lSot61nz.js";import"./Text-DOaj_kWf.js";import"./DOMUtils-Cex05Ge6.js";import"./useId-1b7xgL0h.js";import"./useBackwardsCompatibleTheme-yIhTdrUA.js";import"./ZIndexLayer-DhhI2NR0.js";import"./useAnimationId-D4N1wqR_.js";import"./ActivePoints-BVtl5KJC.js";import"./Dot--D_QZvUF.js";import"./RegisterGraphicalItemId-D64byefQ.js";import"./ErrorBarContext-CGc5rrEx.js";import"./GraphicalItemClipPath-CDFQRsft.js";import"./SetGraphicalItem-DzfWk83Z.js";import"./getRadiusAndStrokeWidthFromDot-CF5ztDsQ.js";import"./ActiveShapeUtils-BxAOP67q.js";import"./useGraphicalItemIdentity-CDqVZsrI.js";import"./CartesianAxis-DH-w_D5j.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BSgJkacr.js";import"./symbol-C6b2szSj.js";import"./useElementOffset-DaMWcsMn.js";import"./uniqBy-CQ7Y-pcX.js";import"./iteratee-DSPWK7cC.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
