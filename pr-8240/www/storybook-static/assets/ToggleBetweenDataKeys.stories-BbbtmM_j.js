import{r as p,R as t}from"./iframe-CQK5cKb5.js";import{L as n}from"./LineChart-XoNzrdrc.js";import{R as s}from"./zIndexSlice-B7W_lSrS.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dzn84rmM.js";import{X as d}from"./XAxis-C7d_UGHt.js";import{Y as y}from"./YAxis-CXpvs3FV.js";import{L as u}from"./Legend-BMSPASHC.js";import{L as h}from"./Line-CK4N9DPd.js";import{T as g}from"./Tooltip-Dzcs2ZVL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DIL7xA5W.js";import"./resolveDefaultProps-sIKj046z.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CFm2aUpt.js";import"./throttle-CtjoOnFV.js";import"./index-Dm38SIQa.js";import"./index-BKYCEKLA.js";import"./polarAxisSelectors-CGBkjniO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DXQtVXGL.js";import"./index-CB2LtrSa.js";import"./index-FJUFiiDw.js";import"./renderedTicksSlice-CfjQzOiB.js";import"./index-vF-n4YF_.js";import"./fillDefinitions-R6mNXYbM.js";import"./CartesianChart-CdwXekNk.js";import"./chartDataContext-LfCv8xRO.js";import"./CategoricalChart-DiRS6s-r.js";import"./CartesianAxis-BgpXgN1R.js";import"./Layer-urQEAooy.js";import"./Text-Z2ey8U7p.js";import"./ZIndexLayer-9k2RLX5n.js";import"./Label-CQ2HjeWR.js";import"./types-DmMnI0O_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BYEI9G2W.js";import"./symbol-CDkSHUUS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-KeEWMChU.js";import"./uniqBy-C_Y6AlzU.js";import"./iteratee-AcsDAR-L.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B0cUpmBX.js";import"./step-D2yChQSN.js";import"./dataEntryStyles-B4J35a5k.js";import"./ActivePoints-C-llUCjP.js";import"./Dot-DqwBwinu.js";import"./activeStyles-DkKN9Gb1.js";import"./useAnimationId-C1Da615s.js";import"./ErrorBarContext-7B25K72P.js";import"./SetGraphicalItem-u5-88p1b.js";import"./getRadiusAndStrokeWidthFromDot-B0dUD5K2.js";import"./ActiveShapeUtils-DSt9b1dG.js";import"./useEffectiveDataKey-C9n3TkLL.js";import"./Cross-C0dW1cn9.js";import"./Rectangle-DkPkuka8.js";import"./util-Dxo8gN5i.js";import"./Sector-DGo8K8ZE.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
