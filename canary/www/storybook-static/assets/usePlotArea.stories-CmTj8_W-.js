import{R as t}from"./iframe-r3x3_yf4.js";import{z as a}from"./RechartsWrapper-_voIQt-f.js";import{R as p}from"./zIndexSlice-NMb2vrpT.js";import{C as n}from"./ComposedChart-mqslB1oF.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DTsRfFau.js";import{X as l}from"./XAxis-CR4ARCer.js";import{Y as h}from"./YAxis-DqWMDxyr.js";import{L as c}from"./Legend-B6b6ZtFX.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D1EJxC7c.js";import"./get-cF5BDHN6.js";import"./axisSelectors-vmwSvweQ.js";import"./throttle-8hacI6eE.js";import"./index-DCzxVT24.js";import"./index-BmCC5OWu.js";import"./polarAxisSelectors-jpdu1VNr.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dyg5lSMz.js";import"./index-CXlPhSWr.js";import"./index-Br7b2-_x.js";import"./renderedTicksSlice-Bwv1Ycq-.js";import"./index-XR02wMNZ.js";import"./fillDefinitions-6lmPyfb7.js";import"./CartesianChart-Cu7l70fA.js";import"./chartDataContext-ZH5Padeo.js";import"./CategoricalChart-B9Dtz71g.js";import"./Layer-Bgw_1AH_.js";import"./Curve-D6X3Km74.js";import"./types-C8JZdNIX.js";import"./step-iF2C6urg.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CPsjZ3pD.js";import"./Label-C--_kXjw.js";import"./Text-BJw7R8d_.js";import"./ZIndexLayer-U0OKF9Zk.js";import"./ActivePoints-Cjc4G9GK.js";import"./Dot-CLqyjgQR.js";import"./activeStyles-TIYUw2JD.js";import"./useAnimationId-EE0FjekO.js";import"./Symbols-C3Jeo7wF.js";import"./symbol-BJuLtVcg.js";import"./ErrorBarContext-U5wRur_B.js";import"./SetGraphicalItem-C13buv2r.js";import"./getRadiusAndStrokeWidthFromDot-Bt8N-NmA.js";import"./ActiveShapeUtils-Dpt4d3xT.js";import"./useEffectiveDataKey-CUQD41kZ.js";import"./CartesianAxis-D0GcJHV6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Bty5qG4M.js";import"./uniqBy-B7Rcd-R6.js";import"./iteratee-Bw3PE4p8.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
