import{r as p,R as t}from"./iframe-ClXUkryL.js";import{L as n}from"./LineChart-BcUQ_1hT.js";import{R as s}from"./zIndexSlice-DzUiPhG1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Doxf1-eg.js";import{X as d}from"./XAxis-DAmFlkh4.js";import{Y as y}from"./YAxis-CSB-tj7Q.js";import{L as u}from"./Legend-Du0XFptm.js";import{L as h}from"./Line-CTNZd68_.js";import{T as g}from"./Tooltip-CVS8zOAR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C4CsKSyh.js";import"./resolveDefaultProps-Be-R1NDV.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BImpBlrZ.js";import"./throttle-CEjR9znF.js";import"./index-1IQ6h1fT.js";import"./index-D1YVhIqp.js";import"./polarAxisSelectors-B2T5HNNu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Crqvu4_S.js";import"./index-DTBjcvrn.js";import"./index-CrY7M_Vr.js";import"./renderedTicksSlice-0uwg5ZfK.js";import"./index-BN7SKK3J.js";import"./fillDefinitions-C705icco.js";import"./CartesianChart-Dl8SN8lO.js";import"./chartDataContext-vv2pvmYC.js";import"./CategoricalChart-B-f9dtfF.js";import"./CartesianAxis-DC6JqvO0.js";import"./Layer-L872TvYf.js";import"./Text-C9XRZpa-.js";import"./ZIndexLayer-CVBpK4Om.js";import"./Label-BMxAhfb3.js";import"./types-la06XTph.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-x2c8SqkY.js";import"./symbol-DbkjlHpo.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DeqYTBDK.js";import"./uniqBy-BpqYijuT.js";import"./iteratee-B2tmauo-.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BBOOYriq.js";import"./Curve-MAqNRQ5D.js";import"./step-DKRQgBi6.js";import"./dataEntryStyles-Br1h1G1A.js";import"./ActivePoints-FWIT6xTU.js";import"./Dot-ACUQcHT1.js";import"./activeStyles-CbEtMY8z.js";import"./useAnimationId-Dks1GaGE.js";import"./ErrorBarContext-BbIl9cJe.js";import"./SetGraphicalItem-XdL-o-fT.js";import"./ActiveShapeUtils-Co4M2_jg.js";import"./useEffectiveDataKey-OGRxErZi.js";import"./Cross-5JluxCld.js";import"./Rectangle-KaRylKEj.js";import"./util-Dxo8gN5i.js";import"./Sector-BP6odGN8.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
