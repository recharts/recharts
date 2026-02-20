import{r as n,e as t}from"./iframe-d3qCsCxk.js";import{L as p}from"./LineChart-B1hJuhZS.js";import{R as s}from"./arrayEqualityCheck-BSeezrw4.js";import{C as c}from"./CartesianGrid-DEXLWDCT.js";import{X as l}from"./XAxis-BmRFblia.js";import{Y as d}from"./YAxis-BYMuo7gN.js";import{L as y}from"./Legend-Bx9chdmL.js";import{L as h}from"./Line-CpGJ1HTg.js";import{T as u}from"./Tooltip-BMDJQrmc.js";import{R as g}from"./RechartsHookInspector-ILLh7APk.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B3juZhR0.js";import"./hooks-BtAJA35U.js";import"./axisSelectors-dcntBxT_.js";import"./zIndexSlice-umaRj-LL.js";import"./renderedTicksSlice--Joe2iCZ.js";import"./resolveDefaultProps-BEotyltG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BmufPzla.js";import"./chartDataContext-DW0jkWxK.js";import"./CategoricalChart-0siU3dfK.js";import"./CartesianAxis-CyPlzw3T.js";import"./Layer-CUjYvDWI.js";import"./Text-Bh5Zv3nu.js";import"./DOMUtils-ClX6mTKm.js";import"./Label-oam-p3Cf.js";import"./ZIndexLayer-D3LUzJCs.js";import"./types-B3TZRrDh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-XJ3mO982.js";import"./Curve-D8rLd4C3.js";import"./useElementOffset-DxduRCjN.js";import"./iteratee-BsAJ3adM.js";import"./ReactUtils-DxKtCUtQ.js";import"./ActivePoints-2SOqbbwT.js";import"./Dot-BxRgbJKp.js";import"./RegisterGraphicalItemId-CAywyS_0.js";import"./ErrorBarContext-BMBoMP-k.js";import"./GraphicalItemClipPath-BCrb_h12.js";import"./SetGraphicalItem-CRxXrGVb.js";import"./useAnimationId-OmpdHa5n.js";import"./getRadiusAndStrokeWidthFromDot-BjqSPYty.js";import"./ActiveShapeUtils-Yg-0vCe1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D73JO-29.js";import"./Trapezoid-BSm40zBl.js";import"./Sector-VkuL4GRN.js";import"./Cross-BQuZq6jv.js";import"./index-DStWVrKL.js";import"./ChartSizeDimensions-B6KXJ3cA.js";import"./OffsetShower-BqFAEUk2.js";import"./PlotAreaShower-CwAbREDh.js";const Kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
