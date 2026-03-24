import{r as n,e as t}from"./iframe-CGYv0J_P.js";import{L as p}from"./LineChart-Bboyl9Ls.js";import{R as s}from"./arrayEqualityCheck-BZetwlMO.js";import{C as c}from"./CartesianGrid-BGuUvgv_.js";import{X as l}from"./XAxis-BBLpBgR2.js";import{Y as d}from"./YAxis-CJylCvLo.js";import{L as y}from"./Legend-Zwt5uMi7.js";import{L as h}from"./Line-R4kryobQ.js";import{T as u}from"./Tooltip-BDmLuqNU.js";import{R as g}from"./RechartsHookInspector-BO40i9ox.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BFBg4H1i.js";import"./index-DCXgcjyB.js";import"./immer-Dq3_p8cl.js";import"./hooks-BYcy2WEI.js";import"./axisSelectors-d1jnmTLI.js";import"./d3-scale-CFFcqd30.js";import"./zIndexSlice-DscQ2UEO.js";import"./renderedTicksSlice-BB6lYCOP.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-cuEjJLA1.js";import"./chartDataContext-DAOXspfa.js";import"./CategoricalChart-DJ2ZS2wS.js";import"./resolveDefaultProps-CDCzLOgk.js";import"./CartesianAxis-Cu0bgGrg.js";import"./Layer-Gk-yVd_6.js";import"./Text-DbZ5XXQf.js";import"./DOMUtils-CmrzvfdE.js";import"./Label-CLm-GmRY.js";import"./ZIndexLayer-ChWoeJD6.js";import"./types-DA895aOk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-wA8q_wPX.js";import"./symbol-BMJz3y-1.js";import"./step-WNwAxyX5.js";import"./useElementOffset-Dg7ksT9H.js";import"./uniqBy-C4EJXCv-.js";import"./iteratee-XiLYEPtC.js";import"./ReactUtils-e-fTpbBc.js";import"./ActivePoints-DuCztam3.js";import"./Dot-B2QyCy--.js";import"./RegisterGraphicalItemId-Br_SJebF.js";import"./ErrorBarContext-Cs8TC5a2.js";import"./GraphicalItemClipPath-CH3RqnTG.js";import"./SetGraphicalItem-BJId-qpW.js";import"./useAnimationId-DzTM1tK7.js";import"./getRadiusAndStrokeWidthFromDot-Cp2r1Hxi.js";import"./ActiveShapeUtils-D3fNYChL.js";import"./isPlainObject-CRVi6C8E.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-iQ4syW.js";import"./Trapezoid-C3Q-7u80.js";import"./Sector-DG9owPHZ.js";import"./Curve-NAJ5RvpG.js";import"./Cross-DYitQ8uV.js";import"./index-CfugQJAU.js";import"./ChartSizeDimensions-CWNsHALg.js";import"./OffsetShower-n0t9eY-O.js";import"./PlotAreaShower-C2TG4Ybd.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
