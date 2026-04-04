import{e as t}from"./iframe-DUJvjQLt.js";import{P as a}from"./PlotAreaShower-C2224vVQ.js";import{c as p}from"./hooks-yQB_dM7s.js";import{R as s}from"./arrayEqualityCheck-D73e69Gl.js";import{C as n}from"./ComposedChart-ClTTKAwr.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CKYIKoib.js";import{X as h}from"./XAxis-CDduZbSd.js";import{Y as c}from"./YAxis-5YVsvPvG.js";import{L as g}from"./Legend-GyXgLfQg.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BX1JxuVN.js";import"./immer-5FyrIQvG.js";import"./axisSelectors-sUoMIbfp.js";import"./d3-scale-DeFOwVvR.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-8ySwU0EB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CgMQObc0.js";import"./index-5w8w8rw4.js";import"./zIndexSlice-Bkmt5zDA.js";import"./renderedTicksSlice-CvJNCVvu.js";import"./CartesianChart-DJ5W1dUn.js";import"./chartDataContext-BQu7UVSx.js";import"./CategoricalChart-Fz_Uxhkr.js";import"./Layer-CllgDPqI.js";import"./ReactUtils-t-sHadM3.js";import"./Label-DTyf3h_b.js";import"./Text-xsfGunAq.js";import"./DOMUtils-DjWXT55X.js";import"./ZIndexLayer-CKSncrZg.js";import"./ActivePoints-B-iqIfRa.js";import"./Dot-CMPDiPBa.js";import"./types-CDGURZBi.js";import"./RegisterGraphicalItemId-D72lmnH7.js";import"./ErrorBarContext-DyOg8xi-.js";import"./GraphicalItemClipPath-CkZzGh0E.js";import"./SetGraphicalItem-vFCTqo9Z.js";import"./useAnimationId-Dw_qoDvw.js";import"./getRadiusAndStrokeWidthFromDot-BjM5ou8k.js";import"./ActiveShapeUtils-BpbAKqrS.js";import"./isPlainObject-Dz-OvCgD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxgoD1Qw.js";import"./Trapezoid-6uim8m8Z.js";import"./Sector-CpvLellE.js";import"./Symbols-uJbjONwG.js";import"./symbol-Dyd8e6t_.js";import"./step-Cx__dv2e.js";import"./Curve-VbNPleyE.js";import"./CartesianAxis-D5lD8t2m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CfhbCAoH.js";import"./uniqBy-CChSEAsS.js";import"./iteratee-DUBFzJp0.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
