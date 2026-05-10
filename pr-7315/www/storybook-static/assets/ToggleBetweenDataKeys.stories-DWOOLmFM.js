import{r as n,e as t}from"./iframe-yOl7ebEO.js";import{L as p}from"./LineChart-DsnauFeZ.js";import{R as s}from"./arrayEqualityCheck-UuJDb-yR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BA_DIZK_.js";import{X as d}from"./XAxis-DD4YWjFw.js";import{Y as y}from"./YAxis-BW20z882.js";import{L as h}from"./Legend-C1_1tKEj.js";import{L as u}from"./Line-BDePEqV7.js";import{T as g}from"./Tooltip-BcGG8IcD.js";import{R as K}from"./RechartsHookInspector-DtC7uthn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D1ybgTyA.js";import"./index-D-Did3Jy.js";import"./immer-CYF84rOh.js";import"./hooks-BE8JLfvF.js";import"./axisSelectors-B5yQSsls.js";import"./d3-scale-CZWGMAWB.js";import"./zIndexSlice-PEvl5-9d.js";import"./renderedTicksSlice-CnX-tuq-.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CI8VxjgA.js";import"./chartDataContext-DWA37a9L.js";import"./CategoricalChart-DTvKZB6u.js";import"./resolveDefaultProps-Gw_jyAz4.js";import"./CartesianAxis-CqiimSqN.js";import"./Layer-DB7JxVnT.js";import"./Text-s8nxqTbU.js";import"./DOMUtils-Co3lMGfS.js";import"./Label-CDk0YY7H.js";import"./ZIndexLayer-WvT2N6Nx.js";import"./types-DQaZd2AR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-h-bSBTN1.js";import"./symbol-Djg7BpVR.js";import"./step-MC0Zc_ls.js";import"./useElementOffset-CKOAcB5f.js";import"./uniqBy-DfW2rE8R.js";import"./iteratee-Du5AbuxK.js";import"./ReactUtils-BYuoIEUf.js";import"./ActivePoints-MVGoSZ5r.js";import"./Dot-DujX6iAu.js";import"./RegisterGraphicalItemId-yywJB84l.js";import"./ErrorBarContext-CKGldT3Z.js";import"./GraphicalItemClipPath-BM3B2Cex.js";import"./SetGraphicalItem-BACVcxKo.js";import"./useAnimationId-Fp-fdxRQ.js";import"./getRadiusAndStrokeWidthFromDot-CPh76gsn.js";import"./ActiveShapeUtils-aPgWLWZ7.js";import"./isPlainObject-DJR91lAO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D1lQKzhS.js";import"./Trapezoid-Bo-P1Ks9.js";import"./Sector-ZE6eqjpU.js";import"./Curve-zYBm6Ox7.js";import"./Cross-DztESm_x.js";import"./index-CeoEhrnk.js";import"./ChartSizeDimensions-B292NXgO.js";import"./OffsetShower-DAwTp_Xz.js";import"./PlotAreaShower-BJre87Gs.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
