import{r as n,e as t}from"./iframe-D8RsH_ZD.js";import{L as p}from"./LineChart-DP2vSW_x.js";import{R as s}from"./arrayEqualityCheck-DfUQQqNG.js";import{C as c}from"./CartesianGrid-BLNF8xBj.js";import{X as l}from"./XAxis-9qpGEcGJ.js";import{Y as d}from"./YAxis-C3MuBlcJ.js";import{L as y}from"./Legend-fLu_mWqg.js";import{L as h}from"./Line-B5izd7Q_.js";import{T as u}from"./Tooltip-B1ZDx4-B.js";import{R as g}from"./RechartsHookInspector-DuFREeNP.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CikDBT3M.js";import"./hooks-DGT9tgIE.js";import"./axisSelectors-ChLst7_e.js";import"./zIndexSlice-CPBYLdgp.js";import"./resolveDefaultProps-DzNWwwyR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BGLWUdnj.js";import"./chartDataContext-CstLMBvp.js";import"./CategoricalChart-oK3glHJg.js";import"./CartesianAxis-ewa7ZF2u.js";import"./Layer-BDdUxbHF.js";import"./Text-Bgd2WUX9.js";import"./DOMUtils-BqZCiNgw.js";import"./Label-DsxuCRwy.js";import"./ZIndexLayer-DiTXvVi3.js";import"./types-Dyd5Crad.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CBAU6oWP.js";import"./Curve-CIshv-2z.js";import"./useElementOffset-Cd_ueVxk.js";import"./iteratee-CpPZwPCh.js";import"./ReactUtils-6PKXXThp.js";import"./ActivePoints-Dzb4Pd6Y.js";import"./Dot-k8-aBSGQ.js";import"./RegisterGraphicalItemId-_gizEZQr.js";import"./ErrorBarContext-CAtMmrl9.js";import"./GraphicalItemClipPath-BpK8_oIG.js";import"./SetGraphicalItem-DsenAHry.js";import"./useAnimationId-DRWFjGg3.js";import"./getRadiusAndStrokeWidthFromDot-DDuUn9Iv.js";import"./ActiveShapeUtils-DLbkhbSb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BpAQA-Oa.js";import"./Trapezoid-bxIuEYMQ.js";import"./Sector-DQgAed3H.js";import"./Cross-B6IfNEse.js";import"./index-CnFLVdtg.js";import"./ChartSizeDimensions-QjwVXzW8.js";import"./OffsetShower-CN6ZOhg2.js";import"./PlotAreaShower-BPwRhRjP.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
