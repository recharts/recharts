import{r as p,R as t}from"./iframe-CovNYYUo.js";import{L as n}from"./LineChart-HkOuSHlt.js";import{R as s}from"./zIndexSlice-CG1QRjTL.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dp78tYlU.js";import{X as d}from"./XAxis-Chp7Zboz.js";import{Y as y}from"./YAxis-C8zfjK9y.js";import{L as u}from"./Legend-Dz5sbpXT.js";import{L as h}from"./Line-CMjTMYY1.js";import{T as g}from"./Tooltip-y1LNUz1f.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CcAFjHOR.js";import"./resolveDefaultProps-C3KXfaUm.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DLPfwtJa.js";import"./throttle-DFV15FmS.js";import"./index-BOOo10Dt.js";import"./index-BX1OwXWy.js";import"./isWellBehavedNumber-CBjh5bWe.js";import"./d3-scale-8-fomhbE.js";import"./index-CJEqzZUU.js";import"./index-QRiHEery.js";import"./renderedTicksSlice-CESc-GFX.js";import"./index-B2LjI-r6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-90if4UGz.js";import"./chartDataContext-H-ub9DU9.js";import"./CategoricalChart-BDIwdK2u.js";import"./CartesianAxis--m_-6qlQ.js";import"./Layer-DKlwDXlR.js";import"./Text-DEuItJ4K.js";import"./DOMUtils-De4xq-vL.js";import"./useId-Cjo1HJUq.js";import"./useBackwardsCompatibleTheme-DN97qP5V.js";import"./Label-9Le1xeRu.js";import"./ZIndexLayer-ZvhdQo8-.js";import"./types-KNQCcPDF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BN8PbOpm.js";import"./symbol-0at1p0JS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BHWyIDmU.js";import"./uniqBy-P1sDwhSw.js";import"./iteratee-Cj-wo9jc.js";import"./Curve-CpiWutfx.js";import"./step-CsDIgpPD.js";import"./AnimatedItems-CJ9rAey6.js";import"./useAnimationId-JaizdS8W.js";import"./ActivePoints-D3M5ri8z.js";import"./Dot-DDfjuoX5.js";import"./RegisterGraphicalItemId-Bcqk9WK5.js";import"./ErrorBarContext-QhTrXeZ4.js";import"./GraphicalItemClipPath-Ba1ve3pE.js";import"./SetGraphicalItem-CMRsJ6yg.js";import"./getRadiusAndStrokeWidthFromDot-DnZmCba8.js";import"./ActiveShapeUtils-D5kbOuDR.js";import"./useGraphicalItemIdentity-Dsva0Zcm.js";import"./Cross-C9r9BpSQ.js";import"./Rectangle-Ba8s0q7Q.js";import"./util-Dxo8gN5i.js";import"./Sector-B9A0Acf-.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
