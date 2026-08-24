import{r as n,R as t}from"./iframe-DY9K6heQ.js";import{L as p}from"./LineChart-nWhfnz9Q.js";import{R as s}from"./zIndexSlice-Djux0zqs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BBOY4CGe.js";import{X as d}from"./XAxis-C70fZAmi.js";import{Y as y}from"./YAxis-5RHUhJ9E.js";import{L as u}from"./Legend-3rpSVTlX.js";import{L as h}from"./Line-BBRId2pi.js";import{T as g}from"./Tooltip-DyX71glS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CqtOwQCr.js";import"./index-RUzZ63uG.js";import"./index-B-UxVCSc.js";import"./index-DB-c6PeB.js";import"./index-9g91mWlk.js";import"./throttle-DOydnajF.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DwkKcaC_.js";import"./resolveDefaultProps-CO8OTY-B.js";import"./isWellBehavedNumber-f1cIhCPU.js";import"./d3-scale-Dg6wJCEU.js";import"./renderedTicksSlice-C6QgZ4Eb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CY7DJm7t.js";import"./chartDataContext-BtMzfRRp.js";import"./CategoricalChart-COo_l3nK.js";import"./CartesianAxis-VfKXuPT2.js";import"./Layer-D519VTAP.js";import"./Text-CteNh9ks.js";import"./DOMUtils-B_xez7qI.js";import"./useId-C5bD9K_5.js";import"./useBackwardsCompatibleTheme-C3HLbI6N.js";import"./Label-CfiePbO3.js";import"./ZIndexLayer-HnenvO0i.js";import"./types-Cb4xht2_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bvnjp-u1.js";import"./symbol-Ct7I42aQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BrumgYoX.js";import"./uniqBy-lwHF6dFC.js";import"./iteratee-CNq4H92p.js";import"./Curve-B05IFDSM.js";import"./step-vm1DaOvo.js";import"./AnimatedItems-DF7HmAGo.js";import"./useAnimationId-BQX98cVJ.js";import"./ActivePoints-6F4_jb_h.js";import"./Dot-hKVGVTVc.js";import"./RegisterGraphicalItemId-za1bJavc.js";import"./ErrorBarContext-g1sTu3z_.js";import"./GraphicalItemClipPath-BVMw74rr.js";import"./SetGraphicalItem-B5Li8-y0.js";import"./getRadiusAndStrokeWidthFromDot-C3OVaU-V.js";import"./ActiveShapeUtils-EdkW4Ajt.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CCQTcFbN.js";import"./Rectangle-DoSmT7gp.js";import"./util-Dxo8gN5i.js";import"./Sector-D0ZqkC-O.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
