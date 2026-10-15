import{r as p,R as t}from"./iframe-DMAX8_B_.js";import{L as n}from"./LineChart-CDmFh0tK.js";import{R as s}from"./zIndexSlice-BVHCVdkF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BwTOOuKU.js";import{X as d}from"./XAxis-C1NK8RoH.js";import{Y as y}from"./YAxis-DHMD8bK9.js";import{L as u}from"./Legend-DIOsb75K.js";import{L as h}from"./Line-Baz5RTuv.js";import{T as g}from"./Tooltip-f6oj6N-9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-1Z3_sa1T.js";import"./resolveDefaultProps-Q3rDitrf.js";import"./get-C2VjdU0L.js";import"./axisSelectors-xVjud6VL.js";import"./throttle-B-jnSQsL.js";import"./index-Dqqrq3j2.js";import"./index-t_NEKWw0.js";import"./isWellBehavedNumber-9EXxFos5.js";import"./d3-scale-BX29oM_v.js";import"./index-KGIc8sd0.js";import"./index-CBEUuOpp.js";import"./renderedTicksSlice-C6uANPht.js";import"./index-BQc2wBrK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bezscfrc.js";import"./chartDataContext-D-vUUGf6.js";import"./CategoricalChart-lpsuDSMi.js";import"./CartesianAxis-BiWmv3xt.js";import"./Layer-bgHLcwl9.js";import"./Text-BwCj1acG.js";import"./pageBackground-BEqOe7lR.js";import"./useId-BVZoqUN1.js";import"./useBackwardsCompatibleTheme-BxWKmMDT.js";import"./Label-CAcaahuf.js";import"./ZIndexLayer-YH55ha4J.js";import"./types-mmDyRX3a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BmVsZEwz.js";import"./symbol-1Eheypgy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-irp2r8bU.js";import"./uniqBy-DSnL4fsO.js";import"./iteratee-BgbH2_Qr.js";import"./Curve-BI1HfCSQ.js";import"./step-CY3LQZxJ.js";import"./activeStyles-B1Ozispl.js";import"./useAnimationId-DjHV_c7w.js";import"./dataEntryStyles-Bgri-3l2.js";import"./ActivePoints-C7MlG4p_.js";import"./Dot-CxQ4QLtB.js";import"./ErrorBarContext-eOToNj9e.js";import"./GraphicalItemClipPath-DrxfmPj-.js";import"./SetGraphicalItem-Car8jOkS.js";import"./getRadiusAndStrokeWidthFromDot-CzuCL_No.js";import"./ActiveShapeUtils-CH9-BPrn.js";import"./useEffectiveDataKey-BofpFvC7.js";import"./Cross-Cjp1Cd0j.js";import"./Rectangle-PLb_DD4F.js";import"./util-Dxo8gN5i.js";import"./Sector-CDCH7ALJ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
