import{u as n,e as t}from"./iframe-osYa99rW.js";import{L as p}from"./LineChart-BDs5GNJB.js";import{g as s}from"./arrayEqualityCheck-DVAn2Veo.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-B6UjWCCj.js";import{X as d}from"./XAxis-DB9q536o.js";import{Y as u}from"./YAxis-CPpRvup6.js";import{L as y}from"./Legend-C2vcj-rA.js";import{L as h}from"./Line-C2qsCCMD.js";import{T as g}from"./Tooltip-m7Vdw8eH.js";import{R as K}from"./RechartsHookInspector-VtrkbRKP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7HrPqDt.js";import"./index-FVmQP7oK.js";import"./immer-C4kOpB_4.js";import"./hooks-CbohzQKL.js";import"./axisSelectors-jckpyKNb.js";import"./d3-scale-BGIasGRq.js";import"./zIndexSlice-DbxduRWl.js";import"./renderedTicksSlice-Jw-bjgRX.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-qVL1bhzD.js";import"./chartDataContext-CTr_Fr3F.js";import"./CategoricalChart-KWj4YaNg.js";import"./resolveDefaultProps-e5wzBDkv.js";import"./CartesianAxis-C67x0626.js";import"./Layer-gnKUTyol.js";import"./Text-BLYIGASS.js";import"./DOMUtils-DNI7arDM.js";import"./Label-DAoBltIG.js";import"./ZIndexLayer-kQ2XKLeS.js";import"./types-D2LtkD4l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BgYAyf_A.js";import"./symbol-D1Jx74jR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CZMoOZsh.js";import"./uniqBy-BYcGXJeH.js";import"./iteratee-DEaJE3ja.js";import"./Curve-DMV5yuc6.js";import"./step-BBN71zyD.js";import"./ReactUtils-Dd2jwjm5.js";import"./ActivePoints-42Our513.js";import"./Dot-DRU2iJQo.js";import"./RegisterGraphicalItemId-rIlloXLK.js";import"./ErrorBarContext-Xd9mG_11.js";import"./GraphicalItemClipPath-BJe2Wn_o.js";import"./SetGraphicalItem-DW948_Jf.js";import"./useAnimationId-CKNV6DVG.js";import"./getRadiusAndStrokeWidthFromDot-CGiLTsNp.js";import"./ActiveShapeUtils-CUIK7NEg.js";import"./Cross-JcJX91if.js";import"./Rectangle-D30liOk0.js";import"./Sector-_rfV5uw6.js";import"./index-DXz8B56j.js";import"./ChartSizeDimensions-Cg7YHQ1i.js";import"./OffsetShower-DqXXwFDQ.js";import"./PlotAreaShower-CXw6zCF-.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,Lt as default};
