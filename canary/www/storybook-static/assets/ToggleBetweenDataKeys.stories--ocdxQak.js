import{r as n,e as t}from"./iframe-IYV0DWV_.js";import{L as p}from"./LineChart-DtIaaII-.js";import{R as s}from"./arrayEqualityCheck-Bd9te8h5.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-COBVU_Zt.js";import{X as d}from"./XAxis-D3Ygop7A.js";import{Y as y}from"./YAxis-CWiUIZ-q.js";import{L as h}from"./Legend-C37BJm_I.js";import{L as u}from"./Line-B7tqEV9l.js";import{T as g}from"./Tooltip-B_Wu83_g.js";import{R as K}from"./RechartsHookInspector-F4E7g6Er.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CiV29pyr.js";import"./index-C-_sV-M9.js";import"./immer-C5y28x1y.js";import"./hooks-CYsU2mzH.js";import"./axisSelectors-D7Iryj26.js";import"./d3-scale-gSH8fZ7r.js";import"./zIndexSlice-DeGAM3mJ.js";import"./renderedTicksSlice-oy8dviAt.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DeU7jjaP.js";import"./chartDataContext-DpSq4A2Y.js";import"./CategoricalChart-C5NFGp4t.js";import"./resolveDefaultProps-DW10euc9.js";import"./CartesianAxis-Bs0B3eSH.js";import"./Layer-BlQSfqc0.js";import"./Text-CljAKOCB.js";import"./DOMUtils-lNitbhsw.js";import"./Label-Ue-uNxNq.js";import"./ZIndexLayer-CuF5EOOK.js";import"./types-wRdleKl8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-3dp5_ZFf.js";import"./symbol-DNJG8l3z.js";import"./step-A9nbxnob.js";import"./useElementOffset-D1AjHSpE.js";import"./uniqBy-CrQZW9nB.js";import"./iteratee-B8Y3Nom7.js";import"./ReactUtils--lF51C7F.js";import"./ActivePoints-CQCkaYoR.js";import"./Dot-BVl4fcd6.js";import"./RegisterGraphicalItemId-hvr3G_mi.js";import"./ErrorBarContext-BIw-Eurm.js";import"./GraphicalItemClipPath-CJMuL245.js";import"./SetGraphicalItem-DeMSd0nu.js";import"./useAnimationId-Bm2M_Pz2.js";import"./getRadiusAndStrokeWidthFromDot-BrQDVO0Z.js";import"./ActiveShapeUtils-Bagg-bQt.js";import"./isPlainObject-wylrXpJQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxtnmBb5.js";import"./Trapezoid-82F1yuXU.js";import"./Sector-CKN5Z_1V.js";import"./Curve-DbGLQtgf.js";import"./Cross-LFLGBECj.js";import"./index-DlrvcT1S.js";import"./ChartSizeDimensions-qhfaRB1O.js";import"./OffsetShower-CVu4qLNi.js";import"./PlotAreaShower-B-AaQufv.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
