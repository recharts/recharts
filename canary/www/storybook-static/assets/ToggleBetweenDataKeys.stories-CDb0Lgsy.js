import{r as n,e as t}from"./iframe-2KzY7SZI.js";import{L as p}from"./LineChart-C3UQrEdb.js";import{R as s}from"./arrayEqualityCheck-C_KFC4aG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CUnnjTY-.js";import{X as d}from"./XAxis-IZqHvSRM.js";import{Y as y}from"./YAxis-BdZCTlTT.js";import{L as h}from"./Legend-DFsMMSVt.js";import{L as u}from"./Line-B_bmc7jI.js";import{T as g}from"./Tooltip-BbT-QfX0.js";import{R as K}from"./RechartsHookInspector-BfBUolA6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-6FLOJafv.js";import"./index-DWwY0oag.js";import"./immer-BbCSCUWa.js";import"./hooks-D41MmbXB.js";import"./axisSelectors-btICR-6o.js";import"./d3-scale-YB1UXNlF.js";import"./zIndexSlice-DkD_gkVE.js";import"./renderedTicksSlice-DkyMgPSK.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BjELWt2X.js";import"./chartDataContext-Cd81LqCh.js";import"./CategoricalChart-XS_rytPK.js";import"./resolveDefaultProps-DCkyn-XH.js";import"./CartesianAxis-iQKBE-lF.js";import"./Layer-CDY6haxt.js";import"./Text-D9eiSsSq.js";import"./DOMUtils-qhd3ut3X.js";import"./Label-30J3b0Tu.js";import"./ZIndexLayer-CjxdKwx6.js";import"./types-C82LLnNR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BgWJ7GGh.js";import"./symbol-D5FcbSZZ.js";import"./step-B9r6R9dH.js";import"./useElementOffset-Cy_K7xEb.js";import"./uniqBy-DOsmyNAl.js";import"./iteratee-DwOYEDyO.js";import"./ReactUtils-CP-aoZRs.js";import"./ActivePoints-A9eI8SQH.js";import"./Dot-D6GzpgpC.js";import"./RegisterGraphicalItemId-vClWkM0Z.js";import"./ErrorBarContext-CYcgyRmM.js";import"./GraphicalItemClipPath-D6n4jgua.js";import"./SetGraphicalItem-BxWbQ_06.js";import"./useAnimationId-DwCOtHiA.js";import"./getRadiusAndStrokeWidthFromDot-PInnfI7S.js";import"./ActiveShapeUtils-CWrruK-s.js";import"./isPlainObject-k6awtQUp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CQd-B1Q8.js";import"./Trapezoid-BF_TMfHF.js";import"./Sector-Bhzm6McX.js";import"./Curve-D8MF2fMv.js";import"./Cross-D75OTgsU.js";import"./index-DuC9ckfX.js";import"./ChartSizeDimensions-OFKXx0KH.js";import"./OffsetShower-C_p34O5g.js";import"./PlotAreaShower-BviaC-V-.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
