import{R as t}from"./iframe-DcaMyu57.js";import{z as a}from"./RechartsWrapper-s9QE5BnJ.js";import{R as p}from"./zIndexSlice-D63TC5wE.js";import{C as n}from"./ComposedChart-Ccm1rBcn.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-qfkHf2wW.js";import{X as l}from"./XAxis-CpQfhxVu.js";import{Y as h}from"./YAxis-Ctjpx2tI.js";import{L as c}from"./Legend-BonTCLAv.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BIhtVjr1.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DeMGjxl4.js";import"./throttle-DTKuFpeU.js";import"./index-LUaWadAh.js";import"./index-C1eYPsJe.js";import"./polarAxisSelectors-C8YroQFB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CtXzbLe9.js";import"./index-DhjSPGN6.js";import"./index-CGLqJivQ.js";import"./renderedTicksSlice-B7oGrXiB.js";import"./index-CZJeyZvE.js";import"./CartesianChart-Doy7puzJ.js";import"./chartDataContext-Cvuxfrl6.js";import"./CategoricalChart-Oo-gpddM.js";import"./Layer-Buw-ejS2.js";import"./Curve-zPXLC5y1.js";import"./types-CezfUA9a.js";import"./step-DwnhkCIy.js";import"./path-DyVhHtw_.js";import"./activeStyles-DWP2-Wsz.js";import"./Label-CNqQQqDH.js";import"./Text-BDVAjJGp.js";import"./pageBackground-DJiDI2js.js";import"./useId-2CjiTV-a.js";import"./ZIndexLayer-BAtegXWd.js";import"./dataEntryStyles-Dvqex9ju.js";import"./useAnimationId-CY8QIDMT.js";import"./ActivePoints-ByVehSZn.js";import"./Dot-DNgNZq3J.js";import"./Symbols-0k-WiD9E.js";import"./symbol-uzrYNuoI.js";import"./RegisterGraphicalItemId-Bf7_3i_n.js";import"./ErrorBarContext-4Q2l69vj.js";import"./SetGraphicalItem-CCEEUI7s.js";import"./getRadiusAndStrokeWidthFromDot-brVJexwW.js";import"./ActiveShapeUtils-EJ-BM8cF.js";import"./useEffectiveDataKey-90ZX8Dti.js";import"./CartesianAxis-CeZT8ZwV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BZhsAoPk.js";import"./uniqBy-Debw3FXq.js";import"./iteratee-DfBVt2Tm.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
