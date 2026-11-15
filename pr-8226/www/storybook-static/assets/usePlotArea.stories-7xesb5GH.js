import{R as t}from"./iframe-Bah9cDPf.js";import{z as a}from"./RechartsWrapper-CuqmEJPa.js";import{R as p}from"./zIndexSlice-D6NwopLq.js";import{C as n}from"./ComposedChart-082vf-Dq.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CdLhYhot.js";import{X as l}from"./XAxis-CUlouZeJ.js";import{Y as h}from"./YAxis-I4iqsmgp.js";import{L as c}from"./Legend-BjuW9Ec3.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-zC5o00WN.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BJF83DO6.js";import"./throttle-BjlLZ4wO.js";import"./index-D6Fwvcda.js";import"./index-CvqzOiHn.js";import"./polarAxisSelectors-CEDelL9A.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BLITEdPK.js";import"./index-FRb1AgAe.js";import"./index-CadkBFdQ.js";import"./renderedTicksSlice-CiPoI8vI.js";import"./index-flr5alNa.js";import"./fillDefinitions-BbHKQE2Y.js";import"./CartesianChart-DT-YIr9t.js";import"./chartDataContext-9AmAFOH8.js";import"./CategoricalChart-DcONsU4c.js";import"./Layer-CD06LZri.js";import"./Curve-KDiJn0MP.js";import"./types-C6A66RfZ.js";import"./step-CoC1wfrs.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BkXi-SmE.js";import"./Label-BLtLxFh_.js";import"./Text-Ct-0y4jN.js";import"./ZIndexLayer-DdBSJIQM.js";import"./ActivePoints-CMlYxCeA.js";import"./Dot-OGnZYrwe.js";import"./activeStyles-C-zEEDQQ.js";import"./useAnimationId-DEYdhNFn.js";import"./Symbols-CAXKij6d.js";import"./symbol-BgjIZi1V.js";import"./ErrorBarContext-BtmuWUeb.js";import"./SetGraphicalItem-DSHrOFY_.js";import"./getRadiusAndStrokeWidthFromDot-DWUFIa-L.js";import"./ActiveShapeUtils-CHFZOTDo.js";import"./useEffectiveDataKey-cBqedM3V.js";import"./CartesianAxis-Bt_lCqiI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Bd4rfpxM.js";import"./uniqBy-xNCP_Qij.js";import"./iteratee-C8Fc8Asa.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
