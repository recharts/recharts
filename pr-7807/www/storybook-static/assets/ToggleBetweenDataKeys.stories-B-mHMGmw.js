import{r as p,R as t}from"./iframe-CpojRMYz.js";import{L as n}from"./LineChart-fwC6ZBnl.js";import{R as s}from"./zIndexSlice-D1ADf7PX.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Btdhmk74.js";import{X as d}from"./XAxis-DrbaoPhb.js";import{Y as y}from"./YAxis-emyLb2hw.js";import{L as u}from"./Legend-C46ihdLT.js";import{L as h}from"./Line-DDx2X4LF.js";import{T as g}from"./Tooltip-DVviryQw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CF4JxjLb.js";import"./resolveDefaultProps-CNOzu_Ry.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BWpXFhCq.js";import"./throttle-2TOI5CL8.js";import"./index-BgVRD4HK.js";import"./index-DmdfXUBp.js";import"./isWellBehavedNumber-BniOqqpx.js";import"./d3-scale-BG2fjhI8.js";import"./index-Bx6QmfM2.js";import"./index-CHj19sxw.js";import"./renderedTicksSlice-DOd1w8ZM.js";import"./index-B9WJdOhz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DX0hjM8N.js";import"./chartDataContext-CP0m3FVl.js";import"./CategoricalChart-DzWKYdxW.js";import"./CartesianAxis-BQyqi4qL.js";import"./Layer-CCaY3a6J.js";import"./Text-l7Cxp-9T.js";import"./DOMUtils-Bwqm48A6.js";import"./useId-C7t9aAMg.js";import"./useBackwardsCompatibleTheme-Bsz0EdPH.js";import"./Label-C3-HdBMA.js";import"./ZIndexLayer-7f5E7Q4l.js";import"./types-BBXJ7Rux.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DXy4L9hX.js";import"./symbol-Qg6WhLGN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-WxvLcI.js";import"./uniqBy-CeYNO4r-.js";import"./iteratee-Bb80RnL1.js";import"./Curve-5MG-rBKT.js";import"./step-DMyapVKc.js";import"./AnimatedItems-BIcnZI45.js";import"./useAnimationId-CwhUANii.js";import"./ActivePoints-CSBV62SU.js";import"./Dot-Cf1g1XZp.js";import"./RegisterGraphicalItemId-mR_kXHAC.js";import"./ErrorBarContext-DaXU1Z8v.js";import"./GraphicalItemClipPath-2lYWsPZE.js";import"./SetGraphicalItem-CyRpKe3K.js";import"./getRadiusAndStrokeWidthFromDot-Z2EK9WFQ.js";import"./ActiveShapeUtils-DvTz2wmh.js";import"./useGraphicalItemIdentity-CvTNdUiI.js";import"./Cross-DBEGwuAS.js";import"./Rectangle-DMpLU3WW.js";import"./util-Dxo8gN5i.js";import"./Sector-DJq8OywD.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
