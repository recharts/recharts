import{r as n,e as t}from"./iframe-B82KKzsZ.js";import{L as p}from"./LineChart-CnOCWngC.js";import{R as s}from"./arrayEqualityCheck-Cg0idRhp.js";import{C as c}from"./CartesianGrid-T89mQ-w-.js";import{X as l}from"./XAxis-EvgP7bI2.js";import{Y as d}from"./YAxis-B1evlESR.js";import{L as y}from"./Legend-luZ-3Qz2.js";import{L as h}from"./Line-FhoCkSnF.js";import{T as u}from"./Tooltip-CbosIM56.js";import{R as g}from"./RechartsHookInspector-Dn_N91Ha.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dy52E8zA.js";import"./index-BPhr2cwx.js";import"./immer-Cjr4YINx.js";import"./hooks-C_Bk0iWL.js";import"./axisSelectors-BlY0RvlZ.js";import"./d3-scale-gdEhlQZC.js";import"./zIndexSlice-DoZOUHwV.js";import"./renderedTicksSlice-D6QyWwDV.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DjM6_Ohn.js";import"./chartDataContext-BVeH-QEp.js";import"./CategoricalChart-BF433tP-.js";import"./resolveDefaultProps-Cz2WpobP.js";import"./CartesianAxis-DURtsiuN.js";import"./Layer-ug_gWv5Y.js";import"./Text-C1AVdMVq.js";import"./DOMUtils-DQZy4jxA.js";import"./Label-CoPQcGVn.js";import"./ZIndexLayer-CCx46f1u.js";import"./types-DaFthwO7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-dztR1yZz.js";import"./symbol-Djdr0qU4.js";import"./step-D_vNME6r.js";import"./useElementOffset-DaSnC2vL.js";import"./uniqBy-CF2YBGTs.js";import"./iteratee-Csu2HEtD.js";import"./ReactUtils-CyWe8bPC.js";import"./ActivePoints-Bp-xuhXe.js";import"./Dot-BzE5qBfr.js";import"./RegisterGraphicalItemId-tJqvGPQR.js";import"./ErrorBarContext-DSt7HMag.js";import"./GraphicalItemClipPath-Chx7G7zK.js";import"./SetGraphicalItem-BNPEWY7y.js";import"./useAnimationId-BjMwuZHe.js";import"./getRadiusAndStrokeWidthFromDot-VGAN5l6V.js";import"./ActiveShapeUtils-CrpulZpz.js";import"./isPlainObject-6AK1zo7x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-qAHqHP.js";import"./Trapezoid-CL1eg36a.js";import"./Sector-SPbT55o6.js";import"./Curve-BsV_hxX6.js";import"./Cross-C07qCAF-.js";import"./index-BDwCI-pI.js";import"./ChartSizeDimensions-DGlceztD.js";import"./OffsetShower-BguOTWfQ.js";import"./PlotAreaShower-CC5s-Y7u.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
