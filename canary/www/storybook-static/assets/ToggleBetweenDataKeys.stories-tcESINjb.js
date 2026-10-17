import{r as p,R as t}from"./iframe-DnfWaB1B.js";import{L as n}from"./LineChart-CwQ3__iS.js";import{R as s}from"./zIndexSlice-BT6q8CVb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DCble6tw.js";import{X as d}from"./XAxis-CRu44DAQ.js";import{Y as y}from"./YAxis-CTXcpKsn.js";import{L as u}from"./Legend-CcC4oay1.js";import{L as h}from"./Line-S15yyNv0.js";import{T as g}from"./Tooltip-PYa1pAVz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0Y2iFV1.js";import"./resolveDefaultProps-8EGHXmvb.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BzBwCDwa.js";import"./throttle-BlHdMJGb.js";import"./index-CMtaCruM.js";import"./index-B-M-aHgw.js";import"./isWellBehavedNumber-B2TPiKzz.js";import"./d3-scale-Br-96nR7.js";import"./index-CNOFauDT.js";import"./index-DwRvwf7P.js";import"./renderedTicksSlice-Diudvbk0.js";import"./index-BcjfqUW0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C9GO6rC8.js";import"./chartDataContext-C2BaT0xy.js";import"./CategoricalChart-m_cFhWGU.js";import"./CartesianAxis-CiEPj5kn.js";import"./Layer-CESakEtd.js";import"./Text-18vmCMJW.js";import"./pageBackground-BZcgsdhX.js";import"./useId-EMQHPSSh.js";import"./useBackwardsCompatibleTheme-Csjmt-9c.js";import"./Label-DErBiWtx.js";import"./ZIndexLayer-CVLoryN8.js";import"./types-vzKdATLY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BOZkE8hq.js";import"./symbol-CMK53g7Y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-1uwHjJUJ.js";import"./uniqBy-YhWipnCo.js";import"./iteratee-_cPrzxJT.js";import"./isArguments-yB-y1yaH.js";import"./Curve-g0mln-5B.js";import"./step-CKvXTTBh.js";import"./activeStyles-yEksTLCx.js";import"./useAnimationId-CAjA_jBW.js";import"./dataEntryStyles-7Y85MSUL.js";import"./ActivePoints-CILYAqb7.js";import"./Dot-_SxShMFA.js";import"./ErrorBarContext-D9Sd4BvK.js";import"./GraphicalItemClipPath-CEAKjsCJ.js";import"./SetGraphicalItem-Me2AFJoT.js";import"./getRadiusAndStrokeWidthFromDot-D2lPL6Sa.js";import"./ActiveShapeUtils-DcV5jonr.js";import"./useEffectiveDataKey-Dum6ZVs0.js";import"./Cross-W5wFmbtm.js";import"./Rectangle-CCL9Y1KA.js";import"./util-Dxo8gN5i.js";import"./Sector-1tCIsPK_.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
