import{r as p,R as t}from"./iframe-COIGCNXI.js";import{L as n}from"./LineChart-Bbin2Eyn.js";import{R as s}from"./zIndexSlice-SGGyD0oS.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-4AMzfBUY.js";import{X as d}from"./XAxis-CKJPf7Wd.js";import{Y as y}from"./YAxis-MNgk7gZM.js";import{L as u}from"./Legend-B_Tu88mw.js";import{L as h}from"./Line-ma9HaId0.js";import{T as g}from"./Tooltip-BtRgioyf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSAoBtxd.js";import"./resolveDefaultProps-CZS8aiFv.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BNkJw-2U.js";import"./throttle-BlyN22Fr.js";import"./index-NGI2UEpG.js";import"./index-CUG4PNHE.js";import"./polarAxisSelectors-BmRQgzqt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-VptsFP1A.js";import"./index-C5of7-FY.js";import"./index-C_FuKoEm.js";import"./renderedTicksSlice-BSSoKuOA.js";import"./index-BPTy_Aa_.js";import"./CartesianChart-CrElt8Ki.js";import"./chartDataContext-oGIvKB_Y.js";import"./CategoricalChart-CDhmqNu9.js";import"./CartesianAxis-DcbYB9kS.js";import"./Layer-CTEYWFZQ.js";import"./Text-BbaXzr-_.js";import"./pageBackground-B1zZiLSr.js";import"./useId-uRdV4O5l.js";import"./ZIndexLayer-CkLN3vho.js";import"./Label-BzUBYLaO.js";import"./dataEntryStyles-lF4b12oa.js";import"./types-CFJTQnsm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-dCxkCRB_.js";import"./symbol-D4ULe7qk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DjofQ5-m.js";import"./uniqBy-BGB3FWFX.js";import"./iteratee-BGdRtgf7.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C5TSA5DD.js";import"./step-C9LyDlWE.js";import"./activeStyles-DPX8m1qG.js";import"./useAnimationId-C1qK0jXb.js";import"./ActivePoints-C-R45DhW.js";import"./Dot-vDehyzRD.js";import"./RegisterGraphicalItemId-DZ8oXJnI.js";import"./ErrorBarContext-B7OlR22L.js";import"./SetGraphicalItem-D643u_Ng.js";import"./getRadiusAndStrokeWidthFromDot-BWolhaji.js";import"./ActiveShapeUtils-DcPjXX29.js";import"./useEffectiveDataKey-DqlQcCPn.js";import"./Cross-BQX1HV7D.js";import"./Rectangle-DrpU_fhN.js";import"./util-Dxo8gN5i.js";import"./Sector-CdYXHMxl.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
