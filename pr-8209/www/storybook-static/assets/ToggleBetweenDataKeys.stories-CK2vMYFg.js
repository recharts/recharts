import{r as p,R as t}from"./iframe-Ct1svimm.js";import{L as n}from"./LineChart-Dym3a83m.js";import{R as s}from"./zIndexSlice-DuTNyMvu.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Xmo33PVK.js";import{X as d}from"./XAxis-DQtY80zm.js";import{Y as y}from"./YAxis-DJ-mdmri.js";import{L as u}from"./Legend-Bd6FU5Xr.js";import{L as h}from"./Line-C_BZS029.js";import{T as g}from"./Tooltip-DCv6Ofun.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D0VQQHcg.js";import"./resolveDefaultProps-DkFOW_Ct.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CIwgaX7y.js";import"./throttle-pNdBRgo_.js";import"./index-o9gN_zh3.js";import"./index-BvFwwoiY.js";import"./polarAxisSelectors-nz6HV1AE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BL9MDqqK.js";import"./index-LDd6dT7n.js";import"./index-CGKMaXkl.js";import"./renderedTicksSlice-LVzR_DNz.js";import"./index-CNkpQGrJ.js";import"./fillDefinitions-vVBAQBUA.js";import"./CartesianChart-fUt3zqCh.js";import"./chartDataContext-D2vVYZsu.js";import"./CategoricalChart-Darb6O46.js";import"./CartesianAxis-D0Zofcf0.js";import"./Layer-CbeDBXuD.js";import"./Text-VSzLHfPE.js";import"./ZIndexLayer-BltRI-Nr.js";import"./Label-B2Mk85O5.js";import"./types-EANqWthO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Bnfs-9ht.js";import"./symbol-CiSLDvHg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CY9fcLag.js";import"./uniqBy-BMmxp9UC.js";import"./iteratee-BWHT356U.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D34yK1QN.js";import"./step-Cz5QOKdQ.js";import"./dataEntryStyles-CHH9ur-w.js";import"./ActivePoints-Bj7-j5Zz.js";import"./Dot-CCM7dYWU.js";import"./activeStyles-DWgBPDlx.js";import"./useAnimationId-CDKCdXQz.js";import"./ErrorBarContext-CQBLFEFh.js";import"./SetGraphicalItem-inprgaSw.js";import"./getRadiusAndStrokeWidthFromDot-B2vi1B3A.js";import"./ActiveShapeUtils-BuOJWJdn.js";import"./useEffectiveDataKey-CW73rX9I.js";import"./Cross-B8pnqaKp.js";import"./Rectangle-sIigVXDT.js";import"./util-Dxo8gN5i.js";import"./Sector-DTuMi1n9.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
