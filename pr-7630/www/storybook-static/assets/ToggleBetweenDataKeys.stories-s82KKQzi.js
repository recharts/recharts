import{r as n,R as t}from"./iframe-osdC7w3x.js";import{L as p}from"./LineChart-xXTseTwi.js";import{R as s}from"./zIndexSlice-deUrzjsz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CPnHaeQZ.js";import{X as d}from"./XAxis-B__lQt6h.js";import{Y as y}from"./YAxis-DYUQr3XS.js";import{L as u}from"./Legend-pDiA-ZTx.js";import{L as h}from"./Line-ChMsZBXA.js";import{T as g}from"./Tooltip-Bk1PXPG6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BwYigjFj.js";import"./index-0D71YoJz.js";import"./index-BnccS2yU.js";import"./index-Dk6HIvLW.js";import"./index-DYD_OYQh.js";import"./throttle-yBEImYyh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D59_Gagr.js";import"./resolveDefaultProps-BjlKs9r7.js";import"./isWellBehavedNumber-Ch_81v8O.js";import"./d3-scale-Dxvyh_dk.js";import"./renderedTicksSlice-BzoWiF6G.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D55rucOT.js";import"./chartDataContext-DGjFZnBH.js";import"./CategoricalChart-CACDpCto.js";import"./CartesianAxis-D1s41LT1.js";import"./Layer-CRq3eSZM.js";import"./Text-HkDUvF78.js";import"./DOMUtils-CpdlvjrD.js";import"./Label-CRRMP5SS.js";import"./ZIndexLayer-C_4Zumz8.js";import"./types-PJaZpOTb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-4-tV1CA2.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Coi-Izm_.js";import"./symbol-BY8GUPiW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ci-G34ee.js";import"./uniqBy-BwdA_Akb.js";import"./iteratee-Bc7fw8nQ.js";import"./Curve-CnankNoj.js";import"./step-BWmIUyya.js";import"./AnimatedItems-DHXks09V.js";import"./useAnimationId-T5o_BkmZ.js";import"./ActivePoints-XOhn4AON.js";import"./Dot-CXtOSde0.js";import"./RegisterGraphicalItemId-Bpt47ePh.js";import"./ErrorBarContext-DDxN4O9o.js";import"./GraphicalItemClipPath-CchViqUF.js";import"./SetGraphicalItem-Qozm5Dg5.js";import"./getRadiusAndStrokeWidthFromDot-aTO7lmXX.js";import"./ActiveShapeUtils-DA6oNeNX.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DBJ5csrU.js";import"./Rectangle-IzVRkUh0.js";import"./util-Dxo8gN5i.js";import"./Sector-Ca7YNuBr.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
