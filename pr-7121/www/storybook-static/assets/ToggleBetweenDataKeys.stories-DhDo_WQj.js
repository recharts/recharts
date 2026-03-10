import{r as n,e as t}from"./iframe-B0RBHKhv.js";import{L as p}from"./LineChart-CXWTkOIj.js";import{R as s}from"./arrayEqualityCheck-CUrlIiZa.js";import{C as c}from"./CartesianGrid-CB91r2uB.js";import{X as l}from"./XAxis-CmZ1Qc-G.js";import{Y as d}from"./YAxis-CpFYoB6j.js";import{L as y}from"./Legend-DvHpWQWy.js";import{L as h}from"./Line-B_TellG8.js";import{T as u}from"./Tooltip-BhaQIK00.js";import{R as g}from"./RechartsHookInspector-BW5IS2xz.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DJ9Ttq8o.js";import"./index-CJLF0Mhh.js";import"./immer-4Zn5elZn.js";import"./hooks-D2D_3Kbz.js";import"./axisSelectors-fGBidpaE.js";import"./d3-scale-DmOZwrln.js";import"./zIndexSlice-CVs48kDF.js";import"./renderedTicksSlice-BWSAiWSy.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CJLV3cRG.js";import"./chartDataContext-C8RmHr1V.js";import"./CategoricalChart-DjdfrcyP.js";import"./resolveDefaultProps-COjtEafr.js";import"./CartesianAxis-CwVzMBAZ.js";import"./Layer-DKG_J2lX.js";import"./Text-cX_Ucvjm.js";import"./DOMUtils-DRSD_e_k.js";import"./Label-zCnoVUoE.js";import"./ZIndexLayer-D0KeT139.js";import"./types-Cr4gQIo8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DeqF7aJf.js";import"./symbol-Br_8ecW-.js";import"./step-tovYZaNJ.js";import"./useElementOffset-De9Hnrht.js";import"./uniqBy-ICdfjBA0.js";import"./iteratee-Dy_7KVd3.js";import"./ReactUtils-4VVLboep.js";import"./ActivePoints-B132Duv-.js";import"./Dot-D0OoiCd5.js";import"./RegisterGraphicalItemId-B4LFnea8.js";import"./ErrorBarContext-Lg7BjtUv.js";import"./GraphicalItemClipPath-CUPJIuLc.js";import"./SetGraphicalItem-BFputAxA.js";import"./useAnimationId-BhQIBdFI.js";import"./getRadiusAndStrokeWidthFromDot-C52wdnda.js";import"./ActiveShapeUtils-BxyuTB5c.js";import"./isPlainObject-CN9etUkS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CwMZJDWv.js";import"./Trapezoid-CNfMGcYM.js";import"./Sector-COzuaaOM.js";import"./Curve-OyQHTjUf.js";import"./Cross-QNZoSEYe.js";import"./index-CAjd4rxZ.js";import"./ChartSizeDimensions-Dn4uFPS3.js";import"./OffsetShower-6Ks2UPdd.js";import"./PlotAreaShower-CXPk0Esn.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
