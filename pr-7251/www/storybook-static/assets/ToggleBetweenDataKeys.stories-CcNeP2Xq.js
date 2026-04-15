import{r as n,e as t}from"./iframe-DJH7-DuZ.js";import{L as p}from"./LineChart-CSfi06d5.js";import{R as s}from"./arrayEqualityCheck-BCL8BMWc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CKoa0GDb.js";import{X as d}from"./XAxis-CZkA-oar.js";import{Y as y}from"./YAxis-D7iD0ncq.js";import{L as h}from"./Legend-BsPBB5AD.js";import{L as u}from"./Line-C8wq7-ld.js";import{T as g}from"./Tooltip-MQjUxdHs.js";import{R as K}from"./RechartsHookInspector-Cl1nQjm_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-lBMzT84x.js";import"./index-DdbzQdr9.js";import"./immer-Up9jfWyF.js";import"./hooks-CHeZq7QJ.js";import"./axisSelectors-QKrA9-VE.js";import"./d3-scale-DorYBcEd.js";import"./zIndexSlice-DDN8c_9B.js";import"./renderedTicksSlice-BZJ0LC0-.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DS-UTjvk.js";import"./chartDataContext-tGyrX-5w.js";import"./CategoricalChart-BCCF7qba.js";import"./resolveDefaultProps-DEI4xjdp.js";import"./CartesianAxis-CPsFrMJH.js";import"./Layer-DXEVbG5U.js";import"./Text-D3lbDKii.js";import"./DOMUtils-MBSOXcf3.js";import"./Label-CqQ3p6o_.js";import"./ZIndexLayer-BCFams-U.js";import"./types-xH_rqDEy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C-1ojLAZ.js";import"./symbol-C9P6TcDS.js";import"./step-DL72aW96.js";import"./useElementOffset-DxSDxF4G.js";import"./uniqBy-xKJWQ-iw.js";import"./iteratee-D5nijMhP.js";import"./ReactUtils-CaksUlzy.js";import"./ActivePoints-CTsHhn1X.js";import"./Dot-DqIFXDgd.js";import"./RegisterGraphicalItemId-BdCMR3nP.js";import"./ErrorBarContext-B33zly5n.js";import"./GraphicalItemClipPath-BkUssZcX.js";import"./SetGraphicalItem-CwRe-vCa.js";import"./useAnimationId-CnjUKELe.js";import"./getRadiusAndStrokeWidthFromDot-B30SAq_H.js";import"./ActiveShapeUtils-B6QMjEZK.js";import"./isPlainObject-CUvGDmNO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DffZWIBt.js";import"./Trapezoid-Bfh0_KKX.js";import"./Sector-DN23uiBq.js";import"./Curve-BCbaV2-E.js";import"./Cross-B8TXY95C.js";import"./index-3J-EA25K.js";import"./ChartSizeDimensions-B_Dm3cCN.js";import"./OffsetShower-BnHyQTzL.js";import"./PlotAreaShower-B21fSxhD.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
