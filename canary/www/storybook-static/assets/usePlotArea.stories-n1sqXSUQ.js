import{R as t}from"./iframe-D_MXUc9j.js";import{j as a}from"./RechartsWrapper-w9ky9w-N.js";import{R as p}from"./zIndexSlice-BFHspQ3h.js";import{C as n}from"./ComposedChart-9bn5ROzF.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D31G47M9.js";import{X as l}from"./XAxis-DDjL-5lR.js";import{Y as h}from"./YAxis-B9TFZTi1.js";import{L as c}from"./Legend-DzzdQsbu.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-2frX1lOh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cm02wLJ7.js";import"./throttle-et5ks_cI.js";import"./index-CKJUXvOM.js";import"./index-7XNg-5qX.js";import"./isWellBehavedNumber-CsgFecko.js";import"./d3-scale-qgwr3MMy.js";import"./index-CKZvu-mT.js";import"./index-Bxr9K7DU.js";import"./renderedTicksSlice-TfnwoJLt.js";import"./index-DtuXK4VP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-tuemJXRr.js";import"./chartDataContext-_Ju6-fzp.js";import"./CategoricalChart-DJ7BKDkl.js";import"./Layer-BZB8UiQK.js";import"./Curve-CuSFZQj8.js";import"./types-C3dbXUSG.js";import"./step-BhNzxzT7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C_wvnbpu.js";import"./Label-BzW6Kco1.js";import"./Text-BRrhokiO.js";import"./DOMUtils-DhRIYphT.js";import"./useId-BnOkh28B.js";import"./useBackwardsCompatibleTheme-BwLA5NQz.js";import"./ZIndexLayer-2Sh7_Zup.js";import"./useAnimationId-Bnx7NtOE.js";import"./ActivePoints-BiO6enUY.js";import"./Dot-LN8MpyP_.js";import"./RegisterGraphicalItemId-BQytnqfH.js";import"./ErrorBarContext-CVxV46GA.js";import"./GraphicalItemClipPath-BnUM0bi_.js";import"./SetGraphicalItem-B4WgsP5a.js";import"./getRadiusAndStrokeWidthFromDot-4YSuZBjL.js";import"./ActiveShapeUtils-VpxDx_Hn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-6tNxOuLT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BSu_9T6j.js";import"./symbol-CA7d1SdW.js";import"./useElementOffset-CVAvobNx.js";import"./uniqBy-CxcVQtEW.js";import"./iteratee-iKvfq8Bu.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
