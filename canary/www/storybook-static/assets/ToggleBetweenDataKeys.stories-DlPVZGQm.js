import{r as n,e as t}from"./iframe-N_BxlBi6.js";import{L as p}from"./LineChart-B-6LRr6L.js";import{R as s}from"./arrayEqualityCheck-CEf0Nn8K.js";import{C as c}from"./CartesianGrid-CP6i3d09.js";import{X as l}from"./XAxis-kOfNYCLV.js";import{Y as d}from"./YAxis-DsllJpGC.js";import{L as y}from"./Legend-D89IvT-l.js";import{L as h}from"./Line-CcaUDWqS.js";import{T as u}from"./Tooltip-BngbLdpV.js";import{R as g}from"./RechartsHookInspector-DfDmhGgp.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CgEBdM7G.js";import"./index-BJgTJKw_.js";import"./immer-m4imqOCY.js";import"./hooks-DU7HquZl.js";import"./axisSelectors-BasHfAyu.js";import"./d3-scale-DrFqqVTo.js";import"./zIndexSlice-Dwnmzy4_.js";import"./renderedTicksSlice-grNcr2K9.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DhdcO3Tw.js";import"./chartDataContext-B8JcpkdW.js";import"./CategoricalChart-DO4JOSMM.js";import"./resolveDefaultProps-2ILCf7-n.js";import"./CartesianAxis-Bz8y1rju.js";import"./Layer-BGFLosQF.js";import"./Text-Pl8FjWNp.js";import"./DOMUtils-DL6CcFbu.js";import"./Label-DSedETU8.js";import"./ZIndexLayer-B4oG6gqW.js";import"./types-BHZ13L2v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CsUc_eaQ.js";import"./symbol-B52iyaxv.js";import"./step-Dwb2wnB2.js";import"./useElementOffset-drVnHBTv.js";import"./uniqBy-ClVVrVdj.js";import"./iteratee-T_aYBY_u.js";import"./ReactUtils-Bc5QD6WP.js";import"./ActivePoints-BdX8YxXH.js";import"./Dot-B-WJq94W.js";import"./RegisterGraphicalItemId-DW71PThT.js";import"./ErrorBarContext-C2YvqoiQ.js";import"./GraphicalItemClipPath-D270ZFS9.js";import"./SetGraphicalItem-BUxGEWkq.js";import"./useAnimationId-CZd_sIsZ.js";import"./getRadiusAndStrokeWidthFromDot-B0bkRdWl.js";import"./ActiveShapeUtils-D2jvcwVW.js";import"./isPlainObject-e5Vt2T8p.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0p8YhE4.js";import"./Trapezoid-C5EqpCxF.js";import"./Sector-BfcxVEhG.js";import"./Curve-BzBcZROj.js";import"./Cross-C3Wo_HEi.js";import"./index-PFvsiB8w.js";import"./ChartSizeDimensions-BbCILWBg.js";import"./OffsetShower-_4Zo9ctC.js";import"./PlotAreaShower-DcYSYMnm.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
