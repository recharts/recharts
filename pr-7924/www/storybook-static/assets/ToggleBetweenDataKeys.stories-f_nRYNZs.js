import{r as p,R as t}from"./iframe-ZTC5pSfT.js";import{L as n}from"./LineChart-BRX-BxAd.js";import{R as s}from"./zIndexSlice-CiW62Ghg.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CdLcLt3z.js";import{X as d}from"./XAxis-Oh1yCkiB.js";import{Y as y}from"./YAxis-bg8Qjeqd.js";import{L as u}from"./Legend-DWYZeVDs.js";import{L as h}from"./Line-Oh1arZa1.js";import{T as g}from"./Tooltip-DyVJaVK8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-mhohCDVl.js";import"./resolveDefaultProps-BUix77YN.js";import"./get-C2VjdU0L.js";import"./axisSelectors-K6KGYDFF.js";import"./throttle-KrxK4z_U.js";import"./index-CzSCaBER.js";import"./index-B4ZumRW0.js";import"./isWellBehavedNumber-6xDPwo21.js";import"./d3-scale-Cpr3RseV.js";import"./index-CIre6itI.js";import"./index-C6jgkA61.js";import"./renderedTicksSlice-2JPEuPfq.js";import"./index-BMMDR1qW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BkfStbLb.js";import"./chartDataContext-CsGZnfHI.js";import"./CategoricalChart-Cp6s7k2U.js";import"./CartesianAxis-CC0XJ4Ez.js";import"./Layer-jaIUArAZ.js";import"./Text-DaoB-dFq.js";import"./DOMUtils-DpY81Anq.js";import"./useId-PK-UNRth.js";import"./useBackwardsCompatibleTheme-DAjVS6k9.js";import"./Label-CMugnJA-.js";import"./ZIndexLayer-ilP_ZZPQ.js";import"./types-C79EZ9QB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BfiJXW0k.js";import"./symbol-BwSyypnn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C1UlIH_L.js";import"./uniqBy-CkMt6bOR.js";import"./iteratee-Bhxot86J.js";import"./Curve-DbdnYDgr.js";import"./step-Q9TOfcF_.js";import"./AnimatedItems-sBBBQ_aJ.js";import"./useAnimationId-BB_b0zsq.js";import"./ActivePoints-LVJzz7nF.js";import"./Dot-YLlzKOXh.js";import"./RegisterGraphicalItemId-9ha_OJ2S.js";import"./ErrorBarContext-C3dRgdy-.js";import"./GraphicalItemClipPath-aJ1mq8DH.js";import"./SetGraphicalItem-C-6wJbAO.js";import"./getRadiusAndStrokeWidthFromDot-B8rGLwDc.js";import"./ActiveShapeUtils-D8W511PY.js";import"./useGraphicalItemIdentity-CBZHm2cX.js";import"./Cross-B8xMgqHE.js";import"./Rectangle-DfB4STrV.js";import"./util-Dxo8gN5i.js";import"./Sector-C8WiRuBf.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
