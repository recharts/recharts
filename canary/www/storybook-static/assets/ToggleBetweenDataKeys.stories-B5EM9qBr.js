import{r as p,R as t}from"./iframe-oSm8ncin.js";import{L as n}from"./LineChart-CRAJ5Pja.js";import{R as s}from"./zIndexSlice-DvT_amFo.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-cmL_ACSA.js";import{X as d}from"./XAxis-rWMx021r.js";import{Y as y}from"./YAxis-BivtkPP6.js";import{L as u}from"./Legend-zntpUH-c.js";import{L as h}from"./Line-DROjObTD.js";import{T as g}from"./Tooltip-078BydMz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DD_spGc2.js";import"./resolveDefaultProps-CiTJI47d.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CKiFWBK6.js";import"./throttle-Cx1ccipN.js";import"./index-BcLgASAz.js";import"./index-DhJ936Cx.js";import"./isWellBehavedNumber-CCMQKmI-.js";import"./d3-scale-VuQaHR8V.js";import"./index-BEgTYoe2.js";import"./index-Bu5ia8Fq.js";import"./renderedTicksSlice-DvZXVX5V.js";import"./index-b9HoDQHW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-kW9NXKsO.js";import"./chartDataContext-Bj9GKAto.js";import"./CategoricalChart-_S_x7otk.js";import"./CartesianAxis-DnYW7AG9.js";import"./Layer-DyWXZatW.js";import"./Text-BWvwrxPl.js";import"./DOMUtils-BGxUAFyQ.js";import"./useId-BLP9z_DT.js";import"./useBackwardsCompatibleTheme-B6W0Pzfd.js";import"./Label-DPyx96_s.js";import"./ZIndexLayer-Csw-EOMR.js";import"./types-DFgJchiK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DoWcadNt.js";import"./symbol-DwizSsDc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-4nozGT_V.js";import"./uniqBy-BItzAnk5.js";import"./iteratee-CvG7v8HH.js";import"./Curve-0eRV3Tfk.js";import"./step-NYzyT-_J.js";import"./AnimatedItems-BqDLnMl8.js";import"./useAnimationId-Bxm77g86.js";import"./ActivePoints-BDnVkWFc.js";import"./Dot-R8_RPRPn.js";import"./RegisterGraphicalItemId-BjlJzRIf.js";import"./ErrorBarContext--MZg4-Ns.js";import"./GraphicalItemClipPath-B4m_JP2k.js";import"./SetGraphicalItem-3c27uR51.js";import"./getRadiusAndStrokeWidthFromDot-CJie2LqZ.js";import"./ActiveShapeUtils-C_Yr1SfA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D-dBfYi-.js";import"./Rectangle-kf9gK_tK.js";import"./util-Dxo8gN5i.js";import"./Sector-BJs3gvjr.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
