import{r as n,R as t}from"./iframe-CSEjTzPi.js";import{L as p}from"./LineChart-BUXvYPXG.js";import{R as s}from"./zIndexSlice-D_RH8zNR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BgwHL7aZ.js";import{X as d}from"./XAxis-ClW-CKIG.js";import{Y as y}from"./YAxis-CLbub78N.js";import{L as u}from"./Legend-CxF1x0o3.js";import{L as h}from"./Line-B7I2sL9r.js";import{T as g}from"./Tooltip-LNhg6TS4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-AtEN8KAH.js";import"./index-Ba7n3l96.js";import"./index-CBv6hKJf.js";import"./index-CUrD2lSO.js";import"./index-CnUd66Ue.js";import"./throttle-DaFWWJDR.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-E8p_yuf8.js";import"./axisSelectors-D_moIkNX.js";import"./resolveDefaultProps-BozJKtND.js";import"./isWellBehavedNumber-CzqG-O5b.js";import"./d3-scale-CTeKr7fc.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dl0PI1ZO.js";import"./chartDataContext-D54q9WWr.js";import"./CategoricalChart-DzTcvl21.js";import"./CartesianAxis-Mej6s-Ju.js";import"./Layer-CcgNOeDR.js";import"./Text-Pr_fu-xU.js";import"./DOMUtils-Dvp2PgSJ.js";import"./Label-COqEjZup.js";import"./ZIndexLayer-CCVrkImG.js";import"./types-CLne6YGI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-CTXWaWPW.js";import"./symbol-CieHO9MS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BEs7c5_U.js";import"./uniqBy-CIEufAuW.js";import"./iteratee-DtUSYH1W.js";import"./Curve-Cbq_6U_Q.js";import"./step-DAbADZ8X.js";import"./AnimatedItems-qJPCEdb3.js";import"./useAnimationId-De2Quo8T.js";import"./ActivePoints-Qu5zqsGn.js";import"./Dot-D11hMmXw.js";import"./RegisterGraphicalItemId-CXTNpeBs.js";import"./ErrorBarContext-CaaFvPMI.js";import"./GraphicalItemClipPath-B0i2JGnn.js";import"./SetGraphicalItem-e3HjqTgi.js";import"./getRadiusAndStrokeWidthFromDot-BWfyZwwA.js";import"./ActiveShapeUtils-DL3c-sPD.js";import"./Cross-CboKWFi8.js";import"./Rectangle-CxDLp35k.js";import"./util-Dxo8gN5i.js";import"./Sector-yAnx7lRE.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
