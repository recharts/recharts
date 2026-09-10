import{r as p,R as t}from"./iframe-eHTE8XbR.js";import{L as n}from"./LineChart-BlrWvgHb.js";import{R as s}from"./zIndexSlice-CwHm8jEL.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DygeYOvu.js";import{X as d}from"./XAxis-Cvnzf1dT.js";import{Y as y}from"./YAxis-BfTKYpb9.js";import{L as u}from"./Legend-QRCMyOs4.js";import{L as h}from"./Line-DcoeyTM0.js";import{T as g}from"./Tooltip-DWrj4bd5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DGSwepyW.js";import"./resolveDefaultProps-l2cuQuhM.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CazxXIUK.js";import"./throttle-D7Re1Y2w.js";import"./index-Dxr-7wC-.js";import"./index-gcAHcJS-.js";import"./isWellBehavedNumber-BEewLsBb.js";import"./d3-scale-CyTtDi_G.js";import"./index-BaEdESzW.js";import"./index-sqcRhlaW.js";import"./renderedTicksSlice-GO_dvkn7.js";import"./index-1QxhuPS4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DWMHxp7T.js";import"./chartDataContext-B57YfjZ7.js";import"./CategoricalChart-NxXAGTpx.js";import"./CartesianAxis-Dyb6UtbO.js";import"./Layer-Rvjy0lqp.js";import"./Text-qSZv8Fj3.js";import"./DOMUtils-C0F5dZFI.js";import"./useId-6ohiSOpB.js";import"./useBackwardsCompatibleTheme-BGy_-u8K.js";import"./Label-BHKNCvXv.js";import"./ZIndexLayer-DPdP9SWD.js";import"./types-BOeFjqIc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DDfe-hwq.js";import"./symbol-D-YCUPvh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bry01jEA.js";import"./uniqBy-BULF0lLX.js";import"./iteratee-rBBB7cDD.js";import"./Curve-CpXkKn29.js";import"./step-B8Kmttuh.js";import"./AnimatedItems-iYX-QLNJ.js";import"./useAnimationId-Dn1LCCOz.js";import"./ActivePoints-CD98k9Q1.js";import"./Dot-CrWlWXGl.js";import"./RegisterGraphicalItemId-Cmo8QrR_.js";import"./ErrorBarContext-B3ngcVu0.js";import"./GraphicalItemClipPath-Dm2FfYtP.js";import"./SetGraphicalItem-Byf3PY1O.js";import"./getRadiusAndStrokeWidthFromDot-D8K1Hpkd.js";import"./ActiveShapeUtils-DCxXoOp2.js";import"./useGraphicalItemIdentity-Bl8ISiJK.js";import"./Cross-DHnGBCvZ.js";import"./Rectangle-C4GCLYDl.js";import"./util-Dxo8gN5i.js";import"./Sector-DXgC32fL.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
