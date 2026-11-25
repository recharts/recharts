import{r as p,R as t}from"./iframe-Bpzk9XpD.js";import{L as n}from"./LineChart-DHyOLarx.js";import{R as s}from"./zIndexSlice-CybCXANO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-basT9jrb.js";import{X as d}from"./XAxis-BP9q3ZDK.js";import{Y as y}from"./YAxis-h8NK-7C6.js";import{L as u}from"./Legend-UtQoP2bc.js";import{L as h}from"./Line-Ct_StldJ.js";import{T as g}from"./Tooltip-Ba2oQn2v.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DlW5DJbf.js";import"./resolveDefaultProps-C16rW2Tl.js";import"./get-CjriyByo.js";import"./axisSelectors-BX6dGTcL.js";import"./throttle-BPowKzWT.js";import"./index-C_7DmI7l.js";import"./index-CBNlQ8jB.js";import"./polarAxisSelectors-C0HjJPCE.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-NmCyEWmm.js";import"./index-BoH8mfei.js";import"./index-Da9OH9g8.js";import"./renderedTicksSlice-B8rXaB1P.js";import"./index-DUebFUoz.js";import"./fillDefinitions-DV8KR0hl.js";import"./CartesianChart-v26TVdj4.js";import"./chartDataContext-DZdZASYb.js";import"./CategoricalChart-CZJOPWNu.js";import"./CartesianAxis-DyKfTr_o.js";import"./Layer-DCNhrIPV.js";import"./Text-Dqm35yMi.js";import"./ZIndexLayer-BSjRPeG2.js";import"./Label-eMApu8Ae.js";import"./types-BjOl9SGN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Bw3SJeUU.js";import"./symbol-Ce4tZNho.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DUi4H2Fd.js";import"./uniqBy-DJXoe2B2.js";import"./iteratee-nuQs-o3F.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BTTYYDZG.js";import"./Curve-D_Dl1lOS.js";import"./step-D-E4uKVH.js";import"./dataEntryStyles-CqhA2T9I.js";import"./ActivePoints-DF_bXbZk.js";import"./Dot-Dm4VIYOH.js";import"./activeStyles-Dvq2y-2D.js";import"./useAnimationId-B2Y87b6z.js";import"./ErrorBarContext-CEm3_QIT.js";import"./SetGraphicalItem-BO8cE8zs.js";import"./ActiveShapeUtils-Px2nMQKl.js";import"./useEffectiveDataKey-Cem866lm.js";import"./Cross-eYJNosTd.js";import"./Rectangle-6Dmq4B9R.js";import"./util-Dxo8gN5i.js";import"./Sector-CeulT84m.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
