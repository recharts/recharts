import{r as n,e as t}from"./iframe-C9RdRDH3.js";import{L as p}from"./LineChart-jGPF58LI.js";import{R as s}from"./arrayEqualityCheck-HNNWYF-c.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-lcSY4Olk.js";import{X as d}from"./XAxis-zBRK63wF.js";import{Y as y}from"./YAxis-JD4R_vdV.js";import{L as h}from"./Legend-DIEi59UA.js";import{L as u}from"./Line-hOd9fGN2.js";import{T as g}from"./Tooltip-hUESGT__.js";import{R as K}from"./RechartsHookInspector-CTsDIORN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BmF3qkQ2.js";import"./index-DVhUM6Av.js";import"./immer-Bs-9thuH.js";import"./hooks-wHvHG3dE.js";import"./axisSelectors-D6QzvLNM.js";import"./d3-scale-C5VHC7vJ.js";import"./zIndexSlice-BbsfkO0E.js";import"./renderedTicksSlice-BEDhfrBW.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CdaihLfO.js";import"./chartDataContext-BYUFQouT.js";import"./CategoricalChart-DNwSkE9v.js";import"./resolveDefaultProps-cmmY0qvO.js";import"./CartesianAxis-B-LYb471.js";import"./Layer-Br4TNC_V.js";import"./Text-wGfDkrTn.js";import"./DOMUtils-Btd4Fsjb.js";import"./Label-nmn7wUcC.js";import"./ZIndexLayer-BHSqW2ug.js";import"./types-zOKv99jr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D5iKcEZY.js";import"./symbol-B9BxRARk.js";import"./step-By0pLWNs.js";import"./useElementOffset-1-iEdSlv.js";import"./uniqBy-Ctz7O3Q0.js";import"./iteratee-CqWD3rtL.js";import"./ReactUtils-BodNcXDX.js";import"./ActivePoints-DehllWrE.js";import"./Dot-D09_z6XC.js";import"./RegisterGraphicalItemId-lJJ2Llx7.js";import"./ErrorBarContext-Df_rxzkL.js";import"./GraphicalItemClipPath-BaxGUmwM.js";import"./SetGraphicalItem-OEoYsD-F.js";import"./useAnimationId-Dkvf8CAV.js";import"./getRadiusAndStrokeWidthFromDot-B5vJvzV2.js";import"./ActiveShapeUtils-CdfDZypJ.js";import"./isPlainObject-BkahSEKD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D2WqxHR4.js";import"./Trapezoid-CaO4Za9k.js";import"./Sector-Dlz-xsu0.js";import"./Curve-j2GFynBi.js";import"./Cross-BAMZzrR9.js";import"./index-iNo1MV8G.js";import"./ChartSizeDimensions-BfBAtZfD.js";import"./OffsetShower-DGVkIb09.js";import"./PlotAreaShower-DbkHyMR-.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
