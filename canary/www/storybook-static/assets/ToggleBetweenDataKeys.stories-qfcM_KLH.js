import{r as n,e as t}from"./iframe-CCtdbun4.js";import{L as p}from"./LineChart-D0X11IqK.js";import{R as s}from"./arrayEqualityCheck-BN-qRjNh.js";import{C as c}from"./CartesianGrid-DpC4y52a.js";import{X as l}from"./XAxis-Ct1i4Wo3.js";import{Y as d}from"./YAxis-BAJWEbem.js";import{L as y}from"./Legend-BNLMdfYp.js";import{L as h}from"./Line-DI439emv.js";import{T as u}from"./Tooltip-D89oSB-P.js";import{R as g}from"./RechartsHookInspector-nkQJYVm3.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CEuf5fH-.js";import"./index-DBCQ_ffx.js";import"./immer-BcxcW3su.js";import"./hooks-DXcbfnOk.js";import"./axisSelectors-BomcgeiZ.js";import"./d3-scale-CwYvmJNK.js";import"./zIndexSlice-DX2GAYEt.js";import"./renderedTicksSlice-iuxiofvQ.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-rX1ISTKc.js";import"./chartDataContext-D9BGjOgR.js";import"./CategoricalChart-ozbpSDhd.js";import"./resolveDefaultProps-Cu5xR3IA.js";import"./CartesianAxis-DjTpORWb.js";import"./Layer-De9fsiqG.js";import"./Text-BxEo2MUu.js";import"./DOMUtils-DqJTy59P.js";import"./Label-B5ApX3Ma.js";import"./ZIndexLayer-i87njMD3.js";import"./types-W2NqahI8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C_90O_d8.js";import"./symbol-B6Bw4Roa.js";import"./step-axPf2-sT.js";import"./useElementOffset-0JwVNb3G.js";import"./uniqBy-DZebMLEY.js";import"./iteratee-C0-edHXY.js";import"./ReactUtils-DmviycaL.js";import"./ActivePoints-BkjKkFoX.js";import"./Dot-DR26Huk-.js";import"./RegisterGraphicalItemId-BxjxRH6l.js";import"./ErrorBarContext-ANthrryL.js";import"./GraphicalItemClipPath-CUfY08eo.js";import"./SetGraphicalItem-CHU7mth4.js";import"./useAnimationId-Dw71NoSQ.js";import"./getRadiusAndStrokeWidthFromDot-tQsEHpRr.js";import"./ActiveShapeUtils-DrfPmOEF.js";import"./isPlainObject-Cvg7OzPl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkQFoQU0.js";import"./Trapezoid-BDAKKZ25.js";import"./Sector-DD0LTKZr.js";import"./Curve-Bg-TKsWy.js";import"./Cross-DH33fJNB.js";import"./index-BAcfBBrr.js";import"./ChartSizeDimensions-BH1EyVxm.js";import"./OffsetShower-WQ852gw6.js";import"./PlotAreaShower-B-YpjWsE.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
