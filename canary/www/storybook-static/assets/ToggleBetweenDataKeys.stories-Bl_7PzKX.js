import{r as p,R as t}from"./iframe-z45XlhiT.js";import{L as n}from"./LineChart-8P-q5sEj.js";import{R as s}from"./zIndexSlice-rByxwPq2.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BcNDHnb_.js";import{X as d}from"./XAxis-yN0YOhJu.js";import{Y as y}from"./YAxis-C3VQiLjy.js";import{L as u}from"./Legend-DSAqr5_p.js";import{L as h}from"./Line-BNg9pLDQ.js";import{T as g}from"./Tooltip-BUIf__CH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CkIduI85.js";import"./resolveDefaultProps-D6R4bRBz.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DZIpCEiW.js";import"./throttle-trzEzJ5j.js";import"./index-DhBnsQMm.js";import"./index-BjfNKgkQ.js";import"./polarAxisSelectors-CPTOQPk0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DBdfj2JL.js";import"./index-wy90J4K3.js";import"./index-BLdN60al.js";import"./renderedTicksSlice-DSoL8nN7.js";import"./index-DMBUEogz.js";import"./CartesianChart-SMygzho_.js";import"./ZIndexPortal-BH0OvRqe.js";import"./CategoricalChart-BvjpxKzi.js";import"./CartesianAxis-CzSQFzRC.js";import"./Layer-BkChjDHf.js";import"./Text-D6fTfOcl.js";import"./pageBackground-BPRxB_Aw.js";import"./ZIndexLayer-DZatQUpK.js";import"./Label-CmK6wYAn.js";import"./types-DMhu4FvJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DOwNTV9x.js";import"./symbol-DbSGDWfT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dw7KsQZo.js";import"./uniqBy-SRHayfFD.js";import"./iteratee-BTmoFKFa.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DeIAn4Qv.js";import"./step-xmYWYAoT.js";import"./LabelList-BXCYEXvh.js";import"./ActivePoints-DXpk42VJ.js";import"./Dot-C9aR3nF8.js";import"./activeStyles-2Y8cHsw1.js";import"./useAnimationId-DASBPoZY.js";import"./dataEntryStyles-CahaEVij.js";import"./ErrorBarContext-C7sDKK_Q.js";import"./SetGraphicalItem-DAGbOIuL.js";import"./getRadiusAndStrokeWidthFromDot-Pw7eF4Cu.js";import"./ActiveShapeUtils-ChMdJ8i8.js";import"./useEffectiveDataKey-Dw2L82h2.js";import"./Cross-PnqcH-0w.js";import"./Rectangle-H7M7KGkC.js";import"./util-Dxo8gN5i.js";import"./Sector-VonBssaU.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
