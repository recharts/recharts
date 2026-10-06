import{R as t}from"./iframe-CWlxxFHy.js";import{j as a}from"./RechartsWrapper-B211gnQK.js";import{R as p}from"./zIndexSlice-eChv8v5o.js";import{C as n}from"./ComposedChart-euduWCYe.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-85VhExuj.js";import{X as l}from"./XAxis-CaG1n6yG.js";import{Y as h}from"./YAxis-DLav1J7f.js";import{L as c}from"./Legend-C22flD7Y.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVJCZaPv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CY4U4PmW.js";import"./throttle-Cuwp_Om4.js";import"./index-COS8QMAe.js";import"./index-BmRJ-b8E.js";import"./isWellBehavedNumber-ChXHiBih.js";import"./d3-scale-OLXd5h8I.js";import"./index-CVuc-u2_.js";import"./index-uNGw9-ET.js";import"./renderedTicksSlice-BfstiInC.js";import"./index-C1WwnpLj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-3sXmRDbR.js";import"./chartDataContext-tJUp4txc.js";import"./CategoricalChart-D5zBV6NM.js";import"./Layer-bfSBtv71.js";import"./Curve-DlnhjhNv.js";import"./types-CjEkwpQR.js";import"./step-ClKKiZTa.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-mLTl2k4L.js";import"./Label-DN7T9GpD.js";import"./Text-th2Jn0HQ.js";import"./DOMUtils-Cr7AYV1x.js";import"./useId-pWQDKLmz.js";import"./useBackwardsCompatibleTheme-DcL_98G3.js";import"./ZIndexLayer-C0s9Ohbn.js";import"./useAnimationId-BVaZGbnp.js";import"./ActivePoints-DyM9bM1H.js";import"./Dot-CVl6koMA.js";import"./RegisterGraphicalItemId-C2KKr6Fw.js";import"./ErrorBarContext-BArOb86o.js";import"./GraphicalItemClipPath-BZhOYfMs.js";import"./SetGraphicalItem-tjuShIDU.js";import"./getRadiusAndStrokeWidthFromDot-DJ40vw26.js";import"./ActiveShapeUtils-CN9JJwYa.js";import"./useGraphicalItemIdentity-BaE4xim7.js";import"./CartesianAxis-I-oV71yY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-rlV4L3Ga.js";import"./symbol-ECeymSrI.js";import"./useElementOffset-CpS3sFWC.js";import"./uniqBy-C1aAohnG.js";import"./iteratee-CYY7QzLS.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
