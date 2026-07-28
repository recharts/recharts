import{r as n,R as t}from"./iframe-DUrhAGem.js";import{L as p}from"./LineChart-hkFh54b5.js";import{R as s}from"./zIndexSlice-DdMK3B0N.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DS7fbmD7.js";import{X as d}from"./XAxis-RIRw3T0L.js";import{Y as y}from"./YAxis--wp8j7v5.js";import{L as u}from"./Legend-C6612Dil.js";import{L as h}from"./Line-CBMbg85k.js";import{T as g}from"./Tooltip-CgqeczDe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BnFDuvuz.js";import"./index-Cpmma9TD.js";import"./index-CNLWSLM9.js";import"./index-DCvD1AlG.js";import"./index-Ci9yztB-.js";import"./throttle-D3vyfJ8U.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DZdK350N.js";import"./axisSelectors-DZbM2Ze4.js";import"./resolveDefaultProps-BTGu5wQu.js";import"./isWellBehavedNumber-DFEWDh2V.js";import"./d3-scale-SkNolWO8.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CWlmKWcs.js";import"./chartDataContext-DaAbIer4.js";import"./CategoricalChart-CpTQxP4M.js";import"./CartesianAxis-IffF52gj.js";import"./Layer-Dt-vE1vN.js";import"./Text-BrHlFoZT.js";import"./DOMUtils-CoHfxK0O.js";import"./Label-Y4Dm0VZ7.js";import"./ZIndexLayer-CXa7SyiJ.js";import"./types-ClGgKr9E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DPqqk1vy.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-DFoWMewR.js";import"./symbol-BhNE3Frx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-G25gOvED.js";import"./uniqBy-jcaqdoDx.js";import"./iteratee-B2QDbcSu.js";import"./Curve-95W41D07.js";import"./step-1cVCQ5Jl.js";import"./AnimatedItems-wThfzOGn.js";import"./useAnimationId-VITr_DdB.js";import"./ActivePoints-CwAypjqz.js";import"./Dot-pQkDRCWY.js";import"./RegisterGraphicalItemId-Ck0eBYhQ.js";import"./ErrorBarContext-1rKXFGMB.js";import"./GraphicalItemClipPath-DZHG2jah.js";import"./SetGraphicalItem-D3CB3LDo.js";import"./getRadiusAndStrokeWidthFromDot-CJOj0WiY.js";import"./ActiveShapeUtils-0ZcDx16I.js";import"./Cross-CcQ18uYf.js";import"./Rectangle-D_OnYWLV.js";import"./util-Dxo8gN5i.js";import"./Sector-C15_tvGW.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
