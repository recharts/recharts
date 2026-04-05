import{r as n,e as t}from"./iframe-DRAz-MOV.js";import{L as p}from"./LineChart-BgY0AZFd.js";import{R as s}from"./arrayEqualityCheck-C8643F2b.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CFynsdgL.js";import{X as d}from"./XAxis-LfLbW5h3.js";import{Y as y}from"./YAxis-Exnm2m07.js";import{L as h}from"./Legend-DAlheZF3.js";import{L as u}from"./Line-CziVn159.js";import{T as g}from"./Tooltip-BPjmhM8Z.js";import{R as K}from"./RechartsHookInspector-ZnBZyL4x.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bq0uftOK.js";import"./index-BwgIdcXX.js";import"./immer-7dbUwIWB.js";import"./hooks-DKliz_JR.js";import"./axisSelectors-B3X53-PT.js";import"./d3-scale-CP3jXnNI.js";import"./zIndexSlice-QFEsuJ_i.js";import"./renderedTicksSlice-C3sDnISd.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D16-_KrV.js";import"./chartDataContext-DfgXfLVB.js";import"./CategoricalChart-mIZr-3BC.js";import"./resolveDefaultProps-DMSAaaR1.js";import"./CartesianAxis-BEMLBmX5.js";import"./Layer-7ou2jnr2.js";import"./Text-BfMqXVQN.js";import"./DOMUtils-BDvhlQed.js";import"./Label-BA834Vai.js";import"./ZIndexLayer-BQfiKj8k.js";import"./types-BHj1SP9z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BE03y18L.js";import"./symbol-BJNbjT1E.js";import"./step-DsP_EtiA.js";import"./useElementOffset-Buqr-Q9u.js";import"./uniqBy-C7Z_8_ul.js";import"./iteratee-BbZqSogb.js";import"./ReactUtils-C_AD8QSo.js";import"./ActivePoints-6EKZqhHa.js";import"./Dot-DXpzcep7.js";import"./RegisterGraphicalItemId-DNpPqdGB.js";import"./ErrorBarContext-C2uHiTDW.js";import"./GraphicalItemClipPath-DkmmuFjC.js";import"./SetGraphicalItem-BOrXETUL.js";import"./useAnimationId-CSxRZUsd.js";import"./getRadiusAndStrokeWidthFromDot-bTkwdsC0.js";import"./ActiveShapeUtils-BkbmdP_u.js";import"./isPlainObject-CaT7z4Jz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIlVtzFE.js";import"./Trapezoid-i_eTbcia.js";import"./Sector-BFFY6GnN.js";import"./Curve-rCu2vvgU.js";import"./Cross-DmcqLs2s.js";import"./index-CJqTRlWb.js";import"./ChartSizeDimensions-B-YSta_X.js";import"./OffsetShower-DVMilrOo.js";import"./PlotAreaShower-B89WvJSc.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
