import{r as p,R as t}from"./iframe-DnaR6K_4.js";import{L as n}from"./LineChart-BHpe2lZt.js";import{R as s}from"./zIndexSlice-HRkrVJ9X.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Ihil0ESz.js";import{X as d}from"./XAxis-JXd9qzo8.js";import{Y as y}from"./YAxis-wlK6hgFu.js";import{L as u}from"./Legend-31MAQyrk.js";import{L as h}from"./Line-BiRiWgrj.js";import{T as g}from"./Tooltip-Gq9KpMi8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CRNPPXNH.js";import"./resolveDefaultProps-xcCt7KB7.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BZT-kfpn.js";import"./throttle-CmS6TmXS.js";import"./index-DMJIF8QV.js";import"./index-BgXLdz_X.js";import"./polarAxisSelectors-vWLUjf8B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BgvfK_mE.js";import"./index-DmfGSg0J.js";import"./index-D5D7Mpig.js";import"./renderedTicksSlice-C__KIq2D.js";import"./index-CnPRymSo.js";import"./fillDefinitions-BLgrfcm8.js";import"./CartesianChart-DnaM71J4.js";import"./chartDataContext-aWkBfLLJ.js";import"./CategoricalChart-CBGPntpg.js";import"./CartesianAxis-CAMeCfaf.js";import"./Layer-BH_fCpBP.js";import"./Text-Lh_HZPYn.js";import"./ZIndexLayer-B1l-eSb9.js";import"./Label-BEN9LI2d.js";import"./types-Dnad10Cx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-ClvwSwOZ.js";import"./symbol-QpFOfTRN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-1fsM2BLX.js";import"./uniqBy-BerQeZ6C.js";import"./iteratee-BOqKd5kc.js";import"./isArguments-yB-y1yaH.js";import"./Curve-nkhv6z3O.js";import"./step-CWTcW_Xz.js";import"./dataEntryStyles-BUjHKeGu.js";import"./ActivePoints-BGPPfRbm.js";import"./Dot-CMPD7QLc.js";import"./activeStyles-WfyfS5co.js";import"./useAnimationId-DvJiKZIl.js";import"./ErrorBarContext-Bc_t8m9L.js";import"./SetGraphicalItem-DJe9VMWh.js";import"./getRadiusAndStrokeWidthFromDot-EcMggKSX.js";import"./ActiveShapeUtils-jyclsiEg.js";import"./useEffectiveDataKey-BtEPyz6t.js";import"./Cross-BzVInf1h.js";import"./Rectangle-Dgg35g8F.js";import"./util-Dxo8gN5i.js";import"./Sector-C-O6fWmF.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
