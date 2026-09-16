import{r as p,R as t}from"./iframe-BlpdekQf.js";import{L as n}from"./LineChart-CNca5PHW.js";import{R as s}from"./zIndexSlice-Bd-549Vw.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bsi1n4U9.js";import{X as d}from"./XAxis-DCEI79gV.js";import{Y as y}from"./YAxis-DGARPD6V.js";import{L as u}from"./Legend-gO2rP5_l.js";import{L as h}from"./Line-DTtwP9ub.js";import{T as g}from"./Tooltip-X6dFuoRk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BZ46sqe8.js";import"./resolveDefaultProps-BWwU0p8m.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DwVSh5EL.js";import"./throttle-8wef2bFQ.js";import"./index-Dg90symq.js";import"./index-Dn5eONY4.js";import"./isWellBehavedNumber-DfaAxwlE.js";import"./d3-scale-ffqjL1dY.js";import"./index-BcFSE7Eo.js";import"./index-Co2WS3GV.js";import"./renderedTicksSlice-rM-Or7ex.js";import"./index-BjAwxFOu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dncy8Mq7.js";import"./chartDataContext-CXgp5rOX.js";import"./CategoricalChart-CJrl3V7y.js";import"./CartesianAxis-CTJL8AJc.js";import"./Layer-Cz4a7tst.js";import"./Text-CRM9x0B4.js";import"./DOMUtils-C_8Iq0XJ.js";import"./useId-DvrsL6or.js";import"./useBackwardsCompatibleTheme-C9u8MjhE.js";import"./Label-CrfPybH1.js";import"./ZIndexLayer-C5ftRxf2.js";import"./types-DYnYQX3g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BVv7h58j.js";import"./symbol-A-DI5JZL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C1b8oROV.js";import"./uniqBy-ujuwYKfk.js";import"./iteratee-Bs0KMcjA.js";import"./Curve-DBrSRqYN.js";import"./step-C7NW3t9J.js";import"./AnimatedItems-BKOKH3Gm.js";import"./useAnimationId-SlAZ3zMA.js";import"./ActivePoints-C1DlvL6S.js";import"./Dot-BsVVT6T8.js";import"./RegisterGraphicalItemId-D9zcRMey.js";import"./ErrorBarContext-DkC-IUMU.js";import"./GraphicalItemClipPath-Vs1wvJPe.js";import"./SetGraphicalItem-BG-oAwbp.js";import"./getRadiusAndStrokeWidthFromDot-C3QjOZoW.js";import"./ActiveShapeUtils-BEiBGwD8.js";import"./useGraphicalItemIdentity-BE0cCNWI.js";import"./Cross-Bkd6QGz9.js";import"./Rectangle-Bg9Sr7-8.js";import"./util-Dxo8gN5i.js";import"./Sector-b5JJyLMX.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
