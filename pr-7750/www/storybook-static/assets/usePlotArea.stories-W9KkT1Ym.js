import{R as t}from"./iframe-s76JLJT4.js";import{j as a}from"./RechartsWrapper-CzmQgFdw.js";import{R as p}from"./zIndexSlice-BAzWj5Bm.js";import{C as n}from"./ComposedChart-CrJ4dqI5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-cLMgFbkH.js";import{X as l}from"./XAxis-oY-MxrDT.js";import{Y as h}from"./YAxis-Dp0QA8yk.js";import{L as c}from"./Legend-0Fenf7tV.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BacpidNF.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BVRh__it.js";import"./throttle-DlYzKYH1.js";import"./index-D791KxLc.js";import"./index-u4HpiE5R.js";import"./isWellBehavedNumber-BfAJeodP.js";import"./d3-scale-3iO39mKP.js";import"./index-BP9e58dC.js";import"./index-5KrtyyBx.js";import"./renderedTicksSlice-YO-Fp9Ef.js";import"./index-v7GV83G6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BHvBdOos.js";import"./chartDataContext-heFiBO7H.js";import"./CategoricalChart-Bnpv8dk8.js";import"./Layer-S_x0F8ws.js";import"./Curve-q_CY-4KJ.js";import"./types-B1A5enlV.js";import"./step-zmbHrnqa.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DJi7GpYq.js";import"./Label-BK0AZvtz.js";import"./Text-B6LThSxq.js";import"./DOMUtils-duej-PH-.js";import"./useId-DWgk4q6e.js";import"./useBackwardsCompatibleTheme-C6S0KGB6.js";import"./ZIndexLayer-RER6T0Dj.js";import"./useAnimationId-Co4tnqM8.js";import"./ActivePoints-DcCT_xea.js";import"./Dot-bQR7q4wH.js";import"./RegisterGraphicalItemId-CojxeIbK.js";import"./ErrorBarContext-DjrrsITr.js";import"./GraphicalItemClipPath-4yehoiu3.js";import"./SetGraphicalItem-jdZDqL_N.js";import"./getRadiusAndStrokeWidthFromDot-DDb6xR6G.js";import"./ActiveShapeUtils-CMuKiAIO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-wofyjDXK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DXxFQ5Re.js";import"./symbol-Bivf0Ccg.js";import"./useElementOffset-BEqwyN49.js";import"./uniqBy-Cdtb4h_K.js";import"./iteratee-C2acX8LZ.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
