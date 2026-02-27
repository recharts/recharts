import{r as n,e as t}from"./iframe-Dr9hlnt0.js";import{L as p}from"./LineChart-pgu9tx8B.js";import{R as s}from"./arrayEqualityCheck-dGE5_Gdx.js";import{C as c}from"./CartesianGrid-C-DxZLwk.js";import{X as l}from"./XAxis-DVCekQJU.js";import{Y as d}from"./YAxis-oVvY9CD_.js";import{L as y}from"./Legend-D_ZWZENa.js";import{L as h}from"./Line-DLj2NM4I.js";import{T as u}from"./Tooltip-BphQq36y.js";import{R as g}from"./RechartsHookInspector-DqXSZ2_4.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DInH99Th.js";import"./index-IE9LPIX3.js";import"./immer-B0cgghQh.js";import"./hooks-CB3Bi2qN.js";import"./axisSelectors-BElW-4uO.js";import"./d3-scale-Kw50_LDj.js";import"./zIndexSlice-DGOFW2aZ.js";import"./renderedTicksSlice-CKBM6rCx.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DxJdttbu.js";import"./chartDataContext-no4gboHT.js";import"./CategoricalChart-BlqKECmV.js";import"./resolveDefaultProps-BcfXVXAk.js";import"./CartesianAxis-zfjDIuu9.js";import"./Layer-Dau6qZl4.js";import"./Text-5hzj-3E2.js";import"./DOMUtils-CHMlhwBF.js";import"./Label-Cwqjf1nY.js";import"./ZIndexLayer-bo4FLnP8.js";import"./types-BT9nDPZN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DjCtNUtk.js";import"./symbol-DBg6OtuT.js";import"./step-0gc20F8a.js";import"./useElementOffset-C8Y7cVjc.js";import"./uniqBy-CKd_6bHf.js";import"./iteratee-BGMuKn8v.js";import"./ReactUtils-DLDWRsmH.js";import"./ActivePoints-BWlIiscJ.js";import"./Dot-G9S3vDXU.js";import"./RegisterGraphicalItemId-DaJnSa8q.js";import"./ErrorBarContext-DFPKgud5.js";import"./GraphicalItemClipPath-C96TQI3r.js";import"./SetGraphicalItem-13vPI63j.js";import"./useAnimationId-DF7fT-LB.js";import"./getRadiusAndStrokeWidthFromDot-IhVKPv-0.js";import"./ActiveShapeUtils-Zy3mhGJ3.js";import"./isPlainObject-CA9cA3dI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C0CBW5qs.js";import"./Trapezoid-B4y_3kG1.js";import"./Sector-B2l0FABS.js";import"./Curve-B9wE7HPg.js";import"./Cross-DviCIwsu.js";import"./index-Dj7LSIr-.js";import"./ChartSizeDimensions-DlMrTXA2.js";import"./OffsetShower-DfvMVNLi.js";import"./PlotAreaShower-DpM8yPVC.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
