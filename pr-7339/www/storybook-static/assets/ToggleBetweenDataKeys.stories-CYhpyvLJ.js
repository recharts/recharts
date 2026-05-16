import{u as n,e as t}from"./iframe-hEzUtsMW.js";import{L as p}from"./LineChart-DyOpFx2R.js";import{g as s}from"./arrayEqualityCheck-x5atMu4i.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-C64XRc7v.js";import{X as d}from"./XAxis-CmasoGgc.js";import{Y as u}from"./YAxis-DogN-io6.js";import{L as y}from"./Legend-L0JleGkh.js";import{L as h}from"./Line-Bw4keAE2.js";import{T as g}from"./Tooltip-BMhVT1Qy.js";import{R as K}from"./RechartsHookInspector-HGLK2tN5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-fdgiBftW.js";import"./index-B2wa4hnc.js";import"./immer-D2mt-X_3.js";import"./hooks-BpIGMeVK.js";import"./axisSelectors-DpQuKI8d.js";import"./d3-scale-D4Rky8AA.js";import"./zIndexSlice-C-CqVCIy.js";import"./renderedTicksSlice-Dvxj7DTa.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D_wgf81F.js";import"./chartDataContext-CIGqpd_s.js";import"./CategoricalChart-CUEc2NUM.js";import"./resolveDefaultProps-DVL_2ynI.js";import"./CartesianAxis-DW2tMO5n.js";import"./Layer-BzjUvoq3.js";import"./Text-7nbNQAIW.js";import"./DOMUtils-CHISDaUn.js";import"./Label-DAj1mr9j.js";import"./ZIndexLayer-D2roQss2.js";import"./types-CIvV1oOa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DpJ4BPQH.js";import"./symbol-Bv6t7YtK.js";import"./step-nV8fFjWt.js";import"./useElementOffset-DIirkKhH.js";import"./uniqBy-BMKJIO4n.js";import"./iteratee-HN1CE_6M.js";import"./ReactUtils-CILnJ9bI.js";import"./ActivePoints-BEj7A802.js";import"./Dot-DjJx9Xmg.js";import"./RegisterGraphicalItemId-DEIEDShO.js";import"./ErrorBarContext-BKh5vOop.js";import"./GraphicalItemClipPath-DztVjT6a.js";import"./SetGraphicalItem-JFejgF9M.js";import"./useAnimationId-nSTPw_c2.js";import"./getRadiusAndStrokeWidthFromDot-ZgYi_nYk.js";import"./ActiveShapeUtils-CvZRJyk9.js";import"./isPlainObject-XAJ6_CVk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BrXQ0ZF2.js";import"./Trapezoid-CP7Jy4rV.js";import"./Sector-DZ1bqHIH.js";import"./Curve-DljUrqTb.js";import"./Cross-D1Ep2_gT.js";import"./index-umLltmbH.js";import"./ChartSizeDimensions-BYr3kQiS.js";import"./OffsetShower-ChvlcA1R.js";import"./PlotAreaShower-kf7JFG6K.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
