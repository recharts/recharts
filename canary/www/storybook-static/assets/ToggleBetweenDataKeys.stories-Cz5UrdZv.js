import{r as p,R as t}from"./iframe-B96S8mAp.js";import{L as n}from"./LineChart-C1b_Mc_q.js";import{R as s}from"./zIndexSlice-D8E1yZ1V.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BBsQv_-h.js";import{X as d}from"./XAxis-nVEhAG3F.js";import{Y as y}from"./YAxis-DfdWV3Tw.js";import{L as u}from"./Legend-3kh-Elkq.js";import{L as h}from"./Line-BO6upPIL.js";import{T as g}from"./Tooltip-BF46jXzZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMN5w2mX.js";import"./resolveDefaultProps-hdreNdXc.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CoX3e_2U.js";import"./throttle-ClBFd37Y.js";import"./index-DkqDlut5.js";import"./index-h_VAy7kX.js";import"./isWellBehavedNumber-DfNG0DIy.js";import"./d3-scale-9nPPSrDa.js";import"./index-Bb9sRMCm.js";import"./index-C-l8V5Fx.js";import"./renderedTicksSlice-BTyytnZ2.js";import"./index-YSWiv6gp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-a8pJKl2i.js";import"./chartDataContext-DDU_iWzI.js";import"./CategoricalChart-BJxf0mxD.js";import"./CartesianAxis-Bj8xr9W5.js";import"./Layer-DAZaOor8.js";import"./Text-BO1tL-Lm.js";import"./DOMUtils-B7FzpOG9.js";import"./useId-C9t3LM8u.js";import"./useBackwardsCompatibleTheme-BlUzVNC-.js";import"./Label-CqVVrAo5.js";import"./ZIndexLayer-DUeg7nPd.js";import"./types-Dzd-LsE5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BNfPcK4r.js";import"./symbol-BLKaF7BI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWPuYoRo.js";import"./uniqBy-C_OONL53.js";import"./iteratee-rFFt59sx.js";import"./Curve-5IRE8Ev4.js";import"./step-98le-Vot.js";import"./AnimatedItems-B3aC5t_D.js";import"./useAnimationId-CEflbmtS.js";import"./ActivePoints-L_3TnI4T.js";import"./Dot-zng579xF.js";import"./RegisterGraphicalItemId-yOmcvIGu.js";import"./ErrorBarContext-D5MNBcr8.js";import"./GraphicalItemClipPath-RRykAftR.js";import"./SetGraphicalItem-CvYLLoCp.js";import"./getRadiusAndStrokeWidthFromDot-CnqQHwHm.js";import"./ActiveShapeUtils-CRg0xwL0.js";import"./useGraphicalItemIdentity-CBUuLMbL.js";import"./Cross-D5C-EZJW.js";import"./Rectangle-Dd-JcMlj.js";import"./util-Dxo8gN5i.js";import"./Sector-Bsuk_kHk.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
