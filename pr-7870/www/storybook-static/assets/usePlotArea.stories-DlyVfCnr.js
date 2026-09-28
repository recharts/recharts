import{R as t}from"./iframe-DfzMHjuD.js";import{j as a}from"./RechartsWrapper-Btc41qHc.js";import{R as p}from"./zIndexSlice-D65nx7n2.js";import{C as n}from"./ComposedChart-BZJdnfJq.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CXIUk8YQ.js";import{X as l}from"./XAxis-CcmvQ4-M.js";import{Y as h}from"./YAxis-CYvNJGV-.js";import{L as c}from"./Legend-D5XVzkm8.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BhiSE-fR.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dv8-JHab.js";import"./throttle-B4jaia1x.js";import"./index-DQvdEvgc.js";import"./index-CHbvF_w5.js";import"./isWellBehavedNumber-B84GX6Iq.js";import"./d3-scale-DkoGb7PH.js";import"./index-CrtWwB5P.js";import"./index-CHqtXhJ0.js";import"./renderedTicksSlice-YMBm5Aq7.js";import"./index-D-FQmlHp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CgfuN-gF.js";import"./chartDataContext-BU-za_rr.js";import"./CategoricalChart-BaFSqBAh.js";import"./Layer-BgMBl2n9.js";import"./Curve-BLtOpFAf.js";import"./types-BoXpTlVd.js";import"./step-9PcWzaJ_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D8ukjbdC.js";import"./Label-DHYmqyDD.js";import"./Text-KIvPk-oI.js";import"./DOMUtils-DZvMhBn7.js";import"./useId-jHWdyPm9.js";import"./useBackwardsCompatibleTheme-BN8Sccns.js";import"./ZIndexLayer-DjEP4vsT.js";import"./useAnimationId-BwLSFp-D.js";import"./ActivePoints-CQoPkIu-.js";import"./Dot-CVblHFHD.js";import"./RegisterGraphicalItemId-FhHKtG3E.js";import"./ErrorBarContext-CbViVQBZ.js";import"./GraphicalItemClipPath-qYVsG-0u.js";import"./SetGraphicalItem-CfEkxgRj.js";import"./getRadiusAndStrokeWidthFromDot-BDWnIHrh.js";import"./ActiveShapeUtils-CUP96Mlj.js";import"./useGraphicalItemIdentity-CnOmH2BL.js";import"./CartesianAxis-B2_CRuSv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C-vyMKGy.js";import"./symbol-B2B_dEQS.js";import"./useElementOffset-WbfHTGT4.js";import"./uniqBy-BbVKU46e.js";import"./iteratee-Biw9ni9t.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
