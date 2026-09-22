import{r as p,R as t}from"./iframe-6EoNA_L8.js";import{L as n}from"./LineChart-kGqkZy1M.js";import{R as s}from"./zIndexSlice-De49t7iX.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BkvkCyZB.js";import{X as d}from"./XAxis-D5W76h4C.js";import{Y as y}from"./YAxis-BC8F1g7K.js";import{L as u}from"./Legend-hTyO8Yq_.js";import{L as h}from"./Line-yafdaSEb.js";import{T as g}from"./Tooltip-otFnhVXl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DIgVm8D4.js";import"./resolveDefaultProps-BeiJcrCE.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CPDr9W-8.js";import"./throttle-qfBh-gJU.js";import"./index-DOuZqOP2.js";import"./index-drI4VfER.js";import"./isWellBehavedNumber-B08jv1io.js";import"./d3-scale-BHNzH7iq.js";import"./index-CW_YvHl3.js";import"./index-BUgLS7M1.js";import"./renderedTicksSlice-CIIKzgpq.js";import"./index-BvtgduTj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cysh7fYc.js";import"./chartDataContext-B2QOvGi0.js";import"./CategoricalChart-BUH5Yjzv.js";import"./CartesianAxis-BCnvc9Ye.js";import"./Layer-CUxzD1DR.js";import"./Text-DZDh1E85.js";import"./DOMUtils-DNveQWYn.js";import"./useId-BXan0_nA.js";import"./useBackwardsCompatibleTheme-BhrjNye9.js";import"./Label-BMFW6Zd2.js";import"./ZIndexLayer-BqdDjbl9.js";import"./types-M0OtQk6p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-ChAQCHfz.js";import"./symbol-CtrrqE7Y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DLgM4IIx.js";import"./uniqBy-C6BW0yGS.js";import"./iteratee-Dem4U58j.js";import"./Curve-8un1g3vs.js";import"./step-DSvUWADx.js";import"./AnimatedItems-DI4_Ab0i.js";import"./useAnimationId-peOMMxO5.js";import"./ActivePoints-PbWSPOCC.js";import"./Dot-BF-0bAL8.js";import"./RegisterGraphicalItemId-DCPWXijy.js";import"./ErrorBarContext-Dh7d5kUD.js";import"./GraphicalItemClipPath-0snefndl.js";import"./SetGraphicalItem-D09cPUlM.js";import"./getRadiusAndStrokeWidthFromDot-CTriDtWQ.js";import"./ActiveShapeUtils-C7faasOA.js";import"./useGraphicalItemIdentity-T4kDeRpG.js";import"./Cross-Br0Y2iUW.js";import"./Rectangle-BR58mqpl.js";import"./util-Dxo8gN5i.js";import"./Sector-DtE-jXuU.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
