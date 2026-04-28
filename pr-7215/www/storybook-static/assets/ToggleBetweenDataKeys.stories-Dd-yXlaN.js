import{r as n,e as t}from"./iframe-DU2QcQF_.js";import{L as p}from"./LineChart-2wJNCh08.js";import{R as s}from"./arrayEqualityCheck-BBRUJMgE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-_9SxaymY.js";import{X as d}from"./XAxis-BTwSQmla.js";import{Y as y}from"./YAxis-Cz7bs7UA.js";import{L as h}from"./Legend--mPxRXzv.js";import{L as u}from"./Line-3CSWX_Lb.js";import{T as g}from"./Tooltip-CoUz_EV7.js";import{R as K}from"./RechartsHookInspector-D0TcJcB2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dkm_90y8.js";import"./index-LW5E5x2X.js";import"./immer-D_hC97QS.js";import"./hooks-CLgIfPXm.js";import"./axisSelectors-DCuZe5xZ.js";import"./d3-scale-Cl2Mf9ve.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-DH5OVU_d.js";import"./renderedTicksSlice-DKMiT0hM.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DdZk3nRt.js";import"./chartDataContext-BWCdO7Tf.js";import"./CategoricalChart-DI28mp2q.js";import"./resolveDefaultProps-BRw4v6sg.js";import"./CartesianAxis-CfZS-xOz.js";import"./Layer-CsymvJcW.js";import"./Text-C9SLmSKD.js";import"./DOMUtils-BQcJZQLN.js";import"./Label-Xfq-LPcv.js";import"./ZIndexLayer-BezITi0w.js";import"./types-CW6teSnw.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BJFlDYmu.js";import"./symbol-B0GgNpuh.js";import"./step-Bh598Jf-.js";import"./useElementOffset-ROzhXFOA.js";import"./uniqBy-C_-hIJrl.js";import"./iteratee-DICIiPho.js";import"./Curve-C80_Q5kF.js";import"./AnimatedItems-dOeoQkDw.js";import"./useAnimationId-u-3taHzi.js";import"./ActivePoints-BzCdDU40.js";import"./Dot-yVHcR-eE.js";import"./RegisterGraphicalItemId-Cw3F3qyO.js";import"./ErrorBarContext-MDyyOlAz.js";import"./GraphicalItemClipPath-DML64_av.js";import"./SetGraphicalItem-BXFmGWYP.js";import"./getRadiusAndStrokeWidthFromDot-OGLFBmVs.js";import"./ActiveShapeUtils-DoCRNyCQ.js";import"./isPlainObject-zOhZ7DbK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MTy_JW56.js";import"./Trapezoid-DGJrygRD.js";import"./Sector-foysTS17.js";import"./Cross-DzUZI0PH.js";import"./index-DyrGUy1I.js";import"./ChartSizeDimensions-B-rd_hON.js";import"./OffsetShower-BsYgMVad.js";import"./PlotAreaShower-D9gSylqx.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Rt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,xt as default};
