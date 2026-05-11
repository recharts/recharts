import{r as n,e as t}from"./iframe-bIRDwOrj.js";import{L as p}from"./LineChart-D802Iisz.js";import{R as s}from"./arrayEqualityCheck-TXFMRjRi.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Blg1Jjfn.js";import{X as d}from"./XAxis-R_euWI3w.js";import{Y as y}from"./YAxis-Cmkuai_3.js";import{L as h}from"./Legend-DSQOIfOC.js";import{L as u}from"./Line-B60oELve.js";import{T as g}from"./Tooltip-CxHNJRE4.js";import{R as K}from"./RechartsHookInspector-CVcWeYmF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D2ef2x-I.js";import"./index-TSn5rXzG.js";import"./immer-BfeMUSMO.js";import"./hooks-BdMZPZGx.js";import"./axisSelectors-CoyWHGIo.js";import"./d3-scale-CFl6A6_I.js";import"./zIndexSlice-D22DBnXA.js";import"./renderedTicksSlice-DiK-9S0i.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-EqFxaaEr.js";import"./chartDataContext-O3jargTL.js";import"./CategoricalChart-DI9gh84Y.js";import"./resolveDefaultProps-hkUJr7lQ.js";import"./CartesianAxis-mK0sN7a0.js";import"./Layer-IjPfnpTW.js";import"./Text-DzsBbndD.js";import"./DOMUtils-MkU82dM6.js";import"./Label-C1RClCIo.js";import"./ZIndexLayer-D7UlnPMP.js";import"./types-dvoy8M64.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DOx_UbzB.js";import"./symbol-NHM4e63q.js";import"./step-DQ7wUDFq.js";import"./useElementOffset-BV5HmMjB.js";import"./uniqBy-aS03rcBV.js";import"./iteratee-Dq5hiuyR.js";import"./ReactUtils-CzayGhzm.js";import"./ActivePoints-CJrfz0Fi.js";import"./Dot-BCbECuJO.js";import"./RegisterGraphicalItemId-DCkpRkMi.js";import"./ErrorBarContext-rH_nwKrW.js";import"./GraphicalItemClipPath-CBXSjVJX.js";import"./SetGraphicalItem-B0eIE6zm.js";import"./useAnimationId-Co08wyJa.js";import"./getRadiusAndStrokeWidthFromDot-C0F5EKdh.js";import"./ActiveShapeUtils-wXVyp0gV.js";import"./isPlainObject-DIIEh3HT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CBjo9wrp.js";import"./Trapezoid-1FkDqVZ5.js";import"./Sector-D-NFzdmx.js";import"./Curve-orFRmx5o.js";import"./Cross-CrNHeowF.js";import"./index-B6Pu2s-H.js";import"./ChartSizeDimensions-CmmmbIVS.js";import"./OffsetShower-DVm6XnLi.js";import"./PlotAreaShower-8mw46bvb.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
