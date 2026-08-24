import{R as t}from"./iframe-OWn8oF1A.js";import{u as a}from"./CategoricalChart-CCczjnIs.js";import{R as p}from"./zIndexSlice-CwJzB82v.js";import{C as s}from"./ComposedChart-DQm885rX.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DkBHzBVs.js";import{X as l}from"./XAxis-CCMr852Y.js";import{Y as h}from"./YAxis-CRJnLbnO.js";import{L as c}from"./Legend-BAxAQ2CS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-i1jsdj22.js";import"./index-CM0MgkCu.js";import"./index-C9Vm6jKM.js";import"./index-CrP56Nug.js";import"./index-NwmZ423s.js";import"./throttle-DWaXsXNb.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BcSe1XYn.js";import"./resolveDefaultProps-IEje57sC.js";import"./isWellBehavedNumber-BZ7ES7WU.js";import"./d3-scale-CwANqbyk.js";import"./renderedTicksSlice-Sc5c_SM5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D8znfAM6.js";import"./chartDataContext-fxx91kDP.js";import"./Layer-CqyZBrFC.js";import"./Curve-CeJvEjjA.js";import"./types-qoS_u5dB.js";import"./step-D_RWTSpX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_CvB9alV.js";import"./Label-AqmTYyGt.js";import"./Text-P3K5HdaU.js";import"./DOMUtils-DW9lfnAW.js";import"./useId-BS68P7zj.js";import"./useBackwardsCompatibleTheme-B7aULi62.js";import"./ZIndexLayer-C9URSHi7.js";import"./useAnimationId-B2Oo-Kvv.js";import"./ActivePoints-nFn7e4bI.js";import"./Dot-COcUPaQ9.js";import"./RegisterGraphicalItemId-zybFqkLh.js";import"./ErrorBarContext-BicDrW-x.js";import"./GraphicalItemClipPath-BKywaUa4.js";import"./SetGraphicalItem-BiApMsd9.js";import"./getRadiusAndStrokeWidthFromDot-DqQ5ADme.js";import"./ActiveShapeUtils-5n9-MhSP.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DE3Bauq7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols--FRgZ-u1.js";import"./symbol-BSDGb50L.js";import"./useElementOffset-CL4Ag10e.js";import"./uniqBy-C7xqcq1F.js";import"./iteratee-Co34_xBw.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
