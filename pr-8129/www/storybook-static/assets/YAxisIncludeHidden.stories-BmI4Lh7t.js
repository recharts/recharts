import{r as f,R as e}from"./iframe-0ard7KC3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DAk7UonM.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D6_sdm0t.js";import{C as k}from"./ComposedChart-BAfLIPPg.js";import{X as K}from"./XAxis-BVBrGZek.js";import{L as v}from"./Legend-BTeXyXqr.js";import{B as a}from"./Bar-DmSz-h98.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bzl5TsqO.js";import"./Text-BVN9ck4W.js";import"./resolveDefaultProps-BPB9Gu5f.js";import"./DOMUtils-DPHrecH2.js";import"./pageBackground-C8Mqnqon.js";import"./ZIndexLayer-Xk93xkJ7.js";import"./index-BOEtp96n.js";import"./index-JVAEaqaY.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-3HyfX2K5.js";import"./throttle-1OYicAaw.js";import"./axisSelectors-Cr_3x7-m.js";import"./d3-scale-CLPwnwVf.js";import"./CartesianAxis-CO2WQovg.js";import"./Layer-C0FwdD0E.js";import"./types-DiLmbnVu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D50-krNg.js";import"./index-9PVjWb0J.js";import"./index-CsSqo8aU.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BOxuYrqk.js";import"./index-ByhU0DDr.js";import"./CartesianChart-CQQLqvcY.js";import"./ZIndexPortal-Cak7rTbR.js";import"./CategoricalChart-DbqXM1OT.js";import"./Symbols-lsHxNSE5.js";import"./fillDefinitions-CarsCIb_.js";import"./symbol-BoiiS6VD.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DpbXbWGx.js";import"./uniqBy-BJs_UcfY.js";import"./iteratee-B5R2H-12.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-fTXqNJ75.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C4AL_ut7.js";import"./useAnimationId-DI_YvP-u.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Uo1E3VyC.js";import"./tooltipContext-Z31KWbAp.js";import"./dataEntryStyles-BOdZqKVH.js";import"./ErrorBarContext-Dy4MR2nb.js";import"./activeStyles-7ntMjbeG.js";import"./SetGraphicalItem-CY1fZPiL.js";import"./getZIndexFromUnknown-DOthoFGW.js";import"./useEffectiveDataKey-BiPIBSbw.js";import"./omit-CZreW73s.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
