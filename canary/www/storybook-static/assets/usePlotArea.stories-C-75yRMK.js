import{R as t}from"./iframe-AEyLiqgG.js";import{j as a}from"./RechartsWrapper-r-JuCoEl.js";import{R as p}from"./zIndexSlice-D63QIr0o.js";import{C as n}from"./ComposedChart-d9_wimj2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CatYAh6P.js";import{X as l}from"./XAxis-DSCoP0BT.js";import{Y as h}from"./YAxis-C0feA8qB.js";import{L as c}from"./Legend-CGRJoQgZ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DP3BTRCk.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Drhca-__.js";import"./throttle-Bat5tgt5.js";import"./index-C1HLBiKP.js";import"./index-DRegLE30.js";import"./isWellBehavedNumber-CgqhIRbA.js";import"./d3-scale-BLrrudvV.js";import"./index-qjC2aIyR.js";import"./index-BZWHGH__.js";import"./renderedTicksSlice-CAIsZf4o.js";import"./index-DlIzpnmQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DnWnPxAf.js";import"./chartDataContext-D_5ADK7F.js";import"./CategoricalChart-h7ez30w9.js";import"./Layer-vEMMDrrH.js";import"./Curve-XYWVXy9Z.js";import"./types-C4U-Yuut.js";import"./step-Dc7t_wqW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Du4BhFIJ.js";import"./Label-dgv50JbQ.js";import"./Text-CjbzIRNa.js";import"./DOMUtils-D23knL3w.js";import"./useId-CE7L0gFR.js";import"./useBackwardsCompatibleTheme-BeLYcOfU.js";import"./ZIndexLayer-CKKDdXeu.js";import"./useAnimationId-DhGl4rOB.js";import"./ActivePoints-DgZdabsv.js";import"./Dot-DYEfFyl7.js";import"./RegisterGraphicalItemId-CBHkDVSs.js";import"./ErrorBarContext-BCLiwnce.js";import"./GraphicalItemClipPath-TjZaHmNz.js";import"./SetGraphicalItem-D3eOc8Q8.js";import"./getRadiusAndStrokeWidthFromDot-BJa_7REZ.js";import"./ActiveShapeUtils-Cns3WvQL.js";import"./useGraphicalItemIdentity-Cs1UF85t.js";import"./CartesianAxis-NrPVgzth.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CWkUHkI3.js";import"./symbol-XbD5iFXW.js";import"./useElementOffset-__RE1Pit.js";import"./uniqBy-DLTO14X5.js";import"./iteratee-Bm9lS3_Q.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
