import{r as n,e as t}from"./iframe-DTYvDHnt.js";import{L as p}from"./LineChart-D5pk0TWK.js";import{R as s}from"./arrayEqualityCheck-1nsmynxr.js";import{C as c}from"./CartesianGrid-NSfsJ-pb.js";import{X as l}from"./XAxis-D4mtTZaA.js";import{Y as d}from"./YAxis-D1_iMkgA.js";import{L as y}from"./Legend-B3c3MSV6.js";import{L as h}from"./Line-jorbotEa.js";import{T as u}from"./Tooltip-CD_Acrkl.js";import{R as g}from"./RechartsHookInspector-Pg_EkWGi.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C_fFV3co.js";import"./index-B3wSVZ9D.js";import"./immer-D3GAE1ff.js";import"./hooks-uuM42g5A.js";import"./axisSelectors-BgDhuMKt.js";import"./d3-scale-RiIvDOIa.js";import"./zIndexSlice-CBk7l9Bz.js";import"./renderedTicksSlice-B_O9XDCU.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-xLj2uFa2.js";import"./chartDataContext-BLIq9hU3.js";import"./CategoricalChart-DV8kXzgp.js";import"./resolveDefaultProps-DkSqodrF.js";import"./CartesianAxis-BvJIB3EW.js";import"./Layer-D1ZUQvW9.js";import"./Text--JvpmNSB.js";import"./DOMUtils-BViGwjhG.js";import"./Label-Dl6pWHvn.js";import"./ZIndexLayer-DhriUgdb.js";import"./types-JQYj2LUa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-iaprTSLF.js";import"./symbol-Bx0PtbXY.js";import"./step-CL79bITl.js";import"./useElementOffset-C3QFuFW6.js";import"./uniqBy-Cx8gc7BP.js";import"./iteratee-DofHrmgf.js";import"./ReactUtils-C-Mw6kzE.js";import"./ActivePoints-C_uAyo2G.js";import"./Dot-CYQCTbwY.js";import"./RegisterGraphicalItemId-o-_afPny.js";import"./ErrorBarContext-C4u9P8TO.js";import"./GraphicalItemClipPath-ByUNJAKI.js";import"./SetGraphicalItem-DcRf1D23.js";import"./useAnimationId-CwNlC5fD.js";import"./getRadiusAndStrokeWidthFromDot-BR4iej6B.js";import"./ActiveShapeUtils-vpnhlhYE.js";import"./isPlainObject-D_8yM-sa.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DrpDkrfm.js";import"./Trapezoid-BdxbKZVQ.js";import"./Sector-BIC07wIa.js";import"./Curve-D1NGPsms.js";import"./Cross-Bs6X0R9T.js";import"./index-CrrTnEOk.js";import"./ChartSizeDimensions-Dx17ITl5.js";import"./OffsetShower-BCss9x5E.js";import"./PlotAreaShower-EDiIsOli.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
