import{r as f,R as e}from"./iframe-ClXUkryL.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CSB-tj7Q.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DzUiPhG1.js";import{C as k}from"./ComposedChart-D4GI_a_J.js";import{X as K}from"./XAxis-DAmFlkh4.js";import{L as v}from"./Legend-Du0XFptm.js";import{B as a}from"./Bar-CL-TKqP4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BMxAhfb3.js";import"./Text-C9XRZpa-.js";import"./resolveDefaultProps-Be-R1NDV.js";import"./ZIndexLayer-CVBpK4Om.js";import"./index-1IQ6h1fT.js";import"./index-D1YVhIqp.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B2T5HNNu.js";import"./throttle-CEjR9znF.js";import"./axisSelectors-BImpBlrZ.js";import"./d3-scale-Crqvu4_S.js";import"./CartesianAxis-DC6JqvO0.js";import"./Layer-L872TvYf.js";import"./types-la06XTph.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-0uwg5ZfK.js";import"./index-DTBjcvrn.js";import"./index-CrY7M_Vr.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C4CsKSyh.js";import"./index-BN7SKK3J.js";import"./fillDefinitions-C705icco.js";import"./CartesianChart-Dl8SN8lO.js";import"./chartDataContext-vv2pvmYC.js";import"./CategoricalChart-B-f9dtfF.js";import"./Symbols-x2c8SqkY.js";import"./symbol-DbkjlHpo.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DeqYTBDK.js";import"./uniqBy-BpqYijuT.js";import"./iteratee-B2tmauo-.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-Br1h1G1A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KaRylKEj.js";import"./useAnimationId-Dks1GaGE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Co4M2_jg.js";import"./tooltipContext-BY7561bJ.js";import"./ErrorBarContext-BbIl9cJe.js";import"./activeStyles-CbEtMY8z.js";import"./SetGraphicalItem-XdL-o-fT.js";import"./getZIndexFromUnknown-C_8ZJkTx.js";import"./useEffectiveDataKey-OGRxErZi.js";import"./omit-CGaxN5Wh.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
