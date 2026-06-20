import{r as n,R as t}from"./iframe-BT2fAbbB.js";import{L as p}from"./LineChart-CvnuXhal.js";import{R as s}from"./zIndexSlice-0bHXttbZ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-vXCbkaod.js";import{X as d}from"./XAxis-BoVnFGs6.js";import{Y as y}from"./YAxis-ChrnpRQE.js";import{L as u}from"./Legend-DwJmbAop.js";import{L as h}from"./Line-D6orMjMD.js";import{T as g}from"./Tooltip-Bfhr633F.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BdzpqzJC.js";import"./index-BploPkwU.js";import"./index-DkhzDGLz.js";import"./index-CVxrCFbF.js";import"./index-Doyfjfw4.js";import"./immer-Cs_HwjFQ.js";import"./get-C017lSC3.js";import"./renderedTicksSlice-CiEsNdJ7.js";import"./axisSelectors-BROcexci.js";import"./d3-scale-DCH5M94w.js";import"./resolveDefaultProps-C3R0rg6J.js";import"./isWellBehavedNumber-LZ0iz-Mn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-kqjinDmq.js";import"./chartDataContext-BrLfw6WI.js";import"./CategoricalChart-CkHyoyCb.js";import"./CartesianAxis-BeeS8R2V.js";import"./Layer-CwmO2g8o.js";import"./Text-Bl7vRhlA.js";import"./DOMUtils-BAS9saz0.js";import"./Label-BKr83VYg.js";import"./ZIndexLayer-vZErJXnS.js";import"./types-UgUXQeZV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CBCiu4_t.js";import"./symbol-B-UyWOPJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DxfqGQMG.js";import"./uniqBy-CE3wruLK.js";import"./iteratee-JLoe2DiT.js";import"./Curve-5RTqUT5x.js";import"./step-CJvEyRUy.js";import"./AnimatedItems-B9eraKkz.js";import"./useAnimationId-B9b4cNZQ.js";import"./ActivePoints-DVgNgNPk.js";import"./Dot-BCEb4Rzy.js";import"./RegisterGraphicalItemId-rv099XyT.js";import"./ErrorBarContext-Dl3pruuO.js";import"./GraphicalItemClipPath-BtLAGmDV.js";import"./SetGraphicalItem-C_0DsyJ6.js";import"./getRadiusAndStrokeWidthFromDot-CAQ9ByQw.js";import"./ActiveShapeUtils-aZ-707nn.js";import"./Cross-DbWE21IQ.js";import"./Rectangle-BI2jxxVC.js";import"./util-Dxo8gN5i.js";import"./Sector-BxOoJOCl.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
