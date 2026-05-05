import{r as n,e as t}from"./iframe-r2w7kZeJ.js";import{L as p}from"./LineChart-DqWUz7U1.js";import{R as s}from"./arrayEqualityCheck-0L0A4nkz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B9Ga4aKS.js";import{X as d}from"./XAxis-CW9ZaA2b.js";import{Y as y}from"./YAxis-I9saElLN.js";import{L as h}from"./Legend-05jea6bq.js";import{L as u}from"./Line-z9zeEmq5.js";import{T as g}from"./Tooltip-CFWaUU-U.js";import{R as K}from"./RechartsHookInspector-DcB-Xcfd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-1HJqk7Yh.js";import"./index-W-AgMbp-.js";import"./immer-CfvCTpDj.js";import"./hooks-B_Z23ri5.js";import"./axisSelectors-CJgn9_ry.js";import"./d3-scale-CTtR7bXz.js";import"./zIndexSlice-DqYPZFIv.js";import"./renderedTicksSlice-B-NBeGNG.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BFAKYLf8.js";import"./chartDataContext-BjsyC2cu.js";import"./CategoricalChart-Beyzarg4.js";import"./resolveDefaultProps-EjMTnW0n.js";import"./CartesianAxis-DqNMO4sJ.js";import"./Layer-CMwqxUY2.js";import"./Text-DLc1wT1a.js";import"./DOMUtils-KJq6QJZu.js";import"./Label-m6h3W7WS.js";import"./ZIndexLayer-CC246p5z.js";import"./types-ywkvGoUt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CbDfRlok.js";import"./symbol-JIUkL0GL.js";import"./step-CB3ZoZU9.js";import"./useElementOffset-Cp48T0Gk.js";import"./uniqBy-DkZlGKl-.js";import"./iteratee-BY0-7en0.js";import"./ReactUtils-BYDoU0L1.js";import"./ActivePoints-Ddlw9Tet.js";import"./Dot-JZESmYel.js";import"./RegisterGraphicalItemId-Bf-Aw6v0.js";import"./ErrorBarContext--RrhajOR.js";import"./GraphicalItemClipPath-uc4YpIA_.js";import"./SetGraphicalItem-C7uPVjvE.js";import"./useAnimationId-BkxSeEj0.js";import"./getRadiusAndStrokeWidthFromDot-B1ykn1OV.js";import"./ActiveShapeUtils-Df9SSVU9.js";import"./isPlainObject--i_1cxYd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvpuUb1d.js";import"./Trapezoid-BCSEHN2t.js";import"./Sector-D4bQnZgU.js";import"./Curve-E_V9yRSe.js";import"./Cross-CL7La1tu.js";import"./index-Dof6etCE.js";import"./ChartSizeDimensions-lBZtOA5X.js";import"./OffsetShower-vABa0YEq.js";import"./PlotAreaShower-BZ07GFyt.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
