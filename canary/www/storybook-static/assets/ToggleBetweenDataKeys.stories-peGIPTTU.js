import{r as p,R as t}from"./iframe-CvMP9Fqo.js";import{L as n}from"./LineChart-Cxl6tyNx.js";import{R as s}from"./zIndexSlice-B5trHRCj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BHqJEvj2.js";import{X as d}from"./XAxis-BVBOoebg.js";import{Y as y}from"./YAxis-tiTGIdx3.js";import{L as u}from"./Legend-DlTvp0v7.js";import{L as h}from"./Line-BbvHMrnh.js";import{T as g}from"./Tooltip-B7ps6QuS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CzGrl1eT.js";import"./resolveDefaultProps-BGEDHRJM.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B3ymYEcm.js";import"./throttle-MhOaKDgE.js";import"./index-D9jYUR_d.js";import"./index-BZUcM53P.js";import"./polarAxisSelectors-6vaNx2fR.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-b8kDtzlH.js";import"./index-CDgZ4Loc.js";import"./index-B6lplofW.js";import"./renderedTicksSlice-DkA6Ce2h.js";import"./index-LdeImoL7.js";import"./fillDefinitions-DQU_H3eF.js";import"./CartesianChart-CrVsIyiN.js";import"./chartDataContext-DgCWmyll.js";import"./CategoricalChart-Bvay8eab.js";import"./CartesianAxis-BofYDveF.js";import"./Layer-CKCTZlK6.js";import"./Text-B1VQrHkc.js";import"./ZIndexLayer-CYiENEwf.js";import"./Label-BXQPTxU_.js";import"./types-CEx7Mrjp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C-TD2pNc.js";import"./symbol-DH04N6rB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dzn1lI93.js";import"./uniqBy-CNOEx6rm.js";import"./iteratee-CxBX7Jt6.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D_Wyck_t.js";import"./step-TJxgmP_3.js";import"./dataEntryStyles-D8XHfMQr.js";import"./ActivePoints-Dzw5hEuH.js";import"./Dot-RMR8pxKN.js";import"./activeStyles-iNSBQg7J.js";import"./useAnimationId-DS6RlguF.js";import"./ErrorBarContext-BNZINJYG.js";import"./SetGraphicalItem-XLvPTSfC.js";import"./getRadiusAndStrokeWidthFromDot-CtOVRdjN.js";import"./ActiveShapeUtils-8hEQ0x22.js";import"./useEffectiveDataKey-BdItYSIh.js";import"./Cross-BdV4rx2s.js";import"./Rectangle-DCriiKhl.js";import"./util-Dxo8gN5i.js";import"./Sector-C8zA7xP5.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
