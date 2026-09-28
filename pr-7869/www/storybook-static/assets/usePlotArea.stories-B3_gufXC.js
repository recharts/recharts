import{R as t}from"./iframe-B0ZE5sWn.js";import{j as a}from"./RechartsWrapper-D_J70Kvy.js";import{R as p}from"./zIndexSlice-CRYD7Kkj.js";import{C as n}from"./ComposedChart-B-9abW7J.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-ChohRp9N.js";import{X as l}from"./XAxis-DxhJhgqY.js";import{Y as h}from"./YAxis-CIOXXUEI.js";import{L as c}from"./Legend-DSA6M2et.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DkU3qXBk.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CmZ6PEb7.js";import"./throttle-D8bbTBc2.js";import"./index-DSEHXiiH.js";import"./index-CVaJFnop.js";import"./isWellBehavedNumber-c-pVuqcz.js";import"./d3-scale-BSLND3-m.js";import"./index-CUIhphZ8.js";import"./index-CrLSWODu.js";import"./renderedTicksSlice-2DEyX82P.js";import"./index-x3K7igv_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DEyr3eWS.js";import"./chartDataContext-C_Y-GQC5.js";import"./CategoricalChart-BW6OVLWc.js";import"./Layer-B5uUwgDJ.js";import"./Curve-DHsBKDuU.js";import"./types-CvLOqkZ2.js";import"./step-CGkCO3y3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DDDw_SSj.js";import"./Label-CDRY23He.js";import"./Text-hT0G9UKp.js";import"./DOMUtils-BtIen-TW.js";import"./useId-CIOpxIEE.js";import"./useBackwardsCompatibleTheme-C9hE96Ha.js";import"./ZIndexLayer-COO7NwIi.js";import"./useAnimationId-xIPnyE2V.js";import"./ActivePoints-jrQT7wQp.js";import"./Dot-BuzDkghy.js";import"./RegisterGraphicalItemId-DvHsssZk.js";import"./ErrorBarContext-DIoqVk5E.js";import"./GraphicalItemClipPath-CP8DwxaV.js";import"./SetGraphicalItem-AgCaMkoB.js";import"./getRadiusAndStrokeWidthFromDot-fsgEyTwP.js";import"./ActiveShapeUtils-DW159Z87.js";import"./useGraphicalItemIdentity-DKLRMGU-.js";import"./CartesianAxis-Cze39DWA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CxhmSzKz.js";import"./symbol-aNk_0Slx.js";import"./useElementOffset-DRtIxZBy.js";import"./uniqBy-MZlHu-wY.js";import"./iteratee-2ZaQLBwO.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
