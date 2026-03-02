import{r as n,e as t}from"./iframe-DNAE1NhS.js";import{L as p}from"./LineChart-CAyWIPHm.js";import{R as s}from"./arrayEqualityCheck-mXK7KdlW.js";import{C as c}from"./CartesianGrid-DynNJww8.js";import{X as l}from"./XAxis-BXzG9_su.js";import{Y as d}from"./YAxis-Cl8JaIdm.js";import{L as y}from"./Legend-C1ZerFOP.js";import{L as h}from"./Line-DFu1dyZM.js";import{T as u}from"./Tooltip-Du2cbH53.js";import{R as g}from"./RechartsHookInspector-CXdTs72e.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BnyLV03c.js";import"./index-zEpWvrsz.js";import"./immer-CgyYfbuD.js";import"./hooks-D9_8XsUT.js";import"./axisSelectors-CAHD1NoH.js";import"./d3-scale-9rqZbRzS.js";import"./zIndexSlice-Dz-Y6weB.js";import"./renderedTicksSlice-caOf_y68.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-hy_UmrJw.js";import"./chartDataContext-ugJXSBb3.js";import"./CategoricalChart-B3LDNru7.js";import"./resolveDefaultProps-CjxP23mN.js";import"./CartesianAxis-ya5SmFCu.js";import"./Layer-D_bZVw-_.js";import"./Text-oeG0hSrI.js";import"./DOMUtils-MNEnNJaG.js";import"./Label-Czy9EWVi.js";import"./ZIndexLayer-NBg0M_kA.js";import"./types-BvNVkM_d.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DnMbrkmh.js";import"./symbol-CmAtNHVX.js";import"./step-DDruULJc.js";import"./useElementOffset-BjwHw1bZ.js";import"./uniqBy-DskIqC9r.js";import"./iteratee-Bv9grG7U.js";import"./ReactUtils-DmdO9I71.js";import"./ActivePoints-DH0GLZdO.js";import"./Dot-Cr144KYy.js";import"./RegisterGraphicalItemId-Bn08OEO8.js";import"./ErrorBarContext-CfrG8dxY.js";import"./GraphicalItemClipPath-aQHsATLs.js";import"./SetGraphicalItem-1nnxs2qY.js";import"./useAnimationId-BLg_egJR.js";import"./getRadiusAndStrokeWidthFromDot-BEY7eYKz.js";import"./ActiveShapeUtils-DszuQs4M.js";import"./isPlainObject-YFgp9Ig4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cm__RLQd.js";import"./Trapezoid-D2GZv-Mv.js";import"./Sector-BPDHR2kf.js";import"./Curve-DnknT2C5.js";import"./Cross-D0R3uFK-.js";import"./index-FFJywn3r.js";import"./ChartSizeDimensions-B5bHZnUB.js";import"./OffsetShower-Bw8a_rrw.js";import"./PlotAreaShower-BJMlxwGr.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
