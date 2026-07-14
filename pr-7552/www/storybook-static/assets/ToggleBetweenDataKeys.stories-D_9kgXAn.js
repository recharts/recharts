import{r as n,R as t}from"./iframe-w7qCbIlq.js";import{L as p}from"./LineChart-Bd8MFQyA.js";import{R as s}from"./zIndexSlice-BtZQ5xih.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-62KjYK99.js";import{X as d}from"./XAxis-8n0ix597.js";import{Y as y}from"./YAxis-CwFi80nS.js";import{L as u}from"./Legend-BOzn4Gr3.js";import{L as h}from"./Line-BlbeS46W.js";import{T as g}from"./Tooltip-BL-JtHNM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CJCCLnSy.js";import"./index-Ddi-T72V.js";import"./index-C1u3rFhR.js";import"./index-BmGe_VQx.js";import"./index-BBIhqOXx.js";import"./throttle-KQ-EWGZj.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-TeAVrZEF.js";import"./axisSelectors-DudJ2V7b.js";import"./resolveDefaultProps-BXXLLFZs.js";import"./isWellBehavedNumber-BLtoVg4o.js";import"./d3-scale-DHyfTYAT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BbPcQF_v.js";import"./chartDataContext-d_tiIYhw.js";import"./CategoricalChart-C5vKFxAI.js";import"./CartesianAxis-CT_UcdRd.js";import"./Layer-C8MJqdtw.js";import"./Text-Bii4Z9SU.js";import"./DOMUtils-BHtgPnwB.js";import"./Label-Bwto3iA9.js";import"./ZIndexLayer-BipLpo9Z.js";import"./types-0ytIGtz9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DpLVmZ-d.js";import"./symbol-DSkPJeUc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BPAlyBBz.js";import"./uniqBy-D4kbD2sN.js";import"./iteratee-kNxDFHiu.js";import"./Curve-858tLF7S.js";import"./step-BY4MZZhT.js";import"./AnimatedItems-DtqXu7a9.js";import"./useAnimationId-BLBs87N6.js";import"./ActivePoints-MWBllTj-.js";import"./Dot-DqpKuKrG.js";import"./RegisterGraphicalItemId-BMqZVFge.js";import"./ErrorBarContext-Ddig5LAI.js";import"./GraphicalItemClipPath-CJg2XcFN.js";import"./SetGraphicalItem-CaM-dNjz.js";import"./getRadiusAndStrokeWidthFromDot-Bj2pWrUE.js";import"./ActiveShapeUtils-pA3gak5X.js";import"./Cross-BHsCGUhH.js";import"./Rectangle-BBGlMB0K.js";import"./util-Dxo8gN5i.js";import"./Sector-B7EdsSzn.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
