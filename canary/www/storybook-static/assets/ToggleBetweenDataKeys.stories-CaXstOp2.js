import{r as n,e as t}from"./iframe-BMiRdtzi.js";import{L as p}from"./LineChart-Do5o3jYZ.js";import{R as s}from"./arrayEqualityCheck-Da9FQhP8.js";import{C as c}from"./CartesianGrid-CM8CSWoO.js";import{X as l}from"./XAxis-zYIEy4Nj.js";import{Y as d}from"./YAxis-4AjIhGFV.js";import{L as y}from"./Legend-BJricVxL.js";import{L as h}from"./Line-BwxhCkq8.js";import{T as u}from"./Tooltip-ifIBFrbc.js";import{R as g}from"./RechartsHookInspector-PXISS_9s.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D1Zuj5aj.js";import"./index-CFZ_txX2.js";import"./immer-CeUHRJUh.js";import"./hooks-Dj-8y2kZ.js";import"./axisSelectors-Dhmk1Apf.js";import"./d3-scale-lZPJgZrs.js";import"./zIndexSlice-DXZuZUhc.js";import"./renderedTicksSlice-DuZcooa-.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-hRI6eS0t.js";import"./chartDataContext-FBHrtSoZ.js";import"./CategoricalChart-DDM_7pl3.js";import"./resolveDefaultProps-BbcxzGSI.js";import"./CartesianAxis-B9OgjJ9q.js";import"./Layer-D9Oz3zOW.js";import"./Text-KMtMbVYS.js";import"./DOMUtils-D9vxTovY.js";import"./Label-BNGz4hpX.js";import"./ZIndexLayer-BSi_oIk9.js";import"./types-nLF0_SAW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DfsWCoSA.js";import"./symbol-Dypj6TZZ.js";import"./step-BA38JlTy.js";import"./useElementOffset-DbucRiGe.js";import"./uniqBy-Cg_cRoCf.js";import"./iteratee-CxSAdzMH.js";import"./ReactUtils-f9rIQTZx.js";import"./ActivePoints-BU8KSqCe.js";import"./Dot-BugqpfmD.js";import"./RegisterGraphicalItemId-_26M4VR4.js";import"./ErrorBarContext-CzWKH65H.js";import"./GraphicalItemClipPath-DVqZ2J0u.js";import"./SetGraphicalItem-DG59MNm5.js";import"./useAnimationId-5Oa7E8I_.js";import"./getRadiusAndStrokeWidthFromDot-B57zRP1H.js";import"./ActiveShapeUtils-ien1uv2Y.js";import"./isPlainObject-CocMjk2l.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7gjhdc4.js";import"./Trapezoid-YEyIDayp.js";import"./Sector-CiduAPVO.js";import"./Curve-B8D8lFuj.js";import"./Cross-DeYqW9SV.js";import"./index-BxIeWHLt.js";import"./ChartSizeDimensions-CNT6A0OH.js";import"./OffsetShower-Bzn-sKNm.js";import"./PlotAreaShower-B0eURlXX.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
