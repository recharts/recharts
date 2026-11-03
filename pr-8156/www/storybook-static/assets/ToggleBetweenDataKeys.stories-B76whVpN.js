import{r as p,R as t}from"./iframe-BpPwD_oK.js";import{L as n}from"./LineChart-BTJEcHVT.js";import{R as s}from"./zIndexSlice-CZskftau.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CltJRHiR.js";import{X as d}from"./XAxis-Dja-Llqh.js";import{Y as y}from"./YAxis-GMxCrcAm.js";import{L as u}from"./Legend-KM2rCvli.js";import{L as h}from"./Line-C-mXzzMU.js";import{T as g}from"./Tooltip-IpPgWDqU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtJNI11v.js";import"./resolveDefaultProps-oHxAH6y3.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CCOlr32b.js";import"./throttle-jRz9fd5W.js";import"./index-BDbYb2y7.js";import"./index-C-Ap2UZI.js";import"./polarAxisSelectors-gNxk2Qvg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CBz-jIwW.js";import"./index-sbP1X6JH.js";import"./index-C3FSz61l.js";import"./renderedTicksSlice-BacllR_T.js";import"./index-DaSN1dEV.js";import"./fillDefinitions-BoqwWLdI.js";import"./CartesianChart-DUDm0Jrf.js";import"./ZIndexPortal-CPCtvPJx.js";import"./CategoricalChart-BCsFwQg5.js";import"./CartesianAxis-DPe5aXb5.js";import"./Layer-uKCEWQEh.js";import"./Text-BhQ_ePKx.js";import"./DOMUtils-BrCWiXlY.js";import"./ZIndexLayer-BfN85Ldf.js";import"./Label-Dm2gX9XZ.js";import"./types-C3LEdY55.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CmOlxG5J.js";import"./symbol-CEUG_TNl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Clqm1mfa.js";import"./uniqBy-hvFHRVdb.js";import"./iteratee-CYqM1-65.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CsmQrmZK.js";import"./step-uxJcfdRW.js";import"./LabelList-CdwfQdaD.js";import"./ActivePoints-rm17DGg7.js";import"./Dot-D_vqSwmx.js";import"./activeStyles-BKBboL8s.js";import"./useAnimationId-DjPYETUK.js";import"./dataEntryStyles-CSbDp-Df.js";import"./ErrorBarContext-C5It2V8R.js";import"./SetGraphicalItem-CtMfZbBm.js";import"./getRadiusAndStrokeWidthFromDot-BkFKvs15.js";import"./ActiveShapeUtils-D3pEehn2.js";import"./useEffectiveDataKey-CeotyzvV.js";import"./Cross-DUGsSR05.js";import"./Rectangle-KfOr2rpu.js";import"./util-Dxo8gN5i.js";import"./Sector-CRRCzxF2.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
