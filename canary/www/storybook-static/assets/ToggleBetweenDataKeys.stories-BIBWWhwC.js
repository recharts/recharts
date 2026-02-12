import{r as n,e as t}from"./iframe-C_JnpPxC.js";import{L as p}from"./LineChart-DwQCMcTM.js";import{R as s}from"./arrayEqualityCheck-sT-8H7T8.js";import{C as c}from"./CartesianGrid-DA_b3ABB.js";import{X as l}from"./XAxis-BpjCkomw.js";import{Y as d}from"./YAxis-DzTe-R4y.js";import{L as y}from"./Legend-C3gdFYUm.js";import{L as h}from"./Line-CYhOsuSD.js";import{T as u}from"./Tooltip-nNBYy1_E.js";import{R as g}from"./RechartsHookInspector-C-nhVX4u.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Be1xWQVx.js";import"./hooks-CilDgeMs.js";import"./axisSelectors-BYc0e3fJ.js";import"./zIndexSlice-DoGitowx.js";import"./resolveDefaultProps-DMs63srN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DVAMnmgu.js";import"./chartDataContext-DiOyHIUd.js";import"./CategoricalChart-CBvXep6K.js";import"./CartesianAxis-VwfEIEjI.js";import"./Layer-WpsYuzZU.js";import"./Text-BdVB7IGp.js";import"./DOMUtils-CDXVQVNr.js";import"./Label-CxS5BAR7.js";import"./ZIndexLayer-B-ShVZV-.js";import"./types-BnNymUFW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-fhVjgxn_.js";import"./Curve-qS1_4eph.js";import"./useElementOffset-mphMDU7E.js";import"./iteratee-DOHkUNXJ.js";import"./ReactUtils-D29wERIN.js";import"./ActivePoints-JrhNNaZp.js";import"./Dot-DS8ISMrc.js";import"./RegisterGraphicalItemId-DO88ATNs.js";import"./ErrorBarContext-BfsPTak7.js";import"./GraphicalItemClipPath-CZbJihCA.js";import"./SetGraphicalItem-oGTsK5LX.js";import"./useAnimationId-BOqolhoS.js";import"./getRadiusAndStrokeWidthFromDot-DoVJFvmy.js";import"./ActiveShapeUtils-Ft9Dseux.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CnZDt0bN.js";import"./Trapezoid-D9fBkVlH.js";import"./Sector-H2-tBEz5.js";import"./Cross-KZHzRurl.js";import"./index-BwFDqC8u.js";import"./ChartSizeDimensions-b9L3p-kX.js";import"./OffsetShower-D08e_oKq.js";import"./PlotAreaShower-g5XUniHF.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
