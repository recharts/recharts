import{r as p,R as t}from"./iframe-DP6zAp54.js";import{L as n}from"./LineChart-DXRaXVmu.js";import{R as s}from"./zIndexSlice-CdFbAgG_.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BlFAaOVn.js";import{X as d}from"./XAxis-wrPg27KZ.js";import{Y as y}from"./YAxis-CRTIqg01.js";import{L as u}from"./Legend-dg9X3PkL.js";import{L as h}from"./Line-CatZrMVF.js";import{T as g}from"./Tooltip-aHvmiEwK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DOH9cWj9.js";import"./resolveDefaultProps-CSMJ250z.js";import"./get-CjriyByo.js";import"./axisSelectors-Rm4q15PI.js";import"./throttle-D7lh8v3-.js";import"./index-XgfMJOXy.js";import"./index-CYR3TkYm.js";import"./polarAxisSelectors-DrRxC45o.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Ct01c8MP.js";import"./index-DFp-_Wbz.js";import"./index-yomVPEkO.js";import"./renderedTicksSlice-BhuX61Ra.js";import"./index-BfoEz1rZ.js";import"./fillDefinitions-BqFRhPDs.js";import"./CartesianChart-DMNhl37Y.js";import"./chartDataContext-Dgk8EHkE.js";import"./CategoricalChart-C4A4gzgw.js";import"./CartesianAxis-BW9v8-VT.js";import"./Layer-44h3-wN_.js";import"./Text-DGNAB76g.js";import"./ZIndexLayer-DcCIRQcN.js";import"./Label-DIQKMqhX.js";import"./types-DNQC58zt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D-J-NUlP.js";import"./symbol-CoNKi1UW.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CL3Lm6d5.js";import"./uniqBy-BNdjw3X0.js";import"./iteratee-BHwSZVIk.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DHwNW-IB.js";import"./Curve-DQP2JLjt.js";import"./step-DvtT47Gl.js";import"./dataEntryStyles-DojbuA9r.js";import"./ActivePoints-C-GzPRnQ.js";import"./Dot-P3TO-0hC.js";import"./activeStyles-B0VCWO8T.js";import"./useAnimationId-EekDlSpG.js";import"./ErrorBarContext-CmnSonHd.js";import"./SetGraphicalItem-CNROvnrS.js";import"./ActiveShapeUtils-DYM7TwK-.js";import"./useEffectiveDataKey-DdiUIHde.js";import"./Cross-B1K9Yltn.js";import"./Rectangle-Cg7APWAF.js";import"./util-Dxo8gN5i.js";import"./Sector-0McMm1EY.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
