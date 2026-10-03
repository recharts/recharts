import{R as t}from"./iframe-SCBQwNxQ.js";import{j as a}from"./RechartsWrapper-BlKrxgAY.js";import{R as p}from"./zIndexSlice-j2Iu_2in.js";import{C as n}from"./ComposedChart-DL5-9kqo.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Ioxo2vHg.js";import{X as l}from"./XAxis-Cc0l9D0i.js";import{Y as h}from"./YAxis-CjkWE18a.js";import{L as c}from"./Legend-DWfjcyPd.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CyZ9SZnI.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DLhQ9sAD.js";import"./throttle-CzCySKF_.js";import"./index-DsLPnsoz.js";import"./index-Co8Np-XD.js";import"./isWellBehavedNumber-DvdKXsqM.js";import"./d3-scale-G26x6J9Q.js";import"./index-B6uIZp6g.js";import"./index-B0bY_C-Z.js";import"./renderedTicksSlice-DJfakFhE.js";import"./index-CE5ovKc5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CfXQSmt5.js";import"./chartDataContext-1NVWGtYz.js";import"./CategoricalChart-Byg7V9pR.js";import"./Layer-Cqwrwd-u.js";import"./Curve-DfnFB90y.js";import"./types-tzKuPEFf.js";import"./step-x-If1Moz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Wlp1qaKk.js";import"./Label-5iI9wFuI.js";import"./Text-CXiXfLVx.js";import"./DOMUtils-htjTn9rf.js";import"./useId-GXBIOTNS.js";import"./useBackwardsCompatibleTheme-BnvgZvcH.js";import"./ZIndexLayer-D6bO2lss.js";import"./useAnimationId-DXE0JH3K.js";import"./ActivePoints-DzK6hILC.js";import"./Dot-BvkLNrn9.js";import"./RegisterGraphicalItemId-ArfZLync.js";import"./ErrorBarContext-SniQgvjJ.js";import"./GraphicalItemClipPath-DklClpWQ.js";import"./SetGraphicalItem-CM8VxQRS.js";import"./getRadiusAndStrokeWidthFromDot-BJxhJQao.js";import"./ActiveShapeUtils-HcSLNl9S.js";import"./useGraphicalItemIdentity-D5Od3f0u.js";import"./CartesianAxis-Cxx7AUTO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B3tjl2Qz.js";import"./symbol-WqTKNL9g.js";import"./useElementOffset-B4lloxY7.js";import"./uniqBy-DusnyNSE.js";import"./iteratee-C3MB5p7e.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
