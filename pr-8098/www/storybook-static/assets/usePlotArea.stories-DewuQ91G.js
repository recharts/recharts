import{R as t}from"./iframe-CEQushtN.js";import{z as a}from"./RechartsWrapper-DXBxSHCJ.js";import{R as p}from"./zIndexSlice-DjNM_HLz.js";import{C as n}from"./ComposedChart-BlLv9QRG.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-RGSptLoh.js";import{X as l}from"./XAxis-Dox0Mf_6.js";import{Y as h}from"./YAxis-CO7P54oT.js";import{L as c}from"./Legend-BnmhZmMZ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CyZKvMPR.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DQduFkeJ.js";import"./throttle-D-s41lqW.js";import"./index-BtHOWWHr.js";import"./index-Dij9Lyzg.js";import"./polarAxisSelectors-S5DqA3LI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BWM46Ydz.js";import"./index-BdO45VT9.js";import"./index-CoxdILWo.js";import"./renderedTicksSlice-BiOzFX7m.js";import"./index-BB4PCvH7.js";import"./CartesianChart-BcxOd9Ut.js";import"./ZIndexPortal-pBjad6tL.js";import"./CategoricalChart-gEK0X1ot.js";import"./Layer-C3v_EKIk.js";import"./Curve-C2Lci0Z6.js";import"./types-CPVpRlsk.js";import"./step-BbPJEBHq.js";import"./path-DyVhHtw_.js";import"./LabelList-DwlBaftj.js";import"./Label-CFJJzt7V.js";import"./Text-CmoBCOlM.js";import"./pageBackground-QlEa7JV2.js";import"./ZIndexLayer-DtsqWk3z.js";import"./dataEntryStyles-BlFVEHbT.js";import"./ActivePoints-DJ2RJcRF.js";import"./Dot-CuIjyWbv.js";import"./activeStyles-6x5lKRrB.js";import"./useAnimationId-CzbeFnj4.js";import"./Symbols-C3N2Nfx0.js";import"./symbol-DSj-rHxT.js";import"./RegisterGraphicalItemId-CVBDPhvw.js";import"./ErrorBarContext-CpznhA_J.js";import"./SetGraphicalItem-D60Grc7B.js";import"./getRadiusAndStrokeWidthFromDot-CzdVPXFS.js";import"./ActiveShapeUtils-D8RrSuBC.js";import"./useEffectiveDataKey-BKKYPJCk.js";import"./CartesianAxis-Df5o-IJd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DWKbuRf4.js";import"./uniqBy-DDpW34LG.js";import"./iteratee-DFqopvcF.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
