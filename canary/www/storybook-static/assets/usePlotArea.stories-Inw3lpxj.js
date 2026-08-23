import{R as t}from"./iframe-sd_X8bAz.js";import{u as a}from"./CategoricalChart-Cqi_maR-.js";import{R as p}from"./zIndexSlice-DbArepHL.js";import{C as s}from"./ComposedChart-CKHYOg18.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-8sAwTSHM.js";import{X as l}from"./XAxis-DWsFwFJj.js";import{Y as h}from"./YAxis-C2ggo4hE.js";import{L as c}from"./Legend-DjqwkuTB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DMlKTkdw.js";import"./index-zmb0gbyG.js";import"./index-DZ983I6W.js";import"./index-DQHeaU2g.js";import"./index-B4I4wfZA.js";import"./throttle-2gz7Gpxn.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DssFyd1_.js";import"./resolveDefaultProps-bueunEgf.js";import"./isWellBehavedNumber-D-FFIB2G.js";import"./d3-scale-C-KqVawR.js";import"./renderedTicksSlice-BaC5qXRY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BDbsS6IT.js";import"./chartDataContext-B6Fdiy4W.js";import"./Layer-D66jRg_t.js";import"./Curve-VFw1Cyl5.js";import"./types-BfsDnBCz.js";import"./step-SkwaH9zG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B5JWoVFx.js";import"./Label-BPdPutID.js";import"./Text-BxgHUkK-.js";import"./DOMUtils-koMSW9nS.js";import"./useId-D6dXaFl8.js";import"./useBackwardsCompatibleTheme-CIVTy4Me.js";import"./ZIndexLayer-DVaVbWL-.js";import"./useAnimationId-iF8C_Nzd.js";import"./ActivePoints-Bx0X1g0d.js";import"./Dot-JozVq32O.js";import"./RegisterGraphicalItemId-1K3qw_t6.js";import"./ErrorBarContext-CETtzPB_.js";import"./GraphicalItemClipPath-CoP9pSKP.js";import"./SetGraphicalItem-DN7uVNhv.js";import"./getRadiusAndStrokeWidthFromDot-Bvk01GUs.js";import"./ActiveShapeUtils-CFyZWuxn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BBBNYOHg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DJnF0opw.js";import"./symbol-BkWBsow3.js";import"./useElementOffset-B-jJqGvW.js";import"./uniqBy-C6azmfxA.js";import"./iteratee-BS0tXoF4.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
