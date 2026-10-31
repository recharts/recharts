import{r as p,R as t}from"./iframe-7ia7cOns.js";import{L as n}from"./LineChart-BJz6jXaq.js";import{R as s}from"./zIndexSlice-CNZG0Y5y.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CzoMi-Mh.js";import{X as d}from"./XAxis-CyA_GXTr.js";import{Y as y}from"./YAxis-ClD5PA34.js";import{L as u}from"./Legend-DMT1EyrP.js";import{L as h}from"./Line-C0Z-Ezm6.js";import{T as g}from"./Tooltip-C4oc2Rl5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CDikf3PH.js";import"./resolveDefaultProps-C774hdeP.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D31_gBEg.js";import"./throttle-CuvGuAUJ.js";import"./index-CbtDNwdV.js";import"./index-lD6nPUSg.js";import"./polarAxisSelectors-0UsOTGQK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DDTCvpuX.js";import"./index-B7Wz_zu1.js";import"./index-uEerYH_x.js";import"./renderedTicksSlice-DHygufHc.js";import"./index-DP-wgMO5.js";import"./CartesianChart-C1quWpWE.js";import"./ZIndexPortal-CBpzcmkv.js";import"./CategoricalChart-BjEI-7io.js";import"./CartesianAxis-B17J1uIc.js";import"./Layer-DH-Bpj5F.js";import"./Text-CkBg3X4g.js";import"./DOMUtils-BskzGjW1.js";import"./ZIndexLayer-BsU293fp.js";import"./Label-Y02zXLeF.js";import"./types-CoWppO1p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-B_wPexqX.js";import"./fillDefinitions-Bh-Idu0v.js";import"./Symbols-COiuuhwV.js";import"./symbol-Q9XLyBk-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CLrMTlCN.js";import"./uniqBy-BdDgBJqj.js";import"./iteratee-7m6p-S4N.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DRmYCb_P.js";import"./step-DopNAfqi.js";import"./LabelList-BkznOaj8.js";import"./ActivePoints-B8drpMZ8.js";import"./Dot-djHPvui5.js";import"./activeStyles-CyfixWYK.js";import"./useAnimationId-dFi6qGfW.js";import"./dataEntryStyles-B9lOpBft.js";import"./ErrorBarContext-CxoeLCh5.js";import"./SetGraphicalItem-Cl9ASqDV.js";import"./getRadiusAndStrokeWidthFromDot-CWANwgvT.js";import"./ActiveShapeUtils--ULkn_AA.js";import"./useEffectiveDataKey-DpgRN79Y.js";import"./Cross-Dv-7A8UM.js";import"./Rectangle-nIz-cHMY.js";import"./util-Dxo8gN5i.js";import"./Sector-DG3Kvf8d.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
