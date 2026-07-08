import{r as n,R as t}from"./iframe-DGYc5Evr.js";import{L as p}from"./LineChart-COWPxTAF.js";import{R as s}from"./zIndexSlice-CjPpABdt.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CzayXTLg.js";import{X as d}from"./XAxis-v5Hkx9ES.js";import{Y as y}from"./YAxis-D-S3NpvC.js";import{L as u}from"./Legend-Bm7jm6sf.js";import{L as h}from"./Line-CXcSqzzS.js";import{T as g}from"./Tooltip-C0qqlB8-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CM9ry10x.js";import"./index-cJf64k7_.js";import"./index-xTx_eyuL.js";import"./index-D_ZxU5Q3.js";import"./index-sF9bEsAF.js";import"./throttle-44TCHeAp.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BojFd99l.js";import"./axisSelectors-BNixzxMM.js";import"./resolveDefaultProps-BzwDYh32.js";import"./isWellBehavedNumber-BpEOcoHg.js";import"./d3-scale-DWZ-qO9T.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BPYrXhHn.js";import"./chartDataContext-CnthLNs9.js";import"./CategoricalChart-CwbInpB3.js";import"./CartesianAxis-XkVfHgZD.js";import"./Layer-Cp66mevN.js";import"./Text-C1RHjt0W.js";import"./DOMUtils-D9lLS2TF.js";import"./Label-ByCQCza6.js";import"./ZIndexLayer-BiqJjXGY.js";import"./types-m9Fzmc4X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BhoLSFjr.js";import"./symbol-BydJeVAg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BXz8BlKI.js";import"./uniqBy-pDvyWWJD.js";import"./iteratee-D1l6G22V.js";import"./Curve-CIxbvgQM.js";import"./step-ClaeK2JI.js";import"./AnimatedItems-DpTt0Un9.js";import"./useAnimationId-CRdgro7A.js";import"./ActivePoints-vXI-iHsm.js";import"./Dot-CRtBS-b6.js";import"./RegisterGraphicalItemId-BYtbpB8Y.js";import"./ErrorBarContext-CDutCjUn.js";import"./GraphicalItemClipPath-D4tdWuXE.js";import"./SetGraphicalItem-sSG1dofq.js";import"./getRadiusAndStrokeWidthFromDot-CuWeSJ3l.js";import"./ActiveShapeUtils-0IrxfALl.js";import"./Cross-CEmVOnV1.js";import"./Rectangle-2UtW3B_i.js";import"./util-Dxo8gN5i.js";import"./Sector-C0oj-kOp.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
