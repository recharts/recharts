import{u as n,e as t}from"./iframe-DF4bgTei.js";import{L as p}from"./LineChart-D_gMte7O.js";import{g as s}from"./arrayEqualityCheck-BMFJWZLR.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-BvvRwqJF.js";import{X as d}from"./XAxis-DbY3ezb1.js";import{Y as u}from"./YAxis-D734sO1U.js";import{L as y}from"./Legend-sMJksB2F.js";import{L as h}from"./Line-BRJiVivl.js";import{T as g}from"./Tooltip-k_OdOkyj.js";import{R as K}from"./RechartsHookInspector-D-0gsnbs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQPl6oVo.js";import"./index-BTdRTt63.js";import"./immer-MYTD12gY.js";import"./hooks-XeIQ09GK.js";import"./axisSelectors-r3e8Ogcr.js";import"./d3-scale-Dig20Cak.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-zLQdFJPR.js";import"./renderedTicksSlice-CPjOMDMT.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DiQ110-r.js";import"./chartDataContext-nbJQ4Evh.js";import"./CategoricalChart-BwOuhOYL.js";import"./resolveDefaultProps-BXVR8Nu8.js";import"./CartesianAxis-OtzrWNBq.js";import"./Layer-B2y3FrWZ.js";import"./Text-Cn-CsKa2.js";import"./DOMUtils-C5ULhfnp.js";import"./Label-BpQxBJRP.js";import"./ZIndexLayer-k5HrhQv7.js";import"./types-D1G2vCVO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-QSpHqNgA.js";import"./symbol-CRbTC08o.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BcTVsJDN.js";import"./uniqBy-BXIpk_rG.js";import"./iteratee-BpH81eH_.js";import"./Curve-BOvv8LQu.js";import"./step-BNKRdB7Z.js";import"./AnimatedItems-NJgg5Z7A.js";import"./useAnimationId-UfrY9hCr.js";import"./ActivePoints-DmxnIX1w.js";import"./Dot-BYGa6gij.js";import"./RegisterGraphicalItemId-BXLg-7qN.js";import"./ErrorBarContext-FGV68ztp.js";import"./GraphicalItemClipPath-DJtNLijn.js";import"./SetGraphicalItem-CZCtNcvF.js";import"./getRadiusAndStrokeWidthFromDot-gX3jCxFw.js";import"./ActiveShapeUtils-CkfODQkB.js";import"./Cross-B-zZt1A_.js";import"./Rectangle-BRW7e3qr.js";import"./Sector-CZ_a1zY_.js";import"./index-BJloLEZI.js";import"./ChartSizeDimensions-BYrQZ-ie.js";import"./OffsetShower-adDhQ1RV.js";import"./PlotAreaShower-CsKiIBy8.js";const kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,kt as default};
