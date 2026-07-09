import{r as n,R as t}from"./iframe-DnX8r39b.js";import{L as p}from"./LineChart-CV2GDhdl.js";import{R as s}from"./zIndexSlice-CdRT6CH7.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DDmG9Fz5.js";import{X as d}from"./XAxis-BTaYdNe8.js";import{Y as y}from"./YAxis-CSFozfSt.js";import{L as u}from"./Legend-BM4xGj7H.js";import{L as h}from"./Line-DgV7sV5s.js";import{T as g}from"./Tooltip-Bacn6d6g.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Sbu3sQZd.js";import"./index-CARiuz8r.js";import"./index-lg-7YqR9.js";import"./index-B59DWSJw.js";import"./index-8CcjFvVe.js";import"./throttle-JCKZhQLq.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DDGhfVYq.js";import"./axisSelectors-D4OQvXCv.js";import"./resolveDefaultProps-yb31Cz6R.js";import"./isWellBehavedNumber-ChlqVGNf.js";import"./d3-scale-B45mdNw5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-8TrBr0AL.js";import"./chartDataContext-B2KFL-Nz.js";import"./CategoricalChart-DVOQ2_gX.js";import"./CartesianAxis-Cy9WREkT.js";import"./Layer-CauFkfpG.js";import"./Text-BO1t-pUg.js";import"./DOMUtils-jh1pVKRO.js";import"./Label-D3KHAYnK.js";import"./ZIndexLayer-C1d715l9.js";import"./types-CgrT81ZV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BBKDSOHd.js";import"./symbol-BGpcIrU3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BTPLFIFL.js";import"./uniqBy-Cjb0gCKQ.js";import"./iteratee-D8Xc7oTH.js";import"./Curve-Zsfr7xXj.js";import"./step-TiPrAqPO.js";import"./AnimatedItems--Dg0X7dt.js";import"./useAnimationId-zs5IE8iA.js";import"./ActivePoints-CuEYXnF_.js";import"./Dot-DD3VaHTo.js";import"./RegisterGraphicalItemId-qEo7oahD.js";import"./ErrorBarContext-C_qu3TpT.js";import"./GraphicalItemClipPath-BiCBWmQX.js";import"./SetGraphicalItem-BXuH3_k3.js";import"./getRadiusAndStrokeWidthFromDot-BTTETrvJ.js";import"./ActiveShapeUtils-C4xeJz4x.js";import"./Cross-DJ_p583i.js";import"./Rectangle-Cv-9SrzG.js";import"./util-Dxo8gN5i.js";import"./Sector-BXJPUv-D.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
