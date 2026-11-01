import{r as f,R as e}from"./iframe-N2_k56Bi.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BWNeCe4E.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C2n8MH5C.js";import{C as k}from"./ComposedChart-BNYP_tMQ.js";import{X as K}from"./XAxis-BMzjraU8.js";import{L as v}from"./Legend-D09Ji223.js";import{B as a}from"./Bar-CUu0J6A4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BtTjy9h1.js";import"./Text-CtPksR9D.js";import"./resolveDefaultProps-DqwpxfQ6.js";import"./DOMUtils-DcUCUVaa.js";import"./ZIndexLayer-C9mVRhjd.js";import"./index-DW0bz290.js";import"./index-CE3twcP3.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BJLn-yPG.js";import"./throttle-wqOW3oZ2.js";import"./axisSelectors-CAEFlKfw.js";import"./d3-scale-BXPoqAuA.js";import"./CartesianAxis-DPQ0rx3G.js";import"./Layer-CJpZrgpd.js";import"./types-DGUdIwXy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-tTdjxG_s.js";import"./index-BDOvrbcw.js";import"./index-C9ctZ6JT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dp1Mzfqy.js";import"./index-ByH8O9KC.js";import"./fillDefinitions-dJCuHQYF.js";import"./CartesianChart-CoYa15-4.js";import"./ZIndexPortal-C8tnP8Pm.js";import"./CategoricalChart-CrnXV7kh.js";import"./Symbols-jQ5nGruQ.js";import"./symbol-tKDu3Sq7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dty61qI9.js";import"./uniqBy-BVd7MjX-.js";import"./iteratee-BfkazSyy.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CpgHxPqB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Eo0dQZG0.js";import"./useAnimationId-LBywhlWd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CdIqoiTp.js";import"./tooltipContext-CmP3xgFk.js";import"./dataEntryStyles-C-YlvJRH.js";import"./ErrorBarContext-BEo9CD_X.js";import"./activeStyles-CM4N_FMo.js";import"./SetGraphicalItem-CsZSO0ag.js";import"./getZIndexFromUnknown-DNtk-XxJ.js";import"./useEffectiveDataKey-D760KGHv.js";import"./omit-vRglqRCY.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
