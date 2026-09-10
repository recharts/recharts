import{R as t}from"./iframe-UgRt0vcp.js";import{j as a}from"./RechartsWrapper-EuqqM12a.js";import{R as p}from"./zIndexSlice-B7qjUnDG.js";import{C as n}from"./ComposedChart-C6hx2aan.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Dipve1CO.js";import{X as l}from"./XAxis-4W0ht619.js";import{Y as h}from"./YAxis-CJZXqV3k.js";import{L as c}from"./Legend-SEzvkhHd.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BXcWlbHp.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DIh-l85l.js";import"./throttle-DuwfTuib.js";import"./index-Bv-jl5LW.js";import"./index-Bvm9MNt8.js";import"./isWellBehavedNumber-ysV-_8Aq.js";import"./d3-scale-Cn-9twYV.js";import"./index-BUuQQxxl.js";import"./index-BtCdhKy_.js";import"./renderedTicksSlice-rspC5CNs.js";import"./index-NRyuBWjq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DoGcO1A-.js";import"./chartDataContext-BKXebmD7.js";import"./CategoricalChart-BbYkYnOT.js";import"./Layer-C1js-4J0.js";import"./Curve-BaJYpKaM.js";import"./types-BQX4mfvu.js";import"./step-BAtXOj-E.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BpS1OD2e.js";import"./Label-Ct2bC8Rh.js";import"./Text-CIcS1Cht.js";import"./DOMUtils-hZ-h7K-C.js";import"./useId-nYKyJk56.js";import"./useBackwardsCompatibleTheme-DJK5Z4IB.js";import"./ZIndexLayer-A1V94IPq.js";import"./useAnimationId-DPVBY7S8.js";import"./ActivePoints-BWaxPFAB.js";import"./Dot-DphG9sPw.js";import"./RegisterGraphicalItemId-Cu5milgY.js";import"./ErrorBarContext-g5uku85c.js";import"./GraphicalItemClipPath-C-zprDgr.js";import"./SetGraphicalItem-1hTkIljj.js";import"./getRadiusAndStrokeWidthFromDot-CKTCh4hG.js";import"./ActiveShapeUtils-B_uanDrb.js";import"./useGraphicalItemIdentity-DyOG4GgF.js";import"./CartesianAxis-RT1RuzF2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DD6r1Zt-.js";import"./symbol-C00MPWxj.js";import"./useElementOffset-BV51zAtA.js";import"./uniqBy-C0AvOEm-.js";import"./iteratee-BGbr-Qh6.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
