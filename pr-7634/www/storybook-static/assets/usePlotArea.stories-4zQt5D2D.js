import{R as t}from"./iframe-BKvNh1h_.js";import{u as a}from"./CategoricalChart-ByQYOV-Z.js";import{R as p}from"./zIndexSlice-C45OUbld.js";import{C as s}from"./ComposedChart-DVKY2yWi.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DHhB6lUX.js";import{X as l}from"./XAxis-Cpwb-IQX.js";import{Y as h}from"./YAxis-TFOOT7wp.js";import{L as c}from"./Legend-B19xbslo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bjdqnb5s.js";import"./index-LDeJ6IyG.js";import"./index-Bs0U2hFi.js";import"./index-LbIdVRN9.js";import"./index-C8RhipGY.js";import"./throttle-CCr4r-wz.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CqcxQY1m.js";import"./resolveDefaultProps-DkG3FLLb.js";import"./isWellBehavedNumber-CCuIO4aK.js";import"./d3-scale-C0LZPMhi.js";import"./renderedTicksSlice-CZ4-swon.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BRsslnmW.js";import"./chartDataContext-CYnF151M.js";import"./Layer-B8EPTqa2.js";import"./Curve-B1iKKL18.js";import"./types-BwPciZr7.js";import"./step-CFL-eQno.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-GpiTBXk9.js";import"./Label-D2RnPYt_.js";import"./Text-Uy9kBT6v.js";import"./DOMUtils-B6CNM4ee.js";import"./ZIndexLayer-Dc9WCXop.js";import"./useAnimationId-B6MPcNoZ.js";import"./ActivePoints-Db6v46Om.js";import"./Dot-jCktDg80.js";import"./RegisterGraphicalItemId-D3RFuNNX.js";import"./ErrorBarContext-BdGaK5EK.js";import"./GraphicalItemClipPath-CWTvD5fd.js";import"./SetGraphicalItem-B2KPFtj4.js";import"./getRadiusAndStrokeWidthFromDot-DisaDplY.js";import"./ActiveShapeUtils-Dl_5YuKK.js";import"./RechartsThemeContext-a-KGKEje.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BURSUJ7n.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CXb0Y0lK.js";import"./symbol-w5xUT4gq.js";import"./useElementOffset-16dn994i.js";import"./uniqBy-CpZLg9oD.js";import"./iteratee-CSiLF3kk.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
