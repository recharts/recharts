import{r as p,R as t}from"./iframe-DmqRNFpA.js";import{L as n}from"./LineChart-DO_npS7k.js";import{R as s}from"./zIndexSlice-B1K-Cx6E.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DFOC2XEP.js";import{X as d}from"./XAxis-D3OnHsd5.js";import{Y as y}from"./YAxis-BVwyU1u1.js";import{L as u}from"./Legend-Bm2HUo-N.js";import{L as h}from"./Line-gXpEv3sk.js";import{T as g}from"./Tooltip-D2Z3majm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CTNqlU94.js";import"./resolveDefaultProps-BjqyIxlF.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CgQoXC7y.js";import"./throttle-DniwHdPI.js";import"./index-DLLiFttT.js";import"./index-DKIkITg9.js";import"./polarAxisSelectors-DfZjHeTi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-a0YrBx9c.js";import"./index-DugFJa8I.js";import"./index-D2BlTs7T.js";import"./renderedTicksSlice-rJsNFgC5.js";import"./index-7-eYjlBn.js";import"./fillDefinitions-D0KLDOLI.js";import"./CartesianChart-DvjgB_s_.js";import"./chartDataContext-7iFWy2pv.js";import"./CategoricalChart-BK3tVtDO.js";import"./CartesianAxis-B7FOD29F.js";import"./Layer-BMG2yPM5.js";import"./Text-CUDSRJfa.js";import"./ZIndexLayer-Rp2F5wBf.js";import"./Label-CGOHFUUI.js";import"./types-ClR1fgnQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DJo18KTa.js";import"./symbol-BhHhN8K0.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CeDnXL_W.js";import"./uniqBy-DGhKd4sh.js";import"./iteratee-CQuB2rq_.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-GdhkPv0Q.js";import"./Curve-DXM7d3l8.js";import"./step-KG3W8n3J.js";import"./dataEntryStyles-ClWs31k0.js";import"./ActivePoints-G7jUCSXZ.js";import"./Dot-BXNT0rJn.js";import"./activeStyles-2GMTQ11y.js";import"./useAnimationId-BfPOVraS.js";import"./ErrorBarContext-BaRUKqrY.js";import"./SetGraphicalItem-B1qkE8Ui.js";import"./ActiveShapeUtils-wD2P373B.js";import"./useEffectiveDataKey-1IVWV8C0.js";import"./Cross-DCqromoO.js";import"./Rectangle-D2jF24kk.js";import"./util-Dxo8gN5i.js";import"./Sector-C6utI8br.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
