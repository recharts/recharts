import{r as p,R as t}from"./iframe-Dj8Z6PrK.js";import{L as n}from"./LineChart-dPcy5MmB.js";import{R as s}from"./zIndexSlice-Dis8kkjQ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-wiVSrfDN.js";import{X as d}from"./XAxis-CLQEk-FG.js";import{Y as y}from"./YAxis-CqPgB4kL.js";import{L as u}from"./Legend-BLkeEy5b.js";import{L as h}from"./Line-CRAh7N0O.js";import{T as g}from"./Tooltip-4kfCVcdq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-XYW6BA6T.js";import"./resolveDefaultProps-B-9SHASA.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B4pFlXeA.js";import"./throttle-CKdcDnHb.js";import"./index-Bx3PqqYW.js";import"./index-CA6chf5t.js";import"./isWellBehavedNumber-BxyDY2ba.js";import"./d3-scale-1D4CewQG.js";import"./index-BBXX-7T2.js";import"./index-BMZ0mV9M.js";import"./renderedTicksSlice-zGdO_NAv.js";import"./index-MAP75uR-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-pWv6R1U2.js";import"./chartDataContext-DnNc1DHN.js";import"./CategoricalChart-B9MwHwt-.js";import"./CartesianAxis-C_t42adW.js";import"./Layer-BAM8ommd.js";import"./Text-c1trxvgH.js";import"./DOMUtils-Bp6mSslK.js";import"./useId-mH59anzj.js";import"./useBackwardsCompatibleTheme-BW-Eyyrw.js";import"./Label-BbvgfVci.js";import"./ZIndexLayer-DjnDFneh.js";import"./types-CIgkXEGC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DHrTdB_G.js";import"./symbol-f49vh_gz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CEBQPOfc.js";import"./uniqBy-CN11yF73.js";import"./iteratee-CSiy3jc8.js";import"./Curve-m98fbF0c.js";import"./step-ncsjPZ4b.js";import"./AnimatedItems-0rSS-oCT.js";import"./useAnimationId-DORt3e-J.js";import"./ActivePoints-Bg_cfUBG.js";import"./Dot-M4-D-D3c.js";import"./RegisterGraphicalItemId-B_hXYrSH.js";import"./ErrorBarContext-D5I-eLzk.js";import"./GraphicalItemClipPath-WRfkTQaB.js";import"./SetGraphicalItem-vQHk7qeP.js";import"./getRadiusAndStrokeWidthFromDot-iWXc3UEX.js";import"./ActiveShapeUtils-tGmUUFtW.js";import"./useGraphicalItemIdentity-WP1DKWAp.js";import"./Cross-BEWH4yZn.js";import"./Rectangle--VBhlI6J.js";import"./util-Dxo8gN5i.js";import"./Sector-B39pprSn.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
