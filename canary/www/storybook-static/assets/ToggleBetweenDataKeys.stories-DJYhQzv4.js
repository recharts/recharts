import{r as n,R as t}from"./iframe-DyLoEKVT.js";import{L as p}from"./LineChart-C_b7mVzM.js";import{R as s}from"./zIndexSlice-BMJvLT6-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ANxmcrPG.js";import{X as d}from"./XAxis-9OVyrDRG.js";import{Y as y}from"./YAxis-nsTECOPY.js";import{L as u}from"./Legend-nAvx1kVW.js";import{L as h}from"./Line-DRaTauJz.js";import{T as g}from"./Tooltip-BTj4vQK0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper--UzxIxEu.js";import"./index-CufWBdFA.js";import"./index-PISW76kq.js";import"./index-ChIcT5we.js";import"./index-DlqbmUdM.js";import"./immer-BagcJtG2.js";import"./get-DowO2FG-.js";import"./renderedTicksSlice-BqkZndXs.js";import"./axisSelectors-CnSKWHKt.js";import"./d3-scale-CTXcb0ZT.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-v4--KFNE.js";import"./isWellBehavedNumber-DNtaqKPn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BuXwJSrD.js";import"./chartDataContext-DJBEQzNo.js";import"./CategoricalChart-nR7o8SXq.js";import"./CartesianAxis-DVRkpibw.js";import"./Layer-1PJWGF6B.js";import"./Text-DbHSmtym.js";import"./DOMUtils-DO9od7PA.js";import"./Label-Bc99EiAM.js";import"./ZIndexLayer-DHFxHLUr.js";import"./types-ChV1_7kb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BgFHj5o9.js";import"./symbol-BzH8IghT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DniPY9C-.js";import"./uniqBy-YTTRAMug.js";import"./iteratee-KqbZdyCL.js";import"./Curve-aK0jXQoR.js";import"./step-BI2jLazT.js";import"./AnimatedItems-DZ2CDn43.js";import"./useAnimationId-C3XlQNNz.js";import"./ActivePoints-Cgvb9XOf.js";import"./Dot-Cj91nRDm.js";import"./RegisterGraphicalItemId-CalLmt4D.js";import"./ErrorBarContext-CuSWRyRz.js";import"./GraphicalItemClipPath-B_O83OKV.js";import"./SetGraphicalItem-Ve1ljg4L.js";import"./getRadiusAndStrokeWidthFromDot-BLbyixQ6.js";import"./ActiveShapeUtils-DR5RhSUS.js";import"./Cross-mSJJOKzg.js";import"./Rectangle-C19lR5AX.js";import"./Sector-BMTKBdCE.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
