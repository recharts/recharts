import{u as n,e as t}from"./iframe-De3AYcmL.js";import{L as p}from"./LineChart-D2i8xqaf.js";import{g as s}from"./arrayEqualityCheck-8J4d381_.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-CCCou-WG.js";import{X as d}from"./XAxis-yu0JnOft.js";import{Y as u}from"./YAxis-DeG6FNaX.js";import{L as y}from"./Legend-DtXXk6Qf.js";import{L as h}from"./Line-BTdFVOE-.js";import{T as g}from"./Tooltip-Cea3eF4n.js";import{R as K}from"./RechartsHookInspector-D_q1sFah.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-zGbVOYaW.js";import"./index-uL_5FIKS.js";import"./immer-B3IrcYoh.js";import"./hooks-B6mrGJaY.js";import"./axisSelectors-0INLWORQ.js";import"./d3-scale-C-QBsPkn.js";import"./zIndexSlice-pmRq5Z0K.js";import"./renderedTicksSlice-CJRhDBm9.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BqrRTf2N.js";import"./chartDataContext-CqPzveAf.js";import"./CategoricalChart-7Ea_WF3s.js";import"./resolveDefaultProps-CcM6EHAr.js";import"./CartesianAxis-CTQd1Whd.js";import"./Layer-CvP2ZRzB.js";import"./Text-C6Iq6Q5F.js";import"./DOMUtils-CspO4-oS.js";import"./Label-BNrDAtep.js";import"./ZIndexLayer-CofVuiDD.js";import"./types-B0moMXXW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C1VJaBCL.js";import"./symbol-CpBATsG6.js";import"./step-CaS84Y98.js";import"./useElementOffset-BQSNS7pX.js";import"./uniqBy-DqX0Rf1p.js";import"./iteratee-BoAs4z-B.js";import"./ReactUtils-smyHXU-m.js";import"./ActivePoints-DLYoMrZC.js";import"./Dot-B4Ai6LOf.js";import"./RegisterGraphicalItemId-DAYanOqB.js";import"./ErrorBarContext-CX9g_kEB.js";import"./GraphicalItemClipPath-CJOH5ivR.js";import"./SetGraphicalItem-Cu0fWv08.js";import"./useAnimationId-DfOYRRzz.js";import"./getRadiusAndStrokeWidthFromDot-CyShnh2z.js";import"./ActiveShapeUtils-Br556SC7.js";import"./isPlainObject-Bf8xB-ha.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dd6aqeBt.js";import"./Trapezoid-t9gr1WzF.js";import"./Sector-V0157Hdp.js";import"./Curve-C6hmNTxr.js";import"./Cross-Co7IPHfj.js";import"./index-5m3zpj_N.js";import"./ChartSizeDimensions-DhJtSzTW.js";import"./OffsetShower-C6EyWY-L.js";import"./PlotAreaShower-Ddz7JCST.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
