import{r as p,R as t}from"./iframe-lJBwbutv.js";import{L as n}from"./LineChart-B4C7NJa3.js";import{R as s}from"./zIndexSlice-DOZGt0Xc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BNYYJNHk.js";import{X as d}from"./XAxis-eFYFTspd.js";import{Y as y}from"./YAxis-DzJ296_j.js";import{L as u}from"./Legend-m3nE9M3l.js";import{L as h}from"./Line-8wwXFnCl.js";import{T as g}from"./Tooltip-z5cfifSR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C4uciLnE.js";import"./resolveDefaultProps-CuoHmAis.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CiZzV4Ua.js";import"./throttle-BD4ZOoVc.js";import"./index-D-yoUCLK.js";import"./index-DmjkyNBy.js";import"./polarAxisSelectors-g2gwazbI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BrfLvVJ7.js";import"./index-BjclV3iC.js";import"./index-Bgy6zka-.js";import"./renderedTicksSlice-ChSQY0tz.js";import"./index-CPSRkKHN.js";import"./fillDefinitions-DgzgNWUG.js";import"./CartesianChart-BDxnsR9l.js";import"./chartDataContext-CuRy23UW.js";import"./CategoricalChart-CWJpCYvL.js";import"./CartesianAxis-DLyqJbpN.js";import"./Layer-CZzb4Onv.js";import"./Text-CH7ZTJa6.js";import"./ZIndexLayer-DMFEoW6r.js";import"./Label-C1XxCcqG.js";import"./types-BR2T4QCa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BrRhqa2q.js";import"./symbol-CHsvlSO9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-zJJN7xLG.js";import"./uniqBy-DWWs0y9k.js";import"./iteratee-DkvjpvPG.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Dazce3Yn.js";import"./step-CVKg82eE.js";import"./dataEntryStyles-BXXFCsKs.js";import"./ActivePoints-De5xpIFf.js";import"./Dot-CHXRfIFb.js";import"./activeStyles-C_lJCdGG.js";import"./useAnimationId-Dj7sECHw.js";import"./ErrorBarContext-CF700d8f.js";import"./SetGraphicalItem-BjwhNxsW.js";import"./getRadiusAndStrokeWidthFromDot-4zFCm6-q.js";import"./ActiveShapeUtils-6HIsnjoS.js";import"./useEffectiveDataKey-Bg5rFbYe.js";import"./Cross-BIkVXlap.js";import"./Rectangle-BLn-6YRh.js";import"./util-Dxo8gN5i.js";import"./Sector-D8arHEkn.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
