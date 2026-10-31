import{r as p,R as t}from"./iframe-CqZM7-m_.js";import{L as n}from"./LineChart-BnNOJDva.js";import{R as s}from"./zIndexSlice-C2bhYwAU.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Br8mHJsN.js";import{X as d}from"./XAxis-KlRKQHwy.js";import{Y as y}from"./YAxis-ae7SlnFd.js";import{L as u}from"./Legend-Be7eAFPl.js";import{L as h}from"./Line-Bo0PrlbL.js";import{T as g}from"./Tooltip-BQnJD08k.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-tKczMb.js";import"./resolveDefaultProps-DIo2Sl-P.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CU7asiQ5.js";import"./throttle-BMiHfZwg.js";import"./index-C-aUkLsy.js";import"./index-DpXM8lGR.js";import"./polarAxisSelectors-DaUnHX5G.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaJTA9nk.js";import"./index-CztSWwc1.js";import"./index-NyV8lhCm.js";import"./renderedTicksSlice-D_esDvci.js";import"./index-DtqG7I3W.js";import"./CartesianChart-g7znHwgk.js";import"./ZIndexPortal-xTgrkJOp.js";import"./CategoricalChart-CjJTDTQz.js";import"./CartesianAxis-F_8zYdOn.js";import"./Layer--KWigSyO.js";import"./Text-D-XPvK3p.js";import"./DOMUtils-xk6ID9X9.js";import"./pageBackground-Bhwi_Yxq.js";import"./ZIndexLayer-CcqTqnO7.js";import"./Label-CFulNYa4.js";import"./types-vIB-y3qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-CUygaBJV.js";import"./fillDefinitions-1X04y-fM.js";import"./Symbols-DzjBnU_i.js";import"./symbol-B1C_m7FV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CUZP3X1Y.js";import"./uniqBy-eozDBzB3.js";import"./iteratee-8pecjru7.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Drzcx3Ud.js";import"./step-v_r5NIvy.js";import"./LabelList-DhQNMiPW.js";import"./ActivePoints-BpTQnUkT.js";import"./Dot-DqP_pV0T.js";import"./activeStyles-cNHowlQL.js";import"./useAnimationId-Bff8cv61.js";import"./dataEntryStyles-Df1iMIlW.js";import"./ErrorBarContext-CF_mHvca.js";import"./SetGraphicalItem-BGa3ruh5.js";import"./getRadiusAndStrokeWidthFromDot-CxqTtpIP.js";import"./ActiveShapeUtils-Dat3aOlo.js";import"./useEffectiveDataKey-B0QeK97Q.js";import"./Cross-D4MvJQNR.js";import"./Rectangle-uSuGTrTU.js";import"./util-Dxo8gN5i.js";import"./Sector-C6Vzo1Ah.js";const Rt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Tt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Tt as __namedExportsOrder,Rt as default};
