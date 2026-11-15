import{r as p,R as t}from"./iframe-Zh2ccugb.js";import{L as n}from"./LineChart-Bp3ZB87s.js";import{R as s}from"./zIndexSlice-DEmBd4ZB.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CGNahjJZ.js";import{X as d}from"./XAxis-Csr8aJtN.js";import{Y as y}from"./YAxis-DZs1fmzf.js";import{L as u}from"./Legend-aJhKvZPb.js";import{L as h}from"./Line-xJRbfbkE.js";import{T as g}from"./Tooltip-C94K6jr0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CwKOWqmW.js";import"./resolveDefaultProps-fH52x6Wq.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CeETa2Oh.js";import"./throttle-B3lkaQcW.js";import"./index-DCPtMhny.js";import"./index-Bpm_0b-N.js";import"./polarAxisSelectors-ODY0eR4B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oTva27Ef.js";import"./index-BTZK7nKb.js";import"./index-WmNaFkcT.js";import"./renderedTicksSlice-DqNUbck1.js";import"./index-CMNAmNto.js";import"./fillDefinitions-CSMYcBHa.js";import"./CartesianChart-nM5gdBcu.js";import"./chartDataContext-CFkN0KVz.js";import"./CategoricalChart-DWn3sGtD.js";import"./CartesianAxis-CIOwjTNM.js";import"./Layer-C95YSbsg.js";import"./Text-MWlHmKAn.js";import"./ZIndexLayer-Xr-T5Ltv.js";import"./Label-DiL3sO7Q.js";import"./types-aszg7ufr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-S44HEmao.js";import"./symbol-UAwU-psM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Csv0_1PL.js";import"./uniqBy-FqU-5Unm.js";import"./iteratee-DDOrFaHy.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CyvbP0E9.js";import"./step-BGLmz3Kf.js";import"./dataEntryStyles-BE_TnqZR.js";import"./ActivePoints-1_C8JWTD.js";import"./Dot-BIRUUIf4.js";import"./activeStyles-D6kWvGgQ.js";import"./useAnimationId-CwFbYXoE.js";import"./ErrorBarContext-f9PwKgv4.js";import"./SetGraphicalItem-Dg3wmm6w.js";import"./getRadiusAndStrokeWidthFromDot-B79813B8.js";import"./ActiveShapeUtils-wgF5Hj2i.js";import"./useEffectiveDataKey-Ctjc01_U.js";import"./Cross-BgsKT80c.js";import"./Rectangle-BZ898oCF.js";import"./util-Dxo8gN5i.js";import"./Sector-MNccaZ7d.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
