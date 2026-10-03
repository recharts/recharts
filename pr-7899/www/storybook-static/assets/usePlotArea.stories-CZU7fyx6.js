import{R as t}from"./iframe-Bi3q5ica.js";import{j as a}from"./RechartsWrapper-BIVD6JFp.js";import{R as p}from"./zIndexSlice-3OSmdeIU.js";import{C as n}from"./ComposedChart-BJ-4k_4i.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BE5Ogd3G.js";import{X as l}from"./XAxis-hhEBl8YN.js";import{Y as h}from"./YAxis-C54oD4nc.js";import{L as c}from"./Legend-CKkxm3dE.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DHzWDEtS.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BxvzYEcA.js";import"./throttle-CZI3Ns_R.js";import"./index-B0qzmCsN.js";import"./index-BFXu3aHt.js";import"./isWellBehavedNumber-DYrnpjB-.js";import"./d3-scale-Dy9_TWZx.js";import"./index-ngMl_c_9.js";import"./index-BUn-OEAP.js";import"./renderedTicksSlice-DRFwN4j3.js";import"./index-BVwc-Jau.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dl2J0BS7.js";import"./chartDataContext-D-hMyVvi.js";import"./CategoricalChart-hTIoEyr2.js";import"./Layer-CtQIi_dM.js";import"./Curve-C2iAxlmR.js";import"./types-3e9Y1DlN.js";import"./step-BPB7nuaq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C5QOwiw_.js";import"./Label-BY0KH6BI.js";import"./Text-Dc41Ok3C.js";import"./DOMUtils-Daz026gj.js";import"./useId-WQ4DmC28.js";import"./useBackwardsCompatibleTheme-CbD5lCDD.js";import"./ZIndexLayer-D_YH5dyV.js";import"./useAnimationId-Wfo4M9rJ.js";import"./ActivePoints-DNbrAlaG.js";import"./Dot-8HK_808i.js";import"./RegisterGraphicalItemId-DY8suQGI.js";import"./ErrorBarContext-Tsgmsoyf.js";import"./GraphicalItemClipPath-DaMNa-IP.js";import"./SetGraphicalItem-ChWBfBoT.js";import"./getRadiusAndStrokeWidthFromDot-Co8c106b.js";import"./ActiveShapeUtils-CMwbxzD5.js";import"./useGraphicalItemIdentity-BkNHKZMP.js";import"./CartesianAxis-BXx4NBAG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DqOq9bgq.js";import"./symbol-DuoL-nUS.js";import"./useElementOffset-Cv1kBb51.js";import"./uniqBy-DtuySXID.js";import"./iteratee-9Tj9By3u.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
