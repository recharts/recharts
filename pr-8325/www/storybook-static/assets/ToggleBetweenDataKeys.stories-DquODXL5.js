import{r as p,R as t}from"./iframe-CqOe7k5Y.js";import{L as n}from"./LineChart-DGBEjS9P.js";import{R as s}from"./zIndexSlice-HvZ_KFp3.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DMqUn0Lg.js";import{X as d}from"./XAxis-BHc3UEw3.js";import{Y as y}from"./YAxis-DEQnYc30.js";import{L as u}from"./Legend-B3y3jZUw.js";import{L as h}from"./Line-BAO_KFfa.js";import{T as g}from"./Tooltip-WSmd3WjN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C6U1x4NS.js";import"./resolveDefaultProps-uDtrY5a-.js";import"./get-CjriyByo.js";import"./axisSelectors-HXuL0A3L.js";import"./throttle-BawAsSGW.js";import"./index-NjrwBPri.js";import"./index-Nzssfkwo.js";import"./polarAxisSelectors-DnFOpaLb.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-B6EefrnE.js";import"./index-C49j9LJv.js";import"./index-DQgKuLzP.js";import"./renderedTicksSlice-B-tkfTkQ.js";import"./index-CjpYzq4S.js";import"./fillDefinitions-BUUlO_ua.js";import"./CartesianChart-CGVfE0i2.js";import"./chartDataContext-B9y28Tuh.js";import"./CategoricalChart-Cm4y0z4v.js";import"./CartesianAxis-botWNN7F.js";import"./Layer-CqFOI8aQ.js";import"./Text-N8PDZP4n.js";import"./ZIndexLayer-Bx6NEOZE.js";import"./Label-yQ-nD2jU.js";import"./types-DHkZz5Qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DOIoBL3s.js";import"./symbol-Cf12ZYaI.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BT23gI0j.js";import"./uniqBy-bwHS4C5O.js";import"./iteratee-BmCg4GfS.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-iFUrCwsR.js";import"./Curve-C0AiDBmT.js";import"./step-C0xBjYaF.js";import"./dataEntryStyles-CclxtIIf.js";import"./ActivePoints-DOsR5596.js";import"./Dot-QqtvItF4.js";import"./activeStyles-DyQy4djd.js";import"./useAnimationId-_GPHqvCi.js";import"./ErrorBarContext-CQfvj0jY.js";import"./SetGraphicalItem-5gHOvcya.js";import"./ActiveShapeUtils-dZojZzcj.js";import"./useEffectiveDataKey-C_dNJO7p.js";import"./Cross-Mf8tP6j1.js";import"./Rectangle-mBtSHpSc.js";import"./util-Dxo8gN5i.js";import"./Sector-DS5Y07lN.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
