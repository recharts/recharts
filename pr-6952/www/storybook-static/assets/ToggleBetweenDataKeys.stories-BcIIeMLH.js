import{r as n,e as t}from"./iframe-ildNGUcB.js";import{L as p}from"./LineChart-DfzL18R0.js";import{R as s}from"./arrayEqualityCheck-DoW--ad2.js";import{C as c}from"./CartesianGrid-BTgrJBfl.js";import{X as l}from"./XAxis-BpmpMVxP.js";import{Y as d}from"./YAxis-CynyduVr.js";import{L as y}from"./Legend-CoVLDyKg.js";import{L as h}from"./Line-Cn-oM2ey.js";import{T as u}from"./Tooltip-B5-K6zIc.js";import{R as g}from"./RechartsHookInspector-DjpRKvg6.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BhDWMvuB.js";import"./hooks-B29HBlTR.js";import"./axisSelectors-5o1CXUr3.js";import"./zIndexSlice-D5G-T-vj.js";import"./resolveDefaultProps-D_1HjOLi.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-042kikpZ.js";import"./chartDataContext-Bqk6xP9U.js";import"./CategoricalChart-C6m-VrJe.js";import"./CartesianAxis-BT55_pa3.js";import"./Layer-C1Vpqy4i.js";import"./Text-BJp862GC.js";import"./DOMUtils-BS9doNjR.js";import"./Label-hP_NWlrR.js";import"./ZIndexLayer-Dxr4KK3S.js";import"./types-C_F-U0PG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DUzk_pf6.js";import"./Curve-C50TS3eJ.js";import"./useElementOffset-BYF9do47.js";import"./iteratee-Dd1-lgM9.js";import"./ReactUtils-DZ7Bf0_2.js";import"./ActivePoints-VRWpag3q.js";import"./Dot-BbvpQGB8.js";import"./RegisterGraphicalItemId-cvEVRPza.js";import"./ErrorBarContext-Bjz9qEy8.js";import"./GraphicalItemClipPath-Cuzcod5_.js";import"./SetGraphicalItem-DnK5n2LJ.js";import"./useAnimationId-BnV1d9M_.js";import"./getRadiusAndStrokeWidthFromDot-DZOYBeyk.js";import"./ActiveShapeUtils-BXCOQYub.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dt6Qepe_.js";import"./Trapezoid-BeDQjyAm.js";import"./Sector-0N1SRZV_.js";import"./Cross-CF07pSoL.js";import"./index-Bl4fk5Ry.js";import"./ChartSizeDimensions-DAfFC157.js";import"./OffsetShower-DLkMsMHT.js";import"./PlotAreaShower-Bhcl3vg9.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
