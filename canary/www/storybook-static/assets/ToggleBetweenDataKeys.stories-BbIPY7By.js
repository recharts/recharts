import{r as p,R as t}from"./iframe-DqSUlz6e.js";import{L as n}from"./LineChart-CvhinPOa.js";import{R as s}from"./zIndexSlice-DtAX5jMh.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-yxTxSCue.js";import{X as d}from"./XAxis-DmD7UEym.js";import{Y as y}from"./YAxis-DegTMzbt.js";import{L as u}from"./Legend-CYLjKyTu.js";import{L as h}from"./Line-Dnsu9Jwi.js";import{T as g}from"./Tooltip-Dn2nlbp1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0IxRf2C.js";import"./resolveDefaultProps-CwPSCmmx.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bh_wIpJu.js";import"./throttle-DHy4hNYv.js";import"./index-CvBr5MD5.js";import"./index-Dw4JWeKW.js";import"./isWellBehavedNumber-DsplX-23.js";import"./d3-scale-CkMKmC-4.js";import"./index-BuJIoyr5.js";import"./index-7NBQQOYh.js";import"./renderedTicksSlice-Iw1xe9hi.js";import"./index-GNQmxyz-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BZt0ttBq.js";import"./chartDataContext-DLE2_VFr.js";import"./CategoricalChart-Chjdlx8c.js";import"./CartesianAxis-BPJ_bm1Z.js";import"./Layer-CcVS5xmO.js";import"./Text-rxtWTnFK.js";import"./DOMUtils-BO-LSrQT.js";import"./useId-DIxfitZT.js";import"./useBackwardsCompatibleTheme-Cpo7LNnn.js";import"./Label-COTXmSNC.js";import"./ZIndexLayer-w7X3Qx8i.js";import"./types-BK6ZMP2B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-eUmB2hKS.js";import"./symbol-DT0nZWBx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CJw6FlW4.js";import"./uniqBy-BqET5rKO.js";import"./iteratee-rBmKTZZO.js";import"./Curve-XYmMSxrQ.js";import"./step-C_sGtyz6.js";import"./AnimatedItems-DZn2nJaS.js";import"./useAnimationId-B7qxPui8.js";import"./ActivePoints-QMBiBXLX.js";import"./Dot-BfFUZLy_.js";import"./RegisterGraphicalItemId-GuyP8w5W.js";import"./ErrorBarContext-C2faiS6t.js";import"./GraphicalItemClipPath-CXwxXFyI.js";import"./SetGraphicalItem-BNDeXFGY.js";import"./getRadiusAndStrokeWidthFromDot-HVfHJii_.js";import"./ActiveShapeUtils-D4bP4Qte.js";import"./useGraphicalItemIdentity-P2fDicxj.js";import"./Cross-BZSuUUY5.js";import"./Rectangle-C5vSLqhQ.js";import"./util-Dxo8gN5i.js";import"./Sector-Ww3FvxMs.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
