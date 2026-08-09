import{r as n,R as t}from"./iframe--KdzZtf9.js";import{L as p}from"./LineChart-DlkvpuLa.js";import{R as s}from"./zIndexSlice-CHztvQxJ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D5FjoZZr.js";import{X as d}from"./XAxis-BtfaW-Ms.js";import{Y as y}from"./YAxis-CoP3OSHi.js";import{L as u}from"./Legend-_bWUKMph.js";import{L as h}from"./Line-CLz33ZR0.js";import{T as g}from"./Tooltip-_1wfcGQ4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DbMAL-gW.js";import"./index-q7cE3wgI.js";import"./index-BlCKzZxU.js";import"./index-S42N58hu.js";import"./index-BmB7_o0P.js";import"./throttle-hG26ZCHv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DJc-QTCs.js";import"./resolveDefaultProps-DclZvKxN.js";import"./isWellBehavedNumber-vpVCWLp_.js";import"./d3-scale-DQou-uOy.js";import"./renderedTicksSlice-D0sDrWJo.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-tb7UCCzE.js";import"./chartDataContext-sbVF-hg4.js";import"./CategoricalChart-DmFxRtAx.js";import"./CartesianAxis-8V80jjh3.js";import"./Layer-DCgJY1vZ.js";import"./Text-DiczCyux.js";import"./DOMUtils-DCy02iSc.js";import"./Label-Bwq_3Ge6.js";import"./ZIndexLayer--b9avAgZ.js";import"./types-DxjttXzA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CFhBSuLJ.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DiBbRsrj.js";import"./symbol-CCGLzW4r.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DuPTW83n.js";import"./uniqBy-DGNEKTWG.js";import"./iteratee-BAaHiQpy.js";import"./Curve-Blx4pOcl.js";import"./step-CWWzJll9.js";import"./AnimatedItems-Ca9tbEhj.js";import"./useAnimationId-Dz24l0hc.js";import"./ActivePoints-9Jl-GXNH.js";import"./Dot-BnDtKOPm.js";import"./RegisterGraphicalItemId-DrHIocnK.js";import"./ErrorBarContext-DDlfLFIp.js";import"./graphicalItemIdentity-BErd8u6-.js";import"./SetGraphicalItem-BhKlnoJm.js";import"./getRadiusAndStrokeWidthFromDot-Ccc-h-4F.js";import"./ActiveShapeUtils-BtJUa3Ui.js";import"./Cross-rTbuR9fV.js";import"./Rectangle-24EhHdQN.js";import"./util-Dxo8gN5i.js";import"./Sector-emOqlKu7.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
