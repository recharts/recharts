import{r as p,R as t}from"./iframe-BnwEvHVd.js";import{L as n}from"./LineChart-C0FkMntn.js";import{R as s}from"./zIndexSlice-0uCOCVRk.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CscLCm3r.js";import{X as d}from"./XAxis-DhFvYOTq.js";import{Y as y}from"./YAxis-DnmtLm62.js";import{L as u}from"./Legend-BzhiZ7y-.js";import{L as h}from"./Line-BNCbCy8a.js";import{T as g}from"./Tooltip-BC11rY2P.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BZ464iUK.js";import"./resolveDefaultProps-jnzqtWcb.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DzcPpi8v.js";import"./throttle-BMoDiTen.js";import"./index-iHvm3R8g.js";import"./index-BwBYuMQi.js";import"./isWellBehavedNumber-f8_DWfMW.js";import"./d3-scale-RQ0i9OyJ.js";import"./index-2KzukYLG.js";import"./index-B3VczQm-.js";import"./renderedTicksSlice-DPG0-UfT.js";import"./index-CKyU5yK6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DbrCyOh2.js";import"./chartDataContext-fkcf5wCl.js";import"./CategoricalChart-BZFbMC-H.js";import"./CartesianAxis-DJc2UaR_.js";import"./Layer-BqkYBUjY.js";import"./Text-COiNjqEn.js";import"./DOMUtils-DMR3fXS7.js";import"./useId-BMcLep4I.js";import"./useBackwardsCompatibleTheme-eKW0IOYq.js";import"./Label-DKFxt1KE.js";import"./ZIndexLayer-BALG2eh-.js";import"./types-CpWaLS-D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BDau7v6Y.js";import"./symbol-DF9gfUCP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-vRae3IDL.js";import"./uniqBy-CL-auK3D.js";import"./iteratee-0wRIkf1Y.js";import"./Curve-DLP8Li3q.js";import"./step-C-chH2xx.js";import"./AnimatedItems-DFYzdMOG.js";import"./useAnimationId-Bx9pchZd.js";import"./ActivePoints-BZ2W0rhn.js";import"./Dot-DTeilXrV.js";import"./RegisterGraphicalItemId-DgVfOOm7.js";import"./ErrorBarContext-DiS9VGRo.js";import"./GraphicalItemClipPath-lDnflq8u.js";import"./SetGraphicalItem-D3Y1kq9t.js";import"./getRadiusAndStrokeWidthFromDot-BZxUZerd.js";import"./ActiveShapeUtils-BQOop8W6.js";import"./useGraphicalItemIdentity-DGhBBybr.js";import"./Cross-CQvmUF5W.js";import"./Rectangle-CX0SZhD6.js";import"./util-Dxo8gN5i.js";import"./Sector-Dm-C0kgO.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
