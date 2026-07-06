import{r as n,R as t}from"./iframe-Dz7fOwcI.js";import{L as p}from"./LineChart-DlLgmnHL.js";import{R as s}from"./zIndexSlice-DlvYonxh.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-NZHV0vEk.js";import{X as d}from"./XAxis-DFw5p9mB.js";import{Y as y}from"./YAxis-BBLdCd6N.js";import{L as u}from"./Legend-B34M7RXQ.js";import{L as h}from"./Line-GkfmxRQ_.js";import{T as g}from"./Tooltip-CsWb-LUx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DGGSKz0I.js";import"./index-wFbpiefS.js";import"./index-DeBQrWVz.js";import"./index-ClEhXPgh.js";import"./index-CItZCrSt.js";import"./throttle-P3hcp8f5.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DgHHusta.js";import"./axisSelectors-BrQnrxrh.js";import"./resolveDefaultProps-iMaSxvai.js";import"./isWellBehavedNumber-BNED1DFM.js";import"./d3-scale-DvZHjVYW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B9Hxpjtk.js";import"./chartDataContext-_X11uzVv.js";import"./CategoricalChart-DAJpY1kv.js";import"./CartesianAxis-Ccqj4A2W.js";import"./Layer-Cbl9ckF3.js";import"./Text-Bb3XY4nD.js";import"./DOMUtils-ChsYv9qG.js";import"./Label-DdFPLPtR.js";import"./ZIndexLayer-uLTirNmh.js";import"./types-BbykzSU1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-vq9ym0W5.js";import"./symbol-IHzi228e.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DE8HnghF.js";import"./uniqBy-Bc4mdW14.js";import"./iteratee-DMupSKW3.js";import"./Curve-DkNdhu-H.js";import"./step-Dr4bnBR_.js";import"./AnimatedItems-DmM_DoTI.js";import"./useAnimationId-DXftpzbd.js";import"./ActivePoints-DujeTKJ8.js";import"./Dot-DKtI2fI_.js";import"./RegisterGraphicalItemId-nSw_C2Ok.js";import"./ErrorBarContext-DsGpPWxc.js";import"./GraphicalItemClipPath-BgvZ3vl9.js";import"./SetGraphicalItem-Dj4x9kmg.js";import"./getRadiusAndStrokeWidthFromDot-uAG-X1Nw.js";import"./ActiveShapeUtils-CpKGxq0o.js";import"./Cross-CekS-UO0.js";import"./Rectangle-B2KMKFcS.js";import"./util-Dxo8gN5i.js";import"./Sector-uH4zAY_D.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
