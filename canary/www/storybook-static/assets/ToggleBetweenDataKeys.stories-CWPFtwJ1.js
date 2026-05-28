import{u as n,e as t}from"./iframe-BpuHkxzv.js";import{L as p}from"./LineChart-DbHE3aJ7.js";import{g as s}from"./arrayEqualityCheck-D3NbzucA.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-B8Emn2Id.js";import{X as d}from"./XAxis-DAM5aOqn.js";import{Y as u}from"./YAxis-Di_DA3y5.js";import{L as y}from"./Legend-CKpYLL5V.js";import{L as h}from"./Line-CgHPqU2o.js";import{T as g}from"./Tooltip-BX-p6Hr7.js";import{R as K}from"./RechartsHookInspector-AaKfh7uA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-PymVavj3.js";import"./index-B2w93Cnl.js";import"./immer-OyT0OiEL.js";import"./hooks-B1cGBeOq.js";import"./axisSelectors-BJZ14qKk.js";import"./d3-scale-BeDrD5FO.js";import"./zIndexSlice-CmLQD4Hj.js";import"./renderedTicksSlice-BdwSoJ9a.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-zmg0JzJu.js";import"./chartDataContext-8upaOC_y.js";import"./CategoricalChart-BFAw-aMI.js";import"./resolveDefaultProps-B_sB-kQg.js";import"./CartesianAxis-C7ZsdIQA.js";import"./Layer-BqE9-RFh.js";import"./Text-CQDQNrmI.js";import"./DOMUtils-CJA5o4Wn.js";import"./Label-DXexZu28.js";import"./ZIndexLayer-DB_dF6Ce.js";import"./types-EV6wLq9J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BPT-Ab5-.js";import"./symbol-fc7IaqFZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-bzwQ65gJ.js";import"./uniqBy-D-ZB-65f.js";import"./iteratee-Dy8tB5bU.js";import"./Curve-CBMG8s0Y.js";import"./step-BD2V_DAB.js";import"./ReactUtils-eZNJAb5x.js";import"./ActivePoints-BAZZqzbw.js";import"./Dot-DpxQTaWX.js";import"./RegisterGraphicalItemId-DWnLfZVy.js";import"./ErrorBarContext-C3BTG3j_.js";import"./GraphicalItemClipPath-alzdk-Y9.js";import"./SetGraphicalItem-D6w_4jw8.js";import"./useAnimationId-ObzFSifI.js";import"./getRadiusAndStrokeWidthFromDot-CfvNKrul.js";import"./ActiveShapeUtils-CT-qLZ85.js";import"./Cross-CUv7ycLG.js";import"./Rectangle-B2x9Rcis.js";import"./Sector-BF3QXAQh.js";import"./index-DNW34nIA.js";import"./ChartSizeDimensions-BVyFPlkv.js";import"./OffsetShower-opK80ySX.js";import"./PlotAreaShower-CqZ4IRUd.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,Lt as default};
