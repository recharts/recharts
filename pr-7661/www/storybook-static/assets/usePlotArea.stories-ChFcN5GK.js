import{R as t}from"./iframe-Bxb7fTI_.js";import{u as a}from"./CategoricalChart-D-PTwWFe.js";import{R as p}from"./zIndexSlice-Dc8AhsBR.js";import{C as s}from"./ComposedChart-BUiYgrq1.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BOYN2QnI.js";import{X as l}from"./XAxis-CkOknljo.js";import{Y as h}from"./YAxis-nAknvnvN.js";import{L as c}from"./Legend-DCZ3lJZn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DZ0rQEPQ.js";import"./index-DTEA-FIe.js";import"./index-C-XRKF5d.js";import"./index-Cx8Wpi4i.js";import"./index-Bo-C2AfN.js";import"./throttle-CFHzUNT1.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B6Hc05Ed.js";import"./resolveDefaultProps-BI7lk0Xh.js";import"./isWellBehavedNumber-CwdI5Moi.js";import"./d3-scale-Dc6IGH61.js";import"./renderedTicksSlice-CGX0B5OX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DeUsHf5g.js";import"./chartDataContext-BelA56cJ.js";import"./Layer-DjfrzuA0.js";import"./Curve-D4ESszCl.js";import"./types-sJxYiwgt.js";import"./step-DmsSDk4K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C_-SWE1b.js";import"./Label-CTFdx9tw.js";import"./Text-CjptF509.js";import"./DOMUtils-pu9LPEtL.js";import"./useId-BnCOmIJ8.js";import"./useBackwardsCompatibleTheme-4TZTHq_s.js";import"./ZIndexLayer-oyOyBp5p.js";import"./useAnimationId-BhzzmCcY.js";import"./ActivePoints-Bdd5ZL2k.js";import"./Dot-CatBtppS.js";import"./RegisterGraphicalItemId-B823gFGg.js";import"./ErrorBarContext-D8MkcOwe.js";import"./GraphicalItemClipPath-BKsG1i1n.js";import"./SetGraphicalItem-DB73g3d2.js";import"./getRadiusAndStrokeWidthFromDot-CEcgVwhz.js";import"./ActiveShapeUtils-bT-Xy9SL.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CMkdpaa1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-S6zB6E4A.js";import"./symbol-DVgX-W97.js";import"./useElementOffset-CvkVVO4z.js";import"./uniqBy-DL7Bhf0u.js";import"./iteratee-CRSpQ1DK.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
