import{r as n,R as t}from"./iframe-wiglGnBh.js";import{L as p}from"./LineChart-BZywx2T1.js";import{R as s}from"./zIndexSlice-DGL63V4L.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DwT7ZCyQ.js";import{X as d}from"./XAxis-DcNyXe69.js";import{Y as y}from"./YAxis-BqO3yae8.js";import{L as u}from"./Legend-PG7WIraE.js";import{L as h}from"./Line-9lFzyWlx.js";import{T as g}from"./Tooltip-CHvNNyUg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-5SoXlYEo.js";import"./index-WWLocB5H.js";import"./index-1ZP6iUpr.js";import"./index-Mz84GrVY.js";import"./index-s4-LlFgK.js";import"./throttle-BMNVPqSq.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BYFI-WHt.js";import"./axisSelectors-BaS0q6Il.js";import"./resolveDefaultProps-BM8NmOex.js";import"./isWellBehavedNumber-DsqaaTNJ.js";import"./d3-scale-Bn4UFc1s.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Us5vBUdh.js";import"./chartDataContext-JmkVpeXS.js";import"./CategoricalChart-D2_16EkL.js";import"./CartesianAxis-CUoTvBNy.js";import"./Layer-nH5sm9p4.js";import"./Text-BTuAOKpf.js";import"./DOMUtils-LT1AML3l.js";import"./Label-B3PbOJvm.js";import"./ZIndexLayer-jQgtLS9e.js";import"./types-BoamgyWM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DhcH6z2A.js";import"./symbol-TThnRCoo.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_K1pLUb.js";import"./uniqBy-DMsRc3l-.js";import"./iteratee-D4MnoddV.js";import"./Curve-BWqxyQw0.js";import"./step-eMzlrjiD.js";import"./AnimatedItems-B9y47QYM.js";import"./useAnimationId-2tqnpEoJ.js";import"./ActivePoints-DHpr5egm.js";import"./Dot-BqBjCBos.js";import"./RegisterGraphicalItemId-BK4vqvvE.js";import"./ErrorBarContext-BdKRNCre.js";import"./GraphicalItemClipPath-RZ6a2McD.js";import"./SetGraphicalItem-BXbX8E7N.js";import"./getRadiusAndStrokeWidthFromDot-DbINMjnd.js";import"./ActiveShapeUtils-C95mhFam.js";import"./Cross-DLj_PIJa.js";import"./Rectangle-Bid_fSIj.js";import"./util-Dxo8gN5i.js";import"./Sector-BQxZVz0K.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
