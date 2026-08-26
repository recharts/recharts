import{r as n,R as t}from"./iframe-n1jsfVDG.js";import{L as p}from"./LineChart-PHcoPUnS.js";import{R as s}from"./zIndexSlice-BRlbTYqB.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-NOg56N8e.js";import{X as d}from"./XAxis-XfJlYZND.js";import{Y as y}from"./YAxis-Bo1-Hgpg.js";import{L as u}from"./Legend-CoPAVXSA.js";import{L as h}from"./Line-CYxi_v-i.js";import{T as g}from"./Tooltip-407_u1jn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CtxvIequ.js";import"./resolveDefaultProps-BAQjLDG_.js";import"./get-C2VjdU0L.js";import"./axisSelectors-7NZ6PaeE.js";import"./throttle-BndXY2H8.js";import"./index-CgFE3bjK.js";import"./index-WXWaFicj.js";import"./isWellBehavedNumber-51Xh59nn.js";import"./d3-scale-DHoUxLai.js";import"./index-CBp2l__h.js";import"./index-DNYwsh8I.js";import"./renderedTicksSlice-rKTqRgg8.js";import"./index-C2dJWAfM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dfjy31tx.js";import"./chartDataContext-XRtQdSke.js";import"./CategoricalChart-CYGfKh2e.js";import"./CartesianAxis-9JtcSgtY.js";import"./Layer-CoRWBRFX.js";import"./Text-BwTkl3FB.js";import"./DOMUtils-B7JqCpD5.js";import"./useId-CqUHn1t3.js";import"./useBackwardsCompatibleTheme-BrtymnuF.js";import"./Label-B5dy1Vd6.js";import"./ZIndexLayer-B-b1Mp40.js";import"./types-DxCRAK1R.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DdVlzxP8.js";import"./symbol-C33xVuiR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ZEcbDPf_.js";import"./uniqBy-BzgSuY-c.js";import"./iteratee-B8fhTNiZ.js";import"./Curve-B5xOTs2B.js";import"./step-B7eMn8MW.js";import"./AnimatedItems-CK27PxaM.js";import"./useAnimationId-DmMej8H7.js";import"./ActivePoints-BgeuL4dW.js";import"./Dot-BWSVmybM.js";import"./RegisterGraphicalItemId-CfRcyWlO.js";import"./ErrorBarContext-Ba37a78Y.js";import"./GraphicalItemClipPath-COfUJuyE.js";import"./SetGraphicalItem-DGwR4qus.js";import"./getRadiusAndStrokeWidthFromDot-CpUR_Izt.js";import"./ActiveShapeUtils-D8gDtxNc.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BzYqCQve.js";import"./Rectangle-CP1iRVSw.js";import"./util-Dxo8gN5i.js";import"./Sector-m1gBP5km.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
