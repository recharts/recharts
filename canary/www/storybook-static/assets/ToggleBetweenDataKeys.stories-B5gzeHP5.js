import{r as p,R as t}from"./iframe-CVlx7bU_.js";import{L as n}from"./LineChart-DOtm20JA.js";import{R as s}from"./zIndexSlice-CQ18OEDz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DZVsdsEg.js";import{X as d}from"./XAxis-DMF0oTJ1.js";import{Y as y}from"./YAxis-Bw2rcCFX.js";import{L as u}from"./Legend--dqzDeOl.js";import{L as h}from"./Line-coLulIXR.js";import{T as g}from"./Tooltip-D54drNp1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CV-Y7KZ3.js";import"./resolveDefaultProps-7sOSs16A.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BJrugk6A.js";import"./throttle-CmXgXLjc.js";import"./index-ERWqFFX0.js";import"./index-CfNfKDTi.js";import"./polarAxisSelectors-DTyI3qGf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CkwZs2c8.js";import"./index-2xma1Lio.js";import"./index-Ddvmj82W.js";import"./renderedTicksSlice-AgOWQ12r.js";import"./index-DJ4zrN92.js";import"./fillDefinitions-DW8KGRte.js";import"./CartesianChart-BAhcz4nC.js";import"./chartDataContext-Uf3cfJiw.js";import"./CategoricalChart-DFdLumMg.js";import"./CartesianAxis-BdpTb-nX.js";import"./Layer-CTBEbigF.js";import"./Text-GjS4GngU.js";import"./ZIndexLayer-DRYYNy0H.js";import"./Label-DOtvRCj8.js";import"./types-BMFpEHKT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Gcx9n-lU.js";import"./symbol-D4b_9FWO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CJNVPp8V.js";import"./uniqBy-Cw4jSxoQ.js";import"./iteratee-Cke1s3Tj.js";import"./isArguments-yB-y1yaH.js";import"./Curve-ByMphQa4.js";import"./step-B-eN0hXo.js";import"./dataEntryStyles-CMoIO_lw.js";import"./ActivePoints-DO2U3Unb.js";import"./Dot-CLTLLAqo.js";import"./activeStyles-5RuXhDxF.js";import"./useAnimationId-JkE7TXZo.js";import"./ErrorBarContext-DzVhOjsh.js";import"./SetGraphicalItem-voaRHEeZ.js";import"./getRadiusAndStrokeWidthFromDot-BIjWGvqa.js";import"./ActiveShapeUtils-B7UTpWmH.js";import"./useEffectiveDataKey-B4CdAFdU.js";import"./Cross-EkJHXXuk.js";import"./Rectangle-BzACz78L.js";import"./util-Dxo8gN5i.js";import"./Sector-DIaGg7Xj.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
