import{r as p,R as t}from"./iframe-CEaKFLOD.js";import{L as n}from"./LineChart-DkfBPM4t.js";import{R as s}from"./zIndexSlice-BW_-kNl2.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-AgVp7jlP.js";import{X as d}from"./XAxis-xN7pSHzN.js";import{Y as y}from"./YAxis-Cm2tjuJm.js";import{L as u}from"./Legend-DnP4zCwl.js";import{L as h}from"./Line-DgOIP6oP.js";import{T as g}from"./Tooltip-CfGSyM9H.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWplp24t.js";import"./resolveDefaultProps-y1moel4K.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CCBeMCMj.js";import"./throttle-BTwCYOHA.js";import"./index-BP77GY6y.js";import"./index-Pesxz8sF.js";import"./isWellBehavedNumber-DMSwtAM2.js";import"./d3-scale-xgyjEPPy.js";import"./index-_btimE9G.js";import"./index-CqNUlXBo.js";import"./renderedTicksSlice-pAYw7YNa.js";import"./index-CA_j_GK2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BqEoKcYr.js";import"./chartDataContext-ehQpVm1w.js";import"./CategoricalChart-BHppyMGY.js";import"./CartesianAxis-DZYvFW8B.js";import"./Layer-CAr7LORZ.js";import"./Text-Bjai807M.js";import"./DOMUtils-DMHzK5Q0.js";import"./useId-DBCCsHcD.js";import"./useBackwardsCompatibleTheme-VjyVXj2U.js";import"./Label-BzoSUysL.js";import"./ZIndexLayer--MuvhbKE.js";import"./types-Da2TODPT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-5r6rCeAJ.js";import"./symbol-6uRkNH0Z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-c3kW9Mat.js";import"./uniqBy-hLK4QAWK.js";import"./iteratee-COhtBRtJ.js";import"./Curve-DFnxsFyy.js";import"./step-SqhK0zoK.js";import"./AnimatedItems-BousSNqt.js";import"./useAnimationId-D_rlhFDI.js";import"./ActivePoints-DL0uaK1o.js";import"./Dot-RK_ht-a6.js";import"./RegisterGraphicalItemId-BZrlXr-M.js";import"./ErrorBarContext-CtrcR3pN.js";import"./GraphicalItemClipPath-CA8fPvSm.js";import"./SetGraphicalItem-BktkMU9R.js";import"./getRadiusAndStrokeWidthFromDot-rCzGUsqU.js";import"./ActiveShapeUtils-5t5AMzdk.js";import"./useGraphicalItemIdentity-BnhZXg65.js";import"./Cross-rUERuzKr.js";import"./Rectangle-BqqSxccJ.js";import"./util-Dxo8gN5i.js";import"./Sector-ZOUMCj1V.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
