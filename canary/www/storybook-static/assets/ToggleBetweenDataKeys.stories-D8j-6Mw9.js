import{r as p,R as t}from"./iframe-BYFAmtTx.js";import{L as n}from"./LineChart-AzcqTHSh.js";import{R as s}from"./zIndexSlice-Cpa1SLkC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CE-xemtw.js";import{X as d}from"./XAxis-CrRUVNvL.js";import{Y as y}from"./YAxis-D2uzSmxi.js";import{L as u}from"./Legend-M760yFye.js";import{L as h}from"./Line-BJx91oUE.js";import{T as g}from"./Tooltip-BkubWmJG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-gz3ID__y.js";import"./resolveDefaultProps-BRjUIPxP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Fcxl1qih.js";import"./throttle-BncnDTze.js";import"./index-y_H2sp7r.js";import"./index-BfUFBuzY.js";import"./isWellBehavedNumber-DghiGM0-.js";import"./d3-scale-BWLi0PrL.js";import"./index-2r1iX6kD.js";import"./index-BnUV9qdG.js";import"./renderedTicksSlice-B5lYG2UO.js";import"./index-bDOV_Sp5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CyzDI5B8.js";import"./chartDataContext-Dh2caTLe.js";import"./CategoricalChart-C6KS2LQO.js";import"./CartesianAxis-Berywq5j.js";import"./Layer-CpiNCVXM.js";import"./Text-BflMB0k7.js";import"./DOMUtils-C-XY0CD-.js";import"./useId-DFIORHHp.js";import"./useBackwardsCompatibleTheme-Bwairpph.js";import"./Label-DbWQNQho.js";import"./ZIndexLayer-So4aUaj6.js";import"./types-CaHoHJJ-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-s1P-C1j4.js";import"./symbol-6_mfp67r.js";import"./path-DyVhHtw_.js";import"./useElementOffset-_9jVPkcB.js";import"./uniqBy-Cz6dajQ_.js";import"./iteratee-B1BJ9kBw.js";import"./Curve-BqZh414E.js";import"./step-B_GvmUZd.js";import"./AnimatedItems-BVLC3LcC.js";import"./useAnimationId-CVJf-EC8.js";import"./ActivePoints-DY3ts7CW.js";import"./Dot-DmxTFD8v.js";import"./RegisterGraphicalItemId-CmRCopob.js";import"./ErrorBarContext-D5SoE2yk.js";import"./GraphicalItemClipPath-xNgZEk9E.js";import"./SetGraphicalItem-DY3wRuGw.js";import"./getRadiusAndStrokeWidthFromDot-cXRduqqB.js";import"./ActiveShapeUtils-Cm0ONgWE.js";import"./useGraphicalItemIdentity-azVLbNjG.js";import"./Cross-Bh0U8det.js";import"./Rectangle-DG9B685L.js";import"./util-Dxo8gN5i.js";import"./Sector-BhDlff4q.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
