import{r as n,e as t}from"./iframe-CiJ-9oSW.js";import{L as p}from"./LineChart-D6cRAyc-.js";import{R as s}from"./arrayEqualityCheck-C8jW8oZt.js";import{C as c}from"./CartesianGrid-DFVcV20B.js";import{X as l}from"./XAxis-BJxfrRMM.js";import{Y as d}from"./YAxis-BZxiz2W9.js";import{L as y}from"./Legend-DnnvorAp.js";import{L as h}from"./Line-DYv13fKO.js";import{T as u}from"./Tooltip-nfJU0-l6.js";import{R as g}from"./RechartsHookInspector-CQuYP5B8.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-eTQdG_km.js";import"./index-CDsMfUar.js";import"./immer-37ItimpE.js";import"./hooks-Dfqn0uk4.js";import"./axisSelectors-DOyKuHrc.js";import"./d3-scale-DsUEV-Ka.js";import"./zIndexSlice-eHnPInNj.js";import"./renderedTicksSlice-9qCibHxh.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CziHqUQ0.js";import"./chartDataContext-C_-Fr4aA.js";import"./CategoricalChart-B2RsDCkt.js";import"./resolveDefaultProps-C_fWxmLs.js";import"./CartesianAxis-BCIccZ9q.js";import"./Layer-BNBNN9ao.js";import"./Text-3tLRx2GL.js";import"./DOMUtils-DnoEKxPk.js";import"./Label-C9pOXevO.js";import"./ZIndexLayer-BJKv50T_.js";import"./types-vu75yOSZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B-HpyQSV.js";import"./symbol-BTeg8-vO.js";import"./step-DuNs4m9V.js";import"./useElementOffset-CCXA-6n2.js";import"./uniqBy-P9RtWepS.js";import"./iteratee-DhHmPQfF.js";import"./ReactUtils-DvnOMe61.js";import"./ActivePoints-C7RKWaCs.js";import"./Dot-3CUYNcL8.js";import"./RegisterGraphicalItemId-C-8W5AZj.js";import"./ErrorBarContext-CYSXeNyx.js";import"./GraphicalItemClipPath-wqub__sm.js";import"./SetGraphicalItem-LQknpEAz.js";import"./useAnimationId-CXrnPLqE.js";import"./getRadiusAndStrokeWidthFromDot-DRdGVHTE.js";import"./ActiveShapeUtils-DyEnrLdp.js";import"./isPlainObject-CsWSYAtR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfLyzxqP.js";import"./Trapezoid-D3a_DMTo.js";import"./Sector-KbjOkzpv.js";import"./Curve-CSLHFVyE.js";import"./Cross-BzoczuGw.js";import"./index-DbWSPN2V.js";import"./ChartSizeDimensions-mFb6CdqR.js";import"./OffsetShower-vd944Mef.js";import"./PlotAreaShower-mwSW161D.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
