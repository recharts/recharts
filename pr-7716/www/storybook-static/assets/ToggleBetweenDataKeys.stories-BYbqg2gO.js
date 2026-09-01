import{r as n,R as t}from"./iframe-eCr2-59Z.js";import{L as p}from"./LineChart-Dp6CvQsD.js";import{R as s}from"./zIndexSlice-CD7Nzmbk.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DV2mmc9Z.js";import{X as d}from"./XAxis-BeuO0xzQ.js";import{Y as y}from"./YAxis-Cuh1Lbu7.js";import{L as u}from"./Legend-Lf0FqqrH.js";import{L as h}from"./Line-C0J7S93P.js";import{T as g}from"./Tooltip-Nk-JtxEK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DoeZcTzK.js";import"./resolveDefaultProps-CLrpEwf5.js";import"./get-C2VjdU0L.js";import"./axisSelectors-XgUrcrj-.js";import"./throttle-CHiOBW5g.js";import"./index-DlVaZeCX.js";import"./index-CDbn5IN3.js";import"./isWellBehavedNumber-BX5cDItw.js";import"./d3-scale-DSuKdHKR.js";import"./index-D2uCi-Qk.js";import"./index-CyK8wlGY.js";import"./renderedTicksSlice-BlPrZ01d.js";import"./index-BuNBM-8V.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DC1yVdgS.js";import"./chartDataContext-BNVmIje_.js";import"./CategoricalChart-w4Nfi_R8.js";import"./CartesianAxis-DM1SJqww.js";import"./Layer-B9Pm5ax2.js";import"./Text-Dt8yoLTw.js";import"./DOMUtils-CvaVkNT1.js";import"./useId-wEfkqppv.js";import"./useBackwardsCompatibleTheme-chYhM6Hr.js";import"./Label-Dt0yALiM.js";import"./ZIndexLayer-t0OZMtls.js";import"./types-CkIcctJW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CPNbxaWf.js";import"./symbol-CB8M2uMu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-MEJhTGNO.js";import"./uniqBy-U4NYpMNG.js";import"./iteratee-iLRiaLVh.js";import"./Curve-_JaX0enx.js";import"./step-DPSpBZpB.js";import"./AnimatedItems-ObasoevI.js";import"./useAnimationId-BzRkh0x1.js";import"./ActivePoints-Cr5YS-RN.js";import"./Dot-C_rZA8Hd.js";import"./RegisterGraphicalItemId-C5jGdxAH.js";import"./ErrorBarContext-CMzXWbdm.js";import"./GraphicalItemClipPath-C8yNHMes.js";import"./SetGraphicalItem-zq2UkTvM.js";import"./getRadiusAndStrokeWidthFromDot-BYtBcAc6.js";import"./ActiveShapeUtils-9F7-N6Ps.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BfzXoIjE.js";import"./Rectangle-BNHBAKh_.js";import"./util-Dxo8gN5i.js";import"./Sector-CE_l6vGe.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
