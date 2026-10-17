import{r as p,R as t}from"./iframe-BaK-xze-.js";import{L as n}from"./LineChart-8vTHj21P.js";import{R as s}from"./zIndexSlice-DrFw0t7C.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DcR9ERDS.js";import{X as d}from"./XAxis-CTevCFW7.js";import{Y as y}from"./YAxis-CUt8Xelm.js";import{L as u}from"./Legend-B6lWfqzL.js";import{L as h}from"./Line-Bw8HAxQR.js";import{T as g}from"./Tooltip-BBj8J94A.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DZM6L-T3.js";import"./resolveDefaultProps-Cil0S8B-.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CnfYSHLW.js";import"./throttle-CYt85Ar6.js";import"./index-CnYYSSY1.js";import"./index-CtznlYAS.js";import"./isWellBehavedNumber-Bo5UiCAJ.js";import"./d3-scale-_8yp9yQE.js";import"./index-Dlm-5Ij4.js";import"./index-Dw-ed78r.js";import"./renderedTicksSlice-CNPiGgUW.js";import"./index-B4hxfgtn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CGaTNHvY.js";import"./chartDataContext-DqcmhhuQ.js";import"./CategoricalChart-MBo-iukw.js";import"./CartesianAxis-CSk3G5Bd.js";import"./Layer-C6rljEkC.js";import"./Text-CdbyXNxn.js";import"./pageBackground-CV09xolb.js";import"./useId-s-O1vSWD.js";import"./useBackwardsCompatibleTheme-B3pLDlIF.js";import"./Label-cKDNSGIr.js";import"./ZIndexLayer-Byqn6KnA.js";import"./types-DSy0pRW3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BqROoHzJ.js";import"./symbol-BXhlSx3K.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DuSny-9b.js";import"./uniqBy-FpCdKt82.js";import"./iteratee-COMggJ3D.js";import"./Curve-sUBaLFrc.js";import"./step-BZZY1s9U.js";import"./activeStyles-CZlzjGsD.js";import"./useAnimationId-B-391LIn.js";import"./dataEntryStyles-IDu762UD.js";import"./ActivePoints-Bf2N-qWJ.js";import"./Dot-DhzFrZOP.js";import"./ErrorBarContext-DndDD6DE.js";import"./GraphicalItemClipPath-BvdkjIlE.js";import"./SetGraphicalItem-BAL-rDyp.js";import"./getRadiusAndStrokeWidthFromDot-SwZ9tKTP.js";import"./ActiveShapeUtils-DuzIRyyx.js";import"./useEffectiveDataKey-lq0ydW3i.js";import"./Cross-CqZ9nDQr.js";import"./Rectangle-2t7WTJbT.js";import"./util-Dxo8gN5i.js";import"./Sector-TKfoXJRP.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
