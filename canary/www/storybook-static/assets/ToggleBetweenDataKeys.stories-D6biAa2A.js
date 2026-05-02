import{r as n,e as t}from"./iframe-DbVDg_ca.js";import{L as p}from"./LineChart-DuIOZWO7.js";import{R as s}from"./arrayEqualityCheck-BSVOQ7T-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CySqrimi.js";import{X as d}from"./XAxis-nk-GltPq.js";import{Y as y}from"./YAxis-C-wbbJhP.js";import{L as h}from"./Legend-CBqpD3-1.js";import{L as u}from"./Line-DEUmSR0a.js";import{T as g}from"./Tooltip-mRYLvKKE.js";import{R as K}from"./RechartsHookInspector-WP52i-1p.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-sJojUHlC.js";import"./index-CUo349tj.js";import"./immer-0ZZjS5Nj.js";import"./hooks-8LGpZrMc.js";import"./axisSelectors-DuQQA8AF.js";import"./d3-scale-Ca2GXXvQ.js";import"./zIndexSlice-CDzSIoPc.js";import"./renderedTicksSlice-BYUGSQCb.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BIeZSTsS.js";import"./chartDataContext-DkZqMAvH.js";import"./CategoricalChart-DW6_TUNV.js";import"./resolveDefaultProps-DgDD8GmR.js";import"./CartesianAxis-wfs3tk0I.js";import"./Layer-C9NfejAk.js";import"./Text-BjaMrcvh.js";import"./DOMUtils-DXLQ8uU1.js";import"./Label-CT2eYMKi.js";import"./ZIndexLayer-D5PjewgR.js";import"./types-9bS4DgjT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-h61-aZIG.js";import"./symbol-suQNbvDu.js";import"./step-DVp28hgV.js";import"./useElementOffset-lMXxs2jy.js";import"./uniqBy-B0VkYOM0.js";import"./iteratee-DJFQcjLL.js";import"./ReactUtils-ruqV-srf.js";import"./ActivePoints-Ck9TrlmM.js";import"./Dot-Boac-7JN.js";import"./RegisterGraphicalItemId-BdjwpoFI.js";import"./ErrorBarContext-BvEmMKSO.js";import"./GraphicalItemClipPath-CLSG_HT0.js";import"./SetGraphicalItem-BwNPbTjt.js";import"./useAnimationId-BGASjBYn.js";import"./getRadiusAndStrokeWidthFromDot-I2XTj7OF.js";import"./ActiveShapeUtils-a-btUYcY.js";import"./isPlainObject-qXbjbrRe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C71dLN6n.js";import"./Trapezoid-DCNj78K7.js";import"./Sector-DIpZMX41.js";import"./Curve-7li-NOkq.js";import"./Cross-DjwFZztB.js";import"./index-SfPrSKbK.js";import"./ChartSizeDimensions-DQlshRXH.js";import"./OffsetShower-DH3pRQIv.js";import"./PlotAreaShower-D9cE9N3J.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
