import{r as p,R as t}from"./iframe-DyrN_51d.js";import{L as n}from"./LineChart-B2WPUIg4.js";import{R as s}from"./zIndexSlice-20W2dW_I.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DOCR-Bij.js";import{X as d}from"./XAxis-BrvsOOq-.js";import{Y as y}from"./YAxis-BoJncRS_.js";import{L as u}from"./Legend-DDrs35kw.js";import{L as h}from"./Line-BSKz0Foo.js";import{T as g}from"./Tooltip-DNLsLlMW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkN-Eg1-.js";import"./resolveDefaultProps-Dqwg9Cw4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bfr9Dapf.js";import"./throttle-Deocn2P3.js";import"./index-JQNKXinH.js";import"./index-DXzoq_51.js";import"./isWellBehavedNumber-BWb0p1O1.js";import"./d3-scale-Dg7Uhedh.js";import"./index-Zhh87yRU.js";import"./index-B7rURxTX.js";import"./renderedTicksSlice-CRqt9_jA.js";import"./index-DdYmtx0a.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BsXS56U5.js";import"./chartDataContext-5lrtEEYG.js";import"./CategoricalChart-DkwHwiOc.js";import"./CartesianAxis-vw-O2ROQ.js";import"./Layer-Bhl1Azk1.js";import"./Text-CV1ypZeZ.js";import"./DOMUtils-DIhf953N.js";import"./useId-kCzHPj6p.js";import"./useBackwardsCompatibleTheme-Bt58M03l.js";import"./Label-BwFzhvIj.js";import"./ZIndexLayer-Bp9YTxbL.js";import"./types-D2IYUNPt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-7Yfga5z7.js";import"./symbol-CDb3k9Xj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D2ZAhnE4.js";import"./uniqBy-D3fTQr9L.js";import"./iteratee-4xLB6-L6.js";import"./Curve-JRjNlxP0.js";import"./step-DtwkAaFX.js";import"./AnimatedItems-_Ln2HVFG.js";import"./useAnimationId-D9Lt2BUa.js";import"./ActivePoints-C6wxEM4H.js";import"./Dot-CXTwVenc.js";import"./RegisterGraphicalItemId-CVmkVACh.js";import"./ErrorBarContext-Bxc1YjcQ.js";import"./GraphicalItemClipPath-CA7J29cH.js";import"./SetGraphicalItem-lGNUC0L0.js";import"./getRadiusAndStrokeWidthFromDot-u76jjLdq.js";import"./ActiveShapeUtils-DpQnh-5h.js";import"./useGraphicalItemIdentity-CBB7gohW.js";import"./Cross-BRYpQItw.js";import"./Rectangle-DkR0YeyO.js";import"./util-Dxo8gN5i.js";import"./Sector-0EaVWfRH.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
