import{r as n,R as t}from"./iframe-1WG2GaGK.js";import{L as p}from"./LineChart-cLUl2aVT.js";import{R as s}from"./zIndexSlice-Cov-NdD7.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CfUMVsXY.js";import{X as d}from"./XAxis-B48KuXEj.js";import{Y as y}from"./YAxis-DhndnEIx.js";import{L as u}from"./Legend-Duop5GXq.js";import{L as h}from"./Line-B4LmlSzQ.js";import{T as g}from"./Tooltip-CrbHU2w3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DEOyl0D-.js";import"./index-VHVhx1s3.js";import"./index-4UOu-PIF.js";import"./index-5AmNG6XU.js";import"./index-B9GM_nGd.js";import"./throttle-CilGSGoA.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-yo2RGDNB.js";import"./axisSelectors-Z8eCsImY.js";import"./resolveDefaultProps-B25CKbLH.js";import"./isWellBehavedNumber-B8fKCwi6.js";import"./d3-scale-CmojMi_E.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Zn47P4p1.js";import"./chartDataContext-D8DLudE3.js";import"./CategoricalChart-SqRjK-fv.js";import"./CartesianAxis-CtKdIdzU.js";import"./Layer-DBIGyDPn.js";import"./Text-Dz3dqWjs.js";import"./DOMUtils-BEiFehcN.js";import"./Label-C04bXC5p.js";import"./ZIndexLayer-DViTPcza.js";import"./types-CoEQwN0Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BlVo0R4U.js";import"./symbol-BnNCQHpU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CzZdzVLP.js";import"./uniqBy-gRFmhWu-.js";import"./iteratee-CT0EjMPh.js";import"./Curve-E4cJetkR.js";import"./step-BCYuq7V7.js";import"./AnimatedItems-4pikexb5.js";import"./useAnimationId-CnlBu4wu.js";import"./ActivePoints-QnPfRyyM.js";import"./Dot-DPmzUGmI.js";import"./RegisterGraphicalItemId-kBJx_8Si.js";import"./ErrorBarContext-odKApO7t.js";import"./GraphicalItemClipPath-CPz3ISZ8.js";import"./SetGraphicalItem-C1oEpLce.js";import"./getRadiusAndStrokeWidthFromDot-Be8-hX5d.js";import"./ActiveShapeUtils--OE9DBaA.js";import"./Cross-CY8Ov4nG.js";import"./Rectangle-CSfdiBYy.js";import"./util-Dxo8gN5i.js";import"./Sector-BNmIP3Fj.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
