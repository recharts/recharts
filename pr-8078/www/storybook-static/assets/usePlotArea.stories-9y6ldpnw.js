import{R as t}from"./iframe-DQVzMSYD.js";import{z as a}from"./RechartsWrapper-C-LDIUUV.js";import{R as p}from"./zIndexSlice-COaPk7HG.js";import{C as n}from"./ComposedChart-C_Pl0aog.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D2xiXoDa.js";import{X as l}from"./XAxis-EcPa3Cb-.js";import{Y as h}from"./YAxis-C77qq_aV.js";import{L as c}from"./Legend-DU-_KOMG.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B_q_xmSS.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D2aZ2Nk7.js";import"./throttle-RO9RTr3r.js";import"./index-BwLkx-9j.js";import"./index-E8O3UkuU.js";import"./polarAxisSelectors-BSp_MBDw.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CB3Nn2aV.js";import"./index-mH-U0iC2.js";import"./index-BedQbpOM.js";import"./renderedTicksSlice-h-EAnLPI.js";import"./index-eU6OKF0g.js";import"./CartesianChart-DUEad30c.js";import"./chartDataContext-FD6VhEJQ.js";import"./CategoricalChart-Doih-QNH.js";import"./Layer-Bj9bz4HQ.js";import"./Curve-Bt3n70L8.js";import"./types-DP1nwDJM.js";import"./step-BQC9MPym.js";import"./path-DyVhHtw_.js";import"./activeStyles-BOapb_qi.js";import"./Label-D0zJX0d_.js";import"./Text-CPLLX1IN.js";import"./pageBackground-Bn8h5x5L.js";import"./useId-DXg-zq7I.js";import"./ZIndexLayer-BnIZToy7.js";import"./dataEntryStyles-CJ67-Ft7.js";import"./useAnimationId-BChg9XFS.js";import"./ActivePoints-rQZSXr73.js";import"./Dot-BkzLITlZ.js";import"./RegisterGraphicalItemId-B0YbUPXE.js";import"./ErrorBarContext-CI8iDnvM.js";import"./SetGraphicalItem-DFlRgyvC.js";import"./getRadiusAndStrokeWidthFromDot-C00hbLzP.js";import"./ActiveShapeUtils-Cp3IBj9J.js";import"./useEffectiveDataKey-CkAzTA5N.js";import"./CartesianAxis-D4euaSSo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CiPXHPgW.js";import"./symbol-C1jDOFfw.js";import"./useElementOffset-DyUzreY7.js";import"./uniqBy-BJn9ALDR.js";import"./iteratee-BPCNyx3w.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
