import{r as p,R as t}from"./iframe--dVKNbCw.js";import{L as n}from"./LineChart-Dx55xPg5.js";import{R as s}from"./zIndexSlice-CpZXb3K1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DgaxWxgi.js";import{X as d}from"./XAxis-CO1xFj8-.js";import{Y as y}from"./YAxis-dK_EcPxW.js";import{L as u}from"./Legend-BXS76eI6.js";import{L as h}from"./Line-C0IgQdK8.js";import{T as g}from"./Tooltip-CUr8_T9Y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DRzg3fGD.js";import"./resolveDefaultProps-19MGuD5L.js";import"./get-C2VjdU0L.js";import"./axisSelectors-asW4dLtq.js";import"./throttle-Vdk2BIuN.js";import"./index-BwEVofa3.js";import"./index-vo2of-1-.js";import"./isWellBehavedNumber-D1RSe1xb.js";import"./d3-scale-Daiirif0.js";import"./index-11dfO-im.js";import"./index-Bm7T0tPh.js";import"./renderedTicksSlice-DVZBX-9w.js";import"./index-BXnIb1gt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-H_ULY9r1.js";import"./chartDataContext-BbvPlaK7.js";import"./CategoricalChart-D868Clfo.js";import"./CartesianAxis-DUU6iCh1.js";import"./Layer-DfItUnsr.js";import"./Text-ah79KUdU.js";import"./pageBackground-BuDL1xc_.js";import"./useId--mgRrHy6.js";import"./useBackwardsCompatibleTheme-D4D1b67A.js";import"./Label-BMbpqhNX.js";import"./ZIndexLayer-BW0svFjl.js";import"./types-CJbJ0IDT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C18p8MLn.js";import"./symbol-DAEoc_mM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bk-O-pyy.js";import"./uniqBy--toTvk6J.js";import"./iteratee-DuvGNWXG.js";import"./Curve-goXmosWw.js";import"./step-Cg-bszWe.js";import"./activeStyles-Kpuk4WPq.js";import"./useAnimationId-Rf69jy07.js";import"./dataEntryStyles-Cq_oAnz_.js";import"./ActivePoints-DkHKRT6s.js";import"./Dot-SmgdmdqO.js";import"./ErrorBarContext-C4YeRw8_.js";import"./GraphicalItemClipPath-CTsg__fe.js";import"./SetGraphicalItem-BLl6tKFV.js";import"./getRadiusAndStrokeWidthFromDot-CZD0qUAD.js";import"./ActiveShapeUtils-DZz0A4i8.js";import"./useEffectiveDataKey-DluS1fAA.js";import"./Cross-D5_gCULz.js";import"./Rectangle-60MF1n22.js";import"./util-Dxo8gN5i.js";import"./Sector-BY6auqMT.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
