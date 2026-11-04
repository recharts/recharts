import{R as t}from"./iframe-C1xjtyup.js";import{z as a}from"./RechartsWrapper-g7B-Y0pQ.js";import{R as p}from"./zIndexSlice-CK_7sDhl.js";import{C as n}from"./ComposedChart-9HbcDPNP.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BWnpbJBY.js";import{X as l}from"./XAxis-yfo5ibqs.js";import{Y as h}from"./YAxis-D19WlBcl.js";import{L as c}from"./Legend-hwTMgKrZ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BW194xym.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CL5t64V7.js";import"./throttle-DeB2d41h.js";import"./index-C89VIpwW.js";import"./index-D-Z5HFQV.js";import"./polarAxisSelectors-XOgxAb5A.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfSN9o3v.js";import"./index-B3Q9mRXR.js";import"./index-DZVn9IOu.js";import"./renderedTicksSlice-DT_F_kFQ.js";import"./index-DNbtHs3M.js";import"./fillDefinitions-Chc0NBrg.js";import"./CartesianChart-CiggLvKc.js";import"./ZIndexPortal-ltJzS4wp.js";import"./CategoricalChart-DLW54M1r.js";import"./Layer-DgAL7HSK.js";import"./Curve-BG_HxKHy.js";import"./types-BMA5Z4Oj.js";import"./step-pIDDNbPT.js";import"./path-DyVhHtw_.js";import"./LabelList-DlsMy8UK.js";import"./Label-rlFXaG67.js";import"./Text-dB1JvKf5.js";import"./DOMUtils-DjnwPC-N.js";import"./ZIndexLayer-BioPoHSu.js";import"./ActivePoints-CaE7-5dE.js";import"./Dot-D0EtM9Lh.js";import"./activeStyles-MqObX4-I.js";import"./useAnimationId-BHg-nTIp.js";import"./dataEntryStyles-CoAbyOEr.js";import"./Symbols-DFo4fcMi.js";import"./symbol-DYSn4PiC.js";import"./ErrorBarContext-DT5kzwJ3.js";import"./SetGraphicalItem-f1KdcC0B.js";import"./getRadiusAndStrokeWidthFromDot-Cp452xPJ.js";import"./ActiveShapeUtils-BJp5D_xQ.js";import"./useEffectiveDataKey-C_d_9it0.js";import"./CartesianAxis-gqJanQvj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-lJW-fFdI.js";import"./uniqBy-AdfipyG1.js";import"./iteratee-Cpl52XgC.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
