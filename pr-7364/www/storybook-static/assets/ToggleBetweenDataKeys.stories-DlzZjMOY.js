import{u as n,e as t}from"./iframe-Cv0qW2ko.js";import{L as p}from"./LineChart-DXxfBe5M.js";import{g as s}from"./arrayEqualityCheck-dw2UPZEJ.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-DMXVmlBW.js";import{X as d}from"./XAxis-BT82JTqb.js";import{Y as u}from"./YAxis-B0w9h5lM.js";import{L as y}from"./Legend-DddRhEKx.js";import{L as h}from"./Line-G_mcTi4c.js";import{T as g}from"./Tooltip-MfN7ymMA.js";import{R as K}from"./RechartsHookInspector-CkUp2GTc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-dCBWaPWI.js";import"./index-B3dmmAiW.js";import"./immer-BQQ92H22.js";import"./hooks-CJSe3LTj.js";import"./axisSelectors-C2eMQvfK.js";import"./d3-scale-Dsb1SLZO.js";import"./zIndexSlice-CHCTzA5s.js";import"./renderedTicksSlice-BOF6sMGg.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DqdcaXnI.js";import"./chartDataContext-Cp9nHQ3M.js";import"./CategoricalChart-QPWmKUQ6.js";import"./resolveDefaultProps-Do4zKK3Y.js";import"./CartesianAxis-BZyagfMs.js";import"./Layer-CsQNRvLO.js";import"./Text-DZAUevoT.js";import"./DOMUtils-CHQYQ4Y1.js";import"./Label-BMEmaXKp.js";import"./ZIndexLayer-DcdIn6Lk.js";import"./types-D0-2-__S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BZ1fsnkh.js";import"./symbol-C6znSeY2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DvAKpVC2.js";import"./uniqBy-DEfTIPXQ.js";import"./iteratee-BiY_dFh3.js";import"./Curve-Bz0VDg5l.js";import"./step-BgXTWRgv.js";import"./ReactUtils-pum_VzDZ.js";import"./ActivePoints-BU1jJ3Mc.js";import"./Dot--rMp3x47.js";import"./RegisterGraphicalItemId-DphlggEW.js";import"./ErrorBarContext-DcaWRm0D.js";import"./GraphicalItemClipPath-CyQi9Ewc.js";import"./SetGraphicalItem-tehWRJf-.js";import"./useAnimationId-CYCjPTVx.js";import"./getRadiusAndStrokeWidthFromDot-BMewwEnB.js";import"./ActiveShapeUtils-DtjFfAfB.js";import"./Cross-lITeLapR.js";import"./Rectangle-vIAq55MV.js";import"./Sector-DnzP2SdJ.js";import"./index-DGomxYSM.js";import"./ChartSizeDimensions-CCGNwFzu.js";import"./OffsetShower-CKkYdDnc.js";import"./PlotAreaShower-DEg1EoJ-.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,Lt as default};
