import{r as p,R as t}from"./iframe-CsUJaUxM.js";import{L as n}from"./LineChart-CzOsIUza.js";import{R as s}from"./zIndexSlice-DR8GOdx_.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CDnT15vk.js";import{X as d}from"./XAxis-CECMNFnt.js";import{Y as y}from"./YAxis-oUxgU8a1.js";import{L as u}from"./Legend-BqCds3GH.js";import{L as h}from"./Line-T7c7_Mqn.js";import{T as g}from"./Tooltip-BEnwF5SI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-T8mD1Lc3.js";import"./resolveDefaultProps-wCngT9vT.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CPJkZcPs.js";import"./throttle-jYQKZYpr.js";import"./index-DwbFMAfW.js";import"./index-CuzTPq-B.js";import"./isWellBehavedNumber-B1KHZ9NA.js";import"./d3-scale-BlcUMonb.js";import"./index-B6LqR4R9.js";import"./index-LRMsLTDO.js";import"./renderedTicksSlice-DMUlxU_r.js";import"./index-BkMQdhAs.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-9AGq9zI6.js";import"./chartDataContext-Dl9PHzyn.js";import"./CategoricalChart-BPTMFHzn.js";import"./CartesianAxis-DGUFe4-P.js";import"./Layer-BL2WKRfB.js";import"./Text-Ca7ex0z4.js";import"./DOMUtils-DV9i-gvX.js";import"./useId-DskunR0V.js";import"./useBackwardsCompatibleTheme-CzetmO85.js";import"./Label-BBIMhlH3.js";import"./ZIndexLayer-y8FwKDfZ.js";import"./types-DY32nFAv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CM0b_dES.js";import"./symbol-COICJbUr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C_sTQTtU.js";import"./uniqBy-BPwJ3JcN.js";import"./iteratee-BC6ZgAay.js";import"./Curve-BBNZ0-qm.js";import"./step-E2BXM1O_.js";import"./AnimatedItems-BwJboHDv.js";import"./useAnimationId-CIIiKuIL.js";import"./ActivePoints-DgXpbHzY.js";import"./Dot-3GIj0k7o.js";import"./RegisterGraphicalItemId-BOfAVeru.js";import"./ErrorBarContext-BOrR3fwL.js";import"./GraphicalItemClipPath-yorSgC5b.js";import"./SetGraphicalItem-y4Qrn0nd.js";import"./getRadiusAndStrokeWidthFromDot-qziiS-Bg.js";import"./ActiveShapeUtils-CrmNWRMG.js";import"./useGraphicalItemIdentity-Dtj6CrmT.js";import"./Cross-C4zgdPc0.js";import"./Rectangle-D6D4yI4Z.js";import"./util-Dxo8gN5i.js";import"./Sector-M0Sbbnyt.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
