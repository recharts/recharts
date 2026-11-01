import{R as t}from"./iframe-D4WxERWR.js";import{z as a}from"./RechartsWrapper-BABrVhwD.js";import{R as p}from"./zIndexSlice-Ctb-XE3r.js";import{C as n}from"./ComposedChart-Bw102KtD.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-umjtcrXx.js";import{X as l}from"./XAxis-CSUQYPZm.js";import{Y as h}from"./YAxis-oI30KIzY.js";import{L as c}from"./Legend-BdsZ9eSK.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CcZJ3F4Z.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CDo6nEPG.js";import"./throttle-YSLka_uT.js";import"./index-DBKc-d7M.js";import"./index-BrtN9C6M.js";import"./polarAxisSelectors-29BSG3By.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DUPxeW1L.js";import"./index-CN65hpd1.js";import"./index-CSWYxHgR.js";import"./renderedTicksSlice-nOQMzdpc.js";import"./index-DUxamRCa.js";import"./fillDefinitions-LA2OUO3V.js";import"./CartesianChart-CoO-_Rza.js";import"./ZIndexPortal-CgOieTb4.js";import"./CategoricalChart-BsaTkIBD.js";import"./Layer-Cql_Pemo.js";import"./Curve-CCgKIDxa.js";import"./types-Bl0q8uU6.js";import"./step-BXgucIl4.js";import"./path-DyVhHtw_.js";import"./LabelList-CQQZHleH.js";import"./Label-DI6ASMtN.js";import"./Text-DwZS23az.js";import"./DOMUtils-Dfn1BJxK.js";import"./ZIndexLayer-Czs-NT3b.js";import"./ActivePoints-CTDmaIKH.js";import"./Dot--NIPiAHj.js";import"./activeStyles-BIi7TIST.js";import"./useAnimationId-VHvbbifh.js";import"./dataEntryStyles-Q9NassVy.js";import"./Symbols-C5JQpjZ0.js";import"./symbol-DvMe5rhC.js";import"./ErrorBarContext-f8d14flb.js";import"./SetGraphicalItem-BTGcX_vm.js";import"./getRadiusAndStrokeWidthFromDot-DuPKRIUg.js";import"./ActiveShapeUtils-ExAh61OK.js";import"./useEffectiveDataKey-BiVeMsFi.js";import"./CartesianAxis-CWiuRNLE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DucCROoJ.js";import"./uniqBy-D_80LO3-.js";import"./iteratee-CWtaTKWH.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
