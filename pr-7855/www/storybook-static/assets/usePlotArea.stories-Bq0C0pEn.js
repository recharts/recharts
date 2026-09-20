import{R as t}from"./iframe-DqQsSS-D.js";import{j as a}from"./RechartsWrapper-DFStnfMW.js";import{R as p}from"./zIndexSlice-DEwzQEF1.js";import{C as n}from"./ComposedChart-BtU6IVsu.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CDjjcyDk.js";import{X as l}from"./XAxis-BKSYmnyE.js";import{Y as h}from"./YAxis-Ci8o-AKr.js";import{L as c}from"./Legend-DslYmX1t.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BBiJzE-S.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B52U77Z-.js";import"./throttle-Dfb6FQUp.js";import"./index-Dbmbbyfr.js";import"./index-DhKVfvgy.js";import"./isWellBehavedNumber-DnbbC0Ec.js";import"./d3-scale-DCqqE6RI.js";import"./index-B8fZ1s7u.js";import"./index-B4bGAE3u.js";import"./renderedTicksSlice-TJkJQb3w.js";import"./index-O7IqxgVs.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DxivySAt.js";import"./chartDataContext-BlgeEOzh.js";import"./CategoricalChart-BaEimrAw.js";import"./Layer-D_OCfv3y.js";import"./Curve-u85x6jSW.js";import"./types-Dtf5SFP2.js";import"./step-B0zbwdDt.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DE7FMoaT.js";import"./Label-B79akpip.js";import"./Text-C5ELFOWd.js";import"./DOMUtils-DfpUN1kn.js";import"./useId-CY4qsl1d.js";import"./useBackwardsCompatibleTheme-BgrGij6q.js";import"./ZIndexLayer-CAYm_Ybv.js";import"./useAnimationId-YdFm9roE.js";import"./ActivePoints-CoFSOxUI.js";import"./Dot-mDqKU7lL.js";import"./RegisterGraphicalItemId-B_u3-RKa.js";import"./ErrorBarContext-Bvj5AtLG.js";import"./GraphicalItemClipPath-CH5UCRjx.js";import"./SetGraphicalItem-DiUOXkHE.js";import"./getRadiusAndStrokeWidthFromDot-C_whAPwi.js";import"./ActiveShapeUtils-_QhNTD3X.js";import"./useGraphicalItemIdentity-DdD2mi7M.js";import"./CartesianAxis-BYaiVNcC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DUeh2Wr4.js";import"./symbol-CqwIHtxo.js";import"./useElementOffset-ey8HlZM7.js";import"./uniqBy-CnV8Kqb8.js";import"./iteratee-3rOeBeVg.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
