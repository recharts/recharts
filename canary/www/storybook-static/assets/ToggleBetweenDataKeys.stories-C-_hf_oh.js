import{r as n,R as t}from"./iframe-BXeHtRRc.js";import{L as p}from"./LineChart-ClOyCldg.js";import{R as s}from"./zIndexSlice-cE44OqOD.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B491ywc-.js";import{X as d}from"./XAxis-tstPVLiw.js";import{Y as y}from"./YAxis-BMejmk_u.js";import{L as u}from"./Legend-ClYQKqQo.js";import{L as h}from"./Line-Bi2pbqFq.js";import{T as g}from"./Tooltip-Di0nKIFE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BlW5dnlL.js";import"./index-BDGfSbM8.js";import"./index-Ovc1MJjY.js";import"./index-DvJ-fn_5.js";import"./index-B4hVWkse.js";import"./immer-DNshJjPH.js";import"./get-CJL6L62i.js";import"./renderedTicksSlice-Bxd2HCuP.js";import"./axisSelectors-DwMRPNyX.js";import"./d3-scale-D1ymsn93.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-C9hL96mo.js";import"./isWellBehavedNumber-D2wsJvGw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CfUKecxL.js";import"./chartDataContext-Cl-sRnxe.js";import"./CategoricalChart-Dcf-SEqg.js";import"./CartesianAxis-DlPp-Ttd.js";import"./Layer-G87RycP8.js";import"./Text-CgCa4wia.js";import"./DOMUtils-Bki5Qsqq.js";import"./Label-CmgKG_wT.js";import"./ZIndexLayer-CdPLtMFq.js";import"./types-DFlY2any.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-wPfMfouo.js";import"./symbol-C_HdaqhA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D1DpNGPa.js";import"./uniqBy-CZHTY20m.js";import"./iteratee-BSnhLzO_.js";import"./Curve-DVgI-4Ur.js";import"./step-CWqUN4bQ.js";import"./AnimatedItems-Cld-WhT6.js";import"./useAnimationId-DKoglaf7.js";import"./ActivePoints-BIzkJXPu.js";import"./Dot-BuBaCmSt.js";import"./RegisterGraphicalItemId-CoToPco7.js";import"./ErrorBarContext-BsZ2YOp7.js";import"./GraphicalItemClipPath-Behn_RHh.js";import"./SetGraphicalItem-DrQ2NJnA.js";import"./getRadiusAndStrokeWidthFromDot-BwFthNRz.js";import"./ActiveShapeUtils-BHpJL8IG.js";import"./Cross-Ds8fiepC.js";import"./Rectangle-BLmys3HY.js";import"./Sector-V3leyB8_.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
