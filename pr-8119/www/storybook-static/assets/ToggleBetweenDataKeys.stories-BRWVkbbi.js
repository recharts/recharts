import{r as p,R as t}from"./iframe-FiuXs261.js";import{L as n}from"./LineChart-CmGGWmgQ.js";import{R as s}from"./zIndexSlice-D8yz0c_i.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-dHl__5UF.js";import{X as d}from"./XAxis-Bb3iEGS4.js";import{Y as y}from"./YAxis-CQrrt2_W.js";import{L as u}from"./Legend-DPXGR-nH.js";import{L as h}from"./Line-M2EO-pwK.js";import{T as g}from"./Tooltip-DNkwbJ_j.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-PYqIov25.js";import"./resolveDefaultProps-BihUq3X9.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C9DIlOnm.js";import"./throttle-CYeAiCIk.js";import"./index-LYf9fdMT.js";import"./index-CrJ_p8tR.js";import"./polarAxisSelectors-C8b7BSTM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CtDFr3v-.js";import"./index-I95GPJkK.js";import"./index-CGxDoIWw.js";import"./renderedTicksSlice-B2WUnf26.js";import"./index-C5CBIWPP.js";import"./CartesianChart-BGhHw0Sw.js";import"./ZIndexPortal-a8T82K_T.js";import"./CategoricalChart-C7XeD-rb.js";import"./CartesianAxis-pVZ2WZ4j.js";import"./Layer-BMNQgcyM.js";import"./Text-CNbe1Pgb.js";import"./DOMUtils-DMtknFU5.js";import"./ZIndexLayer-BuK4cbp4.js";import"./Label-DgCFchF-.js";import"./types-CG6SsZFp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-vnM3HbbD.js";import"./symbol-DlnVlajL.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-B2wKYMmC.js";import"./dataEntryStyles-BABJdaaS.js";import"./useElementOffset-Cyn2xwTz.js";import"./uniqBy-Cb3-fOKb.js";import"./iteratee-DOdgceK_.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CjJsHvFZ.js";import"./step-AV-3KlMf.js";import"./LabelList-DRqt9mVh.js";import"./ActivePoints-Ddv2UM3f.js";import"./Dot-BFh-_60U.js";import"./activeStyles-DrCvysIi.js";import"./useAnimationId-DgiqBF0b.js";import"./ErrorBarContext-GrhwdkVF.js";import"./SetGraphicalItem-CXpshRR6.js";import"./getRadiusAndStrokeWidthFromDot-4di0vwKC.js";import"./ActiveShapeUtils-D11w1Cqa.js";import"./useEffectiveDataKey-BS1bhAcI.js";import"./Cross-CAe0pQFZ.js";import"./Rectangle-DdyI-Bgs.js";import"./util-Dxo8gN5i.js";import"./Sector-DtW55Dmb.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
