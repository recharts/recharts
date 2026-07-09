import{r as n,R as t}from"./iframe-B_vrQl8R.js";import{L as p}from"./LineChart-CDWCx-uH.js";import{R as s}from"./zIndexSlice-Cxwz8Tl-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-2-NeYVAl.js";import{X as d}from"./XAxis-Ci68TUER.js";import{Y as y}from"./YAxis-BnsZeISF.js";import{L as u}from"./Legend-Du6_K_PV.js";import{L as h}from"./Line-DxooT10C.js";import{T as g}from"./Tooltip-DIEWHamE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-6qr9rM4_.js";import"./index-DskW-dUs.js";import"./index-HEwSZYID.js";import"./index-C_xOR2HM.js";import"./index-D5WptIo8.js";import"./throttle-Dyk5owXH.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BE8z1LZo.js";import"./axisSelectors-DWL2EjSK.js";import"./resolveDefaultProps-I1lUK0_w.js";import"./isWellBehavedNumber-CBzBJL74.js";import"./d3-scale-ByBkJlb2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-48RP5Lhn.js";import"./chartDataContext-sXI4Ore6.js";import"./CategoricalChart-C5bYZX9f.js";import"./CartesianAxis-BAwOMXAP.js";import"./Layer-Gd_R9sAX.js";import"./Text-DHNSM_o8.js";import"./DOMUtils-BvPkU0IV.js";import"./Label-CvVA6TIG.js";import"./ZIndexLayer-DUE9jsMX.js";import"./types-B9Larr1k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CPIDLIMe.js";import"./symbol-BCVeltSM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B_HGDiJC.js";import"./uniqBy-DUbYgYPG.js";import"./iteratee-D-mRmhpM.js";import"./Curve-4ICuXbwR.js";import"./step-Ct9Ha3sC.js";import"./AnimatedItems-CSL9mSPk.js";import"./useAnimationId-DAjnsWww.js";import"./ActivePoints-DphU-K4M.js";import"./Dot-D8Lfcwc2.js";import"./RegisterGraphicalItemId-Be581UAk.js";import"./ErrorBarContext-DjPqL-MC.js";import"./GraphicalItemClipPath-Bv2rP4gQ.js";import"./SetGraphicalItem-BqgYDJXb.js";import"./getRadiusAndStrokeWidthFromDot-BJX3V8Wn.js";import"./ActiveShapeUtils-a0kgZEBq.js";import"./Cross-DyfvovC6.js";import"./Rectangle-q-Ta0Kiu.js";import"./util-Dxo8gN5i.js";import"./Sector-C1IR77hT.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
