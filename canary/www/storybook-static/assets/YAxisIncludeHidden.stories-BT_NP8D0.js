import{r as f,R as e}from"./iframe-BjoWmD_2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DcA2RCuj.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-QxL2_XNr.js";import{C as k}from"./ComposedChart-CfdRjNXn.js";import{X as K}from"./XAxis-D-7vKTCU.js";import{L as v}from"./Legend-DQIvgkeJ.js";import{B as a}from"./Bar-Ctulz8Zr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cqr17CGT.js";import"./Text-DoJy0Hms.js";import"./resolveDefaultProps-CRUAWeqy.js";import"./pageBackground-B2WnjK3P.js";import"./isWellBehavedNumber-BxmTrUsM.js";import"./useId-CxEr69Iu.js";import"./useBackwardsCompatibleTheme-lRDO5kA2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DQXgAxZP.js";import"./index-BRU_7ROE.js";import"./index-rOX-JMdH.js";import"./RechartsWrapper-B-Xj9Vy5.js";import"./axisSelectors-CTjcoI_o.js";import"./throttle-h3rYfSBM.js";import"./d3-scale-kKJuS5hm.js";import"./index-Ctb1uOPb.js";import"./index-Cd4gA8VB.js";import"./renderedTicksSlice-9uvUqonz.js";import"./index-BiJeeMkw.js";import"./CartesianAxis-CuhpEa5Q.js";import"./Layer-BETohxRY.js";import"./types-CwctOhA4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ALqDRU4y.js";import"./chartDataContext-D2tEsWQI.js";import"./CategoricalChart-CU8xgSqQ.js";import"./Symbols-9svYQiWP.js";import"./symbol-CtXXRm84.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CXh5WHLo.js";import"./uniqBy-BaadcAvx.js";import"./iteratee-B_XLmPV3.js";import"./activeStyles-pw12H8S5.js";import"./useAnimationId-CvgGu5_L.js";import"./dataEntryStyles-M6AZ3Vkx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-uRJgPy0Q.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ba7sfaWC.js";import"./tooltipContext-C1vSZW3p.js";import"./ErrorBarContext-hA9ACwOL.js";import"./GraphicalItemClipPath-CJpx4uWZ.js";import"./SetGraphicalItem-BNR-CUWR.js";import"./getZIndexFromUnknown-C-fRQ95f.js";import"./useGraphicalItemIdentity-D7aL1WKh.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
