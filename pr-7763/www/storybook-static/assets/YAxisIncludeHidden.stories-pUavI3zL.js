import{r as f,R as e}from"./iframe-CDv_hnlf.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Dphgoyab.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-8EbRQ5DZ.js";import{C as k}from"./ComposedChart-I6fWeSu7.js";import{X as K}from"./XAxis-Cn9K5n4J.js";import{L as v}from"./Legend-Bim0FPrU.js";import{B as a}from"./Bar-2R_U4VKS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BE6rd0_D.js";import"./Text-g_z1pfXY.js";import"./resolveDefaultProps-CImqyn8n.js";import"./DOMUtils-FVC4l968.js";import"./isWellBehavedNumber-ipIh2BqD.js";import"./useId-M-A2L6Xg.js";import"./useBackwardsCompatibleTheme-HAgk0scL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Drc_0i_v.js";import"./index-ymtmGnRC.js";import"./index-Qa9FghTo.js";import"./RechartsWrapper-lM1IufFg.js";import"./axisSelectors-FUoH9jZO.js";import"./throttle-RrwSa6SL.js";import"./d3-scale-8ktJJOVD.js";import"./index-EK-QJAGk.js";import"./index-7-TwA9Wc.js";import"./renderedTicksSlice-Cgj9tABh.js";import"./index-BJASh04Q.js";import"./CartesianAxis-Cub9Ba5o.js";import"./Layer-DzpNGvR7.js";import"./types-BoP1bnqQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CW2SUDgI.js";import"./chartDataContext-C0h1ipKh.js";import"./CategoricalChart-BMDkLrmt.js";import"./Symbols-DiD62FEu.js";import"./symbol-BE1vvOHB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ctn7gXwm.js";import"./uniqBy-Dewbdz2d.js";import"./iteratee-BhDG6mCi.js";import"./AnimatedItems-BKW3YVwF.js";import"./useAnimationId-DiRDlhkC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-IbtOhjas.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D2gPOJru.js";import"./tooltipContext-D6M-288Q.js";import"./RegisterGraphicalItemId-CNR4K2Kh.js";import"./ErrorBarContext-iNIezAqw.js";import"./GraphicalItemClipPath-BRvY79JN.js";import"./SetGraphicalItem-CbnjD7Sn.js";import"./getZIndexFromUnknown-D8pj6cZf.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-kcsvF8X3.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
