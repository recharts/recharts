import{r as p,R as t}from"./iframe-BcoARvhY.js";import{L as n}from"./LineChart-p5RsXGOs.js";import{R as s}from"./zIndexSlice-Cap7bOGW.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dqts8x-j.js";import{X as d}from"./XAxis-CW4XRUun.js";import{Y as y}from"./YAxis-BR79w2P2.js";import{L as u}from"./Legend-aU5mImzU.js";import{L as h}from"./Line-DWyUakfU.js";import{T as g}from"./Tooltip-4lPV6aA7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cwmh20d2.js";import"./resolveDefaultProps-DgaC_Lp9.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CF6rFxXt.js";import"./throttle-DozmwBSC.js";import"./index-DVE_dPhD.js";import"./index-BIq0I_KS.js";import"./polarAxisSelectors-C4L0U3vA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BLsEuD7O.js";import"./index-SzPYUv7o.js";import"./index-DvX40RdG.js";import"./renderedTicksSlice-Dsox9MKA.js";import"./index-BhqvlJ2k.js";import"./fillDefinitions-D74AVg8N.js";import"./CartesianChart-C4x2bsCb.js";import"./ZIndexPortal-CGHsRqD4.js";import"./CategoricalChart-DUIKL0FO.js";import"./CartesianAxis-Dfmzj1DX.js";import"./Layer-BMBcyrHw.js";import"./Text-DEB5NFXE.js";import"./DOMUtils-BwQh9Mln.js";import"./ZIndexLayer-e5VNMC6H.js";import"./Label-Db4oLrbv.js";import"./types-CjeLalhs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DvLknyR9.js";import"./symbol-D2mHl5_S.js";import"./path-DyVhHtw_.js";import"./useElementOffset-KsdSYS8B.js";import"./uniqBy-CzEHPKx1.js";import"./iteratee-CEqHQ8un.js";import"./isArguments-yB-y1yaH.js";import"./Curve-hSwQe_mn.js";import"./step-BV4gh9k1.js";import"./LabelList-DqQuwlzD.js";import"./ActivePoints-qZlMEdOF.js";import"./Dot-CeoPT2zv.js";import"./activeStyles-Bdk5Xw9p.js";import"./useAnimationId-DZvEuqRY.js";import"./dataEntryStyles-oli1U5SG.js";import"./ErrorBarContext-BGCJ_sZx.js";import"./SetGraphicalItem-D7kHQmaa.js";import"./getRadiusAndStrokeWidthFromDot-DIgm2Flo.js";import"./ActiveShapeUtils-CvEqRJU-.js";import"./useEffectiveDataKey-1O9VfdX1.js";import"./Cross-BYGgjkzq.js";import"./Rectangle-C_t9hqFj.js";import"./util-Dxo8gN5i.js";import"./Sector-DAFfY2-U.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
