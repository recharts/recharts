import{r as p,R as t}from"./iframe-BRRwZ9OM.js";import{L as n}from"./LineChart-BX8C-cto.js";import{R as s}from"./zIndexSlice-HqKAKynn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B5pn1tCs.js";import{X as d}from"./XAxis-34NAxun3.js";import{Y as y}from"./YAxis-QWCMNG8w.js";import{L as u}from"./Legend-DRO1g7hl.js";import{L as h}from"./Line-9WEkChWx.js";import{T as g}from"./Tooltip-WSYZCHDJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BuRv36IR.js";import"./resolveDefaultProps-CZ3dceSm.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Duf7CX9E.js";import"./throttle-CI7PhwKd.js";import"./index-C-3qUDzk.js";import"./index-dIUimeeY.js";import"./isWellBehavedNumber-PSI2l2A6.js";import"./d3-scale-CSNIZQpC.js";import"./index-D46Km6-p.js";import"./index-BjAGoEo5.js";import"./renderedTicksSlice-D7aXzM-e.js";import"./index-Ce-PaXeC.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DeYwOeaV.js";import"./chartDataContext-C1k0ydEu.js";import"./CategoricalChart-CWBsWl6U.js";import"./CartesianAxis-Dgab3bjn.js";import"./Layer-DaA93mOO.js";import"./Text-m4YXivgw.js";import"./DOMUtils-kcWo8Tu5.js";import"./useId-DqioIEDp.js";import"./useBackwardsCompatibleTheme-BRwc3p-N.js";import"./Label-BF1g4qnl.js";import"./ZIndexLayer-C1LIYZVJ.js";import"./types-BTYbdlsY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BDXxh8ib.js";import"./symbol-CWxaNYuB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-j1dL7wm3.js";import"./uniqBy-Bc7r0gcZ.js";import"./iteratee-cCh71UMl.js";import"./Curve-BUEFktWE.js";import"./step-BB9R7jiY.js";import"./AnimatedItems-Dxhu-tqD.js";import"./useAnimationId-WhlrcPo0.js";import"./ActivePoints-DZEF0mSo.js";import"./Dot-DsdNLeVo.js";import"./RegisterGraphicalItemId-x9sXDMnN.js";import"./ErrorBarContext-WHUbM02-.js";import"./GraphicalItemClipPath-5REgjKEh.js";import"./SetGraphicalItem-BVwAptcr.js";import"./getRadiusAndStrokeWidthFromDot-C1-tTryx.js";import"./ActiveShapeUtils-DiAhe8wn.js";import"./useGraphicalItemIdentity-BCsXVCoB.js";import"./Cross-DVB5iPY6.js";import"./Rectangle-DUtmhkWL.js";import"./util-Dxo8gN5i.js";import"./Sector-B69zY3GL.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
