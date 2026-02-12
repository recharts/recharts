import{r as n,e as t}from"./iframe-BHl6feHg.js";import{L as p}from"./LineChart-E9-KbPxT.js";import{R as s}from"./arrayEqualityCheck-JXPmVnXy.js";import{C as c}from"./CartesianGrid-hWV0d-NQ.js";import{X as l}from"./XAxis-Cyf7QVEF.js";import{Y as d}from"./YAxis-CW4WdVK-.js";import{L as y}from"./Legend-hz3C9E_H.js";import{L as h}from"./Line-D8BZJlIf.js";import{T as u}from"./Tooltip-BxbcYDwN.js";import{R as g}from"./RechartsHookInspector-CQ8dXbzy.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DNWAu01W.js";import"./hooks-Dg4O0IDH.js";import"./axisSelectors-DkCd3lVb.js";import"./zIndexSlice-BJqVcMRI.js";import"./resolveDefaultProps-Cbmc1eDK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-a-Nu4Djb.js";import"./chartDataContext-U6yYzpZX.js";import"./CategoricalChart-DPTMtwYi.js";import"./CartesianAxis-h298ab2p.js";import"./Layer-lCm_g64d.js";import"./Text-D9u3Lv_0.js";import"./DOMUtils-Cw8uC_z6.js";import"./Label-K4IXz_WW.js";import"./ZIndexLayer-BG8-MmnW.js";import"./types-D0Ktdl0_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Cg9YUet5.js";import"./Curve-BK3JDrZL.js";import"./useElementOffset-CfN76kX4.js";import"./iteratee-Dl6PoBqX.js";import"./ReactUtils-CAG2pm7w.js";import"./ActivePoints-lE0M4Cdi.js";import"./Dot-LpYSBJRo.js";import"./RegisterGraphicalItemId-C0ySl-rG.js";import"./ErrorBarContext-B_05VW9R.js";import"./GraphicalItemClipPath-pdN9VU--.js";import"./SetGraphicalItem-Cw07hcJH.js";import"./useAnimationId-BLeXX0yF.js";import"./getRadiusAndStrokeWidthFromDot-R49NH_D9.js";import"./ActiveShapeUtils-B7nFKqHq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXzfAzil.js";import"./Trapezoid-Df-d7Ics.js";import"./Sector-C4gW7qc9.js";import"./Cross-BU3QJGXP.js";import"./index-fMMWXo17.js";import"./ChartSizeDimensions-HMEMc6fo.js";import"./OffsetShower-BfTyamfA.js";import"./PlotAreaShower-DtEQ72Vu.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
