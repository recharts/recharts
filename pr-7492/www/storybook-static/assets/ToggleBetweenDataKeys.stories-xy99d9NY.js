import{r as n,R as t}from"./iframe-C3hysSwX.js";import{L as p}from"./LineChart-CP7JtMd2.js";import{R as s}from"./zIndexSlice-jLrLCsrp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-9IqwpISI.js";import{X as d}from"./XAxis-Bz5F1_iJ.js";import{Y as y}from"./YAxis-nAN9SxkJ.js";import{L as u}from"./Legend-BbXVm0XL.js";import{L as h}from"./Line-BVlSac6Z.js";import{T as g}from"./Tooltip-DO4Ooh_G.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CJVzzpRJ.js";import"./index-BV0Ox4K8.js";import"./index-By0blv9S.js";import"./index-BUU-eT_B.js";import"./index-DdpCgkK0.js";import"./immer-BNUBbCyS.js";import"./get-4mmuOJ4Q.js";import"./renderedTicksSlice-CSlp22Dw.js";import"./axisSelectors-BKkILLr_.js";import"./d3-scale-Z5oWCNO5.js";import"./resolveDefaultProps-XPHM9Bxg.js";import"./isWellBehavedNumber-Cfqt3JW2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dz5Andp2.js";import"./chartDataContext-Da5IPa1T.js";import"./CategoricalChart-BUhA_1lj.js";import"./CartesianAxis-DJwGDBXD.js";import"./Layer-BWZwdMd6.js";import"./Text-9LavA5GP.js";import"./DOMUtils-B0ueEniv.js";import"./Label-BY3nn8Dv.js";import"./ZIndexLayer-BbmqSC7x.js";import"./types-B-fiXt0f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DHr4Jv60.js";import"./symbol-Dw8LmIBI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-TFATomwh.js";import"./uniqBy-rAXM5un4.js";import"./iteratee-Bj0cTPCe.js";import"./Curve-6434-3z9.js";import"./step-C_2ct0pZ.js";import"./AnimatedItems-CONL8zCq.js";import"./useAnimationId-CTVdzEbK.js";import"./ActivePoints-iKVh12Ay.js";import"./Dot-B1rRcV2J.js";import"./RegisterGraphicalItemId-o0SeLVTS.js";import"./ErrorBarContext-D24MXSMJ.js";import"./GraphicalItemClipPath-Cs8iTjY6.js";import"./SetGraphicalItem-CmkEoewy.js";import"./getRadiusAndStrokeWidthFromDot-CVqEtKFE.js";import"./ActiveShapeUtils-DTMmpBlQ.js";import"./Cross-BGe6GpMn.js";import"./Rectangle-D6Gug0yv.js";import"./util-Dxo8gN5i.js";import"./Sector-Cq5G9PM-.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
