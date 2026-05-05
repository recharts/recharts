import{r as n,e as t}from"./iframe-CNonusrd.js";import{L as p}from"./LineChart-C5d7gVDg.js";import{R as s}from"./arrayEqualityCheck-l5oIinxJ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-LfDlAOjD.js";import{X as d}from"./XAxis-DXi_x7F1.js";import{Y as y}from"./YAxis-I3XCIJKJ.js";import{L as h}from"./Legend-ZeY5groX.js";import{L as u}from"./Line-BYq1zdkc.js";import{T as g}from"./Tooltip-C1ub5SXJ.js";import{R as K}from"./RechartsHookInspector-DREJ71WB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DYPFeGd0.js";import"./index-D5p3lGcA.js";import"./immer-x45XYXGa.js";import"./hooks-sSaS_iHU.js";import"./axisSelectors-CxAQt0eW.js";import"./d3-scale-HntMfl1M.js";import"./zIndexSlice-lq1xLJsp.js";import"./renderedTicksSlice-DilFZHiz.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-XRbcsYla.js";import"./chartDataContext-CPanrf0w.js";import"./CategoricalChart-2Jj_e3Uw.js";import"./resolveDefaultProps-9t13lHMU.js";import"./CartesianAxis-CyGRC0f9.js";import"./Layer-B4nmAurR.js";import"./Text-B8aP_-NL.js";import"./DOMUtils-BSt5xjPz.js";import"./Label-BkTOM4JT.js";import"./ZIndexLayer-C8APM9Um.js";import"./types-QSJLzDgf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BvFq4E0I.js";import"./symbol-BAjtFeQt.js";import"./step-CTC2hHac.js";import"./useElementOffset-DQxeRcJO.js";import"./uniqBy-BouIk8Q6.js";import"./iteratee-D530YhRz.js";import"./ReactUtils-C0hUy9cv.js";import"./ActivePoints-CTe4U5p3.js";import"./Dot-Ci2_k-bT.js";import"./RegisterGraphicalItemId-BlSb_05O.js";import"./ErrorBarContext-BMyrYBLu.js";import"./GraphicalItemClipPath-Dh2li2pF.js";import"./SetGraphicalItem-ElLCpu1i.js";import"./useAnimationId-CKkBYz8x.js";import"./getRadiusAndStrokeWidthFromDot-S2UaL7g9.js";import"./ActiveShapeUtils-oBpqlz40.js";import"./isPlainObject-D0uDvuyC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-vYVz2III.js";import"./Trapezoid-D9ZXnwGC.js";import"./Sector-2y1By5Z-.js";import"./Curve-B-txv0y_.js";import"./Cross-BRGiVFKR.js";import"./index-D8MHUpjv.js";import"./ChartSizeDimensions-CH_6AtsO.js";import"./OffsetShower-BdevU7dF.js";import"./PlotAreaShower-iAJQSHaO.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
