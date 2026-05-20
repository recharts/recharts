import{u as n,e as t}from"./iframe-Cpa_K2wH.js";import{L as p}from"./LineChart-DtZjfpbN.js";import{g as s}from"./arrayEqualityCheck-B3CGbERi.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-BlvjnmIK.js";import{X as d}from"./XAxis-BzN0sbb6.js";import{Y as u}from"./YAxis-D01H3xLK.js";import{L as y}from"./Legend-BfSU8Aqx.js";import{L as h}from"./Line-Dn6n2q0g.js";import{T as g}from"./Tooltip-BhCnUH6y.js";import{R as K}from"./RechartsHookInspector-Bqt-aS6w.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D0afUUed.js";import"./index-d0_kz5ki.js";import"./immer-DMfm46iJ.js";import"./hooks-B0YV-Gb0.js";import"./axisSelectors-Cmllf_me.js";import"./d3-scale-Bfg_RKT9.js";import"./zIndexSlice-BHc5vdfp.js";import"./renderedTicksSlice-kARXbS5M.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Oxo-XTmW.js";import"./chartDataContext-DWc0FZ1G.js";import"./CategoricalChart-U85gevCj.js";import"./resolveDefaultProps-CjUJiL9-.js";import"./CartesianAxis-BYutAp1h.js";import"./Layer-C28Vj2nU.js";import"./Text-DwR88wHZ.js";import"./DOMUtils-BkGoz7XV.js";import"./Label-9gVLBIOF.js";import"./ZIndexLayer-CVL2PXNl.js";import"./types-BYysGBoP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Bzs7g2p8.js";import"./symbol-DqufiAtJ.js";import"./step-csQH98gw.js";import"./useElementOffset-CxLjeYJj.js";import"./uniqBy-BwhAZYz-.js";import"./iteratee-DoCUAkfC.js";import"./ReactUtils-BowWIwT6.js";import"./ActivePoints-gBLXy0JF.js";import"./Dot-BhWE0LKt.js";import"./RegisterGraphicalItemId-s90PoDx_.js";import"./ErrorBarContext-BJDGu-MY.js";import"./GraphicalItemClipPath-CP_rA2Hw.js";import"./SetGraphicalItem-BFrPL6Zw.js";import"./useAnimationId-BXAU-yXd.js";import"./getRadiusAndStrokeWidthFromDot-DEe3jrRF.js";import"./ActiveShapeUtils-DZgn0W6W.js";import"./isPlainObject-Cv9egWS8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-_TjkgDNn.js";import"./Trapezoid-MfEacaGn.js";import"./Sector-CErlt9yR.js";import"./Curve-rXHg5I_o.js";import"./Cross-DR-MDVhZ.js";import"./index-fBY_53TJ.js";import"./ChartSizeDimensions-_3CJ7Z39.js";import"./OffsetShower-BpeLegDD.js";import"./PlotAreaShower-LKM4gBGb.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
