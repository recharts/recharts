import{R as t}from"./iframe-DPP4Tdri.js";import{z as a}from"./RechartsWrapper-Dc5A4Gsl.js";import{R as p}from"./zIndexSlice-Bty8FlsF.js";import{C as n}from"./ComposedChart-CXeRVVMY.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D2KFCdB_.js";import{X as l}from"./XAxis-BpxUBGxx.js";import{Y as h}from"./YAxis-Ce7IYC8C.js";import{L as c}from"./Legend-OQCQPwo-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cm9tdCQy.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D5c_jQLf.js";import"./throttle-vvUvRomY.js";import"./index-DVADikfE.js";import"./index-De7017Q2.js";import"./polarAxisSelectors-CClqMsSX.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DzX31dlW.js";import"./index-Cb0QOEvK.js";import"./index-CTYPR5t0.js";import"./renderedTicksSlice-B_g7wt05.js";import"./index-C1bARSgS.js";import"./CartesianChart-_cTASiWq.js";import"./chartDataContext-BX3Xv7t3.js";import"./CategoricalChart-CkLeLS7-.js";import"./Layer-wOFD4jm5.js";import"./Curve-B2UCYZoR.js";import"./types-nPujXrb0.js";import"./step-3axEj_2-.js";import"./path-DyVhHtw_.js";import"./activeStyles-Czb_VVwe.js";import"./Label-VwhFHh0o.js";import"./Text-BtmpD8Z5.js";import"./pageBackground-km40Fien.js";import"./useId-Ddybgx-i.js";import"./ZIndexLayer-Blh-9Ce2.js";import"./dataEntryStyles-CptsKKQm.js";import"./useAnimationId-CRGpdxWH.js";import"./ActivePoints-DKXQv37u.js";import"./Dot-9cI0fI12.js";import"./Symbols-DAUL1Z82.js";import"./symbol-CyE3iFmu.js";import"./RegisterGraphicalItemId-C_PEUR1P.js";import"./ErrorBarContext-DA7VKoxZ.js";import"./SetGraphicalItem-me1Dq43s.js";import"./getRadiusAndStrokeWidthFromDot-CNoHTcoN.js";import"./ActiveShapeUtils-BRfAaZtt.js";import"./useEffectiveDataKey-CPqFi3kZ.js";import"./CartesianAxis-Cw8YZYZ1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DETypLP1.js";import"./uniqBy-B9BTqrOm.js";import"./iteratee-b2KlmUpP.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
