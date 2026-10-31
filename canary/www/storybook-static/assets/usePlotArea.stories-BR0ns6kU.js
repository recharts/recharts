import{R as t}from"./iframe-7ia7cOns.js";import{z as p}from"./RechartsWrapper-CDikf3PH.js";import{R as a}from"./zIndexSlice-CNZG0Y5y.js";import{C as n}from"./ComposedChart-Dkz69e1N.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C0Z-Ezm6.js";import{X as l}from"./XAxis-CyA_GXTr.js";import{Y as h}from"./YAxis-ClD5PA34.js";import{L as c}from"./Legend-DMT1EyrP.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C774hdeP.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D31_gBEg.js";import"./throttle-CuvGuAUJ.js";import"./index-CbtDNwdV.js";import"./index-lD6nPUSg.js";import"./polarAxisSelectors-0UsOTGQK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DDTCvpuX.js";import"./index-B7Wz_zu1.js";import"./index-uEerYH_x.js";import"./renderedTicksSlice-DHygufHc.js";import"./index-DP-wgMO5.js";import"./CartesianChart-C1quWpWE.js";import"./ZIndexPortal-CBpzcmkv.js";import"./CategoricalChart-BjEI-7io.js";import"./Layer-DH-Bpj5F.js";import"./Curve-DRmYCb_P.js";import"./types-CoWppO1p.js";import"./step-DopNAfqi.js";import"./path-DyVhHtw_.js";import"./LabelList-BkznOaj8.js";import"./Label-Y02zXLeF.js";import"./Text-CkBg3X4g.js";import"./DOMUtils-BskzGjW1.js";import"./ZIndexLayer-BsU293fp.js";import"./ActivePoints-B8drpMZ8.js";import"./Dot-djHPvui5.js";import"./activeStyles-CyfixWYK.js";import"./useAnimationId-dFi6qGfW.js";import"./dataEntryStyles-B9lOpBft.js";import"./fillDefinitions-Bh-Idu0v.js";import"./themeFill-B_wPexqX.js";import"./Symbols-COiuuhwV.js";import"./symbol-Q9XLyBk-.js";import"./ErrorBarContext-CxoeLCh5.js";import"./SetGraphicalItem-Cl9ASqDV.js";import"./getRadiusAndStrokeWidthFromDot-CWANwgvT.js";import"./ActiveShapeUtils--ULkn_AA.js";import"./useEffectiveDataKey-DpgRN79Y.js";import"./CartesianAxis-B17J1uIc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CLrMTlCN.js";import"./uniqBy-BdDgBJqj.js";import"./iteratee-7m6p-S4N.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{o as UsePlotArea,yt as __namedExportsOrder,ft as default};
