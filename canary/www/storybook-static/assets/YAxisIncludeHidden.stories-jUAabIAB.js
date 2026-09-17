import{r as f,R as e}from"./iframe-ZxQmCvwy.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B8sk4GXn.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-RPdwBP9f.js";import{C as k}from"./ComposedChart-BATf_pxJ.js";import{X as K}from"./XAxis-Bl2tbEmW.js";import{L as v}from"./Legend-CZaLFHxf.js";import{B as a}from"./Bar-BMW6jvUy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-jkryqT5d.js";import"./Text-BO32xjCe.js";import"./resolveDefaultProps-DpipilcU.js";import"./DOMUtils-CnJnyfSI.js";import"./isWellBehavedNumber-sAavL0dG.js";import"./useId-CDbRoZtb.js";import"./useBackwardsCompatibleTheme-rwc4Ui1J.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CHR5usSt.js";import"./index-BPMVDNb6.js";import"./index-BDLiH1an.js";import"./RechartsWrapper-BdNFCoW6.js";import"./axisSelectors-BWbFpFtg.js";import"./throttle-DmwvZWHb.js";import"./d3-scale-CzTTxW2Z.js";import"./index-BWm52sKa.js";import"./index-BS98XUV2.js";import"./renderedTicksSlice-BYZOrskl.js";import"./index-CABC13wD.js";import"./CartesianAxis-D6DZF6-J.js";import"./Layer-B0D5UKjQ.js";import"./types-CAEm0sG6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-SPk4tXhy.js";import"./chartDataContext-DINqA_zr.js";import"./CategoricalChart-CFCUhC_p.js";import"./Symbols-DyrvYund.js";import"./symbol-8zizbiR8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CWsrqzYy.js";import"./uniqBy-Blp6aEMv.js";import"./iteratee-C4SJTDea.js";import"./AnimatedItems-DNQqwiG9.js";import"./useAnimationId-BzN7QWtj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYMvNR2N.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_YMBjW3.js";import"./tooltipContext-DQF_zLK8.js";import"./RegisterGraphicalItemId-TiGOVH9L.js";import"./ErrorBarContext-DUW_9KGf.js";import"./GraphicalItemClipPath-BQlyOKfz.js";import"./SetGraphicalItem-BoNO2rRn.js";import"./getZIndexFromUnknown-B5G40tR6.js";import"./useGraphicalItemIdentity-BCt8bdV6.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
