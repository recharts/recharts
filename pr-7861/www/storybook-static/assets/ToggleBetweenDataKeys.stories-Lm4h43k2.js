import{r as p,R as t}from"./iframe-V0uWMpm8.js";import{L as n}from"./LineChart-wtBmxsSQ.js";import{R as s}from"./zIndexSlice-DUX4TIf3.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BpsJLa0o.js";import{X as d}from"./XAxis-DRAr1kyY.js";import{Y as y}from"./YAxis-t5K6SsBB.js";import{L as u}from"./Legend-DJJvkBf-.js";import{L as h}from"./Line-BEwRsXkJ.js";import{T as g}from"./Tooltip-C9qGKE0N.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CCLf8n2o.js";import"./resolveDefaultProps-aKGdeQK0.js";import"./get-C2VjdU0L.js";import"./axisSelectors-SQHKz4ZO.js";import"./throttle-CmD5MtuF.js";import"./index-D_MUhraT.js";import"./index-DPqbft9D.js";import"./isWellBehavedNumber-MEUC6Th_.js";import"./d3-scale-BJHPeQPf.js";import"./index-kjeSN6uv.js";import"./index-3fJcv3y4.js";import"./renderedTicksSlice-DZhKT_zE.js";import"./index-SLBi9NdX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DXwmQtN1.js";import"./chartDataContext-CQKtni77.js";import"./CategoricalChart-zmhxTVhd.js";import"./CartesianAxis-DtLaMWrT.js";import"./Layer--mIrdw0x.js";import"./Text-CDsr0dRv.js";import"./DOMUtils-BW4dN_KI.js";import"./useId--nrsw05H.js";import"./useBackwardsCompatibleTheme-CEplzgd4.js";import"./Label-2hyP-tsc.js";import"./ZIndexLayer-DivbHHVg.js";import"./types-CDLzu-PR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-ERS327yO.js";import"./symbol-iVBsO0Fb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CCBbejER.js";import"./uniqBy-Bb8a2JnS.js";import"./iteratee-n7wxeW7K.js";import"./Curve-Dbv7OhLZ.js";import"./step-Z9qPbZSL.js";import"./AnimatedItems-BOhMHwpv.js";import"./useAnimationId-Dtpy8skx.js";import"./ActivePoints-BYb_Gd1q.js";import"./Dot-BU72Jr9Q.js";import"./RegisterGraphicalItemId-XrZ7XOK-.js";import"./ErrorBarContext-De7ujaEj.js";import"./GraphicalItemClipPath-B0v9QHui.js";import"./SetGraphicalItem-DNGP3yw2.js";import"./getRadiusAndStrokeWidthFromDot-Bet3JchB.js";import"./ActiveShapeUtils-CaWetUUl.js";import"./useGraphicalItemIdentity-BcaMYi1E.js";import"./Cross-BQw699xs.js";import"./Rectangle-R42X70zL.js";import"./util-Dxo8gN5i.js";import"./Sector-DyCbC2Cb.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
