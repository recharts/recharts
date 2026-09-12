import{r as p,R as t}from"./iframe-D1t-DMDX.js";import{L as n}from"./LineChart-BWX7BfYV.js";import{R as s}from"./zIndexSlice-D3y7WbGu.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dk3gGdeX.js";import{X as d}from"./XAxis-D2W5e4ho.js";import{Y as y}from"./YAxis-DA6hAinn.js";import{L as u}from"./Legend-Cied3KuF.js";import{L as h}from"./Line-F5T58cXI.js";import{T as g}from"./Tooltip-Dl83HaDI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BZjYCuuq.js";import"./resolveDefaultProps-CslUsmpl.js";import"./get-C2VjdU0L.js";import"./axisSelectors-j0uMY4D2.js";import"./throttle-6Gvu17mH.js";import"./index-DN4Hf2vp.js";import"./index-DXAWsi2y.js";import"./isWellBehavedNumber-CUXK_wKy.js";import"./d3-scale-BUFFZJWe.js";import"./index-BVgOAcLw.js";import"./index-DBKl6Uwy.js";import"./renderedTicksSlice-BDhtYcVT.js";import"./index-DVZyTUvl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CkbIBTi3.js";import"./chartDataContext-Cv-ECou4.js";import"./CategoricalChart-CSw7HOxG.js";import"./CartesianAxis-zM23PuK9.js";import"./Layer-C3v8UF0F.js";import"./Text-DAi50bHG.js";import"./DOMUtils-B6_ZXa7e.js";import"./useId-DDzIZyqo.js";import"./useBackwardsCompatibleTheme-BSefrMjh.js";import"./Label-l8kFpP-D.js";import"./ZIndexLayer-DAI4vBfR.js";import"./types-CakNgFJg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B523Ziwf.js";import"./symbol-DHiI_cX5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BtiRWiP_.js";import"./uniqBy-DQAv3Mv_.js";import"./iteratee-B8C5seUw.js";import"./Curve-DkVKde3C.js";import"./step-2p0USgF7.js";import"./AnimatedItems-C6KHS5pS.js";import"./useAnimationId-CHualwmZ.js";import"./ActivePoints-DH8HO3TV.js";import"./Dot-iuKqNYRF.js";import"./RegisterGraphicalItemId-6E8BE8Ka.js";import"./ErrorBarContext-aZAJKe3w.js";import"./GraphicalItemClipPath-CTjco7rb.js";import"./SetGraphicalItem-B3rvHIl-.js";import"./getRadiusAndStrokeWidthFromDot-B9ylC5dT.js";import"./ActiveShapeUtils-DPvI5kC4.js";import"./useGraphicalItemIdentity-Y17Z1Bub.js";import"./Cross-LaO4cc3g.js";import"./Rectangle-CTv3GIXO.js";import"./util-Dxo8gN5i.js";import"./Sector-DQhmQbc1.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
