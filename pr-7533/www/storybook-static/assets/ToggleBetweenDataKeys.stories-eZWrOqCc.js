import{r as n,R as t}from"./iframe-HmoKwHFX.js";import{L as p}from"./LineChart-D--kY4M-.js";import{R as s}from"./zIndexSlice-6UlwHzZx.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BGdl-ZHp.js";import{X as d}from"./XAxis-Ckpvg_aw.js";import{Y as y}from"./YAxis-BdeggP_Q.js";import{L as u}from"./Legend-Dzt5tM9m.js";import{L as h}from"./Line-DrTfOPJV.js";import{T as g}from"./Tooltip-DqJA5ZS1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-j2c0QQIE.js";import"./index-BOpt7wnK.js";import"./index-B9uDrVyK.js";import"./index-DbZ1xFPe.js";import"./index-V8abjlH7.js";import"./throttle-CggiDJGE.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CKWPLZmb.js";import"./axisSelectors-BQeYBj0I.js";import"./resolveDefaultProps-BgbskIps.js";import"./isWellBehavedNumber-ChlLFPsN.js";import"./d3-scale-BDs_cJTc.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BAb-9k9W.js";import"./chartDataContext-DrbaCNot.js";import"./CategoricalChart-5OT8W9pW.js";import"./CartesianAxis-sk3D75Jf.js";import"./Layer-DCuDnFq8.js";import"./Text-CF2LDoBf.js";import"./DOMUtils-DNQlLACq.js";import"./Label-COwIarxU.js";import"./ZIndexLayer-wTJ88r9x.js";import"./types-DRVdcYGb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-B-ewiTIH.js";import"./symbol-nhwXymzI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ro_1jCxs.js";import"./uniqBy-Bi13QdTJ.js";import"./iteratee-CbkCzpv6.js";import"./Curve-C2csUcTT.js";import"./step-BqUqaVR3.js";import"./AnimatedItems-BP2JMedo.js";import"./useAnimationId-C1cJfoVB.js";import"./ActivePoints-Dx7sR-Q2.js";import"./Dot-FYCRb0hm.js";import"./RegisterGraphicalItemId-YabdkJxn.js";import"./ErrorBarContext-CsCjPd0P.js";import"./GraphicalItemClipPath-DDhZ52Wg.js";import"./SetGraphicalItem-R8P5CdUS.js";import"./getRadiusAndStrokeWidthFromDot-BxzB0c_Y.js";import"./ActiveShapeUtils-0piQNROf.js";import"./Cross-BWQGQ4KC.js";import"./Rectangle-Dl7k0A5Q.js";import"./util-Dxo8gN5i.js";import"./Sector-BTOnlSGV.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
