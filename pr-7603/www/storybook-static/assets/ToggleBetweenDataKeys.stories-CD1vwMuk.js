import{r as n,R as t}from"./iframe-BfLA0-xE.js";import{L as p}from"./LineChart-C4BbF93J.js";import{R as s}from"./zIndexSlice-CxHl2f9g.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-h-ZP1Nr2.js";import{X as d}from"./XAxis-WPatnG2H.js";import{Y as y}from"./YAxis-BCvzYcvQ.js";import{L as u}from"./Legend-D9QWHZ9a.js";import{L as h}from"./Line-BoI2xV5j.js";import{T as g}from"./Tooltip-Btjpelxl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BAR0yTLB.js";import"./index-BjcF9KIO.js";import"./index-Ua2Ph-JY.js";import"./index-B543iUM5.js";import"./index-BW364ill.js";import"./throttle-B4u_I-fq.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-CGglt0-o.js";import"./axisSelectors-k3PcgN9v.js";import"./resolveDefaultProps-DtsxpH35.js";import"./isWellBehavedNumber-D8uyT4tB.js";import"./d3-scale-d2-bssiM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BkXNVBYX.js";import"./chartDataContext-CGwkpgmd.js";import"./CategoricalChart-Y3X7k6Lu.js";import"./CartesianAxis-C347muns.js";import"./Layer-D2dAv-AD.js";import"./Text-ClB8EwPj.js";import"./DOMUtils-AQyyON10.js";import"./Label-KTqJ5zS0.js";import"./ZIndexLayer-t--MbcyW.js";import"./types-CMVKXdeT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BFvPG-1n.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BgskHnHO.js";import"./symbol-DzagVwxY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-cUYp3EBW.js";import"./uniqBy-B3gL9YDt.js";import"./iteratee-cDLRKSLL.js";import"./Curve-BA6tKfOd.js";import"./step-V7C6Dr8u.js";import"./AnimatedItems-27DP4DZS.js";import"./useAnimationId-Uu44n6G0.js";import"./ActivePoints-paS1xZt9.js";import"./Dot-BEY7sYgl.js";import"./RegisterGraphicalItemId-E0HC7VAQ.js";import"./ErrorBarContext-CpZDTVtA.js";import"./GraphicalItemClipPath-Cw3vhXUK.js";import"./SetGraphicalItem-DquyLFCZ.js";import"./getRadiusAndStrokeWidthFromDot-je8BEofk.js";import"./ActiveShapeUtils-DGNTXBhg.js";import"./Cross-DNC6Puay.js";import"./Rectangle-CJAi1gPv.js";import"./util-Dxo8gN5i.js";import"./Sector-Cu3c-EO-.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};
