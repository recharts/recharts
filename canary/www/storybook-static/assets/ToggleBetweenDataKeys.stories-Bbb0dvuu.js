import{r as n,e as t}from"./iframe-vUL-L_aJ.js";import{L as p}from"./LineChart-BeWJ-_y4.js";import{R as s}from"./arrayEqualityCheck-COxCNyPK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DJw6JQUP.js";import{X as d}from"./XAxis-BMYosvSp.js";import{Y as y}from"./YAxis-CruSc5kS.js";import{L as h}from"./Legend-BJDPtSQD.js";import{L as u}from"./Line-DsQcjQwj.js";import{T as g}from"./Tooltip-M8eoo1td.js";import{R as K}from"./RechartsHookInspector-CWBwyRFX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CG_OUpDm.js";import"./index-BdR1gVmI.js";import"./immer-BVp8bXPB.js";import"./hooks-yjZ0j-0_.js";import"./axisSelectors-CUzNHzdL.js";import"./d3-scale-DD2Sx1-d.js";import"./zIndexSlice-K47YJD8k.js";import"./renderedTicksSlice-CDeFkEV6.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BY4kTu9-.js";import"./chartDataContext-BHVW1DWn.js";import"./CategoricalChart-C_yJwLRG.js";import"./resolveDefaultProps-C8rpue-w.js";import"./CartesianAxis-C5gNDMzm.js";import"./Layer-Dux9G07m.js";import"./Text-CzUGJ8je.js";import"./DOMUtils-CvmeQvzc.js";import"./Label-C4rHqw7t.js";import"./ZIndexLayer-Cr3lCUTq.js";import"./types-5KBfjt4C.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DfP23eLB.js";import"./symbol-DFtJsCUW.js";import"./step-DT_l3LWo.js";import"./useElementOffset-DWmb2K2h.js";import"./uniqBy-BxmRGs-t.js";import"./iteratee-DtJgozn8.js";import"./ReactUtils-B3mcMybl.js";import"./ActivePoints-QOVXqPsr.js";import"./Dot-CikDQJLR.js";import"./RegisterGraphicalItemId-sesVzteN.js";import"./ErrorBarContext-BI53r7fn.js";import"./GraphicalItemClipPath-D84XG9Hf.js";import"./SetGraphicalItem-DiqKS2xX.js";import"./useAnimationId-DLI5pxxS.js";import"./getRadiusAndStrokeWidthFromDot-BEMpaDjp.js";import"./ActiveShapeUtils-D_EuKoYs.js";import"./isPlainObject-B2pB2xQe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5TKYWYM.js";import"./Trapezoid-CJp4NMn-.js";import"./Sector-ztmOwzQz.js";import"./Curve-Cj7OHreQ.js";import"./Cross-RATG2KX5.js";import"./index-CdQg9v03.js";import"./ChartSizeDimensions-MpUtdPem.js";import"./OffsetShower-CNEUWUv0.js";import"./PlotAreaShower-Xh3uZCwl.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
