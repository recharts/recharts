import{r as f,R as e}from"./iframe-DKDUQR4e.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CBJKZQVh.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-aRYQG5Yn.js";import{C as k}from"./ComposedChart-CCmbfoN3.js";import{X as K}from"./XAxis-CjF_jX-F.js";import{L as v}from"./Legend-B29jf7g8.js";import{B as a}from"./Bar-DLuduoKz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CIwsUObl.js";import"./Text-BiZmy8Q_.js";import"./resolveDefaultProps-CoYFUk2l.js";import"./DOMUtils-DdCdIfAV.js";import"./isWellBehavedNumber-CmolPL3d.js";import"./useId-CIh7gguH.js";import"./useBackwardsCompatibleTheme-CrqKBooM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cdmw8GXd.js";import"./index-aMLVbRVP.js";import"./index-DFSigqQi.js";import"./RechartsWrapper-CFbHWja9.js";import"./axisSelectors-CByMsFVX.js";import"./throttle-CZQWytra.js";import"./d3-scale-D08aSlXl.js";import"./index-DYLqyLpB.js";import"./index-DKbxb5pM.js";import"./renderedTicksSlice-C672n-_-.js";import"./index-gqnOst7j.js";import"./CartesianAxis-8Yu2eTD6.js";import"./Layer-4AR486QQ.js";import"./types-D2xbrN5O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C3BMrTr-.js";import"./chartDataContext-BTH-lGko.js";import"./CategoricalChart-DNyG6Cdr.js";import"./Symbols-CaXitiSD.js";import"./symbol-Dsi6RYMH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cff6A36e.js";import"./uniqBy-DiNvI5qK.js";import"./iteratee-Bk_n-BJ4.js";import"./AnimatedItems-BsWKOVBJ.js";import"./useAnimationId-DdSCrHov.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Gul8C8Yn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DNb4gSFX.js";import"./tooltipContext-CS7mZnqj.js";import"./RegisterGraphicalItemId-DuhR9Fep.js";import"./ErrorBarContext-BEPlSBFO.js";import"./GraphicalItemClipPath-BZD6-JFP.js";import"./SetGraphicalItem-BnsQpP5e.js";import"./getZIndexFromUnknown-CApI803N.js";import"./useGraphicalItemIdentity-Dy2kZYij.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
