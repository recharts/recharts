import{r as p,R as t}from"./iframe-C6yJYV4z.js";import{L as n}from"./LineChart-C_uBhEht.js";import{R as s}from"./zIndexSlice-mBP7ycwT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DPV_2cEB.js";import{X as d}from"./XAxis-gLEHw-pb.js";import{Y as y}from"./YAxis-CkYznIce.js";import{L as u}from"./Legend-Dp76ecjt.js";import{L as h}from"./Line-DkJ7OpB5.js";import{T as g}from"./Tooltip-CgvqsQ1Y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-_g--7_B0.js";import"./resolveDefaultProps-DmIaNxK6.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D_pqJ7Ai.js";import"./throttle-BxZZQXD3.js";import"./index-yxNm8k9x.js";import"./index-DRfGxCUi.js";import"./isWellBehavedNumber-ovfPMeKD.js";import"./d3-scale-U4E3X2xZ.js";import"./index-DqnMLpa_.js";import"./index-nciU1bgU.js";import"./renderedTicksSlice-Ju5mjaas.js";import"./index-DhjcBG7u.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CP9Fvg-3.js";import"./chartDataContext-E_YlGMud.js";import"./CategoricalChart-e6KCKA8N.js";import"./CartesianAxis-DAfwjJLC.js";import"./Layer-C3EX9flk.js";import"./Text-DjSFzWjg.js";import"./DOMUtils-DIjRf9zs.js";import"./useId-BXkBt9SK.js";import"./useBackwardsCompatibleTheme-BmZuK7R_.js";import"./Label-xmY0FOhv.js";import"./ZIndexLayer-bw7pXUay.js";import"./types--kLCfUVs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CXDQjHSt.js";import"./symbol-CRHXui2p.js";import"./path-DyVhHtw_.js";import"./useElementOffset-8O56CP7s.js";import"./uniqBy-mjkakhsi.js";import"./iteratee-DvNTUumB.js";import"./Curve-BUAb8EfH.js";import"./step-C-IligCD.js";import"./AnimatedItems-5jNEDjqz.js";import"./useAnimationId-C3itl5g8.js";import"./ActivePoints-Dm2yavg5.js";import"./Dot-kJhNeSCF.js";import"./RegisterGraphicalItemId-CCRb1xbW.js";import"./ErrorBarContext-Iszmpeof.js";import"./GraphicalItemClipPath-S_9K0RuN.js";import"./SetGraphicalItem-Be6goNI2.js";import"./getRadiusAndStrokeWidthFromDot-C5C4oMko.js";import"./ActiveShapeUtils-B6ISajHR.js";import"./useGraphicalItemIdentity-CR7heWJW.js";import"./Cross-BU3xExZw.js";import"./Rectangle-DPYg-u0q.js";import"./util-Dxo8gN5i.js";import"./Sector-C-i8U4lW.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
