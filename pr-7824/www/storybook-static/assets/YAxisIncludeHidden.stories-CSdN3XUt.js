import{r as f,R as e}from"./iframe-BlpdekQf.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DGARPD6V.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bd-549Vw.js";import{C as k}from"./ComposedChart-BYV5Fhyo.js";import{X as K}from"./XAxis-DCEI79gV.js";import{L as v}from"./Legend-gO2rP5_l.js";import{B as a}from"./Bar-C6KH_Y-Z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CrfPybH1.js";import"./Text-CRM9x0B4.js";import"./resolveDefaultProps-BWwU0p8m.js";import"./DOMUtils-C_8Iq0XJ.js";import"./isWellBehavedNumber-DfaAxwlE.js";import"./useId-DvrsL6or.js";import"./useBackwardsCompatibleTheme-C9u8MjhE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C5ftRxf2.js";import"./index-Dg90symq.js";import"./index-Dn5eONY4.js";import"./RechartsWrapper-BZ46sqe8.js";import"./axisSelectors-DwVSh5EL.js";import"./throttle-8wef2bFQ.js";import"./d3-scale-ffqjL1dY.js";import"./index-BcFSE7Eo.js";import"./index-Co2WS3GV.js";import"./renderedTicksSlice-rM-Or7ex.js";import"./index-BjAwxFOu.js";import"./CartesianAxis-CTJL8AJc.js";import"./Layer-Cz4a7tst.js";import"./types-DYnYQX3g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dncy8Mq7.js";import"./chartDataContext-CXgp5rOX.js";import"./CategoricalChart-CJrl3V7y.js";import"./Symbols-BVv7h58j.js";import"./symbol-A-DI5JZL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C1b8oROV.js";import"./uniqBy-ujuwYKfk.js";import"./iteratee-Bs0KMcjA.js";import"./AnimatedItems-BKOKH3Gm.js";import"./useAnimationId-SlAZ3zMA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bg9Sr7-8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BEiBGwD8.js";import"./tooltipContext-DP7cVDvd.js";import"./RegisterGraphicalItemId-D9zcRMey.js";import"./ErrorBarContext-DkC-IUMU.js";import"./GraphicalItemClipPath-Vs1wvJPe.js";import"./SetGraphicalItem-BG-oAwbp.js";import"./getZIndexFromUnknown-DeXLXtsN.js";import"./useGraphicalItemIdentity-BE0cCNWI.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
