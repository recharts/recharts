import{r as n,e as t}from"./iframe-B6AlQnM2.js";import{L as p}from"./LineChart-DP8kSvbq.js";import{R as s}from"./arrayEqualityCheck-DOlZ0mCX.js";import{C as c}from"./CartesianGrid-BsrOPDfE.js";import{X as l}from"./XAxis-B2vfw6Li.js";import{Y as d}from"./YAxis-BtS_tsxk.js";import{L as y}from"./Legend-FguBr4zK.js";import{L as h}from"./Line-9lTUlltG.js";import{T as u}from"./Tooltip-JUfWckLq.js";import{R as g}from"./RechartsHookInspector-C4bhcvg_.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CexAAOIz.js";import"./hooks-CQRKljNW.js";import"./axisSelectors-CbxR9aKJ.js";import"./zIndexSlice-lMltdZop.js";import"./resolveDefaultProps-osVefOLp.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-lYw6K-4N.js";import"./chartDataContext-JLBHd2Mr.js";import"./CategoricalChart-Bzfkval9.js";import"./CartesianAxis-BwDpbQiB.js";import"./Layer-Cdn-3vsr.js";import"./Text-BQHJk7TW.js";import"./DOMUtils-ookTrfW2.js";import"./Label-CIaajA0c.js";import"./ZIndexLayer-KOQQKvvO.js";import"./types-C25Y7m2H.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Cm6_UFeB.js";import"./Curve-DTUwCS4t.js";import"./useElementOffset-D5aHn8Rk.js";import"./iteratee-7MvN9BPN.js";import"./ReactUtils-ODr0KtTw.js";import"./ActivePoints-CNKPkIr-.js";import"./Dot-DwI94pSl.js";import"./RegisterGraphicalItemId-BrQ42RrU.js";import"./ErrorBarContext-DYHYd6lU.js";import"./GraphicalItemClipPath-CFBlDtHu.js";import"./SetGraphicalItem-BFhZLv7r.js";import"./useAnimationId-CsS9GYvF.js";import"./getRadiusAndStrokeWidthFromDot-L9FXfyyd.js";import"./ActiveShapeUtils-Ly0l_9qH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQhXboIW.js";import"./Trapezoid-DdjR8tMX.js";import"./Sector-D5Wtmz4T.js";import"./Cross-BXVeeLRc.js";import"./index-CYGFbMYu.js";import"./ChartSizeDimensions-BY4lvFSe.js";import"./OffsetShower-IG_VUviu.js";import"./PlotAreaShower-DnDaw1Ql.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
