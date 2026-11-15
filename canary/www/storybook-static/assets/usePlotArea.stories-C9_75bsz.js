import{R as t}from"./iframe-DQsNmxmG.js";import{z as a}from"./RechartsWrapper-MEg26Y_7.js";import{R as p}from"./zIndexSlice-fYCbSPba.js";import{C as n}from"./ComposedChart-CViFtKa3.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C3FLWaiJ.js";import{X as l}from"./XAxis-BeNbg6hp.js";import{Y as h}from"./YAxis-D-cWoYYZ.js";import{L as c}from"./Legend-Bw2hlUcx.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C9L4dsEq.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BsRkt3Xk.js";import"./throttle-zQAbuFwu.js";import"./index-6jBLt3fF.js";import"./index-DieS8gnr.js";import"./polarAxisSelectors-B-0rkllN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BIy4_L5R.js";import"./index-CbIjVRAX.js";import"./index-CCZsgeAv.js";import"./renderedTicksSlice-vSa4eBxF.js";import"./index-Cq0Y-kP9.js";import"./fillDefinitions-CxoYZDG2.js";import"./CartesianChart-B32Zddgy.js";import"./chartDataContext-S0JtTO97.js";import"./CategoricalChart-CKZnphjR.js";import"./Layer-JjdEQyi5.js";import"./Curve-C5fpylM9.js";import"./types-wkisKABV.js";import"./step-pQrH6ncJ.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CArKPFy6.js";import"./Label-BGoCqB35.js";import"./Text-Qtf5nEek.js";import"./ZIndexLayer-DJNsuc82.js";import"./ActivePoints-BlJUvkga.js";import"./Dot-CyU-jpb1.js";import"./activeStyles-BgO2Wbsx.js";import"./useAnimationId-CfQHWCsS.js";import"./Symbols-CXxuzOPp.js";import"./symbol-0bvODblh.js";import"./ErrorBarContext-WH4H2KKq.js";import"./SetGraphicalItem-BG-GEzcM.js";import"./getRadiusAndStrokeWidthFromDot-B1d6CA7m.js";import"./ActiveShapeUtils-t6nFfTlu.js";import"./useEffectiveDataKey-CR-coZ9_.js";import"./CartesianAxis-Crywq0Oq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Cpkvj5mB.js";import"./uniqBy-sQmteKOL.js";import"./iteratee-v4pwgsAc.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
