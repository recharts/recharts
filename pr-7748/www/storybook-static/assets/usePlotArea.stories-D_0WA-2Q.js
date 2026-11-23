import{R as t}from"./iframe-B5lEY8zD.js";import{z as a}from"./RechartsWrapper-Dry7ZWQ8.js";import{R as p}from"./zIndexSlice-BgROAb6p.js";import{C as n}from"./ComposedChart-Bet3bhVW.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-UBoMUVJK.js";import{X as l}from"./XAxis-DFQPNyZu.js";import{Y as h}from"./YAxis-B84b5tRH.js";import{L as c}from"./Legend-C1Ic0OQu.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bw4esZyQ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BghrQiEU.js";import"./throttle-B3jfQssg.js";import"./index-DOD6pO5N.js";import"./index-CrxBt4o0.js";import"./polarAxisSelectors-CnEvxLcF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Be2MBhun.js";import"./index-DK10suvB.js";import"./index-C_OJiFXB.js";import"./renderedTicksSlice-BBBAmkst.js";import"./index-DxvEKk7O.js";import"./fillDefinitions-BYW3BXfQ.js";import"./CartesianChart-BJrH5JsN.js";import"./chartDataContext-BJNaOkd4.js";import"./CategoricalChart-DELNesLI.js";import"./getRadiusAndStrokeWidthFromDot-DgSQ364K.js";import"./Layer-DvqCln2S.js";import"./Curve-Be0fUfaD.js";import"./types-DtlUuq-f.js";import"./step-C6UNokWX.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-XQ5o-AIv.js";import"./Label-BcoGvPAa.js";import"./Text-Bpx0HJU1.js";import"./ZIndexLayer-BKjofHlF.js";import"./ActivePoints-BD_17PNW.js";import"./Dot-qGe_2cJR.js";import"./activeStyles-CCUgVOTa.js";import"./useAnimationId-BR63270P.js";import"./Symbols-CpkCeDJ9.js";import"./symbol-CumbrPds.js";import"./ErrorBarContext-BW17ZVEc.js";import"./SetGraphicalItem-BlbgEltH.js";import"./ActiveShapeUtils-BtGosP0P.js";import"./useEffectiveDataKey-TbJa30kz.js";import"./CartesianAxis-C5RmfnOa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DI0jf-H9.js";import"./uniqBy-w7Bk0idQ.js";import"./iteratee-DlqZpNBR.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
