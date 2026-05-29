import{e as t}from"./iframe-Dbih6tM_.js";import{e as a}from"./CategoricalChart-BUbHs2Eq.js";import{g as p}from"./zIndexSlice-F7HsGAhb.js";import{C as s}from"./ComposedChart-hkcoJXW_.js";import{p as n}from"./Page-DPte-9pC.js";import{L as d}from"./Line-DKLERS8c.js";import{X as l}from"./XAxis-UKVsyr7-.js";import{Y as h}from"./YAxis-x6PKBVdt.js";import{L as c}from"./Legend-cJzfLKeh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CzkBSRjy.js";import"./index-yjWx6Bgh.js";import"./immer-u9L_0Kl5.js";import"./get-DVIR8H8G.js";import"./index-C3fYT42t.js";import"./index-VrctuRm7.js";import"./renderedTicksSlice-CY1pIMUb.js";import"./axisSelectors-DGtb_paL.js";import"./d3-scale-QFZ3DYXF.js";import"./resolveDefaultProps-C6XhIduD.js";import"./isWellBehavedNumber-C76PNx6x.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-sZ1KYKyT.js";import"./chartDataContext-CumcEPMe.js";import"./Curve-CbpaSJeH.js";import"./types-Bhc7gOzP.js";import"./step-EAtlMAAS.js";import"./path-DyVhHtw_.js";import"./Layer-B42S8g5T.js";import"./ReactUtils-Bj9mmMxB.js";import"./Label-CzYO866A.js";import"./Text-BD0wWctz.js";import"./DOMUtils-DtcMNyN4.js";import"./ZIndexLayer-DaMCCGdS.js";import"./ActivePoints-DzbjRTsh.js";import"./Dot-BKoIVpn9.js";import"./RegisterGraphicalItemId-CoMv7TZ7.js";import"./ErrorBarContext-CaITZn-H.js";import"./GraphicalItemClipPath-BqpiOJ0K.js";import"./SetGraphicalItem-C_rRFyeV.js";import"./useAnimationId-CWLhhp_H.js";import"./getRadiusAndStrokeWidthFromDot-DA8FMUL1.js";import"./ActiveShapeUtils-B7EaMEP1.js";import"./CartesianAxis-sMFUgupR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BGSIVaqN.js";import"./symbol-C1rCDija.js";import"./useElementOffset-BXd0grxf.js";import"./uniqBy-ByRFrmC2.js";import"./iteratee-DEDrKpvz.js";const dt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const lt=["UsePlotArea"];export{e as UsePlotArea,lt as __namedExportsOrder,dt as default};
