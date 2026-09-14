import{r as p,R as t}from"./iframe-n-o_GhOg.js";import{L as n}from"./LineChart-dVYKW8pH.js";import{R as s}from"./zIndexSlice-rH1Vz5Mp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BW163_LZ.js";import{X as d}from"./XAxis-D3N7JqFL.js";import{Y as y}from"./YAxis-CMjiedBc.js";import{L as u}from"./Legend-BgbqAGT0.js";import{L as h}from"./Line-BlrUCqXP.js";import{T as g}from"./Tooltip-DiMr8VHS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-_cU67sC5.js";import"./resolveDefaultProps-CCJ2xkQr.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CZyPeZLC.js";import"./throttle-C59GD_w_.js";import"./index-D3Dxakv3.js";import"./index-chW2YjqO.js";import"./isWellBehavedNumber-DnO1JWm3.js";import"./d3-scale-Bnu-nqAj.js";import"./index-DtnTPZuH.js";import"./index-BQjoI2YU.js";import"./renderedTicksSlice-BzxRR8rk.js";import"./index-Dj2q-0Ll.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DyFIrny8.js";import"./chartDataContext-DJykTpvv.js";import"./CategoricalChart-BDOiNhZt.js";import"./CartesianAxis-_Tflg6Fj.js";import"./Layer-DpixjnOX.js";import"./Text-SNR8n6Fx.js";import"./DOMUtils-c7gF72Lb.js";import"./useId-x_HnpDjM.js";import"./useBackwardsCompatibleTheme-DwZPWCWZ.js";import"./Label-CNUZ8IJr.js";import"./ZIndexLayer-RuyYCT_q.js";import"./types-D19g2GXX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-aG0O7e-s.js";import"./symbol-DDHaGIGb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-7vo21qqB.js";import"./uniqBy-B49bM81v.js";import"./iteratee-DelPt-ee.js";import"./Curve-dJ1hXb5R.js";import"./step-DtRuoLBY.js";import"./AnimatedItems-BXuL_9-l.js";import"./useAnimationId-Bs6Pq3h0.js";import"./ActivePoints-fyry5IXw.js";import"./Dot-NFpTkrs-.js";import"./RegisterGraphicalItemId-D70QTB5K.js";import"./ErrorBarContext-BSDbxWtX.js";import"./GraphicalItemClipPath-Ce-x1jHU.js";import"./SetGraphicalItem-0HQpcTKH.js";import"./getRadiusAndStrokeWidthFromDot-W6nPpsGK.js";import"./ActiveShapeUtils-8hxeMxzA.js";import"./useGraphicalItemIdentity-BKlZkD6N.js";import"./Cross-CAe7YUPk.js";import"./Rectangle-wO11WXpz.js";import"./util-Dxo8gN5i.js";import"./Sector-CeczRWEl.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
