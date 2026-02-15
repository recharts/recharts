import{r as n,e as t}from"./iframe-5gSlIHH4.js";import{L as p}from"./LineChart-BHx79JjX.js";import{R as s}from"./arrayEqualityCheck-BEqt-CBJ.js";import{C as c}from"./CartesianGrid-cQLUWQqD.js";import{X as l}from"./XAxis-CJFZHxba.js";import{Y as d}from"./YAxis-BedJogos.js";import{L as y}from"./Legend-B04YP53h.js";import{L as h}from"./Line-DAr6Anc7.js";import{T as u}from"./Tooltip-D6-XHXHG.js";import{R as g}from"./RechartsHookInspector-DIk6ks1k.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D6JQB65s.js";import"./hooks-DcJw7lCF.js";import"./axisSelectors-DaxAJyom.js";import"./zIndexSlice-BvmJeHFk.js";import"./resolveDefaultProps-BqaV8AGt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BZLhng-O.js";import"./chartDataContext-CS2RN2FU.js";import"./CategoricalChart-CaF4nfMG.js";import"./CartesianAxis-BR-I9vbL.js";import"./Layer-OyNvh1Ue.js";import"./Text-BQ538cjB.js";import"./DOMUtils-Cwe4TU_Z.js";import"./Label-A5hrmEss.js";import"./ZIndexLayer-CgtyelTd.js";import"./types-D2uPaQlB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BlEQEpn8.js";import"./Curve-D2ClwKYm.js";import"./useElementOffset-CqC1QlRV.js";import"./iteratee-Cpl_VdmK.js";import"./ReactUtils-DmzojIhK.js";import"./ActivePoints-CpoOqycz.js";import"./Dot-Lu-ZK3VO.js";import"./RegisterGraphicalItemId-C8051Zi-.js";import"./ErrorBarContext-BOsyAuvl.js";import"./GraphicalItemClipPath-DuWpJ7iO.js";import"./SetGraphicalItem-GsI-naXM.js";import"./useAnimationId-CiuthG3f.js";import"./getRadiusAndStrokeWidthFromDot-BRx77z1g.js";import"./ActiveShapeUtils-B3Ii4nXp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CsjrTG3t.js";import"./Trapezoid-CZIjMiGb.js";import"./Sector-BnVCCXEU.js";import"./Cross-Bg33xly4.js";import"./index-BT-ezfJz.js";import"./ChartSizeDimensions-sc7nlrKR.js";import"./OffsetShower-DmAztKvM.js";import"./PlotAreaShower-Druc4JY3.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
