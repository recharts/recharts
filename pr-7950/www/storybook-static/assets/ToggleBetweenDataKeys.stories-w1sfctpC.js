import{r as p,R as t}from"./iframe-CBWhl09v.js";import{L as n}from"./LineChart-B1d6Zhb_.js";import{R as s}from"./zIndexSlice-B1AH5YJS.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CPszRXZn.js";import{X as d}from"./XAxis-tzQHqynD.js";import{Y as y}from"./YAxis-C5dVmWPc.js";import{L as u}from"./Legend-Bu7egPOJ.js";import{L as h}from"./Line-B0sSvzHP.js";import{T as g}from"./Tooltip-Ebv0bBWC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BU6mzVyD.js";import"./resolveDefaultProps-CJSj2XgG.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B6qdSbwV.js";import"./throttle-bJqzO9Ic.js";import"./index-BkuzBr4Q.js";import"./index-DAR39XB6.js";import"./isWellBehavedNumber-CSPLhkuq.js";import"./d3-scale-BNKhe_xR.js";import"./index-D8EheK28.js";import"./index-rVwT5Wbe.js";import"./renderedTicksSlice-GOLzDKAI.js";import"./index-CFTfJwzV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BcuREG8f.js";import"./chartDataContext-CWF_m6e5.js";import"./CategoricalChart-Dvk5cwWF.js";import"./CartesianAxis-BGPUbFHg.js";import"./Layer-DxeVA2bX.js";import"./Text-fMbisw4f.js";import"./pageBackground-zeq0PAuW.js";import"./useId-KLEpqtFg.js";import"./useBackwardsCompatibleTheme-Z7_zoiGA.js";import"./Label-CJ9xjWYO.js";import"./ZIndexLayer-DmDmq8bi.js";import"./types-Dq74-fjW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D_FNYO7a.js";import"./symbol-Cjy5R5AQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BeDLriUL.js";import"./uniqBy-BSAN_SQR.js";import"./iteratee-kSqFHTFy.js";import"./Curve-B56TGwB_.js";import"./step-CZA2KIrz.js";import"./activeStyles-BZ5qRbpV.js";import"./useAnimationId-T7zgTeVd.js";import"./dataEntryStyles-CZ7XLNEq.js";import"./ActivePoints-mIk3yLeC.js";import"./Dot-BHORkSEl.js";import"./ErrorBarContext-Bcceb6pe.js";import"./GraphicalItemClipPath-DGC1RDqu.js";import"./SetGraphicalItem-Dvg6XScA.js";import"./getRadiusAndStrokeWidthFromDot-B1PyR7dw.js";import"./ActiveShapeUtils-DJCIfDMk.js";import"./useGraphicalItemIdentity-BtkPyjJj.js";import"./Cross-CQN_SAeC.js";import"./Rectangle-B0IEIFtA.js";import"./util-Dxo8gN5i.js";import"./Sector-hJbvafuJ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
