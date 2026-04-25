import{r as n,e as t}from"./iframe-C-KAowuO.js";import{L as p}from"./LineChart-CMvr_h7H.js";import{R as s}from"./arrayEqualityCheck-yVLbm2Ok.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BWWcddpx.js";import{X as d}from"./XAxis-BdDoMKhj.js";import{Y as y}from"./YAxis-WXeKSUTD.js";import{L as h}from"./Legend-T14zhhqr.js";import{L as u}from"./Line-G6dNKB2b.js";import{T as g}from"./Tooltip-Cgd7-Xvc.js";import{R as K}from"./RechartsHookInspector-CNWyvN3d.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DqKSuNH3.js";import"./index-KvyLAFD0.js";import"./immer-lrri1Ibi.js";import"./hooks-DeKQ2gqZ.js";import"./axisSelectors-CE5Vd0Tc.js";import"./d3-scale-Bopu8Aci.js";import"./zIndexSlice-DrTp_sFl.js";import"./renderedTicksSlice-C1ShKB3N.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-nT9KcNTp.js";import"./chartDataContext-vxdgRKIh.js";import"./CategoricalChart-Ds0xAivg.js";import"./resolveDefaultProps-D05KRY5H.js";import"./CartesianAxis-BZ3398ZK.js";import"./Layer-BbNCaHIe.js";import"./Text-Bcc2ZqXe.js";import"./DOMUtils-Cs_o0Y2m.js";import"./Label-D0CeoZx_.js";import"./ZIndexLayer-D6XED_N0.js";import"./types-B6CmVkmP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DUxwWGdL.js";import"./symbol-DJcsyqFg.js";import"./step-BtXew3Rl.js";import"./useElementOffset-BnobsK-J.js";import"./uniqBy-CqIaJHYT.js";import"./iteratee-CaXP3rRs.js";import"./ReactUtils-CCkd_fXV.js";import"./ActivePoints-DwGdY9lY.js";import"./Dot-B1iig8sS.js";import"./RegisterGraphicalItemId-D73RknhP.js";import"./ErrorBarContext-DL4EJt22.js";import"./GraphicalItemClipPath-d-0sskKm.js";import"./SetGraphicalItem-DNbpLx8W.js";import"./useAnimationId-TM9zYSCO.js";import"./getRadiusAndStrokeWidthFromDot-D7K-VjZE.js";import"./ActiveShapeUtils-Do01q8yT.js";import"./isPlainObject-QngjBi63.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BR805uQ0.js";import"./Trapezoid-Db73yEci.js";import"./Sector-WUHOr-1w.js";import"./Curve-HzHLtdOZ.js";import"./Cross-L57-kPql.js";import"./index-BQFUVKnT.js";import"./ChartSizeDimensions-DTvYXLHc.js";import"./OffsetShower-CVdVAOLR.js";import"./PlotAreaShower-ZPJ89wbY.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
