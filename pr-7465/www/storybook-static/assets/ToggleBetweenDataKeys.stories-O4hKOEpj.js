import{r as n,R as t}from"./iframe-C_T02oQn.js";import{L as p}from"./LineChart-gaPBcPpD.js";import{R as s}from"./zIndexSlice-PaMIo_4H.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-JkXasBLp.js";import{X as d}from"./XAxis-9hDWnVEM.js";import{Y as y}from"./YAxis-CAA9Sn25.js";import{L as u}from"./Legend-BSh8bNuS.js";import{L as h}from"./Line-Bkm0IHhG.js";import{T as g}from"./Tooltip-CzaIn816.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B6sFF1OD.js";import"./index-C8_JgXbr.js";import"./index-D8uzW4ZU.js";import"./index-Dlc1g4gM.js";import"./index-Ca6EOx6F.js";import"./immer-B6lblpQa.js";import"./get-C7erGA50.js";import"./renderedTicksSlice-CaJKKs-e.js";import"./axisSelectors-BhG2tLgr.js";import"./d3-scale-BkdgfgBA.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-m_js62KJ.js";import"./isWellBehavedNumber-BCiXswn1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BDn-adSN.js";import"./chartDataContext-BpZSWeLp.js";import"./CategoricalChart-DJkiCneY.js";import"./CartesianAxis-Du2JQot0.js";import"./Layer-DjmjZ8nK.js";import"./Text-BPMY0rSA.js";import"./DOMUtils-D0fMC5uZ.js";import"./Label-PISAROHv.js";import"./ZIndexLayer-BEphblF2.js";import"./types-BgdJMLXg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-uE90l84i.js";import"./symbol-CvYDruQ3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DhbYobY7.js";import"./uniqBy-CWJ7W0V1.js";import"./iteratee-CidJxIEL.js";import"./Curve-YTaF5YAP.js";import"./step-DxTezoeO.js";import"./AnimatedItems-BUXgV9u-.js";import"./useAnimationId-BP6MXfIJ.js";import"./ActivePoints-wYW31SoX.js";import"./Dot-BqWNwI4e.js";import"./RegisterGraphicalItemId-CLd-qaBQ.js";import"./ErrorBarContext-BlU25AOm.js";import"./GraphicalItemClipPath-hcKIGZeq.js";import"./SetGraphicalItem-CYOjbzSp.js";import"./getRadiusAndStrokeWidthFromDot-BgRiSanx.js";import"./ActiveShapeUtils-CWkOqTvX.js";import"./Cross-Cxjm4Cmv.js";import"./Rectangle-C_fFb_u8.js";import"./Sector-_x2Ka2K-.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
