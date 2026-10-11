import{R as t}from"./iframe-CwCc9vh-.js";import{e as a}from"./RechartsWrapper-BJt_1m2P.js";import{R as p}from"./zIndexSlice-Cze2qQ6L.js";import{C as n}from"./ComposedChart-CBS_Pqtt.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B99RZhj7.js";import{X as l}from"./XAxis-Ck9YwMSg.js";import{Y as h}from"./YAxis-5QleAohG.js";import{L as c}from"./Legend-BhXl-QpG.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C0sTGtoa.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CpT7QqC8.js";import"./throttle-_lHGrg8X.js";import"./index-iNTF2uXo.js";import"./index-DH3c4tMg.js";import"./isWellBehavedNumber-C8Zfj1Nz.js";import"./d3-scale-QIRFRCXO.js";import"./index-CI9Eu4p_.js";import"./index-BLCS5Ged.js";import"./renderedTicksSlice-BhImPZzn.js";import"./index-DQ_TsVb-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BLB-Ua7j.js";import"./chartDataContext-DHHqBQtJ.js";import"./CategoricalChart-a-9gkYtz.js";import"./Layer-DOFh0lwh.js";import"./Curve-nSJilM-Q.js";import"./types-CQwCfrQn.js";import"./step-njiuEB0s.js";import"./path-DyVhHtw_.js";import"./activeStyles-PzRACl7b.js";import"./Label-BR9Px2Ae.js";import"./Text-BJucpPtg.js";import"./pageBackground-BpRJwl3U.js";import"./useId-DJcNFVPz.js";import"./useBackwardsCompatibleTheme-pKoGpidZ.js";import"./ZIndexLayer-DyEPtPYc.js";import"./useAnimationId-DnYkrRJp.js";import"./dataEntryStyles-YnhjRNXA.js";import"./ActivePoints-CX_PcgP1.js";import"./Dot-CD_kBVmM.js";import"./ErrorBarContext-B0-6gfmu.js";import"./GraphicalItemClipPath-DVsVu3E2.js";import"./SetGraphicalItem-0C32PbV4.js";import"./getRadiusAndStrokeWidthFromDot-LnlHxG9T.js";import"./ActiveShapeUtils-BUtkHcUW.js";import"./useEffectiveDataKey-CMqBM7fj.js";import"./CartesianAxis-DXF_4xE6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-k6TXs3KJ.js";import"./symbol-IMV7K2Oq.js";import"./useElementOffset-Ywty36ho.js";import"./uniqBy-DTquvHLz.js";import"./iteratee-mrtzC2yj.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
