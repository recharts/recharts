import{r as n,e as t}from"./iframe-CBxZ3YEm.js";import{L as p}from"./LineChart-D7jmXi2H.js";import{R as s}from"./arrayEqualityCheck-Blj5Aeqs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ZMdhEHdo.js";import{X as d}from"./XAxis-C1aLPlbC.js";import{Y as y}from"./YAxis-myA84OCs.js";import{L as h}from"./Legend-Ce1K5krY.js";import{L as u}from"./Line-CYF4OlQp.js";import{T as g}from"./Tooltip-BAkws9JH.js";import{R as K}from"./RechartsHookInspector-CqBmfRxm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-gLcbW_Rw.js";import"./index-HycHHMGp.js";import"./immer-CcXWnMnm.js";import"./hooks-DYoyM5tD.js";import"./axisSelectors-CzPcR0bZ.js";import"./d3-scale-BQHKXGzh.js";import"./zIndexSlice-De9OMF5H.js";import"./renderedTicksSlice-f_j9Tm_g.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BE_qH18M.js";import"./chartDataContext-DvlevAqI.js";import"./CategoricalChart-Bg-fk5CT.js";import"./resolveDefaultProps-BEDeUj8t.js";import"./CartesianAxis-DW4xU2v8.js";import"./Layer-8oMMti5m.js";import"./Text-7hG94G_y.js";import"./DOMUtils-v8LS_cLE.js";import"./Label-C9wjKN1h.js";import"./ZIndexLayer-B7fniKOv.js";import"./types-CzApK6LP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CfjjfEBZ.js";import"./symbol-CgH1RbEA.js";import"./step-i7QSy-8Q.js";import"./useElementOffset-B8QE7ut7.js";import"./uniqBy-m8l7wXKu.js";import"./iteratee-DO27y1ZT.js";import"./ReactUtils-c7YX91Ex.js";import"./ActivePoints-Cg_WMXc2.js";import"./Dot-xzbDIn8F.js";import"./RegisterGraphicalItemId-lPm6fXRN.js";import"./ErrorBarContext-C-jVrcMZ.js";import"./GraphicalItemClipPath-DGUbYWDL.js";import"./SetGraphicalItem-8ezKiNwU.js";import"./useAnimationId-Dgk97qlj.js";import"./getRadiusAndStrokeWidthFromDot-DelOuwrQ.js";import"./ActiveShapeUtils-D6xdRanx.js";import"./isPlainObject-SwII21m1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BWauEswa.js";import"./Trapezoid-BfLDWvDz.js";import"./Sector-E_Gangzj.js";import"./Curve-CyXQFnOW.js";import"./Cross-CkXXW4RF.js";import"./index-FhOfqCjV.js";import"./ChartSizeDimensions-D6Chm1KW.js";import"./OffsetShower-Cf5FndXJ.js";import"./PlotAreaShower-Bk6tssdT.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
