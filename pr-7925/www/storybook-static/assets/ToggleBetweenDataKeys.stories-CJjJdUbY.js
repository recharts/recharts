import{r as p,R as t}from"./iframe-B-iIRDdh.js";import{L as n}from"./LineChart-CCqxC7bJ.js";import{R as s}from"./zIndexSlice-xTQiy-H7.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DIyhJCQ8.js";import{X as d}from"./XAxis-CndG3lfF.js";import{Y as y}from"./YAxis-D6Burg2S.js";import{L as u}from"./Legend-D3wpZrCV.js";import{L as h}from"./Line-Cbj4CeQN.js";import{T as g}from"./Tooltip-CVPacDbw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-3KdvU5vS.js";import"./resolveDefaultProps-BKBNf2xS.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C60OKlJ4.js";import"./throttle-DMKMego8.js";import"./index-o1PLWRMQ.js";import"./index-DFxGa3DU.js";import"./isWellBehavedNumber-B6qwBi4A.js";import"./d3-scale-AYUreAhG.js";import"./index-NNc_ZKUS.js";import"./index-D_yufyJF.js";import"./renderedTicksSlice-DkP6y5za.js";import"./index-BazpKZZl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CmApzcJx.js";import"./chartDataContext-CX0jNdXw.js";import"./CategoricalChart-BfBkFmEt.js";import"./CartesianAxis-D-jVFU-k.js";import"./Layer-Dt4jm0MX.js";import"./Text-CBbsNly8.js";import"./DOMUtils-CixgR7ku.js";import"./useId-D2WPaoHG.js";import"./useBackwardsCompatibleTheme-C-V51dQO.js";import"./Label-CwIrwy70.js";import"./ZIndexLayer-CbH1OgN0.js";import"./types-zJ8KfHt8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-58jLlpI6.js";import"./symbol-BupXd47Z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-HOhbNBcL.js";import"./uniqBy-BjVxXwWp.js";import"./iteratee-Dwz90aEP.js";import"./Curve-CjV9ratN.js";import"./step-CLlPrIoa.js";import"./AnimatedItems-WEAzzrlF.js";import"./useAnimationId-CcMpnWIs.js";import"./ActivePoints-D_regA9J.js";import"./Dot-BnQbbHjv.js";import"./RegisterGraphicalItemId-B76epDXu.js";import"./ErrorBarContext-BzZXG9TC.js";import"./GraphicalItemClipPath-DlnJdwTq.js";import"./SetGraphicalItem-BJKoCnbQ.js";import"./getRadiusAndStrokeWidthFromDot-PVXVFp_x.js";import"./ActiveShapeUtils-yQdvWiPD.js";import"./useGraphicalItemIdentity-B2EBH6VG.js";import"./Cross-bCDAOaXl.js";import"./Rectangle-BOjsrKl9.js";import"./util-Dxo8gN5i.js";import"./Sector-DiKqSUdo.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
