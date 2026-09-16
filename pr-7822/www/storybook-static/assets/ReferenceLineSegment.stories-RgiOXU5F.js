import{R as e}from"./iframe-W65oqx8q.js";import{R as i}from"./zIndexSlice-9l_Vrwwa.js";import{C as n}from"./ComposedChart-Dg02pqp1.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Bj1XN4C7.js";import{X as s}from"./XAxis-CsMm9ERi.js";import{Y as c}from"./YAxis-C8LbyJnB.js";import{L as d}from"./Line-BfwQZfLz.js";import{R as g}from"./ReferenceLine-D2ZNuoDf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JXtXSY4E.js";import"./index-6OGByTjb.js";import"./index-Cot536dN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CwFz2OMw.js";import"./isWellBehavedNumber-BObY9Idx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ClDY-hB5.js";import"./axisSelectors-cQBo3spf.js";import"./d3-scale-BnWVEuzd.js";import"./index-BoHv5hv2.js";import"./index-DKR6QUcv.js";import"./renderedTicksSlice-QXgti3JC.js";import"./index-B3pQb6na.js";import"./CartesianChart-ouG1NDpR.js";import"./chartDataContext-f_o9cnw9.js";import"./CategoricalChart-BwdQTjaO.js";import"./CartesianAxis-CClqdcGJ.js";import"./Layer-CHct5fsC.js";import"./Text-C9pLMK0A.js";import"./DOMUtils-CakF13Ql.js";import"./useId-BxDXx6uj.js";import"./useBackwardsCompatibleTheme-uDuKMgEe.js";import"./Label-Be3blqiA.js";import"./ZIndexLayer-C3J7XzqC.js";import"./types-DGC2KXCF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DBfMZQpl.js";import"./step-DIoBi2CN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-FyFUBU19.js";import"./useAnimationId-CZj4ZR7y.js";import"./ActivePoints-GiGlS0gl.js";import"./Dot-aLSP80WO.js";import"./RegisterGraphicalItemId-pvmrnM3x.js";import"./ErrorBarContext-B0GH1zEy.js";import"./GraphicalItemClipPath-CegTcjor.js";import"./SetGraphicalItem-I8O9Dd_O.js";import"./getRadiusAndStrokeWidthFromDot-D_6Md5To.js";import"./ActiveShapeUtils-8OE4Q_dK.js";import"./useGraphicalItemIdentity-CZ9WsBDJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
