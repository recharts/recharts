import{R as t}from"./iframe-8C24Tydd.js";import{z as a}from"./RechartsWrapper-CN9elUVX.js";import{R as p}from"./zIndexSlice-Dw4Oq4dL.js";import{C as n}from"./ComposedChart-B4z2qb51.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CdXXfIAJ.js";import{X as l}from"./XAxis-CI8sx2Rv.js";import{Y as h}from"./YAxis-jbouJBfL.js";import{L as c}from"./Legend-C8p-zLrz.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-jF8yDnYL.js";import"./get-cF5BDHN6.js";import"./axisSelectors-wolYJBqC.js";import"./throttle-BnR0knX4.js";import"./index-BZrrsPsq.js";import"./index-B9s4wujy.js";import"./polarAxisSelectors-OkcN41hW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DhysOGqs.js";import"./index-C0a8p3x4.js";import"./index-DTGVc3OM.js";import"./renderedTicksSlice-pib7h8IS.js";import"./index-DqK9E7FS.js";import"./fillDefinitions-DW2cY3tE.js";import"./CartesianChart-CGDUobj1.js";import"./chartDataContext-31zmIAvn.js";import"./CategoricalChart-Bwnqw4e-.js";import"./Layer-D45TlyFk.js";import"./Curve-BP7tIwQM.js";import"./types-BD1-xaIs.js";import"./step-lTKWXilO.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-XtYPtKfF.js";import"./Label-D_2s_KcH.js";import"./Text-CBQ4JzNL.js";import"./ZIndexLayer-DlPMEPXU.js";import"./ActivePoints-Dhsdw6YW.js";import"./Dot-BqqZJubD.js";import"./activeStyles-D92_uiFB.js";import"./useAnimationId-CvLS5yyi.js";import"./Symbols-CsqovMSS.js";import"./symbol-C5k6tAwY.js";import"./ErrorBarContext-CfhLJDta.js";import"./SetGraphicalItem-BzYY5Na5.js";import"./getRadiusAndStrokeWidthFromDot-B9BUEQWm.js";import"./ActiveShapeUtils-CytN3lSp.js";import"./useEffectiveDataKey-DR3UcTsu.js";import"./CartesianAxis-CNwz3srm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BHUchDOx.js";import"./uniqBy-ChjuKGB9.js";import"./iteratee-23TXNM0i.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
