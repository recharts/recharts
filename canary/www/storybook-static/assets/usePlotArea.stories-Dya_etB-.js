import{R as t}from"./iframe-CUlWXK_q.js";import{j as a}from"./RechartsWrapper-C5F4JVOA.js";import{R as p}from"./zIndexSlice-DM6pr2-S.js";import{C as n}from"./ComposedChart-BTSMlYc4.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BnrnwcOk.js";import{X as l}from"./XAxis-Djxn7jPm.js";import{Y as h}from"./YAxis-noEkR1dh.js";import{L as c}from"./Legend-BLIxrjwe.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D0jJQ7td.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BD41NxQw.js";import"./throttle-C_r5ITnz.js";import"./index-DeLCoNGq.js";import"./index-DkyNoZPG.js";import"./isWellBehavedNumber-dgjlUMt0.js";import"./d3-scale-hq__MZkp.js";import"./index-B7A70wTi.js";import"./index-BLklzkKd.js";import"./renderedTicksSlice-BdBFpUvH.js";import"./index-BBeD-IIB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CRlJjBxC.js";import"./chartDataContext-NP5kWzmf.js";import"./CategoricalChart-BnjqCNZT.js";import"./Layer-DTo8-sn1.js";import"./Curve-D8NUv9dD.js";import"./types-C9dSmSxn.js";import"./step-Di3fwKYt.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DODKpEkU.js";import"./Label-CHddXrDn.js";import"./Text-Dwcbogye.js";import"./DOMUtils-C2wyshXr.js";import"./useId-xdSBMbRU.js";import"./useBackwardsCompatibleTheme-DPUtEB0l.js";import"./ZIndexLayer-CBqpLv67.js";import"./useAnimationId-JJOW80s5.js";import"./ActivePoints-B_yfpjG0.js";import"./Dot-DYyj6ZNH.js";import"./RegisterGraphicalItemId-CjUENZzL.js";import"./ErrorBarContext-Ff5dUprW.js";import"./GraphicalItemClipPath-gLO2Kyz_.js";import"./SetGraphicalItem-CLwyvQ_z.js";import"./getRadiusAndStrokeWidthFromDot-DvN_DPnW.js";import"./ActiveShapeUtils-BTWGbocf.js";import"./useGraphicalItemIdentity-B9Lyw3Fg.js";import"./CartesianAxis-CvaDBGbl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CsvRLVdW.js";import"./symbol-CgPnmDmb.js";import"./useElementOffset-D67iyqh-.js";import"./uniqBy-MjWJtKt-.js";import"./iteratee-i1UfEwDS.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
