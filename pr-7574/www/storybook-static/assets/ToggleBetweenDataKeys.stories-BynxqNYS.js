import{r as n,R as t}from"./iframe-BJ6rGQc6.js";import{L as p}from"./LineChart-FujRmE_o.js";import{R as s}from"./zIndexSlice-BthxejHI.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-5faz7OBU.js";import{X as d}from"./XAxis-DjB4BtKv.js";import{Y as y}from"./YAxis-41-XvzNM.js";import{L as u}from"./Legend-wOgvA1JX.js";import{L as h}from"./Line-DLjakGIl.js";import{T as g}from"./Tooltip-ByztaGJr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ChNksolv.js";import"./index-mopUcmNZ.js";import"./index-Bmr20IMW.js";import"./index-BmNs2kCE.js";import"./index-CByH2eT_.js";import"./throttle-cNz-OreL.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C0Y7ZKTU.js";import"./axisSelectors-BLC4H6fV.js";import"./resolveDefaultProps-BO6O7yzj.js";import"./isWellBehavedNumber-DPc5CIJW.js";import"./d3-scale-DN-uWHg9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bgx90lkE.js";import"./chartDataContext-sqlI8BYS.js";import"./CategoricalChart-BQ-Zgg5z.js";import"./CartesianAxis-HIzhBiiI.js";import"./Layer-CWFT9o_4.js";import"./Text-B3HJfVNK.js";import"./DOMUtils-B9FEHnPQ.js";import"./Label-GAUKfLbl.js";import"./ZIndexLayer-Ux9EkA8k.js";import"./types-C1lw_8rt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BFVbA9l-.js";import"./symbol-dyMo-0LQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DpSWaZPU.js";import"./uniqBy-B13RvOyk.js";import"./iteratee-CgSTNi8h.js";import"./Curve-BjFMHVU-.js";import"./step-D3keTh0D.js";import"./AnimatedItems-DC-H_ZkC.js";import"./useAnimationId-DQh6YXIz.js";import"./ActivePoints-BWSLTzTs.js";import"./Dot-WtNB5uJQ.js";import"./RegisterGraphicalItemId-Bwp-eRlf.js";import"./ErrorBarContext-CXKSzW2x.js";import"./GraphicalItemClipPath-C6Rgg4xk.js";import"./SetGraphicalItem-D1cCKorc.js";import"./getRadiusAndStrokeWidthFromDot-BpprK3MD.js";import"./ActiveShapeUtils-CUDn-tDt.js";import"./Cross-CZS_5oA_.js";import"./Rectangle-qBxWKOhj.js";import"./util-Dxo8gN5i.js";import"./Sector-CV9lEu39.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
