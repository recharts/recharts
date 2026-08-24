import{r as f,R as e}from"./iframe-OWn8oF1A.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CRJnLbnO.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CwJzB82v.js";import{C as k}from"./ComposedChart-DQm885rX.js";import{X as K}from"./XAxis-CCMr852Y.js";import{L as v}from"./Legend-BAxAQ2CS.js";import{B as s}from"./Bar-CK5snIzN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-AqmTYyGt.js";import"./Text-P3K5HdaU.js";import"./resolveDefaultProps-IEje57sC.js";import"./DOMUtils-DW9lfnAW.js";import"./isWellBehavedNumber-BZ7ES7WU.js";import"./useId-BS68P7zj.js";import"./useBackwardsCompatibleTheme-B7aULi62.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C9URSHi7.js";import"./index-CrP56Nug.js";import"./index-NwmZ423s.js";import"./RechartsWrapper-i1jsdj22.js";import"./index-CM0MgkCu.js";import"./index-C9Vm6jKM.js";import"./throttle-DWaXsXNb.js";import"./axisSelectors-BcSe1XYn.js";import"./d3-scale-CwANqbyk.js";import"./renderedTicksSlice-Sc5c_SM5.js";import"./CartesianAxis-DE3Bauq7.js";import"./Layer-CqyZBrFC.js";import"./types-qoS_u5dB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D8znfAM6.js";import"./chartDataContext-fxx91kDP.js";import"./CategoricalChart-CCczjnIs.js";import"./Symbols--FRgZ-u1.js";import"./symbol-BSDGb50L.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CL4Ag10e.js";import"./uniqBy-C7xqcq1F.js";import"./iteratee-Co34_xBw.js";import"./AnimatedItems-_CvB9alV.js";import"./useAnimationId-B2Oo-Kvv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-9cgaQESO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5n9-MhSP.js";import"./tooltipContext-CMclMnHP.js";import"./RegisterGraphicalItemId-zybFqkLh.js";import"./ErrorBarContext-BicDrW-x.js";import"./GraphicalItemClipPath-BKywaUa4.js";import"./SetGraphicalItem-BiApMsd9.js";import"./getZIndexFromUnknown-BgcLI-1Q.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DmPTwjv1.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
