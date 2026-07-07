import{r as n,R as t}from"./iframe-BZg1zG5B.js";import{L as p}from"./LineChart-B2exmaZD.js";import{R as s}from"./zIndexSlice-CkkPSViG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-u5mMmC7M.js";import{X as d}from"./XAxis-BFO1dJFq.js";import{Y as y}from"./YAxis-CworNICM.js";import{L as u}from"./Legend-ygKZqW3s.js";import{L as h}from"./Line-DHT37We-.js";import{T as g}from"./Tooltip-DDR1rP_Z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DyRofC5m.js";import"./index-DuAyB1ct.js";import"./index-BSOub4mJ.js";import"./index-BzAnTBpk.js";import"./index-Cmvzg-0C.js";import"./throttle-DFHrPmFV.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DxnsaDc8.js";import"./axisSelectors-CZQj26DE.js";import"./resolveDefaultProps-CI_HL12t.js";import"./isWellBehavedNumber-Bk-91M8w.js";import"./d3-scale-CHbHYnH2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-NJt7vXp9.js";import"./chartDataContext-gkePnQjL.js";import"./CategoricalChart-CacFZjBO.js";import"./CartesianAxis-CqYm8UKw.js";import"./Layer-AM2ZERM9.js";import"./Text-K_EkIkuP.js";import"./DOMUtils-Bs3ZzMQS.js";import"./Label-D1KCxb60.js";import"./ZIndexLayer-oU6a0KMz.js";import"./types-CP45QuEc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DSd1EVM7.js";import"./symbol-RD3e_Ysr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-vOgnM54n.js";import"./uniqBy-38RNx4xl.js";import"./iteratee-OjymSSaI.js";import"./Curve-BscR4dmI.js";import"./step-DGy1Mip9.js";import"./AnimatedItems-C9XnYXoB.js";import"./useAnimationId-D8zRqkvh.js";import"./ActivePoints-kipmWAm6.js";import"./Dot-BCNxr43y.js";import"./RegisterGraphicalItemId-CnFfEqxk.js";import"./ErrorBarContext-HRURTUgd.js";import"./GraphicalItemClipPath-DCZKfxi9.js";import"./SetGraphicalItem-DRJD094C.js";import"./getRadiusAndStrokeWidthFromDot-Wk5YU4K6.js";import"./ActiveShapeUtils-9Jnofarx.js";import"./Cross-DTSM-pd8.js";import"./Rectangle-p2Bv9KHw.js";import"./util-Dxo8gN5i.js";import"./Sector-CHRpWAnJ.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
