import{r as f,R as e}from"./iframe-vkuvwsVK.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BRsD9NZr.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dv-4_3RD.js";import{C as k}from"./ComposedChart-DmKeLxy2.js";import{X as K}from"./XAxis-CpNjxui_.js";import{L as v}from"./Legend-CCBI4fn3.js";import{B as a}from"./Bar-Ckk9VP7w.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-MPhkREO_.js";import"./Text-Bzv8HE1I.js";import"./resolveDefaultProps-B-kKD-dq.js";import"./DOMUtils-Bw-pfRF7.js";import"./isWellBehavedNumber-CEhn0nxL.js";import"./useId-CkK6agKe.js";import"./useBackwardsCompatibleTheme-DDVT5RRa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Ds3zCArg.js";import"./index-D41S2RZq.js";import"./index-Chk0yUZO.js";import"./RechartsWrapper-BGV5QqYH.js";import"./axisSelectors-BTwgcDWt.js";import"./throttle-BLHvZaft.js";import"./d3-scale-5XjKmDSJ.js";import"./index-_iLGw6z5.js";import"./index-CowJ9bbH.js";import"./renderedTicksSlice-CkUsoCJX.js";import"./index-BegFXIYu.js";import"./CartesianAxis-DxB0GpiS.js";import"./Layer-Bi6vQt34.js";import"./types-BvD7j9i8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C28eI56R.js";import"./chartDataContext-D8moszCG.js";import"./CategoricalChart-C__CUkoq.js";import"./Symbols-C_xc1Cec.js";import"./symbol-BZ9PCIAn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C3uG_kWl.js";import"./uniqBy-Dq3TlbF7.js";import"./iteratee-Da6DrtKw.js";import"./AnimatedItems-DBPnILuv.js";import"./useAnimationId-DDynUN7k.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-9gytVjHV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BdYG65ei.js";import"./tooltipContext-Bfm0RNgr.js";import"./RegisterGraphicalItemId-BNZMo2JA.js";import"./ErrorBarContext-BiVVJplW.js";import"./GraphicalItemClipPath-B9JB0AOy.js";import"./SetGraphicalItem-CZfOWNG9.js";import"./getZIndexFromUnknown-BGv5R9Ga.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BddmKJGm.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
