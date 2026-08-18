import{R as t}from"./iframe-tjnA4ZJo.js";import{u as a}from"./CategoricalChart-4thYKElI.js";import{R as p}from"./zIndexSlice-C0N8aUUS.js";import{C as s}from"./ComposedChart-C0wVbOjh.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cwid8INE.js";import{X as l}from"./XAxis-C_h8MhtB.js";import{Y as h}from"./YAxis-BN_pqP4r.js";import{L as c}from"./Legend-B6tcd6Eb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWJ-Ct21.js";import"./index-BXBph9CX.js";import"./index-zHF4-EZF.js";import"./index-BTfui88R.js";import"./index-BBMNndk4.js";import"./throttle-BG5Cbw48.js";import"./get-C2VjdU0L.js";import"./axisSelectors-kO8GHbei.js";import"./resolveDefaultProps-Bpk1yIxn.js";import"./isWellBehavedNumber-C0zpNc8z.js";import"./d3-scale-DO15g-NA.js";import"./renderedTicksSlice-cCRvnCrJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Fpuc0WuY.js";import"./chartDataContext-Czgamfqs.js";import"./Layer-BffJbX--.js";import"./Curve-CyJ2f9jM.js";import"./types-B1JXlqQN.js";import"./step-OCCE-5TJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-6MMSMcYJ.js";import"./Label-CYvlsQvC.js";import"./Text-D3he8dQP.js";import"./DOMUtils-Bpsfg4Oe.js";import"./useBackwardsCompatibleTheme-WfOg4bTb.js";import"./ZIndexLayer-J8-hOCa0.js";import"./useAnimationId-1S4zeXgZ.js";import"./ActivePoints-BiBnoeEb.js";import"./Dot-3hZpkGF4.js";import"./RegisterGraphicalItemId-CPAkHit-.js";import"./ErrorBarContext-B_e3sY13.js";import"./GraphicalItemClipPath-CVEv0QyJ.js";import"./SetGraphicalItem-Bw7kOs9y.js";import"./getRadiusAndStrokeWidthFromDot-CaYPlNA5.js";import"./ActiveShapeUtils-D6_9Syl7.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CBg_pQkI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-kjmF9QMx.js";import"./symbol-FDo79mI1.js";import"./useElementOffset-BodDkwvF.js";import"./uniqBy-n-0FIf0H.js";import"./iteratee-BlG9qfWt.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
