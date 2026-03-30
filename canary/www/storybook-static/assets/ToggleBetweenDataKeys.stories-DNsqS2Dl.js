import{r as n,e as t}from"./iframe-DggZKTRy.js";import{L as p}from"./LineChart-nUo-bpQw.js";import{R as s}from"./arrayEqualityCheck-DnZLtMf6.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Ca4dQTXt.js";import{X as d}from"./XAxis-Dbhs6mKo.js";import{Y as y}from"./YAxis-Dp9rJ-_E.js";import{L as h}from"./Legend-zdcB5Bes.js";import{L as u}from"./Line-02UcdPyY.js";import{T as g}from"./Tooltip-lD9ERrLH.js";import{R as K}from"./RechartsHookInspector-DY7Qg7TT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DW5O2LzM.js";import"./index-BLEPV65D.js";import"./immer-DqkR2i4r.js";import"./hooks-6phBN8Fl.js";import"./axisSelectors-eAEMtAEJ.js";import"./d3-scale-Cv2rvDbO.js";import"./zIndexSlice-D0Ka7Mpu.js";import"./renderedTicksSlice-LD1nL11t.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CdnV1DGW.js";import"./chartDataContext-D9KHIkbs.js";import"./CategoricalChart-DMPzgnGo.js";import"./resolveDefaultProps-DXkRukFF.js";import"./CartesianAxis-BXbHKKX1.js";import"./Layer-BuKRQch4.js";import"./Text-Bd8tFEPJ.js";import"./DOMUtils-DITCnwVy.js";import"./Label-Dxk2zJHG.js";import"./ZIndexLayer-D85cG2g2.js";import"./types-CBaBaM7i.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CzX1PTb6.js";import"./symbol-DdAFiUIg.js";import"./step-IN4trDru.js";import"./useElementOffset-CmFu-JrW.js";import"./uniqBy-Bv-E6IG_.js";import"./iteratee-BGmnQGqa.js";import"./ReactUtils-D9Ez5HAk.js";import"./ActivePoints-DUFygyVE.js";import"./Dot-9vL981FZ.js";import"./RegisterGraphicalItemId-uoq7pQPM.js";import"./ErrorBarContext-YFVjhS9M.js";import"./GraphicalItemClipPath-P03t5XLI.js";import"./SetGraphicalItem-Cc6rdJSS.js";import"./useAnimationId-C-Fijf5f.js";import"./getRadiusAndStrokeWidthFromDot-CUJVymlV.js";import"./ActiveShapeUtils-DDWUau3o.js";import"./isPlainObject-CasrDXFD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-mU1cjLaJ.js";import"./Trapezoid-CpShvAQC.js";import"./Sector-BKRhbQqJ.js";import"./Curve-DpzeZUSQ.js";import"./Cross-BxnCNss0.js";import"./index-87ty5-MJ.js";import"./ChartSizeDimensions-DI522ei_.js";import"./OffsetShower-C9Cav-aa.js";import"./PlotAreaShower-t65TdSVB.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
