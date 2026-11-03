import{r as p,R as t}from"./iframe-KBGw0lyx.js";import{L as n}from"./LineChart-DFvx_vfn.js";import{R as s}from"./zIndexSlice-C-xeYs44.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DDCTjppq.js";import{X as d}from"./XAxis-ok9FfAxX.js";import{Y as y}from"./YAxis-Bs_I5rsO.js";import{L as u}from"./Legend-BIe-c_vr.js";import{L as h}from"./Line-CeC9baUi.js";import{T as g}from"./Tooltip-DP-3tpm7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CcktegzB.js";import"./resolveDefaultProps-kFtONSvK.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CEjenqk6.js";import"./throttle-BjGPoFhQ.js";import"./index-Db-AaMwI.js";import"./index-EF7AV5IJ.js";import"./polarAxisSelectors-BG_XMkul.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CcHRZEud.js";import"./index-DVqUNpUf.js";import"./index-BSom5vyx.js";import"./renderedTicksSlice-DZXVMt_J.js";import"./index-DTImZAxQ.js";import"./fillDefinitions-CJnfgvsJ.js";import"./CartesianChart-DKU75UBR.js";import"./ZIndexPortal-CLKXKALr.js";import"./CategoricalChart-ByWn7DI3.js";import"./CartesianAxis-ZwQJNcj_.js";import"./Layer-Du8JdPXM.js";import"./Text-CUmSOGFL.js";import"./DOMUtils-plVJ3xwD.js";import"./ZIndexLayer-BNAbNRIQ.js";import"./Label-B98IZvVF.js";import"./types-BKfndQQ3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BD33ILFX.js";import"./symbol-BJV2xy5y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BvetthWK.js";import"./uniqBy-T0ABjzXx.js";import"./iteratee-CiEcwEiU.js";import"./isArguments-yB-y1yaH.js";import"./Curve-r2B0eutN.js";import"./step-BbiIrKZ6.js";import"./LabelList-DauBxbTi.js";import"./ActivePoints-CGR7NTAp.js";import"./Dot-BPCwUkSx.js";import"./activeStyles-C4Umy--5.js";import"./useAnimationId-BAlrP4Yc.js";import"./dataEntryStyles-DZFUHLoQ.js";import"./ErrorBarContext-CuOMSbvd.js";import"./SetGraphicalItem-eP4w3gdT.js";import"./getRadiusAndStrokeWidthFromDot-Cv-NOSS3.js";import"./ActiveShapeUtils-CKM6jbR2.js";import"./useEffectiveDataKey-ycUHTwlw.js";import"./Cross-BxQg94Oo.js";import"./Rectangle-D6IFr9AJ.js";import"./util-Dxo8gN5i.js";import"./Sector-BaKJKGrn.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
