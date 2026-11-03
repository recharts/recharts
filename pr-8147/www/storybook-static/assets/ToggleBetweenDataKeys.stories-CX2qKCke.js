import{r as p,R as t}from"./iframe-BQY4vSXy.js";import{L as n}from"./LineChart-DdNzH7ri.js";import{R as s}from"./zIndexSlice-BdzVgEW0.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DJsLH5DF.js";import{X as d}from"./XAxis-DJU4Mvi4.js";import{Y as y}from"./YAxis-DT1QXVI3.js";import{L as u}from"./Legend-CiInds5Z.js";import{L as h}from"./Line-thI8lTJ9.js";import{T as g}from"./Tooltip-CB03GqoT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BcRxM-Av.js";import"./resolveDefaultProps-G77sf460.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B45QX1Cb.js";import"./throttle-CE5heSva.js";import"./index-CQxQDYts.js";import"./index-D-_6MOIc.js";import"./polarAxisSelectors-Bx2aNCzN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-tF01g-yC.js";import"./index-CLE53NQ2.js";import"./index-CyLNMVoO.js";import"./renderedTicksSlice-xQ-Bbda9.js";import"./index-Bx1R-goW.js";import"./fillDefinitions-DSK0YdxC.js";import"./CartesianChart-r0bwZB67.js";import"./ZIndexPortal-CnsPtZ0q.js";import"./CategoricalChart-DH0FyAFC.js";import"./CartesianAxis-DnyTGuRK.js";import"./Layer-AUPxKI27.js";import"./Text-CLBNZPUe.js";import"./DOMUtils-fCmVDggT.js";import"./ZIndexLayer-CAJurUsW.js";import"./Label-mx5Rr5JL.js";import"./types-Mj5dcoaz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-yVk86yax.js";import"./symbol-DVGalN_0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CipAO92M.js";import"./uniqBy-CBH5ELrR.js";import"./iteratee-8DnRGbF4.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Prn3xfVK.js";import"./step-BwGNQI61.js";import"./LabelList-CALPxAES.js";import"./ActivePoints-BFRx_fxi.js";import"./Dot-Cds0GrCQ.js";import"./activeStyles-BMraSVhQ.js";import"./useAnimationId-qEoZ-4tT.js";import"./dataEntryStyles-CGibnImn.js";import"./ErrorBarContext-DajCWgNE.js";import"./SetGraphicalItem-DSqeiOP9.js";import"./getRadiusAndStrokeWidthFromDot-DVA4wgZi.js";import"./ActiveShapeUtils-jWDRV1_r.js";import"./useEffectiveDataKey-DjptVWbj.js";import"./Cross-C_QlSN83.js";import"./Rectangle-DmyfJlq7.js";import"./util-Dxo8gN5i.js";import"./Sector-BJFnafgr.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
