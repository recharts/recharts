import{u as n,e as t}from"./iframe-BmdG6Yuj.js";import{L as p}from"./LineChart-DzaHoHRf.js";import{g as s}from"./arrayEqualityCheck-Cs0ODbAq.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-CUho8OhZ.js";import{X as d}from"./XAxis-yj9kgQkK.js";import{Y as u}from"./YAxis-BmW1MgwT.js";import{L as y}from"./Legend-CpBE1ZRT.js";import{L as h}from"./Line-BXq3-19U.js";import{T as g}from"./Tooltip-zfMIy2Sl.js";import{R as K}from"./RechartsHookInspector-C9gdculA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BRt9rj0a.js";import"./index-emtiH1OM.js";import"./immer-r1hs1aui.js";import"./hooks-DLMhcoxZ.js";import"./axisSelectors-B5YNmqFl.js";import"./d3-scale-BCNqbAE1.js";import"./zIndexSlice-CernrlT2.js";import"./renderedTicksSlice-BiizQght.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-n72JXqS8.js";import"./chartDataContext-DC8YgnRR.js";import"./CategoricalChart-mKbdU8Ir.js";import"./resolveDefaultProps-CzKMDris.js";import"./CartesianAxis-DQoe1nv2.js";import"./Layer-CTqkrp1s.js";import"./Text-DqTFRyGd.js";import"./DOMUtils-Cpgve9lL.js";import"./Label-BahHfmoK.js";import"./ZIndexLayer-BALln1nu.js";import"./types-HBeXaxhb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-iO_juYq8.js";import"./symbol-Dl25fcAc.js";import"./step-B9kksXJi.js";import"./useElementOffset-DqYBnuYB.js";import"./uniqBy-cB4yLFVg.js";import"./iteratee-Cn99cyAf.js";import"./ReactUtils-BDG3-ZiE.js";import"./ActivePoints-3tH4QPDb.js";import"./Dot-C-X-bkP7.js";import"./RegisterGraphicalItemId-Bh3Gr8bc.js";import"./ErrorBarContext-DmBcQTJi.js";import"./GraphicalItemClipPath-CCzofO3U.js";import"./SetGraphicalItem-A_fx4pfl.js";import"./useAnimationId-DYvcKDoo.js";import"./getRadiusAndStrokeWidthFromDot-DMLzSi-R.js";import"./ActiveShapeUtils-DLVI0LAd.js";import"./isPlainObject-B7mW1TAl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dr2ikaiy.js";import"./Trapezoid-BUVaAWPm.js";import"./Sector-CrLZSk6O.js";import"./Curve-o1yfXHk1.js";import"./Cross-Djvw-tyz.js";import"./index-C_lgB8BG.js";import"./ChartSizeDimensions-DqzMb5LP.js";import"./OffsetShower-DFfLZ4K8.js";import"./PlotAreaShower-CawkEE7f.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
