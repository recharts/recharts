import{r as n,R as t}from"./iframe-BOLHcnEq.js";import{L as p}from"./LineChart-DML6ynPw.js";import{R as s}from"./zIndexSlice-C8kTqOmj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CSl3R0dP.js";import{X as d}from"./XAxis-C1WN-pkQ.js";import{Y as y}from"./YAxis-YubxuWa5.js";import{L as u}from"./Legend-B1GxLWEZ.js";import{L as h}from"./Line-Bcy1OQBu.js";import{T as g}from"./Tooltip-DaHSRJKc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7tC_WXo.js";import"./index-B1Z2mgyL.js";import"./index-CeNzyE2J.js";import"./index-tgbEpTci.js";import"./index-D6CwE66r.js";import"./immer-CxjXtk_l.js";import"./get-Q7-QRRNs.js";import"./renderedTicksSlice-CxjdWKYi.js";import"./axisSelectors-C8lj3akb.js";import"./d3-scale-C1j7mBel.js";import"./resolveDefaultProps-Z5NUUnaV.js";import"./isWellBehavedNumber-wvIQrlfJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BmPupl9-.js";import"./chartDataContext-C7_PfxRX.js";import"./CategoricalChart-Ytc03f7l.js";import"./CartesianAxis-Cr_Ww8PH.js";import"./Layer-CuuZoUsG.js";import"./Text-XHfzhZk8.js";import"./DOMUtils-D0co-hPv.js";import"./Label-DYMy2guT.js";import"./ZIndexLayer-CNPe-074.js";import"./types-DPwewkdM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DH546CQx.js";import"./symbol-C5EhMhLR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D1RkL54t.js";import"./uniqBy-CBDL8fXr.js";import"./iteratee-BYmccGUz.js";import"./Curve-Bqb8d6oT.js";import"./step-ClQLV_9Q.js";import"./ReactUtils-8Czxn-Uo.js";import"./ActivePoints-D1Ow9Sb1.js";import"./Dot-CFAalLdL.js";import"./RegisterGraphicalItemId-f9q-fu78.js";import"./ErrorBarContext-C3dgZsKy.js";import"./GraphicalItemClipPath--wTpErch.js";import"./SetGraphicalItem-D2UHcxYS.js";import"./useAnimationId-BckTdhqG.js";import"./getRadiusAndStrokeWidthFromDot-Uv4j9P_J.js";import"./ActiveShapeUtils-DWIyzqt2.js";import"./Cross-Bld8WcL6.js";import"./Rectangle-yS7V0F_a.js";import"./Sector-BV3FjY9s.js";const ft={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const vt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,vt as __namedExportsOrder,ft as default};
