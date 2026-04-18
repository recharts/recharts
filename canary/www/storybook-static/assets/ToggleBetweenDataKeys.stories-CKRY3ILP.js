import{r as n,e as t}from"./iframe-C7MtdY8E.js";import{L as p}from"./LineChart-CZytRzMy.js";import{R as s}from"./arrayEqualityCheck-DgrHMpGx.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DFcxm4db.js";import{X as d}from"./XAxis-3uF26BVq.js";import{Y as y}from"./YAxis-D_0wuDlr.js";import{L as h}from"./Legend-aMhIY0-J.js";import{L as u}from"./Line-DHYjswyr.js";import{T as g}from"./Tooltip-Co8FPQgw.js";import{R as K}from"./RechartsHookInspector-DFQ9rNFJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BCy35Z8x.js";import"./index-ZRFMj45p.js";import"./immer-tybRsQ9G.js";import"./hooks-CRCNzzkU.js";import"./axisSelectors-BszE-kHQ.js";import"./d3-scale--QLdYl1D.js";import"./zIndexSlice-3LN6T8_r.js";import"./renderedTicksSlice-Vrp6ItcJ.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CIdWsL9L.js";import"./chartDataContext-bU1HBY0X.js";import"./CategoricalChart-DeBE8RoO.js";import"./resolveDefaultProps-BARk_uhU.js";import"./CartesianAxis-B2QCJlN1.js";import"./Layer-Ulref4PH.js";import"./Text-D3CPw6sI.js";import"./DOMUtils-Caf6EbGd.js";import"./Label-DSRQ68Gc.js";import"./ZIndexLayer-Chbgzy16.js";import"./types-BR6al878.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DB88izld.js";import"./symbol-Ct681S22.js";import"./step-DOKoL0Mc.js";import"./useElementOffset-US88cDQq.js";import"./uniqBy-DpqRNa_X.js";import"./iteratee-BhA28Kjc.js";import"./ReactUtils-BhCHdCFE.js";import"./ActivePoints-BwYpscwz.js";import"./Dot-BqE6ffT8.js";import"./RegisterGraphicalItemId-DRO9PQuR.js";import"./ErrorBarContext-DwrVEdn2.js";import"./GraphicalItemClipPath-CvFbG0n3.js";import"./SetGraphicalItem-4oFR7JPf.js";import"./useAnimationId-xNATfe3s.js";import"./getRadiusAndStrokeWidthFromDot-DnzUrahg.js";import"./ActiveShapeUtils-Bu5dlaov.js";import"./isPlainObject-CwNYxtMJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ci3DSaKm.js";import"./Trapezoid-CKW8i93u.js";import"./Sector-AhRoIGMa.js";import"./Curve-DoPC-oTP.js";import"./Cross-CP8dYlgm.js";import"./index-B1uIQZ_f.js";import"./ChartSizeDimensions-jmlBhTx2.js";import"./OffsetShower-DHj-Abix.js";import"./PlotAreaShower-94ccGUzR.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
