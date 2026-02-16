import{r as n,e as t}from"./iframe-Ch6AeBvd.js";import{L as p}from"./LineChart-Cc3-ptLp.js";import{R as s}from"./arrayEqualityCheck-DGZ3teMN.js";import{C as c}from"./CartesianGrid-Ca-CvEI5.js";import{X as l}from"./XAxis-Ct6CHpvF.js";import{Y as d}from"./YAxis-CBFbjxfR.js";import{L as y}from"./Legend-BWcrrvHw.js";import{L as h}from"./Line-DAy7X0Tg.js";import{T as u}from"./Tooltip-DO9oNv_9.js";import{R as g}from"./RechartsHookInspector-B8QYXaP3.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DrY4pfOn.js";import"./hooks-CgjYUNQl.js";import"./axisSelectors-Du_flrq7.js";import"./zIndexSlice-iERq52j6.js";import"./renderedTicksSlice-m0x3riPF.js";import"./resolveDefaultProps-DY5EHtdJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ash0799N.js";import"./chartDataContext-BY2eQbCt.js";import"./CategoricalChart-DYUSwV_N.js";import"./CartesianAxis-DGiGQ4zb.js";import"./Layer-4QzHj9sV.js";import"./Text-CZ2eqhTp.js";import"./DOMUtils-LXYYMBTJ.js";import"./Label-BhgECJNB.js";import"./ZIndexLayer-CX8R-8Lg.js";import"./types-Do_qsLRQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-WE9lD8Kq.js";import"./Curve-Bln8u_qs.js";import"./useElementOffset-CGEO9Zqm.js";import"./iteratee-CkJe_Kei.js";import"./ReactUtils-DkszlIgF.js";import"./ActivePoints-CM9crGmK.js";import"./Dot-66bsVwqe.js";import"./RegisterGraphicalItemId-B-1y75Pt.js";import"./ErrorBarContext-mxMpkgJh.js";import"./GraphicalItemClipPath-DE5lF0mO.js";import"./SetGraphicalItem-B8Is7A4s.js";import"./useAnimationId-YtLKjIEe.js";import"./getRadiusAndStrokeWidthFromDot-Ccoz4H_8.js";import"./ActiveShapeUtils-bE4blCx8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IGKhP2jD.js";import"./Trapezoid-r21rfNHm.js";import"./Sector-nTDBGNXx.js";import"./Cross-CWdh06dN.js";import"./index-Bzb6Yeqp.js";import"./ChartSizeDimensions-DPpuKktz.js";import"./OffsetShower-BBFXLy0z.js";import"./PlotAreaShower-D4ARrmD5.js";const Kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,ft as __namedExportsOrder,Kt as default};
