import{R as t}from"./iframe--N-T_hBz.js";import{z as a}from"./RechartsWrapper-Dga53r6u.js";import{R as p}from"./zIndexSlice-BrmEEgcV.js";import{C as n}from"./ComposedChart-Cmhus7DD.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DFZhpl4a.js";import{X as l}from"./XAxis-DdKAxJ7S.js";import{Y as h}from"./YAxis-DsuWS9IR.js";import{L as c}from"./Legend-CT_fuNBJ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BZdVkepW.js";import"./get-cF5BDHN6.js";import"./axisSelectors-dSJNPUYj.js";import"./throttle-DiHBngta.js";import"./index-CltnTfg9.js";import"./index-C2LKm9xK.js";import"./polarAxisSelectors-Ch50KZor.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-syhDUnOY.js";import"./index-DQLg1InC.js";import"./index-DSO52ANi.js";import"./renderedTicksSlice-C7C4TYLP.js";import"./index-BiiWPIDX.js";import"./fillDefinitions-DLkX59y8.js";import"./CartesianChart-DXdGkfOu.js";import"./chartDataContext-CXOzC9oO.js";import"./CategoricalChart-CbkCL8Oe.js";import"./Layer-1myxLhO2.js";import"./Curve-AUzua7kl.js";import"./types-CDdNjsiG.js";import"./step-BCTml7Sd.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CggySQjW.js";import"./Label-DcuyFpKL.js";import"./Text-B6x9BsBz.js";import"./ZIndexLayer-PDpl17Qr.js";import"./ActivePoints-BSj_UmGI.js";import"./Dot-MqsnkUih.js";import"./activeStyles-CQz5jccO.js";import"./useAnimationId-B0H5IbY6.js";import"./Symbols-DyIGA9sv.js";import"./symbol-Dc0-FYjy.js";import"./ErrorBarContext-Cxj8MR3w.js";import"./SetGraphicalItem-BuNZMI4X.js";import"./getRadiusAndStrokeWidthFromDot-C_-ClNXz.js";import"./ActiveShapeUtils-DxAwIp1Y.js";import"./useEffectiveDataKey-ehD4S_ma.js";import"./CartesianAxis-D25MAZFZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DwViDVhc.js";import"./uniqBy-Ba4jswSg.js";import"./iteratee-CiVllZTn.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
