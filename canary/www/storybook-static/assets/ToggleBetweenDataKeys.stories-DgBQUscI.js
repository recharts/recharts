import{r as n,R as t}from"./iframe-DwLZZwhK.js";import{L as p}from"./LineChart-Bh5lsZhc.js";import{R as s}from"./zIndexSlice-lVUWNgM0.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DLG2PZDo.js";import{X as d}from"./XAxis-DBBjIwDo.js";import{Y as y}from"./YAxis-BRmSg-U1.js";import{L as u}from"./Legend-DKdaWvlb.js";import{L as h}from"./Line-Cvv4G15o.js";import{T as g}from"./Tooltip-bD6JfZFE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B6xOBDhR.js";import"./index-BRPN53-o.js";import"./index-VnXRJ0a1.js";import"./index-CyNYrL4w.js";import"./index-D2i4UmdT.js";import"./throttle-m49sR4Np.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-BnOQ8D5D.js";import"./axisSelectors-Deou-VxK.js";import"./resolveDefaultProps-D_yJAfqa.js";import"./isWellBehavedNumber-DdXnDQ5z.js";import"./d3-scale-CjSqz0E9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart--QBa1qTn.js";import"./chartDataContext-BGrP4bw5.js";import"./CategoricalChart-Bx727tBC.js";import"./CartesianAxis-ByQIstMG.js";import"./Layer-BVmot7FB.js";import"./Text-Bh0YxhQF.js";import"./DOMUtils-BGpns11t.js";import"./Label-tECJL-37.js";import"./ZIndexLayer-BAEsl3nH.js";import"./types-B7g8Th-s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-pLBMwypQ.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DVjBjeOn.js";import"./symbol-CjHagoG3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Df4AHCQV.js";import"./uniqBy-BbT4zose.js";import"./iteratee-DaU-OdzY.js";import"./Curve-Cv92tytC.js";import"./step-DqN0Bx6a.js";import"./AnimatedItems-DKnm6tp0.js";import"./useAnimationId-C3Y_zOxU.js";import"./ActivePoints-CdWhr2jU.js";import"./Dot-CGLhLTV3.js";import"./RegisterGraphicalItemId-CzEEk6Dd.js";import"./ErrorBarContext-wXozNj3Y.js";import"./GraphicalItemClipPath-C29F_2hP.js";import"./SetGraphicalItem-DX7YElzO.js";import"./graphicalItemIdentity-CtF6lVXQ.js";import"./ActiveShapeUtils-BFi0EA_4.js";import"./Cross-CLLkCYoT.js";import"./Rectangle-DhnvvCg-.js";import"./util-Dxo8gN5i.js";import"./Sector-DHs-qAjC.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};
