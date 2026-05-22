import{u as n,e as t}from"./iframe-DgFUiQiK.js";import{L as p}from"./LineChart-xHlEUiUf.js";import{g as s}from"./arrayEqualityCheck-LPKQSaXm.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-DhNOoRFG.js";import{X as d}from"./XAxis-CWlzFfKK.js";import{Y as u}from"./YAxis-B1_SZb1V.js";import{L as y}from"./Legend-v5MiJ3eY.js";import{L as h}from"./Line-CMbw1Ih0.js";import{T as g}from"./Tooltip-8_1fOMr1.js";import{R as K}from"./RechartsHookInspector-BQ9yzd9s.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Deqq_iXZ.js";import"./index-BBnacJAP.js";import"./immer-Ca0Cy3ce.js";import"./hooks-CisH2h_f.js";import"./axisSelectors-Q9bQQnzw.js";import"./d3-scale-HhLt2ZCp.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-DXOhyCux.js";import"./renderedTicksSlice-CX5tvx9V.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Br6s862c.js";import"./chartDataContext-BrtjpLFC.js";import"./CategoricalChart-vPZ8jvpO.js";import"./resolveDefaultProps-C_bUtyXy.js";import"./CartesianAxis-n56eB7xd.js";import"./Layer-CKwu47GO.js";import"./Text-BqcFD908.js";import"./DOMUtils-DG_6devH.js";import"./Label-BFkeduE8.js";import"./ZIndexLayer-DZ2vjGZc.js";import"./types-D_oNXqce.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DwMqGDyq.js";import"./symbol-DbKH8VC2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CgnfzBM5.js";import"./uniqBy-BY9_th2N.js";import"./iteratee-Cjhnbwdc.js";import"./Curve-Ba62GFgD.js";import"./step-CFkmYg6i.js";import"./AnimatedItems-BOr9vF6Q.js";import"./useAnimationId-CCpHVl00.js";import"./ActivePoints-BorMl77e.js";import"./Dot-Dyh69QuB.js";import"./RegisterGraphicalItemId-fp2G-2V_.js";import"./ErrorBarContext-Ompx7WAJ.js";import"./GraphicalItemClipPath-Be4OXw7H.js";import"./SetGraphicalItem-CngLT_zh.js";import"./getRadiusAndStrokeWidthFromDot-D3y5duhQ.js";import"./ActiveShapeUtils-BELkaCyh.js";import"./Cross-ZFk5d86A.js";import"./Rectangle-A65MZM5i.js";import"./Sector-C1uP_awt.js";import"./index-DgA4mNoJ.js";import"./ChartSizeDimensions-B1UuSRJB.js";import"./OffsetShower-BmC__2iI.js";import"./PlotAreaShower-CI2PfPEp.js";const kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,kt as default};
