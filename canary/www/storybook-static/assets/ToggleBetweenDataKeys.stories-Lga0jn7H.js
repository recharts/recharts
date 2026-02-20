import{r as n,e as t}from"./iframe-uVZDwAjj.js";import{L as p}from"./LineChart-CwqTP8jY.js";import{R as s}from"./arrayEqualityCheck-BVLp_fP4.js";import{C as c}from"./CartesianGrid-BRZTTi6Z.js";import{X as l}from"./XAxis-DDi_F3ms.js";import{Y as d}from"./YAxis-2LEHyJIA.js";import{L as y}from"./Legend-Bnopc26h.js";import{L as h}from"./Line-C4f_JiI9.js";import{T as u}from"./Tooltip-C8tgEoay.js";import{R as g}from"./RechartsHookInspector-B8IZQaM2.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-v0y6A39c.js";import"./index-D4nlSVrI.js";import"./immer-ChwPqFH_.js";import"./hooks-DSaqLgKR.js";import"./axisSelectors-BRBRXOBA.js";import"./d3-scale-0GkopIXO.js";import"./zIndexSlice-CLyAXc3q.js";import"./renderedTicksSlice-DRUH7kK9.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BY3Mtf6I.js";import"./chartDataContext-qRr_iUlh.js";import"./CategoricalChart-BqmfIvkg.js";import"./resolveDefaultProps-LNwsWh_o.js";import"./CartesianAxis-D-nGvafv.js";import"./Layer-kSeehgUS.js";import"./Text-BQnpW6GD.js";import"./DOMUtils-Dnhzy72R.js";import"./Label-PDV3rnUf.js";import"./ZIndexLayer-B6kXppYb.js";import"./types-B-Xhkkhb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DYdrpw_H.js";import"./symbol-D_mOxO35.js";import"./step-Prvlnfgp.js";import"./useElementOffset-BuGSMy6j.js";import"./uniqBy-DdcvsSSb.js";import"./iteratee-C0JMveWz.js";import"./ReactUtils-CdVDZBtJ.js";import"./ActivePoints-DaG8bHlJ.js";import"./Dot-DIb3YsWy.js";import"./RegisterGraphicalItemId-D_V_V8zu.js";import"./ErrorBarContext-yNZJHACW.js";import"./GraphicalItemClipPath-Cd7d-a5W.js";import"./SetGraphicalItem-CQT3WiuH.js";import"./useAnimationId-CLB64h0U.js";import"./getRadiusAndStrokeWidthFromDot-ClrcQxIA.js";import"./ActiveShapeUtils-DdtpNjHl.js";import"./isPlainObject-DmqrNdKc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-GgKpEWLk.js";import"./Trapezoid-B50tZYZr.js";import"./Sector-CYoBZdRL.js";import"./Curve-BRxcZY_5.js";import"./Cross-Bonq6Yvc.js";import"./index-Bf-UOCze.js";import"./ChartSizeDimensions-BS0bLTe8.js";import"./OffsetShower-8U00XdUa.js";import"./PlotAreaShower-CDaLw8Um.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
