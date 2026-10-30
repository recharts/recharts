import{r as p,R as t}from"./iframe-D4SWC0C9.js";import{L as n}from"./LineChart-C5G2J67G.js";import{R as s}from"./zIndexSlice-DtLu2rz0.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B0MTC305.js";import{X as d}from"./XAxis-DY95kjca.js";import{Y as y}from"./YAxis-DZiEXhVb.js";import{L as u}from"./Legend-DVZRLGV5.js";import{L as h}from"./Line-BMXJqgb8.js";import{T as g}from"./Tooltip-CKtfPjFs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B-nLjLBG.js";import"./resolveDefaultProps-CuPg7ygH.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D7bj-nZi.js";import"./throttle-i1uEXwfS.js";import"./index-o5eRcHSQ.js";import"./index-Bm9m5_PU.js";import"./polarAxisSelectors-5Is9yWXM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CqqO4xMX.js";import"./index-BzqOahcD.js";import"./index-BdcBqhlp.js";import"./renderedTicksSlice-BWlvISfj.js";import"./index-BOyzEbCc.js";import"./CartesianChart-D2bJStRT.js";import"./ZIndexPortal-Dz8Csonx.js";import"./CategoricalChart-Cyf0p9sz.js";import"./CartesianAxis-jJfvsanR.js";import"./Layer--YLSv_ie.js";import"./Text-K3oqQ0qr.js";import"./DOMUtils-_TTo3kuP.js";import"./ZIndexLayer-DpB3cuZ0.js";import"./Label-B4GKK3W-.js";import"./types-BULmlw12.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-mjJ7TtB9.js";import"./symbol-IW8UYWs4.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-C6BynYXf.js";import"./dataEntryStyles-Df562HAt.js";import"./useElementOffset-BNAtca7y.js";import"./uniqBy-9w4q5yQd.js";import"./iteratee-DZT4M3pu.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CLAbzDX3.js";import"./step-DJAY54DS.js";import"./LabelList-D_z7ECQv.js";import"./ActivePoints-D3cp_ck3.js";import"./Dot-fLjTiyXC.js";import"./activeStyles-DGXStsvL.js";import"./useAnimationId-DKXEwRJj.js";import"./ErrorBarContext-CkfaNLfH.js";import"./SetGraphicalItem-CmNEMHt3.js";import"./getRadiusAndStrokeWidthFromDot-DOd7rr-G.js";import"./ActiveShapeUtils-CKN1RXI0.js";import"./useEffectiveDataKey-B-O25Qiu.js";import"./Cross-CSn-JXVK.js";import"./Rectangle-C8mkpCGv.js";import"./util-Dxo8gN5i.js";import"./Sector-C172RoTQ.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
