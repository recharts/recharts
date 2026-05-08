import{r as n,e as t}from"./iframe-ZnuiNVaE.js";import{L as p}from"./LineChart-I-sqc6q8.js";import{R as s}from"./arrayEqualityCheck-DcpsFffb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-OuGMHBup.js";import{X as d}from"./XAxis-hfxAoNer.js";import{Y as y}from"./YAxis-Diz2Tspw.js";import{L as h}from"./Legend-Ki2DFXnv.js";import{L as u}from"./Line-UlckhZvH.js";import{T as g}from"./Tooltip-CC2AIUKK.js";import{R as K}from"./RechartsHookInspector-C4iarVXO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CEYGVzUm.js";import"./index-BpNZQyS5.js";import"./immer-0nSCgAvg.js";import"./hooks-B5VA8Mmq.js";import"./axisSelectors-B7fsKZ9l.js";import"./d3-scale-CY4nDl51.js";import"./zIndexSlice-Drs2c4sD.js";import"./renderedTicksSlice-Bn9JwHxd.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-QqWjed8q.js";import"./chartDataContext-DOw2_YIC.js";import"./CategoricalChart-Bp3TzfC0.js";import"./resolveDefaultProps-SpwOLF2r.js";import"./CartesianAxis-90i_fguh.js";import"./Layer-3YLDlAyc.js";import"./Text-CLHYbH4R.js";import"./DOMUtils-DTgaodk1.js";import"./Label-CBQ7F7ZY.js";import"./ZIndexLayer-BzV-T_Iz.js";import"./types-mDbQPIQK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D3ZFSmHu.js";import"./symbol-DOh64DiI.js";import"./step-BAeuU6ZP.js";import"./useElementOffset-DfXBdw7O.js";import"./uniqBy-C1Nplgu-.js";import"./iteratee-CLm8sMEH.js";import"./ReactUtils-DWDhNlKk.js";import"./ActivePoints-CsKFQX5w.js";import"./Dot-DOC-EnTU.js";import"./RegisterGraphicalItemId-BcaLYkaD.js";import"./ErrorBarContext-C1ZpfKHJ.js";import"./GraphicalItemClipPath-C75obMCp.js";import"./SetGraphicalItem-CLIyGsmN.js";import"./useAnimationId-DkOya059.js";import"./getRadiusAndStrokeWidthFromDot-CVCMuq1B.js";import"./ActiveShapeUtils-B0-GYp8s.js";import"./isPlainObject-Bh5udtth.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-8PzQF5cj.js";import"./Trapezoid-BzAzl90f.js";import"./Sector-BJWLe057.js";import"./Curve-D7bzhexe.js";import"./Cross-C4WVnIN-.js";import"./index-BWgKuq9M.js";import"./ChartSizeDimensions-CpD-sUWL.js";import"./OffsetShower-B_CY-ece.js";import"./PlotAreaShower-DfogOd1z.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
