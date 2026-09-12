import{r as p,R as t}from"./iframe-BR9um8hy.js";import{L as n}from"./LineChart-dmXbUrqn.js";import{R as s}from"./zIndexSlice-DInTlpQm.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C6b1h-mn.js";import{X as d}from"./XAxis-Df2VZum-.js";import{Y as y}from"./YAxis-BaWzKsyn.js";import{L as u}from"./Legend-DggfOM0T.js";import{L as h}from"./Line-B2Y8w_7v.js";import{T as g}from"./Tooltip-D273-kUD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dp-C2Hzh.js";import"./resolveDefaultProps-DqQmI4tj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-AyLSKa9B.js";import"./throttle-BcqT3vfz.js";import"./index-C-g-WGda.js";import"./index-DxJwgSab.js";import"./isWellBehavedNumber-DRhRXNpZ.js";import"./d3-scale-CDw_eAgY.js";import"./index-BkxIjOFS.js";import"./index-BFcGxk9F.js";import"./renderedTicksSlice-CoNN11f9.js";import"./index-DXgo6F3y.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DZcLq4iA.js";import"./chartDataContext-Bt8Fe_rW.js";import"./CategoricalChart-DmGnRbfN.js";import"./CartesianAxis-Ctt1NdjE.js";import"./Layer-BBDuFZTy.js";import"./Text-CRGxz7fL.js";import"./DOMUtils-Duc3pHlK.js";import"./useId-BgrQ9U0l.js";import"./useBackwardsCompatibleTheme-DOuVjsc2.js";import"./Label-DksyNS0g.js";import"./ZIndexLayer-BGQSpetD.js";import"./types-C8x07v5_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BQkqE9tF.js";import"./symbol-BZX7kSso.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Buf92wBZ.js";import"./uniqBy-CLhcCcda.js";import"./iteratee-RhNK36r-.js";import"./Curve-C4vXdRCg.js";import"./step-Dcjunjbb.js";import"./AnimatedItems-DpNUe9OS.js";import"./useAnimationId-CK-e-_3G.js";import"./ActivePoints-D1dlEVO6.js";import"./Dot-C4b3VHLo.js";import"./RegisterGraphicalItemId-BT1l9jKw.js";import"./ErrorBarContext-B2oMN3ea.js";import"./GraphicalItemClipPath-D0pxdHNA.js";import"./SetGraphicalItem-CjDcCpNq.js";import"./getRadiusAndStrokeWidthFromDot-D1WfNQgz.js";import"./ActiveShapeUtils-B8gsJAZs.js";import"./useGraphicalItemIdentity-BYoj9he0.js";import"./Cross-5yNRVGnj.js";import"./Rectangle-D94O9QXF.js";import"./util-Dxo8gN5i.js";import"./Sector-CbKiosjF.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
