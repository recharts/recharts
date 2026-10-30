import{r as p,R as t}from"./iframe-3XHGwrzY.js";import{L as n}from"./LineChart-B8JuFuGy.js";import{R as s}from"./zIndexSlice-Brmhs58T.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BrEtg7AT.js";import{X as d}from"./XAxis-DAbWxmV3.js";import{Y as y}from"./YAxis-BDE7drTG.js";import{L as u}from"./Legend-CItgQnxt.js";import{L as h}from"./Line-CZeg6v99.js";import{T as g}from"./Tooltip-DQGZOZkM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DFT9i2CK.js";import"./resolveDefaultProps-B1pnPDuf.js";import"./get-cF5BDHN6.js";import"./axisSelectors-0sscf7qw.js";import"./throttle-CcufCSOD.js";import"./index-DfXu2aPp.js";import"./index-x3pA7Xn9.js";import"./polarAxisSelectors-DX_jscyS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DC4T9Y5K.js";import"./index-CxvxzVyz.js";import"./index-Bka_NUAq.js";import"./renderedTicksSlice-dj_CVdaS.js";import"./index-B22a4gCm.js";import"./CartesianChart-CeapXKiM.js";import"./ZIndexPortal-v1uidM1c.js";import"./CategoricalChart-D2_ES5Wf.js";import"./CartesianAxis-rPfnZIs4.js";import"./Layer-Cs_-jK6s.js";import"./Text-BPYl0AVs.js";import"./DOMUtils-CArHkVGP.js";import"./ZIndexLayer-Da5OPXz2.js";import"./Label-DV0q5jx7.js";import"./types-DBamYHnY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BM4c2Gyu.js";import"./fillDefinitions-Czp8LH37.js";import"./Symbols-CVFCOhtY.js";import"./symbol-Bnf2KWTy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B4umSDLo.js";import"./uniqBy-B1y1vTmS.js";import"./iteratee-P6PZZRrs.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BVBbiuI4.js";import"./step-DpyDB26Q.js";import"./LabelList-KPZxqPb8.js";import"./ActivePoints-CP837bSg.js";import"./Dot-aAEHGIGY.js";import"./activeStyles-Pcudkpr-.js";import"./useAnimationId-9M90yRIF.js";import"./dataEntryStyles-DQz1PP-z.js";import"./ErrorBarContext-N4SBTIIF.js";import"./SetGraphicalItem-pMWsFYWu.js";import"./getRadiusAndStrokeWidthFromDot-C8YM2wm9.js";import"./ActiveShapeUtils-VZdYbIVb.js";import"./useEffectiveDataKey-3BqFsLAv.js";import"./Cross-CcizPSQC.js";import"./Rectangle-BvFpd_DO.js";import"./util-Dxo8gN5i.js";import"./Sector-B8S12vxL.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
