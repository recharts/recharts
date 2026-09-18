import{r as f,R as e}from"./iframe-Ddpx1fWB.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-pV8_VGP8.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dat8LqkZ.js";import{C as k}from"./ComposedChart-TNMAuPjN.js";import{X as K}from"./XAxis-8Q1XE2yS.js";import{L as v}from"./Legend-wMr1z0y2.js";import{B as a}from"./Bar-DtTO8Ovp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CuNWF2Cl.js";import"./Text-CA0gQCIk.js";import"./resolveDefaultProps-BLbyA7M-.js";import"./DOMUtils-njKIQFOw.js";import"./isWellBehavedNumber-PbzFmx8z.js";import"./useId-HK3tGk78.js";import"./useBackwardsCompatibleTheme-DbKpiFxe.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DWZuS9R-.js";import"./index-BHGR1bQY.js";import"./index-C2RGX2bO.js";import"./RechartsWrapper-FUuE5Yxf.js";import"./axisSelectors-CiMHZLFM.js";import"./throttle-Ergr3tXF.js";import"./d3-scale-NbpcncSt.js";import"./index-zj--lfIw.js";import"./index-wao6mAsQ.js";import"./renderedTicksSlice-DtbmQ7NB.js";import"./index-C_z5dzD1.js";import"./CartesianAxis-3VtOE9qK.js";import"./Layer-BY9KVYkA.js";import"./types-C_VxKCLR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DITQYbNx.js";import"./chartDataContext-XIbG-eFQ.js";import"./CategoricalChart-DNv1TYBb.js";import"./Symbols-ZhZb-jZH.js";import"./symbol-C9U6a4gB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-COfGaiv8.js";import"./uniqBy-BOzPUYij.js";import"./iteratee-Ck7XhHqD.js";import"./AnimatedItems-D2-ekEtz.js";import"./useAnimationId-B2yc1CEt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CrDdNKDA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CuFPShbj.js";import"./tooltipContext-BzhkxwX4.js";import"./RegisterGraphicalItemId-BPWJzGfs.js";import"./ErrorBarContext-VVT7--30.js";import"./GraphicalItemClipPath-BJA8iJ0Z.js";import"./SetGraphicalItem-wnpZS34C.js";import"./getZIndexFromUnknown-DG8uxWub.js";import"./useGraphicalItemIdentity-CUnlnBu6.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
