import{r as n,R as t}from"./iframe-CT_on4dN.js";import{L as p}from"./LineChart-BpvUcBv_.js";import{R as s}from"./zIndexSlice-9YwY2T6T.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DEgNtFsT.js";import{X as d}from"./XAxis-DM4CuZe_.js";import{Y as y}from"./YAxis-C8PhcMfF.js";import{L as u}from"./Legend-CsXBchnl.js";import{L as h}from"./Line-DjA4uRiB.js";import{T as g}from"./Tooltip-negrmm2w.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-4qOiYS.js";import"./index-B37YLZmy.js";import"./index-BLrAz-7b.js";import"./index-gBOeA-qD.js";import"./index-DQkieKcs.js";import"./immer-MMHbxa5P.js";import"./get-DAlxn1Zj.js";import"./renderedTicksSlice-Bp1Fmq8H.js";import"./axisSelectors-CiriuU2L.js";import"./d3-scale-B0V457C8.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-Ngbi67w9.js";import"./isWellBehavedNumber-DcXfDBUW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPDAsd82.js";import"./chartDataContext-BNQnQ5VT.js";import"./CategoricalChart-BJTL86x_.js";import"./CartesianAxis-Dqr_Wojb.js";import"./Layer-BDukNzPA.js";import"./Text-CMIOZbxn.js";import"./DOMUtils-CLh3lutj.js";import"./Label-DK-X0Mes.js";import"./ZIndexLayer-BBvvwP5n.js";import"./types-BSLS2Rfw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DXCrjgw-.js";import"./symbol-Cr5BIINB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BcUuC6UH.js";import"./uniqBy-DJ-FcwmE.js";import"./iteratee-BUWsjaYF.js";import"./Curve-D3g77UHX.js";import"./step-D6LclrFL.js";import"./AnimatedItems-B___w46g.js";import"./useAnimationId-DfgP8Qzr.js";import"./ActivePoints-DaxBQcxo.js";import"./Dot-LnWMvtRz.js";import"./RegisterGraphicalItemId-aTaFmyQg.js";import"./ErrorBarContext-BWZYzIr8.js";import"./GraphicalItemClipPath-BI7LHR9E.js";import"./SetGraphicalItem-Cgc_8Ru0.js";import"./getRadiusAndStrokeWidthFromDot-1x2538jp.js";import"./ActiveShapeUtils-7HjO8Td_.js";import"./Cross-D9dQdIGX.js";import"./Rectangle-CqE8KoLV.js";import"./Sector-DGh7eeHP.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
