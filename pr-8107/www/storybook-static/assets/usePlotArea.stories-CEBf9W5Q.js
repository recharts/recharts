import{R as t}from"./iframe-BGa_aXYV.js";import{z as a}from"./RechartsWrapper-BTlrgf4s.js";import{R as p}from"./zIndexSlice-Ck6l0OZs.js";import{C as n}from"./ComposedChart-wHTG2hfS.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Y16V4sUQ.js";import{X as l}from"./XAxis-CE3oHyxg.js";import{Y as h}from"./YAxis-CP1brurK.js";import{L as c}from"./Legend-Dilw1X-J.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps--MxbOSxe.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BhlTci4j.js";import"./throttle-odPHgumR.js";import"./index-wG94lJw7.js";import"./index-Bi5RYh62.js";import"./polarAxisSelectors-DZZ_sV95.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D32hxSnZ.js";import"./index-CCS8tdiB.js";import"./index-_XAYd-SQ.js";import"./renderedTicksSlice-D_6jJO7k.js";import"./index-DF81NAeA.js";import"./CartesianChart-BVZLzzem.js";import"./ZIndexPortal-yBnaKAUB.js";import"./CategoricalChart-C-tokN3T.js";import"./Layer-Bzj9T_Rp.js";import"./Curve-yqHv3532.js";import"./types-BlkSdkM7.js";import"./step-Bk4v6FYF.js";import"./path-DyVhHtw_.js";import"./LabelList-dSe8emrx.js";import"./Label-Bzq01dK8.js";import"./Text-mATLrig6.js";import"./pageBackground-BUMPEk7V.js";import"./ZIndexLayer-D3eS8Esu.js";import"./ActivePoints-CflJ3BqH.js";import"./Dot-DIjQdgeX.js";import"./activeStyles-DZX2Soqz.js";import"./useAnimationId-BY6DYNe9.js";import"./dataEntryStyles-3sm9ZLw4.js";import"./Symbols-D-n9Z7lT.js";import"./symbol-CZaSDg5i.js";import"./ErrorBarContext-DCAq7oKy.js";import"./SetGraphicalItem-Ds0lF9cJ.js";import"./getRadiusAndStrokeWidthFromDot-Dl4gueRZ.js";import"./ActiveShapeUtils-Luuswf_P.js";import"./useEffectiveDataKey-D5yK2eiQ.js";import"./CartesianAxis-D2QFH6SB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-PZh3tzwx.js";import"./uniqBy-BD2wLUuV.js";import"./iteratee-GuFU32s6.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
