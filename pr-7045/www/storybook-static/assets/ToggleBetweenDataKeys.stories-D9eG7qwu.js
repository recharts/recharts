import{r as n,e as t}from"./iframe-DUQ2rD4k.js";import{L as p}from"./LineChart-BhW95qpK.js";import{R as s}from"./arrayEqualityCheck-BBPGZIUg.js";import{C as c}from"./CartesianGrid-CrLNpTgd.js";import{X as l}from"./XAxis-Dj-mbvwT.js";import{Y as d}from"./YAxis-CeQ3Mvu1.js";import{L as y}from"./Legend-BngZp2RN.js";import{L as h}from"./Line-DqtbRix_.js";import{T as u}from"./Tooltip-D8ilA7K-.js";import{R as g}from"./RechartsHookInspector-EoCZS-ly.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-rIHkV1_R.js";import"./index-B0EPCnDB.js";import"./immer-CXKbBCwk.js";import"./hooks-HXjvsCy4.js";import"./axisSelectors-D2XTxCjc.js";import"./d3-scale-PQ3Jd5dr.js";import"./zIndexSlice-D6ARQVQn.js";import"./renderedTicksSlice-CW_OarVn.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CMhPpmfP.js";import"./chartDataContext-DyVaFi3Q.js";import"./CategoricalChart-CK6_FENE.js";import"./resolveDefaultProps-DRDb4LtS.js";import"./CartesianAxis-CJmVZJSG.js";import"./Layer-7WkqLLbY.js";import"./Text-C5kR-_Zz.js";import"./DOMUtils-D_ZO6wl2.js";import"./Label-C0FJwtOT.js";import"./ZIndexLayer-59Hqjxa2.js";import"./types-SmO60qvE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B9RWw_WA.js";import"./symbol-BY9-nPyZ.js";import"./step-DYxjvIwM.js";import"./useElementOffset-DFPgklPm.js";import"./uniqBy-CSy55f1Z.js";import"./iteratee-C2OKAmKf.js";import"./ReactUtils-BJlu3yfQ.js";import"./ActivePoints-CO4Xi39k.js";import"./Dot-DZAiuKz5.js";import"./RegisterGraphicalItemId-rMFg-mKG.js";import"./ErrorBarContext-Clyukq3z.js";import"./GraphicalItemClipPath-Bn8yfwfV.js";import"./SetGraphicalItem-DM9xQ_4_.js";import"./useAnimationId-yl6yHjaO.js";import"./getRadiusAndStrokeWidthFromDot-Dds1z6ov.js";import"./ActiveShapeUtils-D6xDWETw.js";import"./isPlainObject-B0Jm4UnE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bo_Jblzr.js";import"./Trapezoid-C7HKi7wc.js";import"./Sector-CmPACNI3.js";import"./Curve-CF17Mcfw.js";import"./Cross-BlzDrKpO.js";import"./index-mcEQG0VX.js";import"./ChartSizeDimensions-vnbsz8Dv.js";import"./OffsetShower-ndNiLHUj.js";import"./PlotAreaShower-Y-PU9931.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
