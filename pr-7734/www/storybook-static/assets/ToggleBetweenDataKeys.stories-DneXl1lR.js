import{r as n,R as t}from"./iframe-dnbYLFAD.js";import{L as p}from"./LineChart-BP7gb6j2.js";import{R as s}from"./zIndexSlice-Tzq48rK3.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DJuFBttP.js";import{X as d}from"./XAxis-BSFcOfEW.js";import{Y as y}from"./YAxis-BETlZVB5.js";import{L as u}from"./Legend-C0D7u4Zg.js";import{L as h}from"./Line-Cp5WLj85.js";import{T as g}from"./Tooltip-wzWd9Nc9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CUiYn_74.js";import"./resolveDefaultProps-DaDkCz04.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BxcK-66k.js";import"./throttle-CrGf0NM1.js";import"./index-D5_wYljM.js";import"./index-EbTzNNy6.js";import"./isWellBehavedNumber-B4er61T0.js";import"./d3-scale-DOYXtK-0.js";import"./index-C2tfzzVf.js";import"./index-BeP9odN1.js";import"./renderedTicksSlice-ByAoIIAo.js";import"./index-Dcl79aHz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-l5SDlhyQ.js";import"./chartDataContext-kt33HbbB.js";import"./CategoricalChart-BIzQL4lC.js";import"./CartesianAxis-sVyuEsJd.js";import"./Layer-BJ7lSbQt.js";import"./Text-BaKv6O4H.js";import"./DOMUtils-BtlArb_7.js";import"./useId-BZKwUvxw.js";import"./useBackwardsCompatibleTheme-QZyWgv_8.js";import"./Label-DfEdNEi7.js";import"./ZIndexLayer-DjGyUWfd.js";import"./types-ryOPFJaw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-hFj9E-ak.js";import"./symbol-Dp_lWvy3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CJAJZDYH.js";import"./uniqBy-Bsh6QpSm.js";import"./iteratee-CdEqff0I.js";import"./Curve-By68icMD.js";import"./step-Mew-CIDE.js";import"./AnimatedItems-CZJCXzZR.js";import"./useAnimationId-p2irW4JC.js";import"./ActivePoints-D6BTfiYQ.js";import"./Dot-BOs-mB4N.js";import"./RegisterGraphicalItemId-BpbR-Lho.js";import"./ErrorBarContext-Bpb4kfuY.js";import"./GraphicalItemClipPath-DvPPmxSV.js";import"./SetGraphicalItem-BXaCF56M.js";import"./getRadiusAndStrokeWidthFromDot-BaTLVLjz.js";import"./ActiveShapeUtils-BbwV3h3t.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-lkiugaGr.js";import"./Rectangle-CW-JqIPM.js";import"./util-Dxo8gN5i.js";import"./Sector-DxcQTB4E.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
