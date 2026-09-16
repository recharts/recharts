import{R as t}from"./iframe-W65oqx8q.js";import{j as a}from"./RechartsWrapper-ClDY-hB5.js";import{R as p}from"./zIndexSlice-9l_Vrwwa.js";import{C as n}from"./ComposedChart-Dg02pqp1.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BfwQZfLz.js";import{X as l}from"./XAxis-CsMm9ERi.js";import{Y as h}from"./YAxis-C8LbyJnB.js";import{L as c}from"./Legend-BQI0KbUc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CwFz2OMw.js";import"./get-C2VjdU0L.js";import"./axisSelectors-cQBo3spf.js";import"./throttle-JXtXSY4E.js";import"./index-6OGByTjb.js";import"./index-Cot536dN.js";import"./isWellBehavedNumber-BObY9Idx.js";import"./d3-scale-BnWVEuzd.js";import"./index-BoHv5hv2.js";import"./index-DKR6QUcv.js";import"./renderedTicksSlice-QXgti3JC.js";import"./index-B3pQb6na.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ouG1NDpR.js";import"./chartDataContext-f_o9cnw9.js";import"./CategoricalChart-BwdQTjaO.js";import"./Layer-CHct5fsC.js";import"./Curve-DBfMZQpl.js";import"./types-DGC2KXCF.js";import"./step-DIoBi2CN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-FyFUBU19.js";import"./Label-Be3blqiA.js";import"./Text-C9pLMK0A.js";import"./DOMUtils-CakF13Ql.js";import"./useId-BxDXx6uj.js";import"./useBackwardsCompatibleTheme-uDuKMgEe.js";import"./ZIndexLayer-C3J7XzqC.js";import"./useAnimationId-CZj4ZR7y.js";import"./ActivePoints-GiGlS0gl.js";import"./Dot-aLSP80WO.js";import"./RegisterGraphicalItemId-pvmrnM3x.js";import"./ErrorBarContext-B0GH1zEy.js";import"./GraphicalItemClipPath-CegTcjor.js";import"./SetGraphicalItem-I8O9Dd_O.js";import"./getRadiusAndStrokeWidthFromDot-D_6Md5To.js";import"./ActiveShapeUtils-8OE4Q_dK.js";import"./useGraphicalItemIdentity-CZ9WsBDJ.js";import"./CartesianAxis-CClqdcGJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CEV4tfBQ.js";import"./symbol-CvH-9qIk.js";import"./useElementOffset-CGAEjhf0.js";import"./uniqBy-bQIzI03X.js";import"./iteratee-2Iqaw7xV.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
