import{r as p,R as t}from"./iframe-Cd5XZAZS.js";import{L as n}from"./LineChart-DIZtqQ5E.js";import{R as s}from"./zIndexSlice-DK_btX6x.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DTeDcwP-.js";import{X as d}from"./XAxis-DuodIejs.js";import{Y as y}from"./YAxis-BKK4Q1hO.js";import{L as u}from"./Legend-BlPnQgrE.js";import{L as h}from"./Line-DSgOWsRQ.js";import{T as g}from"./Tooltip-GIjK-7uw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-m0J5sskz.js";import"./resolveDefaultProps-_VGnYbPZ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BHI5fpRs.js";import"./throttle-PHSKRlho.js";import"./index-B-TxKf-H.js";import"./index-Co6Bjw3c.js";import"./polarAxisSelectors-n6B6BMl9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CgwU88kX.js";import"./index-CvnUfrKo.js";import"./index-DVl92vRy.js";import"./renderedTicksSlice-DPOz0IRP.js";import"./index-xt3fboRF.js";import"./fillDefinitions-DUfOk_XW.js";import"./CartesianChart-DgF2iEt1.js";import"./chartDataContext-BT9LVt8h.js";import"./CategoricalChart-CUQRrDXZ.js";import"./CartesianAxis-DJMJDg5E.js";import"./Layer-B_2Ec-2K.js";import"./Text-wtrDapFR.js";import"./ZIndexLayer-CbCfhAbh.js";import"./Label-DZuK-EQs.js";import"./types-GkAdah5a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CoJLGMis.js";import"./symbol-ZYu2ZO_N.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C_w2V4jv.js";import"./uniqBy-C5fXCJV1.js";import"./iteratee-BY7Di4wg.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-l9UD6a4a.js";import"./Curve-CXblHPne.js";import"./step-Cqk_pcFb.js";import"./dataEntryStyles-CotdwlGF.js";import"./ActivePoints-BkMJ028i.js";import"./Dot-DRLqVGoB.js";import"./activeStyles-BcTmj77e.js";import"./useAnimationId-_tPgr2CA.js";import"./ErrorBarContext-BXlIU5Wf.js";import"./SetGraphicalItem-pIsvI9Mb.js";import"./ActiveShapeUtils-ckMpYydv.js";import"./useEffectiveDataKey-Cop8dd2N.js";import"./Cross-BVSjPeqK.js";import"./Rectangle-D-47M3_e.js";import"./util-Dxo8gN5i.js";import"./Sector-ExZXAFnz.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
