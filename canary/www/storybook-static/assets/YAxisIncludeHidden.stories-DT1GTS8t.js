import{r as f,R as e}from"./iframe-RcHlpEKf.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C5hXHmze.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BoP2xr6w.js";import{C as k}from"./ComposedChart-EFkEwSkN.js";import{X as K}from"./XAxis-BH3R8cCN.js";import{L as v}from"./Legend-DuHhsx-p.js";import{B as a}from"./Bar-DG3ESFHq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BpQvgwWr.js";import"./Text-DfdPFWZL.js";import"./resolveDefaultProps-Sy-hwd8S.js";import"./DOMUtils-CQKDG8TV.js";import"./isWellBehavedNumber-h-vCOYII.js";import"./useId-B6srCqhz.js";import"./useBackwardsCompatibleTheme-nHddxgax.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BNX-NDC0.js";import"./index-vzeW1Ty_.js";import"./index-rSShmn2P.js";import"./RechartsWrapper-CqdoPGo4.js";import"./axisSelectors-BfZD20OT.js";import"./throttle-B-NCjC4g.js";import"./d3-scale-phcZca4Z.js";import"./index-DfHRgTU5.js";import"./index-D8H-d46C.js";import"./renderedTicksSlice-Dzlqim1n.js";import"./index-BtSxVTMy.js";import"./CartesianAxis-Br9WShXs.js";import"./Layer-Bl7Trn9v.js";import"./types-JXLuZB-s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DDx2cMpK.js";import"./chartDataContext-vN80Diu9.js";import"./CategoricalChart-CAKS8zF4.js";import"./Symbols-DiD6U_fT.js";import"./symbol-D890eeWE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_VyJzbA.js";import"./uniqBy-C7Ad3lRf.js";import"./iteratee-D_13UF3J.js";import"./AnimatedItems-BD0VccbN.js";import"./useAnimationId-9jumoZun.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DeaA5h0E.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B2oqSRKl.js";import"./tooltipContext-Cetcphvc.js";import"./RegisterGraphicalItemId-CnIEFT0k.js";import"./ErrorBarContext-D1YbY_j0.js";import"./GraphicalItemClipPath-CsLhpBaz.js";import"./SetGraphicalItem-DuO6azf0.js";import"./getZIndexFromUnknown-DMzHxI5Q.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-LucW0Qcm.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
