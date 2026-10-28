import{r as p,R as t}from"./iframe-BGCZ_YYu.js";import{L as n}from"./LineChart-BrOW7Q-9.js";import{R as s}from"./zIndexSlice-cBJ2sUns.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-JddCvUIB.js";import{X as d}from"./XAxis-CnHX8rYU.js";import{Y as y}from"./YAxis-QzbIIYXn.js";import{L as u}from"./Legend-BBY33JEH.js";import{L as h}from"./Line-CYsPPfA1.js";import{T as g}from"./Tooltip-Bz4_VSSX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DzjZykj4.js";import"./resolveDefaultProps-RfjxFv_h.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BgHWKfZW.js";import"./throttle-Dnn9iNkE.js";import"./index-CJpeiM5R.js";import"./index-DRH8hgtI.js";import"./polarAxisSelectors-9JDQkQFq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WNvBVnHd.js";import"./index-BoRJhsa5.js";import"./index-DsAYZFOJ.js";import"./renderedTicksSlice-0yL2Eztm.js";import"./index-CnE4B9N1.js";import"./CartesianChart-chY_bHfR.js";import"./ZIndexPortal-UfnKJ6nq.js";import"./CategoricalChart-rRn_svVP.js";import"./CartesianAxis-D7nh9FWg.js";import"./Layer-FBjFYiDN.js";import"./Text-Cf8nBYte.js";import"./pageBackground--uJKRUbH.js";import"./ZIndexLayer-DBU2Ux2U.js";import"./Label-CG8eDc0p.js";import"./types-BvE9AUsn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Caix5zUY.js";import"./symbol-1qTipyom.js";import"./path-DyVhHtw_.js";import"./useElementOffset-rPBNT425.js";import"./uniqBy-DwLo8bza.js";import"./iteratee-BrjIAann.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BoHAwgnl.js";import"./step-QoITrG4U.js";import"./LabelList-D60Hhpwl.js";import"./ActivePoints-GRJI6yy-.js";import"./Dot-CzpZnZIc.js";import"./activeStyles-CJOfqay0.js";import"./useAnimationId-D-9kXAza.js";import"./dataEntryStyles--27SN7qD.js";import"./ErrorBarContext-B946Wqqn.js";import"./SetGraphicalItem-Cbavgyyx.js";import"./getRadiusAndStrokeWidthFromDot-CNsKyJ5a.js";import"./ActiveShapeUtils-CbZu-UwN.js";import"./useEffectiveDataKey-B32bFSWN.js";import"./Cross-C665WITi.js";import"./Rectangle-D8zVG-_m.js";import"./util-Dxo8gN5i.js";import"./Sector-XH0zRT2M.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
