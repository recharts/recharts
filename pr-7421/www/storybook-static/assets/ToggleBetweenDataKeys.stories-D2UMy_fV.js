import{r as n,R as t}from"./iframe-D2mK0_SY.js";import{L as p}from"./LineChart-D-U2Bh0x.js";import{R as s}from"./zIndexSlice-CurYRJ-V.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BeEFaWPi.js";import{X as d}from"./XAxis-BpVV2nBf.js";import{Y as y}from"./YAxis-C4SnN1OG.js";import{L as u}from"./Legend-1qBdK27m.js";import{L as h}from"./Line-M_0qro2I.js";import{T as g}from"./Tooltip-DE_oVvHA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Da4b3ttl.js";import"./index-CTpZBZDJ.js";import"./index-DFlAh1f1.js";import"./index-EKI16Vl3.js";import"./index-c7pUvxdZ.js";import"./immer-Cds45GwY.js";import"./get-gd89bvM7.js";import"./renderedTicksSlice-Cv_tPpdR.js";import"./axisSelectors-BOYHxsHM.js";import"./d3-scale-D7S-A9mQ.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BDJLCGQq.js";import"./isWellBehavedNumber-PwrDSI0r.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dl9STlZO.js";import"./chartDataContext-DcfIEZUC.js";import"./CategoricalChart-DE8yrV95.js";import"./CartesianAxis-DT-BfhYh.js";import"./Layer-CVGFJ3pT.js";import"./Text-Bc_u3T2m.js";import"./DOMUtils-DX7CaFR_.js";import"./Label-BWAfqYWX.js";import"./ZIndexLayer-Cbwietl0.js";import"./types-CH3UhPbC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-C6f4ZPAl.js";import"./symbol-UOHidxyy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ccdl1agf.js";import"./uniqBy-xkGer2is.js";import"./iteratee-CjetG5zr.js";import"./Curve-ByDlF2jD.js";import"./step-CqVmJfXf.js";import"./AnimatedItems-9-Gv8yfc.js";import"./useAnimationId-Bv48rb4m.js";import"./ActivePoints-Dt_rJbE_.js";import"./Dot-CZPOiTTM.js";import"./RegisterGraphicalItemId-DKtf33UE.js";import"./ErrorBarContext-ClEcDtft.js";import"./GraphicalItemClipPath-C_n5kW10.js";import"./SetGraphicalItem-2IunVx_0.js";import"./getRadiusAndStrokeWidthFromDot-3QY54_i-.js";import"./ActiveShapeUtils-C7mnGY80.js";import"./Cross-hT2HVrnG.js";import"./Rectangle-CuIMbGOo.js";import"./Sector-ZG7qmTFO.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
