import{r as p,R as t}from"./iframe-Bs3p_tzt.js";import{L as n}from"./LineChart-C5lPrJeM.js";import{R as s}from"./zIndexSlice-DcX3AzLa.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D9Pw5QiF.js";import{X as d}from"./XAxis-D4sncX3B.js";import{Y as y}from"./YAxis-7MDEiAH-.js";import{L as u}from"./Legend-Ns98LlSg.js";import{L as h}from"./Line-GIJ-1XxW.js";import{T as g}from"./Tooltip-CGFqiCcr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C611g8G8.js";import"./resolveDefaultProps-CZZ-mEKB.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C4-S1rEu.js";import"./throttle-BEGWT0nE.js";import"./index-B1i9GgdA.js";import"./index-B2enMVi0.js";import"./isWellBehavedNumber-BsuO-HCD.js";import"./d3-scale-D3QRU-MC.js";import"./index-DMMqTPnq.js";import"./index-UxLT5P2P.js";import"./renderedTicksSlice-CtTEEx-4.js";import"./index-BfdycSnH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DvvRDnZV.js";import"./chartDataContext-Da2Hh662.js";import"./CategoricalChart-BaI0fWCj.js";import"./CartesianAxis-hsXt1MB3.js";import"./Layer-BnnxApB2.js";import"./Text-fd4E17kL.js";import"./DOMUtils-BuNDld79.js";import"./useId-Bu7K8pR2.js";import"./useBackwardsCompatibleTheme-DDcrSO0e.js";import"./Label-D1fZ0tZ3.js";import"./ZIndexLayer-bsBUBclv.js";import"./types-DwWjBcLa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BezKBTPv.js";import"./symbol-C0uO4vM7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-L8c5YtIC.js";import"./uniqBy-CTQygRzA.js";import"./iteratee-CcX_f7ol.js";import"./Curve-OpKkiqhX.js";import"./step-B0GBXtEj.js";import"./AnimatedItems-BKsmNJL9.js";import"./useAnimationId-BGb6X0s3.js";import"./ActivePoints-6kUizrYZ.js";import"./Dot-CT0CWpgM.js";import"./RegisterGraphicalItemId-DLHqq9CD.js";import"./ErrorBarContext-Bf6tfPH3.js";import"./GraphicalItemClipPath-CW7J0A_O.js";import"./SetGraphicalItem-B-q3EqQB.js";import"./getRadiusAndStrokeWidthFromDot-ChgnJYUB.js";import"./ActiveShapeUtils-C1lnxfx5.js";import"./useGraphicalItemIdentity-Bn1qTGOS.js";import"./Cross-C27z34rY.js";import"./Rectangle-DGv7rq-A.js";import"./util-Dxo8gN5i.js";import"./Sector-DBnEJkKd.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
