import{r as p,R as t}from"./iframe-GbU_LfIz.js";import{L as n}from"./LineChart-Ce4ukB4U.js";import{R as s}from"./zIndexSlice-B-uY-xMG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BuQcpjWp.js";import{X as d}from"./XAxis-BQz4ccrC.js";import{Y as y}from"./YAxis-Dl6RuWF8.js";import{L as u}from"./Legend-B5tzkNiC.js";import{L as h}from"./Line-Cz7gfFzY.js";import{T as g}from"./Tooltip-DycFhCat.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CBlrkAx1.js";import"./resolveDefaultProps-DaFP4Osr.js";import"./get-cF5BDHN6.js";import"./axisSelectors-plpcnepy.js";import"./throttle-lL1L3VRP.js";import"./index-DYswmNhd.js";import"./index-CWvB4q6F.js";import"./polarAxisSelectors-CUkA6wv5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-m-_CTi_p.js";import"./index-Dg1dPLnL.js";import"./index-DZowzVKz.js";import"./renderedTicksSlice-D3e3FCUI.js";import"./index-C9cCXc93.js";import"./CartesianChart-6Jqeuu6_.js";import"./ZIndexPortal-CkMateYW.js";import"./CategoricalChart-C2S0aau2.js";import"./CartesianAxis-DWEGImEY.js";import"./Layer-DZ-BC5fp.js";import"./Text-CcmXBTPp.js";import"./DOMUtils-pcjvu5Mx.js";import"./ZIndexLayer-jPVQwjvI.js";import"./Label-BKofA95f.js";import"./types-D5h1KHjm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-RIc_sULF.js";import"./symbol-B34bQZE8.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-PlO8YUnf.js";import"./dataEntryStyles-C8Sz1tul.js";import"./useElementOffset-CMK7cZDC.js";import"./uniqBy-Db9I9r6H.js";import"./iteratee-DgfWwApm.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BXWlStzO.js";import"./step-B7eAtOky.js";import"./LabelList-BpWQDUee.js";import"./ActivePoints-CJ_A0ZwJ.js";import"./Dot-BZZrGYAN.js";import"./activeStyles-7gml8bSR.js";import"./useAnimationId-3m5wK_ws.js";import"./ErrorBarContext-pjK3YX1O.js";import"./SetGraphicalItem-SS1PjTU8.js";import"./getRadiusAndStrokeWidthFromDot-DZIWxG1k.js";import"./ActiveShapeUtils-t8cc3cab.js";import"./useEffectiveDataKey-DF49AIat.js";import"./Cross-DDh9Rsms.js";import"./Rectangle-CJMi75hX.js";import"./util-Dxo8gN5i.js";import"./Sector-CW1nojyV.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
