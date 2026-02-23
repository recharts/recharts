import{r as n,e as t}from"./iframe-DDI_DJJN.js";import{L as p}from"./LineChart-CZeprwxM.js";import{R as s}from"./arrayEqualityCheck-hZTzDH-w.js";import{C as c}from"./CartesianGrid-djPL6F_S.js";import{X as l}from"./XAxis-CyGjCDT7.js";import{Y as d}from"./YAxis-8PQWMae8.js";import{L as y}from"./Legend-cPk-W-Qb.js";import{L as h}from"./Line-30ftzad6.js";import{T as u}from"./Tooltip-DFMG04Ze.js";import{R as g}from"./RechartsHookInspector-C3V8sbCd.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DMJyf-Ro.js";import"./index-Cy1m0pGF.js";import"./immer-Brsuo9bJ.js";import"./hooks-wL8R-wOE.js";import"./axisSelectors-ChmA7UB1.js";import"./d3-scale-C1aLw3GY.js";import"./zIndexSlice-DxTiX0Vg.js";import"./renderedTicksSlice-CdTaSuMU.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-0fUn6gYr.js";import"./chartDataContext-D_5cMEe0.js";import"./CategoricalChart-lTFMLhnQ.js";import"./resolveDefaultProps-CLbNKqYx.js";import"./CartesianAxis-FKnuWFmP.js";import"./Layer-CIeq28iC.js";import"./Text-lRH21Xfn.js";import"./DOMUtils-CSAlYQMj.js";import"./Label-CGfHxLGm.js";import"./ZIndexLayer-NEFv0ypW.js";import"./types-3HOHeyG7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Cb1Mvpcy.js";import"./symbol-BbtwQcdi.js";import"./step-8724oeyl.js";import"./useElementOffset-NLLhNf0a.js";import"./uniqBy-B1FZNgBB.js";import"./iteratee-KngSqfTZ.js";import"./ReactUtils-BsJAl1au.js";import"./ActivePoints-0YQSYC1d.js";import"./Dot-CPC0L5kt.js";import"./RegisterGraphicalItemId-CcKibD6X.js";import"./ErrorBarContext-CWlsK-qh.js";import"./GraphicalItemClipPath-BeQVZHHf.js";import"./SetGraphicalItem-D9woa3Pp.js";import"./useAnimationId-CexGYFUY.js";import"./getRadiusAndStrokeWidthFromDot-BkaUjW92.js";import"./ActiveShapeUtils-TXeo_kM0.js";import"./isPlainObject-DQmMsT9g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYHIra0M.js";import"./Trapezoid-CCG-1NIc.js";import"./Sector-BD9d8CEy.js";import"./Curve-CV9593Ht.js";import"./Cross-CRzoJyP_.js";import"./index-iQmKaGYo.js";import"./ChartSizeDimensions-BQ24u2Cw.js";import"./OffsetShower-BVATxvoJ.js";import"./PlotAreaShower-uC34L_bk.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
