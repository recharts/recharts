import{r as n,R as t}from"./iframe-DUrcY2US.js";import{L as p}from"./LineChart-DTfx3-sd.js";import{R as s}from"./zIndexSlice-D23NNcc-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BWcvMaBJ.js";import{X as d}from"./XAxis-CVek6dQA.js";import{Y as y}from"./YAxis-BFaz6XgS.js";import{L as u}from"./Legend-kJMEnL4G.js";import{L as h}from"./Line-aGtxROI3.js";import{T as g}from"./Tooltip-qfmqJNg1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-FovoggR2.js";import"./index-CeyJFFE6.js";import"./index-CE9cEvcF.js";import"./index-CZQ13dE7.js";import"./index-DfVYeqBk.js";import"./throttle-u55YHgne.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BAoXnBM4.js";import"./axisSelectors-BmIoikMn.js";import"./resolveDefaultProps-Bkhh-EU7.js";import"./isWellBehavedNumber-U-rEAUF7.js";import"./d3-scale-CjT_6rZL.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-UL0Qt6Ls.js";import"./chartDataContext-BTSN0B0I.js";import"./CategoricalChart-BS_7Qovh.js";import"./CartesianAxis-jsyQa0HM.js";import"./Layer-CYHvsOgc.js";import"./Text-DMamusUo.js";import"./DOMUtils-B_GdkGLj.js";import"./Label-Dq5ZDKy5.js";import"./ZIndexLayer-bKTnWuHr.js";import"./types-BMr8FEQl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DjWkH5r4.js";import"./symbol-DazsKvAc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C0Oicg6-.js";import"./uniqBy-QPknp_js.js";import"./iteratee-Chr2aMTO.js";import"./Curve-CuMyGQ3o.js";import"./step-C_R_L_9o.js";import"./AnimatedItems-BfwNRs0j.js";import"./useAnimationId-DrcrHxjP.js";import"./ActivePoints-CxX0cO8w.js";import"./Dot-CQSe7hSi.js";import"./RegisterGraphicalItemId-BwmS1f__.js";import"./ErrorBarContext-Dl94M6VN.js";import"./GraphicalItemClipPath-BTF9cLBi.js";import"./SetGraphicalItem-CXjv9Cz3.js";import"./getRadiusAndStrokeWidthFromDot-CXn6OxOm.js";import"./ActiveShapeUtils-DSfcbHhF.js";import"./Cross-KHTsshSa.js";import"./Rectangle-D3ZfsELa.js";import"./util-Dxo8gN5i.js";import"./Sector-DwM6vwwA.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
