import{r as n,e as t}from"./iframe-BWXS80lS.js";import{L as p}from"./LineChart-JuYsOgdS.js";import{R as s}from"./arrayEqualityCheck-C3u4XnRQ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-cwDREeaV.js";import{X as d}from"./XAxis-_91HGxIi.js";import{Y as y}from"./YAxis-CryQDPi0.js";import{L as h}from"./Legend-BdG4Vj5T.js";import{L as u}from"./Line-D2_PZAg_.js";import{T as g}from"./Tooltip-CT--u3IA.js";import{R as K}from"./RechartsHookInspector-BRyQ5hs2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ge4Ob0hk.js";import"./index-BHFN0jNx.js";import"./immer-q9ikkIh9.js";import"./hooks-RRXvqXA6.js";import"./axisSelectors-CxvM0uDn.js";import"./d3-scale-zfNl6p6O.js";import"./zIndexSlice-d9o2MkaU.js";import"./renderedTicksSlice-DqJmQzpf.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-34jBpyPx.js";import"./chartDataContext-BhTPdOXh.js";import"./CategoricalChart-DEIvmDa9.js";import"./resolveDefaultProps-BuIDsZJ5.js";import"./CartesianAxis-B8jMapSP.js";import"./Layer-CiG7NGHu.js";import"./Text-BQ1FWDem.js";import"./DOMUtils-DC1JBHtR.js";import"./Label-CJTshKiS.js";import"./ZIndexLayer-fCru-3Nt.js";import"./types-B2Bimmd7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BWe2eBvB.js";import"./symbol-BsfZTgYj.js";import"./step-CtJYHt9n.js";import"./useElementOffset-9snkxXEv.js";import"./uniqBy-C1Fr29UV.js";import"./iteratee-LfF2GEsl.js";import"./ReactUtils-C5S3KkGf.js";import"./ActivePoints-BQI1dN0-.js";import"./Dot-BwCqCngA.js";import"./RegisterGraphicalItemId-CEYbgURY.js";import"./ErrorBarContext-BMlXzYwR.js";import"./GraphicalItemClipPath-DmuLKEXw.js";import"./SetGraphicalItem-Bs8XX-Ij.js";import"./useAnimationId-8mmnumbx.js";import"./getRadiusAndStrokeWidthFromDot-CUi_ls90.js";import"./ActiveShapeUtils-BT90lXsu.js";import"./isPlainObject-Cy0CV0qj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4VIJx5D.js";import"./Trapezoid-DpceZUPJ.js";import"./Sector-CLFD9_Zr.js";import"./Curve-DycDyh58.js";import"./Cross-AeOo41XI.js";import"./index-DflyfLFf.js";import"./ChartSizeDimensions-hQ4c9Mxw.js";import"./OffsetShower-uoVY1zNd.js";import"./PlotAreaShower-BwJGGkjL.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
