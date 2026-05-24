import{u as n,e as t}from"./iframe-DrZHGfnp.js";import{L as p}from"./LineChart-d5-J2gEJ.js";import{g as s}from"./arrayEqualityCheck-BU1FgpAp.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-CyZhB5js.js";import{X as d}from"./XAxis-CfPxufGn.js";import{Y as u}from"./YAxis-BDktYU23.js";import{L as y}from"./Legend-CpyzK0FE.js";import{L as h}from"./Line-CIA-i1-C.js";import{T as g}from"./Tooltip-JtQYOAY5.js";import{R as K}from"./RechartsHookInspector-C7Iml_JQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7Mz9FPG.js";import"./index-BP-Nf1tN.js";import"./immer-D0UXwCcn.js";import"./hooks-D3ynsMIn.js";import"./axisSelectors-m6_CTWOp.js";import"./d3-scale-txqkfOII.js";import"./zIndexSlice-D-dyI62l.js";import"./renderedTicksSlice-7FEKlWww.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJW3KXl1.js";import"./chartDataContext-C7FGjj0C.js";import"./CategoricalChart-iLXWxvTy.js";import"./resolveDefaultProps-DYZAgT61.js";import"./CartesianAxis-DI4oFfLH.js";import"./Layer-ClTbBP2Y.js";import"./Text-BwWh8Zp8.js";import"./DOMUtils-DJHj6OuI.js";import"./Label-BqIF3DzG.js";import"./ZIndexLayer-BfJNfeY9.js";import"./types-6QYLxKbI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B4qAZBiK.js";import"./symbol-S8QHyV4z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CqMnl3PK.js";import"./uniqBy-XAk6kl3o.js";import"./iteratee-usRtL8cc.js";import"./Curve-BOI2pjPZ.js";import"./step-BToukfgR.js";import"./ReactUtils-DDlt2sQ2.js";import"./ActivePoints-Ef6nRbul.js";import"./Dot-DoeZby35.js";import"./RegisterGraphicalItemId-BFqXK8dS.js";import"./ErrorBarContext-RFgpZOgG.js";import"./GraphicalItemClipPath-DRJNib_j.js";import"./SetGraphicalItem-BQUpenlh.js";import"./useAnimationId-BQVYm0pl.js";import"./getRadiusAndStrokeWidthFromDot-DUr3gs5u.js";import"./ActiveShapeUtils-Dr-kHcGB.js";import"./Cross-B5ARFrTc.js";import"./Rectangle-D6rErMHV.js";import"./Sector-DH0jrwMS.js";import"./index-BaPlyvUD.js";import"./ChartSizeDimensions-y6v6hFmg.js";import"./OffsetShower-BQ-We3NI.js";import"./PlotAreaShower-DUTHK_JT.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,Lt as default};
