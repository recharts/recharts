import{r as p,R as t}from"./iframe-ZGmrrukO.js";import{L as n}from"./LineChart-I9dHiTnW.js";import{R as s}from"./zIndexSlice-C5KgYPQq.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C3qpko0P.js";import{X as d}from"./XAxis-BAXN4a1X.js";import{Y as y}from"./YAxis-C3JJ8ArK.js";import{L as u}from"./Legend-DG95uxRK.js";import{L as h}from"./Line-CagAPKlZ.js";import{T as g}from"./Tooltip-Dbvq0uZA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3dierpX.js";import"./resolveDefaultProps-CNACe9Hw.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BkEVbAOi.js";import"./throttle-DEV8M7d-.js";import"./index-BDXslZly.js";import"./index-DkZKmKPL.js";import"./polarAxisSelectors-BTEQFOKc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BCl2Vcri.js";import"./index-DELNKpJo.js";import"./index-DjxPPcPR.js";import"./renderedTicksSlice-DslC81eO.js";import"./index-CqZ9-YDO.js";import"./CartesianChart-DTfzXdNC.js";import"./chartDataContext-CL-xIQe9.js";import"./CategoricalChart-LYzcxGWQ.js";import"./CartesianAxis-_qB2Y9Zl.js";import"./Layer-B42ScyDi.js";import"./Text-GEQvIv20.js";import"./pageBackground-fO3k-pcO.js";import"./useId-rh7m_y1i.js";import"./ZIndexLayer-C_RDQRBf.js";import"./Label-CraUapZw.js";import"./dataEntryStyles-ChBxQ-KQ.js";import"./types-CCAgRS29.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Bj_FeK6Z.js";import"./symbol-uBdmaQJZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CJAbl6Xw.js";import"./uniqBy-B8i0l-yZ.js";import"./iteratee-DMbjXWAk.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CjgpP6VN.js";import"./step-BOD7ejsf.js";import"./activeStyles-Bhs50nun.js";import"./useAnimationId-16kGh6Cm.js";import"./ActivePoints-DWVIWGut.js";import"./Dot-BvCj9lGB.js";import"./RegisterGraphicalItemId-BEb5c735.js";import"./ErrorBarContext-DCWPzwAV.js";import"./SetGraphicalItem-CHnk-ZHw.js";import"./getRadiusAndStrokeWidthFromDot-CEgP0kCP.js";import"./ActiveShapeUtils-BD2nIqux.js";import"./useEffectiveDataKey-C7ZRWxHk.js";import"./Cross-CdrL-G6k.js";import"./Rectangle-DIms2ErP.js";import"./util-Dxo8gN5i.js";import"./Sector-0V5V0PtF.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
