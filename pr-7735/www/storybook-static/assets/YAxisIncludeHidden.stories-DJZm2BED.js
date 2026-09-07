import{r as f,R as e}from"./iframe-Bpd2XNWC.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CYnJfJw2.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BTu_B7mV.js";import{C as k}from"./ComposedChart-CzZEMv_V.js";import{X as K}from"./XAxis-BIqIlQ9-.js";import{L as v}from"./Legend-ZAI74NDo.js";import{B as a}from"./Bar-HmII4SBU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CGyNRxJa.js";import"./Text-DXGXVj-Q.js";import"./resolveDefaultProps-B8bn9Lip.js";import"./DOMUtils-CSQS_b5b.js";import"./isWellBehavedNumber-DYj3VVfL.js";import"./useId-C9UFJlhx.js";import"./useBackwardsCompatibleTheme-BtLkKBFp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BFtSzcZm.js";import"./index-xC6Bkz7H.js";import"./index-DgsoqgCs.js";import"./RechartsWrapper-Cs-3N8QT.js";import"./axisSelectors-BrNdfEDm.js";import"./throttle-CxmKEgMS.js";import"./d3-scale-C1KyS_uc.js";import"./index-Bvjdo_xp.js";import"./index-3uQaoJQn.js";import"./renderedTicksSlice-BjQ916I1.js";import"./index-Di8Mdcoc.js";import"./CartesianAxis-qQEQr_OK.js";import"./Layer-DWU20C-K.js";import"./types-B5zWJp34.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CGMddJ7u.js";import"./chartDataContext-Ddh2yzQT.js";import"./CategoricalChart-CuTFNTZi.js";import"./Symbols-DIrQYRf3.js";import"./symbol-BXNXaRuy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BXSnabaG.js";import"./uniqBy-BNdvCmS_.js";import"./iteratee-__Bf_W0o.js";import"./AnimatedItems-dPJnsYL3.js";import"./useAnimationId-DbYR-C-O.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-l4QrEY0S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CE66pmBi.js";import"./tooltipContext-BqHkA-Bu.js";import"./RegisterGraphicalItemId-DEOSTvja.js";import"./ErrorBarContext-BALmliVb.js";import"./GraphicalItemClipPath-CVghwEWn.js";import"./SetGraphicalItem-FT01QPFF.js";import"./getZIndexFromUnknown-CLOLBUIp.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-IaVESyrB.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
