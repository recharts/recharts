import{r as n,e as t}from"./iframe-DwwP6BDm.js";import{L as p}from"./LineChart-CdMzf93c.js";import{R as s}from"./arrayEqualityCheck-CXp0SSuS.js";import{C as c}from"./CartesianGrid-1armELAk.js";import{X as l}from"./XAxis-CWc7NM0U.js";import{Y as d}from"./YAxis-BtN4txUd.js";import{L as y}from"./Legend-BfuO8CMF.js";import{L as h}from"./Line-CEmF7sWe.js";import{T as u}from"./Tooltip-Bmwu7ZEj.js";import{R as g}from"./RechartsHookInspector-CJI_KtjH.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DfwiyTzK.js";import"./hooks-COs4f3qd.js";import"./axisSelectors-B_EC2kA9.js";import"./zIndexSlice-B2wHCWq0.js";import"./resolveDefaultProps-fclRL42w.js";import"./PolarUtils-Dg8SPN1d.js";import"./CartesianChart-CSvI-_HL.js";import"./chartDataContext-GZk7dH94.js";import"./CategoricalChart-LzovMGTR.js";import"./CartesianAxis-eabYiytD.js";import"./Layer-CFoQxLn1.js";import"./Text-BQatnNw9.js";import"./DOMUtils-B0inai4d.js";import"./Label-DDS3-7t-.js";import"./ZIndexLayer-BDklLudV.js";import"./types-B_qGOwmF.js";import"./Symbols-C6tHIL3l.js";import"./Curve-CYEqd5kN.js";import"./useElementOffset-DWLOui-S.js";import"./iteratee-phGUhboG.js";import"./ReactUtils-DUdaZBrS.js";import"./ActivePoints-C7W41Iaj.js";import"./Dot-Ce0NiHJU.js";import"./RegisterGraphicalItemId-DERA-43u.js";import"./ErrorBarContext-CdRKq8JD.js";import"./GraphicalItemClipPath-CGcYTlQM.js";import"./SetGraphicalItem-BEgWdOjU.js";import"./useAnimationId-DSGl_EXu.js";import"./getRadiusAndStrokeWidthFromDot-y51lXwYL.js";import"./ActiveShapeUtils-TYQt8YFp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIC-oKaI.js";import"./Trapezoid-D_UTfuwy.js";import"./Sector-CBezTXxj.js";import"./Cross-r6fTF-i4.js";import"./index-BPFUjSxJ.js";import"./ChartSizeDimensions-Bw79VUZb.js";import"./OffsetShower-BCg2GNSc.js";import"./PlotAreaShower-DXMXrPtG.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
